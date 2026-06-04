import Link from "next/link";
import {
  researchItems,
  getResearchHref,
  isExternalResearch,
} from "@/lib/research";

function boldAuthor(authors: string) {
  return authors.split(/(Evan Kim)/).map((part, i) =>
    part === "Evan Kim" ? <strong key={i}>{part}</strong> : part
  );
}

export const PublicationList: React.FC<{ showTeaser?: boolean }> = ({
  showTeaser = false,
}) => (
  <div
    className={
      showTeaser
        ? "w-full divide-y divide-stone-300/70 dark:divide-stone-600/70"
        : "w-full flex flex-col gap-3"
    }
  >
    {researchItems.map((item) => {
      const href = getResearchHref(item);
      const isExternal = isExternalResearch(item);
      return (
        <Link
          key={href}
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <article
            className={`flex gap-4 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors items-start ${
              showTeaser ? "flex-col md:flex-row py-5" : "py-0"
            }`}
          >
            {showTeaser && (
              <div className="md:w-1/3 flex-shrink-0">
                <img
                  src={item.teaser}
                  alt={item.teaserAlt}
                  className="max-h-36 object-contain ml-auto block"
                />
              </div>
            )}
            <div className={showTeaser ? "md:w-2/3 flex flex-col" : "flex flex-col"}>
              <h3
                className={`font-semibold ${showTeaser ? "text-xl mb-1" : "text-lg mb-0.5"}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-gray-700 dark:text-gray-300 text-sm ${showTeaser ? "mb-1" : "mb-0.5"}`}
              >
                {boldAuthor(item.authors)}
              </p>
              <p className="text-cyan-700 dark:text-cyan-400 text-sm">{item.venue}</p>
            </div>
          </article>
        </Link>
      );
    })}
  </div>
);
