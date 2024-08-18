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
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-4xl font-medium text-black dark:text-white"
        >
          Evan Kim
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Navlink href="/" label="Home" addtlCSS="" />
          </li>
          <li>
            <Navlink href="/projects" label="Projects" addtlCSS="" />
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar, Navlink };
