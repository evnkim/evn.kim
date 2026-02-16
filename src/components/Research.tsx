"use client";

import { useState } from "react";

/**
 * Author list with superscript affiliations (for research papers)
 */
export const AuthorList: React.FC<{
  authors: { name: string; affiliation: number; url?: string; equalContribution?: boolean }[];
  affiliations: Record<number, string>;
  className?: string;
}> = ({ authors, affiliations, className = "" }) => {
  const hasEqualContribution = authors.some(author => author.equalContribution);
  
  return (
    <div className={`mb-4 ${className}`}>
      <div className="text-lg">
        {authors.map((author, idx) => (
          <span key={idx}>
            {author.url ? (
              <a
                href={author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-500 transition-colors"
              >
                {author.name}
              </a>
            ) : (
              author.name
            )}
            {author.equalContribution && "*"}
            <sup className="text-xs ml-0.5">
              {author.affiliation}
            </sup>
            {idx < authors.length - 1 && ", "}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
        {Object.entries(affiliations).map(([num, name], idx) => (
          <span key={num}>
            <sup>{num}</sup>
            {name}
            {idx < Object.entries(affiliations).length - 1 && ", "}
          </span>
        ))}
        {hasEqualContribution && (
          <>
            <br />
            <span className="text-xs">* Equal contribution</span>
          </>
        )}
      </div>
    </div>
  );
};

/**
 * Conference/venue badge (e.g., "ICLR 2025 (Oral)")
 */
export const VenueBadge: React.FC<{
  venue: string;
  note?: string;
  className?: string;
}> = ({ venue, note, className = "" }) => (
  <div
    className={`inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 py-2 rounded-full font-semibold text-sm shadow-lg shadow-cyan-500/30 ${className}`}
  >
    {venue}
    {note && <span className="font-normal opacity-90"> ({note})</span>}
  </div>
);

/**
 * BibTeX citation block with copy button
 */
export const BibTeX: React.FC<{
  citation: string;
  className?: string;
}> = ({ citation, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative ${className}`}>
      <pre className="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 p-4 rounded-lg overflow-x-auto text-sm font-mono">
        {citation}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-1 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-600 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/30 dark:text-cyan-400 rounded text-xs transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

/**
 * Research page hero/header section
 */
export const ResearchHeader: React.FC<{
  title: string;
  authors?: { name: string; affiliation: number; url?: string }[];
  affiliations?: Record<number, string>;
  venue?: string;
  venueNote?: string;
  links?: { label: string; url: string }[];
  summary?: string;
  children?: React.ReactNode;
}> = ({
  title,
  authors,
  affiliations,
  venue,
  venueNote,
  links,
  summary,
  children,
}) => {
  // Import ButtonLinkGroup dynamically to avoid circular deps
  const { ButtonLinkGroup } = require("./Links");

  return (
    <header className="text-center mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        {title}
      </h1>

      {authors && affiliations && (
        <AuthorList authors={authors} affiliations={affiliations} />
      )}

      {venue && (
        <div className="mb-6">
          <VenueBadge venue={venue} note={venueNote} />
        </div>
      )}

      {links && links.length > 0 && (
        <ButtonLinkGroup links={links} className="mb-8" />
      )}

      {summary && (
        <p className="text-lg text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto">
          {summary}
        </p>
      )}

      {children}
    </header>
  );
};

