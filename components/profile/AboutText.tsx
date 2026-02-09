"use client";

import { useState } from "react";

interface AboutTextProps {
  items: readonly string[];
}

export default function AboutText({ items }: AboutTextProps) {
  const [expanded, setExpanded] = useState(false);
  const intro = items.slice(0, 2);
  const extra = items.slice(2);
  const hasExtra = extra.length > 0;

  return (
    <div className="max-w-[900px] space-y-2 text-[0.98rem] leading-7 text-slate-700">
      {intro[0] ? <p>{intro[0]}</p> : null}

      {intro[1] ? (
        <p>
          {intro[1]}
          {!expanded && hasExtra ? (
            <button
              type="button"
              className="ml-1 inline cursor-pointer text-[0.98rem] font-medium text-slate-900 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              onClick={() => setExpanded(true)}
              aria-expanded={expanded}
              aria-label="Read more about consultant"
            >
              ... Read more
            </button>
          ) : null}
        </p>
      ) : null}

      {expanded
        ? extra.map((item, index) => {
            const isLast = index === extra.length - 1;

            return (
              <p key={item}>
                {item}
                {isLast ? (
                  <button
                    type="button"
                    className="ml-1 inline cursor-pointer text-[0.98rem] font-medium text-slate-900 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    onClick={() => setExpanded(false)}
                    aria-label="Show less about consultant"
                  >
                    Show less
                  </button>
                ) : null}
              </p>
            );
          })
        : null}
    </div>
  );
}
