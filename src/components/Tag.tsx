"use client";

import { MouseEventHandler } from "react";

/**
 * A tag/pill component for categorization
 */
export const Tag: React.FC<{
  name: string;
  isButton?: boolean;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  className?: string;
}> = ({
  name,
  isButton = false,
  isSelected = false,
  onClick,
  className = "",
}) => (
  <span
    className={`inline-block rounded-md px-2 py-0.5 text-xs transition-colors ${
      isButton
        ? isSelected
          ? // selected
            "cursor-pointer bg-amber-300/80 text-amber-950 " +
            "dark:bg-amber-500/45 dark:text-amber-200"
          : // default button
            "cursor-pointer bg-amber-200/70 text-amber-900 " +
            "hover:bg-amber-300/70 " +
            "dark:bg-amber-700/30 dark:text-amber-300 dark:hover:bg-amber-600/35 dark:hover:text-amber-300"
        : // static tag
          "bg-amber-200/70 text-amber-900 " +
          "dark:bg-amber-700/30 dark:text-amber-400"
    } ${className}`}
    onClick={onClick}
  >
    {name}
  </span>
);

