"use client";

import {
  ResearchHeader,
  Section,
  Abstract,
  SubSection,
  Figure,
  BibTeX,
} from "@/components";

// ============================================
// PROJECT METADATA - Edit this for each project
// ============================================
const projectData = {
  title: "Scaling View Synthesis Transformers",
  authors: [
    { name: "Evan Kim*", affiliation: 1, url: "https://evn.kim" },
    { name: "Hyunwoo Ryu*", affiliation: 1, url: "https://sites.google.com/view/hyunwooryu" },
    { name: "Thomas W. Mitchel", affiliation: 2, url: "https://mitchel.computer"},
    { name: "Vincent Sitzmann", affiliation: 1, url: "https://www.vincentsitzmann.com/"}
  ],
  affiliations: {
    1: "MIT",
    2: "PlayStation",
  },
  links: [
    { label: "arXiv", url: "#" },
    { label: "Code", url: "https://github.com/evnkim/SVSM" },
  ],
  summary: "TL;DR: view synthesis transformers which achieve SoTA PSNR with 3x less FLOPs.",
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function ExampleProjectPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <ResearchHeader
        title={projectData.title}
        authors={projectData.authors}
        affiliations={projectData.affiliations}
        links={projectData.links}
        summary={projectData.summary}
      />

      {/* Main Content */}
      <main>
        <Section title="Abstract">
            <p>
            Recently, geometry-free view synthesis transformers have achieved state-of-the-art results in Novel View Synthesis (NVS), outperforming traditional approaches that rely on explicit geometry modeling. However, the specific factors that govern how their performance scales with compute remain poorly understood. In this work, we conduct a rigorous analysis of the scaling laws for view synthesis transformers and elucidate a series of design choices for training compute-optimal NVS models. Most significantly, we find that an encoder–decoder architecture, which was previously found to be less scalable, can in fact be compute-optimal. We attribute the previously inferior performance of previous encoder–decoder methods to certain architectural choices and inconsistent training compute across comparisons. Across several compute levels, we demonstrate that our encoder–decoder architecture, which we call the <b>Scalable View Synthesis Model (SVSM)</b>, scales as effectively as decoder-only models, achieves a superior performance–compute Pareto frontier, and outperforms the previous state-of-the-art on real-world NVS benchmarks with substantially reduced training compute.
            </p>
        </Section>

        <Section title="Method Overview">
          <Figure
            src="/path/to/method-figure.png"
            alt="Method overview diagram"
            caption="Figure 1: Overview of our proposed method. (a) First component, (b) Second component, (c) Final output."
          />

          <p className="mb-4">
            Describe your methodology here. Break it down into digestible
            subsections if needed.
          </p>

          <SubSection title="Key Insight">
            <p className="mb-4">
              What&apos;s the core idea that makes your approach work? This is
              often the most important part to communicate clearly.
            </p>
          </SubSection>

          <SubSection title="Technical Details">
            <p>
              Add more technical details here for readers who want to understand
              the implementation.
            </p>
          </SubSection>
        </Section>

        <Section title="Results">
          <SubSection title="Quantitative Comparison">
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cyan-500/10">
                    <th className="px-4 py-3 text-left font-semibold border-b-2 border-cyan-500/30">
                      Method
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b-2 border-cyan-500/30">
                      Metric 1
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b-2 border-cyan-500/30">
                      Metric 2
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b-2 border-cyan-500/30">
                      Metric 3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-3">Baseline A</td>
                    <td className="px-4 py-3">45.2</td>
                    <td className="px-4 py-3">0.89</td>
                    <td className="px-4 py-3">12.3</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-3">Baseline B</td>
                    <td className="px-4 py-3">47.1</td>
                    <td className="px-4 py-3">0.91</td>
                    <td className="px-4 py-3">11.8</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 font-semibold">
                    <td className="px-4 py-3">Ours</td>
                    <td className="px-4 py-3 text-cyan-600 dark:text-cyan-400">
                      52.4
                    </td>
                    <td className="px-4 py-3 text-cyan-600 dark:text-cyan-400">
                      0.95
                    </td>
                    <td className="px-4 py-3 text-cyan-600 dark:text-cyan-400">
                      9.2
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SubSection>

          <SubSection title="Qualitative Results">
            <p>
              Add images, videos, or interactive demos showcasing your results
              here.
            </p>
            {/* Example: <Video src="/path/to/demo.mp4" caption="Demo video showing our method in action." /> */}
          </SubSection>
        </Section>

        <Section title="Citation">
          <p className="mb-4">If you find this work useful, please cite:</p>
          <BibTeX
            citation={`@inproceedings{yourname2025project,
  title={Project Title: A Subtitle That Explains the Core Contribution},
  author={Your Name and Collaborator Name},
  booktitle={Conference Name},
  year={2025}
}`}
          />
        </Section>

        <Section title="Acknowledgements">
          <p>
            We thank [names] for helpful discussions. This work was supported by
            [funding sources].
          </p>
        </Section>
      </main>
    </div>
  );
}
