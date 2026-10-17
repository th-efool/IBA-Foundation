'use client';

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { InfiniteScroller, InfiniteScrollerHandle } from '@/src/client/components/ui/InfiniteScroller';
import { ProgrammeCard } from './ProgrammeCard';
import { PROGRAMMES_DATA } from './data';

export function ProgrammesSection() {
  const scrollerRef = useRef<InfiniteScrollerHandle>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Default to Ideathon as in Reference.png

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % PROGRAMMES_DATA.length;
    setActiveIndex(nextIdx);
    scrollerRef.current?.scrollToIndex(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + PROGRAMMES_DATA.length) % PROGRAMMES_DATA.length;
    setActiveIndex(prevIdx);
    scrollerRef.current?.scrollToIndex(prevIdx);
  };

  return (
    <section
      id="programmes"
      aria-labelledby="programmes-heading"
      className="relative w-full bg-[#0D0C0A] py-20 sm:py-28 overflow-hidden border-t border-white/10"
    >
      {/* Background Ambient Warm Glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[380px] bg-[#DFB17B]/[0.025] blur-[160px] rounded-full" />
      </div>

      <div className="relative mx-auto w-full max-w-[1680px] xl:max-w-[2000px] 2xl:max-w-[2400px]">
        {/* Section Header */}
        <header className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-10 sm:mb-14">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.22em] uppercase text-[#C5C2B8] mb-3">
            <span>IBA FOUNDATION</span>
            <span className="text-white/30 font-light" aria-hidden="true">/</span>
            <span className="text-[#DFB17B]">FALL PROGRAMME · EVENTS & COMPETITIONS</span>
          </div>

          {/* Heading + Right Controls */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2
                id="programmes-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-normal text-white tracking-tight leading-[1.12]"
              >
                Ideas deserve a <span className="italic text-[#DFB17B]">proving ground.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#9CA3AF] font-light max-w-xl">
                Four ways to turn curiosity into work that matters.
              </p>
            </div>

            {/* Right Controls: AUTUMN 2026 + Navigation Buttons */}
            <div className="flex items-center gap-5 shrink-0 self-start md:self-end">
              <span className="text-xs font-mono tracking-[0.22em] text-[#9CA3AF] uppercase">
                AUTUMN 2026
              </span>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous programme"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-[#DFB17B] text-white/80 hover:text-[#DFB17B] flex items-center justify-center transition-colors bg-white/[0.03] hover:bg-white/[0.08] active:scale-95 focus:outline-none focus:ring-1 focus:ring-[#DFB17B]"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[1.75]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next programme"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-[#DFB17B] text-white/80 hover:text-[#DFB17B] flex items-center justify-center transition-colors bg-white/[0.03] hover:bg-white/[0.08] active:scale-95 focus:outline-none focus:ring-1 focus:ring-[#DFB17B]"
                >
                  <ChevronRight className="w-4 h-4 stroke-[1.75]" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Infinite Horizontal Carousel */}
        <div className="relative w-full">
          <InfiniteScroller
            ref={scrollerRef}
            loop={true}
            autoScroll={true}
            autoScrollSpeed={0.4}
            scrollAmount={540}
            initialIndex={1}
            onActiveIndexChange={(idx) => setActiveIndex(idx)}
            className="w-full"
          >
            {PROGRAMMES_DATA.map((prog, index) => (
              <ProgrammeCard
                key={prog.id}
                item={prog}
                isActive={activeIndex === index}
                priority={index < 2}
                onClick={() => {
                  setActiveIndex(index);
                  scrollerRef.current?.scrollToIndex(index);
                }}
              />
            ))}
          </InfiniteScroller>
        </div>

        {/* Bottom 4-Dash Active Indicator Bar */}
        <nav
          aria-label="Programmes slide indicators"
          className="mt-8 sm:mt-12 flex items-center justify-center gap-2.5"
        >
          {PROGRAMMES_DATA.map((prog, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={prog.id}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  scrollerRef.current?.scrollToIndex(index);
                }}
                aria-label={`Jump to ${prog.title}`}
                className={`h-1 rounded-full transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'w-12 bg-[#DFB17B] shadow-[0_0_12px_rgba(223,177,123,0.5)]'
                    : 'w-8 bg-white/20 hover:bg-white/40'
                }`}
              />
            );
          })}
        </nav>
      </div>
    </section>
  );
}

export default ProgrammesSection;
