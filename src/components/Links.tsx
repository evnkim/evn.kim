import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
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
 * A styled button-like link for project pages (arXiv, Code, Demo, etc.)
 */
export const ButtonLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-600 dark:text-cyan-400 font-medium hover:bg-cyan-500/20 hover:border-cyan-500 transition-all hover:-translate-y-0.5"
    >
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
  <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
    {links.map((link, idx) => (
      <ButtonLink key={idx} href={link.url}>
        {link.label}
      </ButtonLink>
    ))}
  </div>
);

