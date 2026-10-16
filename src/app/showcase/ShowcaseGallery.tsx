"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  X,
  Sparkles,
  Cpu,
  Bot,
  Leaf,
  Network,
  Award,
  ExternalLink,
  FileText,
  Video,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { ProjectCategory, ShowcaseProject } from "./types";

interface ShowcaseGalleryProps {
  initialProjects: ShowcaseProject[];
}

const CATEGORIES: { id: ProjectCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "All", label: "All Sectors", icon: Sparkles },
  { id: "AI", label: "Artificial Intelligence", icon: Cpu },
  { id: "Robotics", label: "Robotics & Hardware", icon: Bot },
  { id: "Climate", label: "Climate & Energy", icon: Leaf },
  { id: "Systems", label: "Distributed Systems", icon: Network },
];

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function ShowcaseGallery({ initialProjects }: ShowcaseGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category filter
      if (selectedCategory !== "All" && project.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesTagline = project.tagline.toLowerCase().includes(query);
        const matchesDescription = project.description.toLowerCase().includes(query);
        const matchesTech = project.techStack.some((tech) =>
          tech.toLowerCase().includes(query)
        );
        const matchesBuilder = project.builders.some(
          (b) =>
            b.name.toLowerCase().includes(query) ||
            b.universityOrOrg.toLowerCase().includes(query) ||
            b.role.toLowerCase().includes(query)
        );
        const matchesAward = project.award.title.toLowerCase().includes(query);

        if (
          !matchesTitle &&
          !matchesTagline &&
          !matchesDescription &&
          !matchesTech &&
          !matchesBuilder &&
          !matchesAward
        ) {
          return false;
        }
      }

      return true;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      All: initialProjects.length,
      AI: 0,
      Robotics: 0,
      Climate: 0,
      Systems: 0,
    };
    for (const p of initialProjects) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, [initialProjects]);

  return (
    <section className="w-full" aria-label="Projects Showcase Gallery">
      {/* Controls Container: Search & Category Pills */}
      <div className="space-y-6 mb-12">
        {/* Search Bar & Stats Meta */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-2xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, builders, universities, or tech (e.g. Rust, PyTorch, ROS 2, eBPF)..."
              className="
                w-full pl-11 pr-10 py-3.5
                bg-[#161512] text-white placeholder-white/40 text-sm
                rounded-xl border border-white/10
                focus:outline-none focus:border-[#DFB17B] focus:ring-1 focus:ring-[#DFB17B]/50
                transition-all duration-200
              "
              aria-label="Search showcase projects"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white rounded-md transition-colors"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Results Counter & Active Filter Badge */}
          <div className="flex items-center gap-3 text-xs text-white/70 self-end md:self-auto">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161512] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#DFB17B] animate-pulse" />
              <strong className="text-white font-medium">{filteredProjects.length}</strong> of{" "}
              {initialProjects.length} Projects
            </span>
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs text-[#DFB17B] hover:text-[#CFA066] underline underline-offset-4 cursor-pointer transition-colors"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            const count = categoryCounts[cat.id];

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                  group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium
                  border transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0
                  ${
                    isSelected
                      ? "bg-[#DFB17B]/15 text-[#F3DFC1] border-[#DFB17B] shadow-[0_0_20px_rgba(223,177,123,0.18)]"
                      : "bg-[#161512] text-white/70 border-white/10 hover:text-white hover:border-white/20 hover:bg-[#22201B]"
                  }
                `}
                aria-pressed={isSelected}
              >
                <Icon
                  className={`w-3.5 h-3.5 transition-colors ${
                    isSelected ? "text-[#DFB17B]" : "text-white/40 group-hover:text-white/80"
                  }`}
                />
                <span>{cat.label}</span>
                <span
                  className={`
                    ml-1 px-1.5 py-0.5 rounded text-[11px] font-mono
                    ${
                      isSelected
                        ? "bg-[#DFB17B]/30 text-[#F3DFC1]"
                        : "bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white/80"
                    }
                  `}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-20 px-6 text-center rounded-2xl bg-[#161512] border border-white/10 max-w-xl mx-auto my-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#22201B] flex items-center justify-center text-[#DFB17B]">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl text-white font-medium mb-2">No Matching Projects Found</h3>
          <p className="text-sm text-white/60 mb-6 max-w-md mx-auto">
            We couldn&apos;t find any showcase projects matching &quot;{searchQuery}&quot; in the{" "}
            <span className="text-[#DFB17B]">{selectedCategory}</span> sector.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#DFB17B] text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#CFA066] transition-colors"
          >
            Clear Filters & Search
          </button>
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                className="
                  group relative flex flex-col justify-between
                  rounded-2xl bg-[#161512] border border-white/12
                  hover:border-[#DFB17B]/40 hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)]
                  transition-all duration-300 overflow-hidden
                "
              >
                {/* Subtle Luxury Top Accent Bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${
                    project.award.tier === "grand"
                      ? "from-[#DFB17B] via-amber-400 to-[#F3DFC1]"
                      : project.category === "AI"
                      ? "from-cyan-500/70 via-blue-500/50 to-indigo-500/30"
                      : project.category === "Robotics"
                      ? "from-amber-500/70 via-orange-500/50 to-red-500/30"
                      : project.category === "Climate"
                      ? "from-emerald-500/70 via-teal-500/50 to-green-500/30"
                      : "from-purple-500/70 via-pink-500/50 to-violet-500/30"
                  }`}
                />

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  {/* Top Badges: Category & Award Distinction */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2">
                        {/* Sector Badge */}
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#22201B] border border-white/10 text-[#F3DFC1]">
                          {project.category === "AI" && <Cpu className="w-3 h-3 text-cyan-400" />}
                          {project.category === "Robotics" && <Bot className="w-3 h-3 text-amber-400" />}
                          {project.category === "Climate" && <Leaf className="w-3 h-3 text-emerald-400" />}
                          {project.category === "Systems" && <Network className="w-3 h-3 text-violet-400" />}
                          <span>{project.category}</span>
                        </span>

                        {/* Cohort tag */}
                        <span className="text-xs text-white/45 hidden sm:inline-block">
                          {project.cohort}
                        </span>
                      </div>

                      {/* Distinction / Award Badge */}
                      <div
                        className={`
                          inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                          ${
                            project.award.tier === "grand"
                              ? "bg-gradient-to-r from-[#DFB17B]/20 to-amber-500/20 text-[#F3DFC1] border border-[#DFB17B]/50"
                              : project.award.tier === "distinction"
                              ? "bg-blue-500/15 text-blue-200 border border-blue-500/30"
                              : "bg-emerald-500/15 text-emerald-200 border border-emerald-500/30"
                          }
                        `}
                      >
                        <Award className="w-3.5 h-3.5 text-[#DFB17B]" />
                        <span>{project.award.title}</span>
                      </div>
                    </div>

                    {/* Project Title & Tagline */}
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-[#F3DFC1] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-white/80">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Impact & Performance Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 py-3 px-4 rounded-xl bg-[#0D0C0A]/70 border border-white/8">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 font-medium truncate">
                          {metric.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#DFB17B] font-mono tracking-tight">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Judge Evaluation Callout */}
                  <div className="relative pl-4 py-1 border-l-2 border-[#DFB17B] bg-gradient-to-r from-[#DFB17B]/5 to-transparent rounded-r-lg">
                    <p className="text-xs sm:text-[13px] italic leading-relaxed text-white/85">
                      &ldquo;{project.judgeNotes.quote}&rdquo;
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-white/60">
                      <span className="font-semibold text-[#F3DFC1]">{project.judgeNotes.judgeName}</span>
                      <span>&bull;</span>
                      <span className="truncate max-w-[280px]">{project.judgeNotes.institution}</span>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                      Audited Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-[#22201B] border border-white/10 text-white/80 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Architecture & Problem Section */}
                  {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                    <div className="border-t border-white/8 pt-3">
                      <button
                        type="button"
                        onClick={() => toggleExpand(project.id)}
                        className="w-full flex items-center justify-between text-xs text-[#DFB17B] hover:text-[#CFA066] font-medium py-1 transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span className="flex items-center gap-1.5">
                          <SlidersHorizontal className="w-3.5 h-3.5" />
                          {isExpanded ? "Hide Technical Deep-Dive" : "Inspect Architectural Highlights"}
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-3.5 space-y-3 p-4 rounded-xl bg-[#0D0C0A]/90 border border-white/10 text-xs text-white/80 animate-in fade-in duration-200">
                          {project.problemStatement && (
                            <div>
                              <div className="font-semibold text-[#F3DFC1] text-[11px] uppercase tracking-wider mb-1">
                                Critical Problem Solved
                              </div>
                              <p className="leading-relaxed text-white/70">{project.problemStatement}</p>
                            </div>
                          )}

                          <div>
                            <div className="font-semibold text-[#F3DFC1] text-[11px] uppercase tracking-wider mb-1.5">
                              Verified Architecture
                            </div>
                            <ul className="space-y-1.5">
                              {project.architectureHighlights.map((highlight, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB17B] shrink-0 mt-0.5" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Builder Team Profiles */}
                  <div className="border-t border-white/8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                        Fellow Builders
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        {project.builders.map((builder, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2">
                            {/* Avatar Initials Circle */}
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#DFB17B]/40 to-[#22201B] border border-[#DFB17B]/40 flex items-center justify-center text-[11px] font-bold text-[#F3DFC1]">
                              {builder.initials}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-medium text-white leading-tight">
                                {builder.name}
                              </span>
                              <span className="text-[10px] text-white/50 leading-tight">
                                {builder.universityOrOrg}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Date/Cohort */}
                    <div className="text-[11px] text-white/40 sm:text-right font-mono self-start sm:self-auto">
                      {project.cohort}
                    </div>
                  </div>

                  {/* Action & Proof Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-2.5">
                    {project.links.demoUrl && (
                      <a
                        href={project.links.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg
                          bg-[#DFB17B] text-black font-semibold text-xs
                          hover:bg-[#CFA066] transition-all shadow-sm
                        "
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.links.githubUrl && (
                      <a
                        href={project.links.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-1.5 px-3 py-2 rounded-lg
                          bg-[#22201B] hover:bg-[#2b2823] text-white text-xs font-medium
                          border border-white/12 hover:border-[#DFB17B]/50 transition-all
                        "
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.links.paperUrl && (
                      <a
                        href={project.links.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-1.5 px-3 py-2 rounded-lg
                          bg-[#22201B] hover:bg-[#2b2823] text-white/80 hover:text-white text-xs font-medium
                          border border-white/12 hover:border-[#DFB17B]/50 transition-all
                        "
                      >
                        <FileText className="w-3.5 h-3.5 text-[#DFB17B]" />
                        <span>Research Spec</span>
                      </a>
                    )}

                    {project.links.videoUrl && (
                      <a
                        href={project.links.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-1.5 px-3 py-2 rounded-lg
                          bg-[#22201B] hover:bg-[#2b2823] text-white/80 hover:text-white text-xs font-medium
                          border border-white/12 hover:border-[#DFB17B]/50 transition-all
                        "
                      >
                        <Video className="w-3.5 h-3.5 text-red-400" />
                        <span>Demo Video</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
