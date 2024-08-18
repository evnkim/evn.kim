import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Mail, GraduationCap } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4">
      <div className="flex flex-col items-center">
        <hr className="w-64 border-t border-gray-300 dark:border-gray-600 mb-4" />
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/evnkim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-300"
          >
            <FiGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/evan-kim-56bb53220/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-300"
          >
            <FiLinkedin size={24} />
          </Link>
          <Link
            href="mailto:evnkim@mit.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-300"
          >
            <Mail size={24} />
          </Link>
          <Link
            href="https://scholar.google.com/citations?user=UTtaJaMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-300"
          >
            <GraduationCap size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
