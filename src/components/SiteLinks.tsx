import Link from "next/link";

const siteLinks = [
  { label: "Email", href: "mailto:evnkim@mit.edu" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=UTtaJaMAAAAJ&hl=en",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/evnkim", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/evan-kim-56bb53220/",
    external: true,
  },
] as const;

const linkClassName =
  "text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors uppercase tracking-wide text-sm";

export const SiteLinks: React.FC = () => (
  <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mt-6">
    {siteLinks.map((link, index) => (
      <span key={link.href} className="inline-flex items-center gap-2">
        {index > 0 && (
          <span className="text-stone-400 dark:text-stone-500 select-none" aria-hidden>
            ·
          </span>
        )}
        <Link
          href={link.href}
          className={linkClassName}
          {...("external" in link && link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {link.label}
        </Link>
      </span>
    ))}
  </nav>
);
