"use client";

import { useEffect, useRef } from "react";
import katex from "katex";

/**
 * Inline math component - renders LaTeX inline with text
 * Usage: <InlineMath>x^2 + y^2 = z^2</InlineMath>
 */
export const InlineMath: React.FC<{ children: string }> = ({ children }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      katex.render(children, ref.current, {
        throwOnError: false,
        displayMode: false,
      });
    }
  }, [children]);

  return <span ref={ref} />;
};

/**
 * Block math component - renders LaTeX as a centered block
 * Usage: <BlockMath>E = mc^2</BlockMath>
 */
export const BlockMath: React.FC<{ children: string }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      katex.render(children, ref.current, {
        throwOnError: false,
        displayMode: true,
      });
    }
  }, [children]);

  return <div ref={ref} className="my-4 overflow-x-auto" />;
};

