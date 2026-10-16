"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check, Share2, Bookmark, Download, ExternalLink } from "lucide-react";

export function CodeBlock({
  code,
  language,
  filename,
}: {
  code: string;
  language: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to copy code", e);
    }
  };

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-white/10 bg-[#0E0D0B] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#161512] px-4 py-2.5 text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500/60" />
          {filename && (
            <span className="ml-2 font-mono text-white/70 font-medium">
              {filename}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="uppercase text-[10px] tracking-wider text-text-muted/70 font-mono">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-text-muted transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-primary" />
                <span className="text-primary text-[11px]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span className="text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto p-4 text-xs font-mono leading-relaxed text-[#F3DFC1]">
        <pre className="whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export function PlaybookActionButtons({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`iba_bookmark_${slug}`);
      if (saved === "true") {
        setBookmarked(true);
      }
    } catch {}
  }, [slug]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  const handleBookmark = () => {
    const next = !bookmarked;
    setBookmarked(next);
    try {
      localStorage.setItem(`iba_bookmark_${slug}`, String(next));
    } catch {}
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-surface px-3.5 py-2 text-xs font-medium text-text-secondary transition-all hover:border-primary/40 hover:bg-surface-subtle hover:text-white"
        title="Share Playbook"
      >
        {copiedLink ? (
          <>
            <Check className="h-3.5 w-3.5 text-primary" />
            <span className="text-primary">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="h-3.5 w-3.5" />
            <span>Share</span>
          </>
        )}
      </button>

      <button
        onClick={handleBookmark}
        className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium transition-all ${
          bookmarked
            ? "border-primary/60 bg-primary/10 text-primary"
            : "border-white/15 bg-surface text-text-secondary hover:border-primary/40 hover:bg-surface-subtle hover:text-white"
        }`}
        title={bookmarked ? "Bookmarked in browser" : "Save for later"}
      >
        <Bookmark
          className={`h-3.5 w-3.5 ${bookmarked ? "fill-primary text-primary" : ""}`}
        />
        <span>{bookmarked ? "Saved" : "Save"}</span>
      </button>
    </div>
  );
}

export function TableOfContents({
  headings,
}: {
  headings: { id: string; label: string }[];
}) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="space-y-1 text-sm" aria-label="Table of contents">
      {headings.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => scrollTo(e, item.id)}
            className={`group flex items-center border-l-2 py-1.5 pl-3 text-xs transition-colors duration-200 ${
              isActive
                ? "border-primary font-medium text-primary"
                : "border-white/10 text-text-muted hover:border-white/30 hover:text-white"
            }`}
          >
            <span className="truncate">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export function DownloadResourceButton({
  title,
  format,
}: {
  title: string;
  format: string;
}) {
  const [downloaded, setDownloaded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloaded(true);
    // Simulate instantaneous download or open modal
    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/30 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-black"
    >
      {downloaded ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span>Access Granted</span>
        </>
      ) : (
        <>
          <Download className="h-3.5 w-3.5" />
          <span>Get {format.split("/")[0].trim()}</span>
        </>
      )}
    </button>
  );
}
