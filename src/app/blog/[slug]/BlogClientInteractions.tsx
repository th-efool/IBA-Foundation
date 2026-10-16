"use client";

import { useState } from "react";
import { Check, Copy, ChevronDown, ChevronUp, Share2, Bookmark } from "lucide-react";
import type { BlogFAQ } from "../blog-data";

export function TableOfContents({
  sections,
}: {
  sections: { id: string; heading: string }[];
}) {
  return (
    <nav className="rounded-xl border border-white/10 bg-[#161512] p-6 space-y-4">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#DFB17B]">
        Table of Contents
      </div>
      <ul className="space-y-2.5 text-sm">
        {sections.map((sec, idx) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className="text-white/70 hover:text-[#DFB17B] transition-colors leading-snug block font-sans"
            >
              <span className="font-mono text-xs text-[#DFB17B]/80 mr-2">
                0{idx + 1}.
              </span>
              {sec.heading}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#faq"
            className="text-white/70 hover:text-[#DFB17B] transition-colors leading-snug block font-sans"
          >
            <span className="font-mono text-xs text-[#DFB17B]/80 mr-2">
              0{sections.length + 1}.
            </span>
            Frequently Asked Questions
          </a>
        </li>
        <li>
          <a
            href="#references"
            className="text-white/70 hover:text-[#DFB17B] transition-colors leading-snug block font-sans"
          >
            <span className="font-mono text-xs text-[#DFB17B]/80 mr-2">
              0{sections.length + 2}.
            </span>
            References &amp; Academic Sources
          </a>
        </li>
      </ul>
    </nav>
  );
}

export function FAQAccordion({ faqs }: { faqs: BlogFAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-[#161512] transition-colors overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="font-serif text-lg text-white font-medium pr-4">
                {faq.question}
              </span>
              <span className="text-[#DFB17B] shrink-0">
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-white/75 font-sans leading-relaxed border-t border-white/5">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function CitationCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-white/70 hover:text-[#DFB17B] hover:border-[#DFB17B]/30 transition-all"
      title="Copy citation excerpt"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>Cite Excerpt</span>
        </>
      )}
    </button>
  );
}

export function ShareActions({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleCopyLink}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161512] px-4 py-2 text-xs font-mono text-white/70 hover:text-[#DFB17B] hover:border-[#DFB17B]/30 transition-all"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Link Copied</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Essay</span>
          </>
        )}
      </button>
    </div>
  );
}
