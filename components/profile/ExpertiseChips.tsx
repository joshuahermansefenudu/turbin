"use client";

import { useState } from "react";
import Chip from "@/components/ui/Chip";

interface ExpertiseChipsProps {
  tags: readonly string[];
  initialVisible?: number;
}

export default function ExpertiseChips({
  tags,
  initialVisible = 8,
}: ExpertiseChipsProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = tags.length > initialVisible;
  const visibleTags = expanded ? tags : tags.slice(0, initialVisible);

  return (
    <div>
      <div id="expertise-chip-list" className="flex flex-wrap gap-2">
        {visibleTags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>

      {hasMore ? (
        <button
          type="button"
          className="mt-3 inline-flex items-center rounded px-2 py-1 text-sm font-medium text-slate-700 underline underline-offset-4 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2"
          aria-controls="expertise-chip-list"
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Show less" : `Show more (${tags.length - initialVisible})`}
        </button>
      ) : null}
    </div>
  );
}
