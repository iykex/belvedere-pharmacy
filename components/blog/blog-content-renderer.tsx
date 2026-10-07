"use client";

import React from "react";
import { Info, AlertTriangle, ShieldCheck } from "lucide-react";

interface BlogContentRendererProps {
  content: string;
  className?: string;
}

export function BlogContentRenderer({ content, className = "" }: BlogContentRendererProps) {
  if (!content) {
    return <p className="italic text-muted-foreground">No article content available.</p>;
  }

  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let index = 0;

  let inList = false;
  let listItems: string[] = [];
  let isOrderedList = false;

  const flushList = () => {
    if (inList && listItems.length > 0) {
      if (isOrderedList) {
        elements.push(
          <ol key={`list-${index++}`} className="my-4 list-decimal pl-6 space-y-2 text-base text-foreground/90">
            {listItems.map((item, i) => (
              <li key={i}>{formatInline(item)}</li>
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`list-${index++}`} className="my-4 list-disc pl-6 space-y-2 text-base text-foreground/90">
            {listItems.map((item, i) => (
              <li key={i}>{formatInline(item)}</li>
            ))}
          </ul>
        );
      }
      listItems = [];
      inList = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Check for unordered list item
    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (!inList || isOrderedList) {
        flushList();
        inList = true;
        isOrderedList = false;
      }
      listItems.push(line.slice(2));
      continue;
    }

    // Check for ordered list item (e.g. "1. ")
    const orderedMatch = line.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      if (!inList || !isOrderedList) {
        flushList();
        inList = true;
        isOrderedList = true;
      }
      listItems.push(orderedMatch[1]);
      continue;
    }

    // If not a list item, flush any existing list
    flushList();

    if (!line) {
      continue;
    }

    // Horizontal Rule
    if (line === "---" || line === "***" || line === "___") {
      elements.push(<hr key={`hr-${index++}`} className="my-8 border-border/60" />);
      continue;
    }

    // Headings
    if (line.startsWith("#### ")) {
      elements.push(
        <h4 key={`h4-${index++}`} className="mt-6 mb-2 text-lg font-bold text-foreground">
          {formatInline(line.slice(5))}
        </h4>
      );
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${index++}`} className="mt-8 mb-3 text-xl font-bold text-foreground">
          {formatInline(line.slice(4))}
        </h3>
      );
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={`h2-${index++}`} className="mt-10 mb-4 text-2xl font-black text-foreground tracking-tight border-b border-border/40 pb-2">
          {formatInline(line.slice(3))}
        </h2>
      );
      continue;
    }
    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={`h1-${index++}`} className="mt-10 mb-4 text-3xl font-black text-foreground tracking-tight">
          {formatInline(line.slice(2))}
        </h1>
      );
      continue;
    }

    // Blockquote or Callout
    if (line.startsWith("> ")) {
      const quoteContent = line.slice(2);
      const isClinicalNote = quoteContent.includes("Clinical") || quoteContent.includes("Pharmacist Tip") || quoteContent.includes("[!NOTE]");
      const isUrgent = quoteContent.includes("Warning") || quoteContent.includes("Emergency") || quoteContent.includes("[!WARNING]");

      elements.push(
        <div
          key={`quote-${index++}`}
          className={`my-6 rounded-2xl border p-5 text-sm sm:text-base leading-relaxed flex gap-3.5 ${
            isUrgent
              ? "border-red-500/30 bg-red-500/10 text-red-950 dark:text-red-200"
              : isClinicalNote
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200"
              : "border-primary/30 bg-primary/10 text-foreground"
          }`}
        >
          {isUrgent ? (
            <AlertTriangle className="size-5 shrink-0 text-red-600 mt-0.5" />
          ) : isClinicalNote ? (
            <ShieldCheck className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
          ) : (
            <Info className="size-5 shrink-0 text-primary mt-0.5" />
          )}
          <div className="flex-1">
            {formatInline(
              quoteContent.replace(/^\[!(NOTE|TIP|WARNING|IMPORTANT)\]\s*/i, "")
            )}
          </div>
        </div>
      );
      continue;
    }

    // Image markdown: ![alt](url)
    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      elements.push(
        <figure key={`img-${index++}`} className="my-6 overflow-hidden rounded-2xl border border-border/50 bg-muted/20">
          <img src={imgMatch[2]} alt={imgMatch[1]} className="h-auto max-h-[480px] w-full object-cover" />
          {imgMatch[1] && (
            <figcaption className="p-2.5 text-center text-xs text-muted-foreground">
              {imgMatch[1]}
            </figcaption>
          )}
        </figure>
      );
      continue;
    }

    // Normal paragraph
    elements.push(
      <p key={`p-${index++}`} className="my-4 text-base sm:text-lg leading-relaxed text-foreground/90 font-normal">
        {formatInline(line)}
      </p>
    );
  }

  flushList();

  return <div className={`blog-article-prose space-y-1 ${className}`}>{elements}</div>;
}

/**
 * Format inline markdown tokens: bold, italic, code, links
 */
function formatInline(text: string): React.ReactNode {
  const tokens: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/^(\*\*|__)(.+?)\1/);
    if (boldMatch) {
      tokens.push(<strong key={key++} className="font-bold text-foreground">{boldMatch[2]}</strong>);
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Italic: *text* or _text_
    const italicMatch = remaining.match(/^(\*|_)(.+?)\1/);
    if (italicMatch) {
      tokens.push(<em key={key++} className="italic">{italicMatch[2]}</em>);
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // Inline code: `text`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      tokens.push(
        <code key={key++} className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // Link: [label](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      tokens.push(
        <a
          key={key++}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
        >
          {linkMatch[1]}
        </a>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // Plain text up to next special character
    const nextSpecial = remaining.search(/[\*_`\[]/);
    if (nextSpecial === -1) {
      tokens.push(remaining);
      break;
    } else if (nextSpecial === 0) {
      tokens.push(remaining[0]);
      remaining = remaining.slice(1);
    } else {
      tokens.push(remaining.slice(0, nextSpecial));
      remaining = remaining.slice(nextSpecial);
    }
  }

  return <>{tokens}</>;
}
