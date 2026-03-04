"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

const Navlink: React.FC<{
  href: string;
  label: string;
  addtlCSS: string;
}> = ({ href, label, addtlCSS }) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`${addtlCSS} ${
        isActive
          ? "text-cyan-600 dark:text-cyan-300"
          : "text-black dark:text-white"
      } hover:text-cyan-600 dark:hover:text-cyan-300`}
    >
      {label}
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="w-full">
      <div className="container mx-auto flex items-center justify-between gap-2">
        <Link
          href="/"
          className="text-2xl sm:text-4xl font-medium text-black dark:text-white leading-tight shrink-0"
        >
          <span className="sm:hidden">Evan</span>
          <span className="hidden sm:inline">Evan Kim</span>
        </Link>
        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-3 text-xs sm:text-base">
            <li className="hidden sm:block">
              <Navlink href="/" label="Home" addtlCSS="" />
            </li>
            <li>
              <Navlink href="/research" label="Research" addtlCSS="" />
            </li>
            <li>
              <Navlink href="/projects" label="Projects" addtlCSS="" />
            </li>
            <li>
              <Navlink href="/blogs" label="Blogs" addtlCSS="" />
            </li>
          </ul>
          <div className="scale-90 sm:scale-100">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar, Navlink };
