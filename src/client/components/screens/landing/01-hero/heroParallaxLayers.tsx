"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Layer 2 — Interactive Pseudo-3D Spatial Foreground Elements
 *
 * Places Layer2B (Drafting Plane), Layer2A (Architectural Frames), and
 * Layer2C (Engineered Foreground Sculpture) as independent transparent DOM elements
 * above Layer 1 (video) and behind Layer 3 (static UI & typography), matching FinaLook.png.
 *
 * Applies hardware-accelerated `transform: translate3d(x, y, 0)` to each asset independently
 * with distinct depth multipliers, smooth lerp damping, smooth return on pointer leave,
 * and automatic disable on touch devices or `prefers-reduced-motion: reduce`.
 */
export function HeroParallaxLayers() {
    const layer2ARef = useRef<HTMLDivElement>(null);
    const layer2BRef = useRef<HTMLDivElement>(null);
    const layer2CRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const heroSection = document.getElementById("hero");
        if (!heroSection) return;

        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

        if (reducedMotionQuery.matches || coarsePointerQuery.matches) {
            return;
        }

        const bgVideoLayer = document.getElementById("hero-bg-video-layer");

        // Normalized target & current pointer coordinates in [-1, 1]
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        let rafId: number | null = null;

        // Minute movement multipliers (in px) per layer depth
        // Layer 1 (Background Video): slightly zoomed (1.035x) so minute camera drift never goes out of frame
        const multVideo = { x: -6, y: -3.5 };
        // Layer 2B (Drafting Plane): subtle mid-background drift
        const mult2B = { x: -3.5, y: -2 };
        // Layer 2A (Architectural Frames): gentle suspended mid-ground drift
        const mult2A = { x: 7, y: 4 };
        // Layer 2C (Engineered Sculpture): remains mostly static (micro-movement only)
        const mult2C = { x: 1.2, y: 0.6 };

        const updateTransforms = () => {
            // Smooth exponential damping (lerp factor 0.045 for very subtle, weighted camera feel)
            currentX += (targetX - currentX) * 0.045;
            currentY += (targetY - currentY) * 0.045;

            if (bgVideoLayer) {
                const dx = (currentX * multVideo.x).toFixed(2);
                const dy = (currentY * multVideo.y).toFixed(2);
                bgVideoLayer.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale3d(1.035, 1.035, 1)`;
            }

            if (layer2BRef.current) {
                const dx = (currentX * mult2B.x).toFixed(2);
                const dy = (currentY * mult2B.y).toFixed(2);
                layer2BRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
            }

            if (layer2ARef.current) {
                const dx = (currentX * mult2A.x).toFixed(2);
                const dy = (currentY * mult2A.y).toFixed(2);
                layer2ARef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
            }

            if (layer2CRef.current) {
                const dx = (currentX * mult2C.x).toFixed(2);
                const dy = (currentY * mult2C.y).toFixed(2);
                layer2CRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
            }

            const isSettled =
                Math.abs(targetX - currentX) < 0.001 &&
                Math.abs(targetY - currentY) < 0.001;

            if (isSettled) {
                currentX = targetX;
                currentY = targetY;
                if (targetX === 0 && targetY === 0) {
                    if (bgVideoLayer) {
                        bgVideoLayer.style.transform = "translate3d(0px, 0px, 0px) scale3d(1.035, 1.035, 1)";
                    }
                    if (layer2BRef.current) layer2BRef.current.style.transform = "translate3d(0px, 0px, 0px)";
                    if (layer2ARef.current) layer2ARef.current.style.transform = "translate3d(0px, 0px, 0px)";
                    if (layer2CRef.current) layer2CRef.current.style.transform = "translate3d(0px, 0px, 0px)";
                }
                rafId = null;
            } else {
                rafId = requestAnimationFrame(updateTransforms);
            }
        };

        const ensureLoopRunning = () => {
            if (rafId === null) {
                rafId = requestAnimationFrame(updateTransforms);
            }
        };

        const handlePointerMove = (e: PointerEvent) => {
            if (e.pointerType === "touch") return;
            const rect = heroSection.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            // Normalize cursor to [-1, 1] relative to hero container center
            const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

            targetX = Math.max(-1, Math.min(1, nx));
            targetY = Math.max(-1, Math.min(1, ny));
            ensureLoopRunning();
        };

        const handlePointerLeave = () => {
            // Smoothly ease back to origin (0, 0, 0) on pointer exit
            targetX = 0;
            targetY = 0;
            ensureLoopRunning();
        };

        heroSection.addEventListener("pointermove", handlePointerMove, { passive: true });
        heroSection.addEventListener("pointerleave", handlePointerLeave, { passive: true });

        return () => {
            heroSection.removeEventListener("pointermove", handlePointerMove);
            heroSection.removeEventListener("pointerleave", handlePointerLeave);
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 z-10 overflow-hidden pointer-events-none select-none"
        >
            {/* Layer 2B — Drafting Plane (Translucent Technical Panel behind Headline) */}
            <div
                ref={layer2BRef}
                className="
                    absolute
                    left-[12%] sm:left-[15.1%]
                    top-[6.8%]
                    w-[32%] sm:w-[21.2%]
                    aspect-[711/1185]
                    will-change-transform
                    opacity-80
                "
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
                <Image
                    src="/images/hero/layer-2b.webp"
                    alt=""
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 35vw, 23vw"
                    className="object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                />
            </div>

            {/* Layer 2A — Architectural Frames (Suspended Black-and-Gold Geometric Frames at Top Center) */}
            <div
                ref={layer2ARef}
                className="
                    absolute
                    left-[46%] sm:left-[48.8%]
                    -top-[1.5%]
                    w-[34%] sm:w-[26.2%]
                    aspect-[1001/790]
                    will-change-transform
                "
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
                <Image
                    src="/images/hero/layer-2a.webp"
                    alt=""
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 35vw, 27vw"
                    className="object-contain object-top drop-shadow-[0_18px_36px_rgba(0,0,0,0.45)]"
                />
            </div>

            {/* Layer 2C — Engineered Foreground Sculpture (Brass Armillary Sphere in Lower-Left Foreground) */}
            <div
                ref={layer2CRef}
                className="
                    absolute
                    -left-[5%] sm:-left-[2.2%]
                    bottom-[1%] sm:bottom-[1.5%]
                    w-[40%] sm:w-[26.5%]
                    aspect-[929/1041]
                    will-change-transform
                "
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
                <Image
                    src="/images/hero/layer-2c.webp"
                    alt=""
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 40vw, 28vw"
                    className="object-contain object-left-bottom blur-[2.2px] brightness-[0.88] contrast-[1.04]"
                />
            </div>
        </div>
    );
}
