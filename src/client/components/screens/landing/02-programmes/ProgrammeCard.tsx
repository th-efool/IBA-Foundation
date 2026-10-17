'use client';

import React from 'react';
import Image from 'next/image';
import { Trophy, Calendar, Users, Award } from 'lucide-react';
import { ProgrammeItem, ProgrammeMetric } from './types';

interface ProgrammeCardProps {
  item: ProgrammeItem;
  isActive?: boolean;
  priority?: boolean;
  onClick?: () => void;
}

function MetricItem({ metric }: { metric: ProgrammeMetric }) {
  const renderIcon = () => {
    switch (metric.icon) {
      case 'trophy':
        return <Trophy className="w-5 h-5 text-white/75 stroke-[1.4] shrink-0" />;
      case 'users':
        return <Users className="w-5 h-5 text-white/75 stroke-[1.4] shrink-0" />;
      case 'award':
        return <Award className="w-5 h-5 text-white/75 stroke-[1.4] shrink-0" />;
      case 'calendar':
      default:
        return <Calendar className="w-5 h-5 text-white/75 stroke-[1.4] shrink-0" />;
    }
  };

  return (
    <div className="flex items-center gap-3">
      {renderIcon()}
      <div className="flex flex-col">
        {metric.label && (
          <span className="text-[10px] sm:text-[11px] font-mono text-[#8E8B82] tracking-wider uppercase leading-none mb-1">
            {metric.label}
          </span>
        )}
        <span className="text-sm sm:text-[15px] font-mono font-medium text-white tracking-tight leading-tight">
          {metric.value}
        </span>
      </div>
    </div>
  );
}

export function ProgrammeCard({
  item,
  isActive = false,
  priority = false,
  onClick,
}: ProgrammeCardProps) {
  return (
    <article
      onClick={onClick}
      className={`group relative w-[320px] sm:w-[450px] md:w-[490px] lg:w-[520px] h-[300px] sm:h-[330px] md:h-[350px] rounded-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none cursor-pointer transition-all duration-300 shrink-0 ${
        isActive
          ? 'border border-[#DFB17B] ring-1 ring-[#DFB17B]/40 shadow-[0_0_35px_rgba(223,177,123,0.14)]'
          : 'border border-white/10 hover:border-white/25 bg-[#12110F]'
      }`}
    >
      {/* Background Photography Asset */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 490px, 520px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
          draggable={false}
        />
        {/* Cinematic dark gradients matching Reference.png */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
      </div>

      {/* Top Header Block */}
      <header className="relative z-10 flex flex-col items-start">
        {item.badge && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider border border-red-500/50 bg-red-950/40 text-red-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span>{item.badge.text}</span>
          </div>
        )}
        <span className="text-[11px] font-mono tracking-[0.22em] text-[#9CA3AF] uppercase">
          {item.category}
        </span>
      </header>

      {/* Center Title and Description Block */}
      <div className="relative z-10 flex flex-col my-auto pt-2">
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-normal text-white tracking-tight leading-tight">
          {item.title}
        </h3>
        <p className="text-sm sm:text-[15px] text-[#A0A09B] font-light mt-1.5 tracking-normal">
          {item.subtitle}
        </p>
      </div>

      {/* Bottom Metadata Metrics */}
      <footer className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
        <MetricItem metric={item.leftMetric} />
        <div className="w-[1px] h-8 bg-white/10 shrink-0" aria-hidden="true" />
        <MetricItem metric={item.rightMetric} />
      </footer>
    </article>
  );
}
