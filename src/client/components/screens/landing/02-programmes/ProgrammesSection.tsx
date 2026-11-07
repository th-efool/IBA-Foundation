'use client';

import React from "react";
import { ProgrammeCard } from './ProgrammeCard';
import { PROGRAMMES_DATA } from './data';

export function ProgrammesSection() {
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
            <span className="text-[#DFB17B]">WINTER PROGRAMME · EVENTS & COMPETITIONS</span>
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
                Three ways to turn curiosity into work that matters.
              </p>
            </div>

            <span className="text-xs font-mono text-white/60">WINTER 2026</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-16 xl:px-20">
          {PROGRAMMES_DATA.slice(0, 3).map((prog) => (
            <ProgrammeCard key={prog.id} item={prog} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgrammesSection;
