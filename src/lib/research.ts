export type ResearchItem = {
  title: string;
  authors: string;
  venue: string;
  teaser: string;
  teaserAlt: string;
} & ({ slug: string } | { externalUrl: string });

export const researchItems: ResearchItem[] = [
  {
    slug: "svsm",
    title: "Scaling View Synthesis Transformers",
    authors: "Evan Kim*, Hyunwoo Ryu*, Thomas W. Mitchel, Vincent Sitzmann",
    venue: "CVPR 2026",
    teaser: "/research/svsm/teaser_flop_fixed_final.png",
    teaserAlt: "SVSM teaser figure",
  },
  {
    externalUrl: "https://vera.csail.mit.edu/",
    title: "Turning Video Models into Generalist Robot Policies",
    authors:
      "Sizhe Lester Li*, Evan Kim*, Xingjian Bai*, Tong Zhao, Tao Pang, Max Simchowitz, Vincent Sitzmann",
    venue: "Preprint 2026",
    teaser: "/research/vera/vera_teaser.png",
    teaserAlt: "VERA real-world robot manipulation results",
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

export function getResearchHref(item: ResearchItem): string {
  return "externalUrl" in item ? item.externalUrl : `/research/${item.slug}`;
}

export function isExternalResearch(item: ResearchItem): boolean {
  return "externalUrl" in item;
}
