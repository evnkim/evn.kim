import Link from "next/link";
import { FiGithub, FiExternalLink, FiPlay, FiFileText, FiVideo } from "react-icons/fi";
import { SiArxiv } from "react-icons/si";
import { IconType } from "react-icons";

/**
 * A styled cyan link for inline text
 */
export const CyanLink: React.FC<{
  href: string;
  children: React.ReactNode;
  external?: boolean;
}> = ({ href, children, external }) => {
  const isExternal = external ?? href.startsWith("http");
  return (
    <Link
      href={href}
      className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
};

/**
 * A small icon link (for GitHub, external links, etc.)
 */
export const IconLink: React.FC<{
  href: string;
  icon: IconType;
  label?: string;
  size?: number;
}> = ({ href, icon: Icon, label, size = 20 }) => {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
    >
      <Icon size={size} />
    </Link>
  );
};

/**
 * Convenience wrappers for common icon links
 */
export const GitHubLink: React.FC<{ href: string; size?: number }> = ({
  href,
  size,
}) => <IconLink href={href} icon={FiGithub} label="GitHub" size={size} />;

export const ExternalLink: React.FC<{ href: string; size?: number }> = ({
  href,
  size,
}) => (
  <IconLink href={href} icon={FiExternalLink} label="External link" size={size} />
);

/**
 * Get icon for a link based on its label
 */
const getIconForLabel = (label: string): IconType | null => {
  const lower = label.toLowerCase();
  if (lower.includes("arxiv")) return SiArxiv;
  if (lower.includes("github") || lower.includes("code")) return FiGithub;
  if (lower.includes("demo") || lower.includes("live")) return FiPlay;
  if (lower.includes("paper") || lower.includes("pdf")) return FiFileText;
  if (lower.includes("video")) return FiVideo;
  return null;
};

/**
 * A minimal button link for research pages with auto icon detection
 */
export const ButtonLink: React.FC<{
  href: string;
  children: React.ReactNode;
  icon?: IconType;
}> = ({ href, children, icon }) => {
  const isExternal = href.startsWith("http");
  const label = typeof children === "string" ? children : "";
  const Icon = icon || getIconForLabel(label);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-stone-700 dark:text-stone-300 bg-stone-200/60 dark:bg-stone-700/60 hover:bg-stone-300/80 dark:hover:bg-stone-600/80 rounded-md transition-colors"
    >
      {Icon && <Icon size={16} />}
      {children}
    </Link>
  );
};

/**
 * A row of button links (for project pages)
 */
export const ButtonLinkGroup: React.FC<{
  links: { label: string; url: string }[];
  className?: string;
}> = ({ links, className = "" }) => (
  <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
    {links.map((link, idx) => (
      <ButtonLink key={idx} href={link.url}>
        {link.label}
      </ButtonLink>
    ))}
  </div>
);
