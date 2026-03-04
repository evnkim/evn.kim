import { Navbar } from "../Navbar";
import Link from "next/link";

type ResearchItem = {
  title: string;
  authors: string;
  venue: string;
  teaser: string;
  teaserAlt: string;
} & ({ slug: string } | { externalUrl: string });

const researchItems: ResearchItem[] = [
  {
    slug: "svsm",
    title: "Scaling View Synthesis Transformers",
    authors:
      "Evan Kim*, Hyunwoo Ryu*, Thomas W. Mitchel, Vincent Sitzmann",
    venue: "CVPR 2026",
    teaser: "/research/svsm/teaser_flop_fixed_final.png",
    teaserAlt: "SVSM teaser figure",
  },
  {
    externalUrl: "https://doi.org/10.1088/1361-648X/acfdeb",
    title: "ScGAN: a generative adversarial network to predict hypothetical superconductors",
    authors: "Evan Kim, S V Dordevic",
    venue: "J. Phys.: Condens. Matter 2024",
    teaser: "/research/scgan/scgan_teaser.png",
    teaserAlt: "ScGAN teaser figure",
  },
];

export default function ResearchLandingPage() {
  return (
    <div className="flex flex-col min-h-screen items-center p-4 pt-8">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <Navbar />
        <main className="w-full flex flex-col items-center">
          <div className="flex flex-col w-full items-start px-8 mt-8">
            <h1 className="text-3xl mb-6">Publications</h1>
            <div className="w-full divide-y divide-stone-300/70 dark:divide-stone-600/70">
              {researchItems.map((item) => {
                const href = "externalUrl" in item ? item.externalUrl : `/research/${item.slug}`;
                const isExternal = "externalUrl" in item;
                const boldName = (authors: string) =>
                  authors.split(/(Evan Kim)/).map((part, i) =>
                    part === "Evan Kim" ? <strong key={i}>{part}</strong> : part
                  );
                return (
                  <Link
                    key={href}
                    href={href}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <article className="flex flex-col md:flex-row gap-4 py-5 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors items-start">
                      <div className="md:w-1/3 flex-shrink-0">
                        <img
                          src={item.teaser}
                          alt={item.teaserAlt}
                          className="max-h-36 object-contain ml-auto block"
                        />
                      </div>
                      <div className="md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-1">
                          {item.title}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-1 text-sm">
                          {boldName(item.authors)}
                        </p>
                        <p className="text-cyan-700 dark:text-cyan-400 text-sm">
                          {item.venue}
                        </p>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
