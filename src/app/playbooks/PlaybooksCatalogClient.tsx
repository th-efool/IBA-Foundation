"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Clock,
  Layers,
  ArrowRight,
  Search,
  Sparkles,
  Award,
  Filter,
} from "lucide-react";
import type { Playbook } from "./playbooks-data";

export function PlaybooksCatalogClient({ playbooks }: { playbooks: Playbook[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    playbooks.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [playbooks]);

  const filteredPlaybooks = useMemo(() => {
    return playbooks.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.author.name.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [playbooks, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl border border-white/12 bg-surface p-4 sm:p-5 shadow-lg">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search playbooks, architecture patterns, tech stack..."
            className="w-full rounded-xl border border-white/10 bg-[#0E0D0B] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-text-muted/60 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          <span className="hidden lg:flex items-center gap-1 text-xs text-text-muted mr-1">
            <Filter className="h-3 w-3" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-black font-semibold shadow-md shadow-primary/20"
                  : "bg-surface-subtle text-text-muted hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Playbooks */}
      {filteredPlaybooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPlaybooks.map((playbook) => (
            <Link
              key={playbook.slug}
              href={`/playbooks/${playbook.slug}`}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/12 bg-surface p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
            >
              <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 bg-primary/5 blur-2xl group-hover:bg-primary/15 transition-all" />

              <div>
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
                    {playbook.category}
                  </span>

                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Layers className="h-3.5 w-3.5 text-primary" />
                      {playbook.difficulty}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {playbook.readingTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl font-medium text-white group-hover:text-primary transition-colors leading-tight">
                  {playbook.title}
                </h2>

                {/* Subtitle / Summary */}
                <p className="mt-3 text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {playbook.summary}
                </p>

                {/* Outcomes Preview */}
                <div className="mt-5 space-y-1.5 border-t border-white/8 pt-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                    Core Outcomes:
                  </span>
                  <div className="text-xs text-text-muted line-clamp-2">
                    {playbook.outcomes.slice(0, 2).map((o, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 mt-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="truncate">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author & Action footer */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-[11px] font-bold text-primary">
                    {playbook.author.avatar}
                  </div>
                  <div className="text-xs text-text-muted">
                    <span className="text-white font-medium">{playbook.author.name}</span>
                    <span className="hidden sm:inline"> • {playbook.author.role.split(",")[0]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                  <span>Open Playbook</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-surface p-12 text-center space-y-3">
          <p className="text-base text-text-secondary">
            No playbooks found matching &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-xs text-primary font-semibold hover:underline"
          >
            Clear filters and reset search
          </button>
        </div>
      )}
    </div>
  );
}
