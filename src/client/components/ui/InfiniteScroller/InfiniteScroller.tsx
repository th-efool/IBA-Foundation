'use client';

import React, {
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
} from 'react';

import styles from './InfiniteScroller.module.css';

export interface InfiniteScrollerProps extends PropsWithChildren {
  className?: string;
  scrollAmount?: number;
  loop?: boolean;
  panable?: boolean;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
  initialIndex?: number;
  onActiveIndexChange?: (index: number) => void;
}

export interface InfiniteScrollerHandle {
  scrollLeft: () => void;
  scrollRight: () => void;
  scrollToIndex: (index: number) => void;
  getViewport: () => HTMLDivElement | null;
}

export const InfiniteScroller = React.forwardRef<
  InfiniteScrollerHandle,
  InfiniteScrollerProps
>(function InfiniteScroller(
  {
    children,
    className,
    scrollAmount = 544,
    loop = true,
    panable = true,
    autoScroll = true,
    autoScrollSpeed = 0.4,
    initialIndex = 1,
    onActiveIndexChange,
  }: InfiniteScrollerProps,
  ref,
) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const onActiveIndexChangeRef = useRef(onActiveIndexChange);
  useEffect(() => {
    onActiveIndexChangeRef.current = onActiveIndexChange;
  });

  const startX = useRef(0);
  const scrollLeftRef = useRef(0);
  const isLoopingRef = useRef(false);
  const velocityWalkFactor = 1.25;
  const autoScrollFrameRef = useRef<number>(0);
  const scrollPosRef = useRef<number | null>(null);
  const totalItemsCount = React.Children.count(children);
  const hasInitializedRef = useRef(false);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const calculateActiveIndex = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || totalItemsCount === 0) return;

    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
    let closestItemIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < track.children.length; i++) {
      const childEl = track.children[i] as HTMLElement | undefined;
      if (childEl) {
        const childCenter = childEl.offsetLeft + childEl.offsetWidth / 2;
        const dist = Math.abs(childCenter - viewportCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestItemIndex = i % totalItemsCount;
        }
      }
    }

    onActiveIndexChangeRef.current?.(closestItemIndex);
  }, [totalItemsCount]);

  const pauseAutoScrollTemporarily = useCallback((durationMs = 1800) => {
    setIsAnimating(true);
    if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    animationTimerRef.current = setTimeout(() => {
      setIsAnimating(false);
      if (viewportRef.current) {
        scrollPosRef.current = viewportRef.current.scrollLeft;
      }
    }, durationMs);
  }, []);

  const scrollToIndexFn = useCallback(
    (index: number) => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track || totalItemsCount === 0) return;

      const normalizedIndex = ((index % totalItemsCount) + totalItemsCount) % totalItemsCount;
      const candidates = loop
        ? [normalizedIndex, totalItemsCount + normalizedIndex, 2 * totalItemsCount + normalizedIndex]
        : [normalizedIndex];

      let bestTargetScroll = 0;
      let minDistance = Infinity;

      for (const candIdx of candidates) {
        const targetEl = track.children[candIdx] as HTMLElement | undefined;
        if (targetEl) {
          const candScroll = targetEl.offsetLeft - (viewport.clientWidth - targetEl.clientWidth) / 2;
          const dist = Math.abs(candScroll - viewport.scrollLeft);
          if (dist < minDistance) {
            minDistance = dist;
            bestTargetScroll = candScroll;
          }
        }
      }

      pauseAutoScrollTemporarily(1200);

      viewport.scrollTo({
        left: bestTargetScroll,
        behavior: 'smooth',
      });

      scrollPosRef.current = bestTargetScroll;
      onActiveIndexChangeRef.current?.(normalizedIndex);
    },
    [loop, totalItemsCount, pauseAutoScrollTemporarily],
  );

  const scrollByOffset = useCallback(
    (offset: number) => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      pauseAutoScrollTemporarily(1200);

      viewport.scrollBy({
        left: offset,
        behavior: 'smooth',
      });

      setTimeout(calculateActiveIndex, 280);
    },
    [calculateActiveIndex, pauseAutoScrollTemporarily],
  );

  useImperativeHandle(ref, () => ({
    scrollLeft: () => scrollByOffset(-scrollAmount),
    scrollRight: () => scrollByOffset(scrollAmount),
    scrollToIndex: (index: number) => scrollToIndexFn(index),
    getViewport: () => viewportRef.current,
  }));

  function handleScroll() {
    calculateActiveIndex();
    if (!loop) return;

    const viewport = viewportRef.current;
    if (!viewport || isLoopingRef.current) return;

    const singleSetWidth = viewport.scrollWidth / 3;
    if (singleSetWidth <= 0) return;

    if (viewport.scrollLeft >= singleSetWidth * 2 - 10) {
      isLoopingRef.current = true;
      viewport.scrollLeft = viewport.scrollLeft - singleSetWidth;
      if (scrollPosRef.current !== null) {
        scrollPosRef.current -= singleSetWidth;
      }
      requestAnimationFrame(() => {
        isLoopingRef.current = false;
      });
    } else if (viewport.scrollLeft <= 10) {
      isLoopingRef.current = true;
      viewport.scrollLeft = viewport.scrollLeft + singleSetWidth;
      if (scrollPosRef.current !== null) {
        scrollPosRef.current += singleSetWidth;
      }
      requestAnimationFrame(() => {
        isLoopingRef.current = false;
      });
    }
  }

  // Initialize position once on mount
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const initPosition = () => {
      if (hasInitializedRef.current) return;
      hasInitializedRef.current = true;

      if (loop) {
        const singleSetWidth = viewport.scrollWidth / 3;
        const originalBehavior = viewport.style.scrollBehavior;
        viewport.style.scrollBehavior = 'auto';

        let targetScroll = singleSetWidth;
        if (initialIndex !== undefined && totalItemsCount > 0) {
          const targetEl = track.children[totalItemsCount + initialIndex] as HTMLElement | undefined;
          if (targetEl) {
            targetScroll = targetEl.offsetLeft - (viewport.clientWidth - targetEl.clientWidth) / 2;
          }
        }

        viewport.scrollLeft = targetScroll;
        scrollPosRef.current = targetScroll;

        requestAnimationFrame(() => {
          viewport.style.scrollBehavior = originalBehavior;
          calculateActiveIndex();
        });
      } else {
        calculateActiveIndex();
      }
    };

    const timer1 = setTimeout(initPosition, 60);
    const timer2 = setTimeout(initPosition, 250);

    viewport.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateActiveIndex);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
      viewport.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateActiveIndex);
    };
  }, []); // Run on mount only!

  // Continuous smooth auto-scroll loop
  useEffect(() => {
    if (!autoScroll || isHovered || isDragging || isAnimating) {
      if (autoScrollFrameRef.current) cancelAnimationFrame(autoScrollFrameRef.current);
      scrollPosRef.current = null;
      return;
    }

    const viewport = viewportRef.current;
    if (!viewport) return;

    scrollPosRef.current = viewport.scrollLeft;

    const step = () => {
      if (scrollPosRef.current === null) {
        scrollPosRef.current = viewport.scrollLeft;
      }
      scrollPosRef.current += autoScrollSpeed;
      viewport.scrollLeft = scrollPosRef.current;
      autoScrollFrameRef.current = requestAnimationFrame(step);
    };

    autoScrollFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (autoScrollFrameRef.current) cancelAnimationFrame(autoScrollFrameRef.current);
      scrollPosRef.current = null;
    };
  }, [autoScroll, autoScrollSpeed, isHovered, isDragging, isAnimating]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!panable) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    setIsDragging(true);
    startX.current = e.clientX;
    scrollLeftRef.current = viewportRef.current?.scrollLeft || 0;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!panable) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    handlePointerUp(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!panable || !isDragging || !viewportRef.current) return;
    const walk = (e.clientX - startX.current) * velocityWalkFactor;
    viewportRef.current.scrollLeft = scrollLeftRef.current - walk;
    scrollPosRef.current = viewportRef.current.scrollLeft;
  };

  return (
    <div
      className={`${styles.wrapper} ${className ?? ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.viewportWrapper}>
        <div
          ref={viewportRef}
          className={`${styles.viewport} ${isDragging ? styles.dragging : ''}`}
          onDragStart={(e) => e.preventDefault()}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onPointerMove={handlePointerMove}
        >
          <div ref={trackRef} className={styles.track}>
            {loop ? (
              <>
                {React.Children.map(children, (child, i) =>
                  React.isValidElement(child)
                    ? React.cloneElement(child, { key: `set1-${child.key || i}` } as any)
                    : child,
                )}
                {React.Children.map(children, (child, i) =>
                  React.isValidElement(child)
                    ? React.cloneElement(child, { key: `set2-${child.key || i}` } as any)
                    : child,
                )}
                {React.Children.map(children, (child, i) =>
                  React.isValidElement(child)
                    ? React.cloneElement(child, { key: `set3-${child.key || i}` } as any)
                    : child,
                )}
              </>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
