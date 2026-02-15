"use client";

import {
  ResearchHeader,
  Section,
  Remark,
  SubSection,
  Figure,
  BibTeX,
  CyanLink,
  InlineMath,
  BlockMath,
  Video,
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
        <div className="flex justify-center my-8">
          <Figure
            src="/research/svsm/teaser_flop_fixed_final.png"
            alt="Scaling laws comparison"
            caption="Performance vs. compute scaling comparison between SVSM and LVSM on RealEstate10K."
            className="max-w-lg"
          />
        </div>

        <Section title="Abstract">
            <p>
            Recently, geometry-free view synthesis transformers have achieved state-of-the-art results in Novel View Synthesis (NVS), outperforming traditional approaches that rely on explicit geometry modeling. However, the specific factors that govern how their performance scales with compute remain poorly understood. In this work, we conduct a rigorous analysis of the scaling laws for view synthesis transformers and elucidate a series of design choices for training compute-optimal NVS models. Most significantly, we find that an encoder–decoder architecture, which was previously found to be less scalable, can in fact be compute-optimal. We attribute the previously inferior performance of previous encoder–decoder methods to certain architectural choices and inconsistent training compute across comparisons. Across several compute levels, we demonstrate that our encoder–decoder architecture, which we call the <b>Scalable View Synthesis Model (SVSM)</b>, scales as effectively as decoder-only models, achieves a superior performance–compute Pareto frontier, and outperforms the previous state-of-the-art on real-world NVS benchmarks with substantially reduced training compute.
            </p>
        </Section>

        <Section title="Method Overview">
          <Figure
            src="/research/svsm/lvsm_svsm.png"
            alt="Method overview diagram"
            caption={
              <>
                Figure 1: Architectures of the current SOTA, the{" "} 
                <CyanLink href="https://haian-jin.github.io/projects/LVSM/">decoder-only LVSM</CyanLink>{" "}
                (a) and SVSM (ours, b). We demonstrate that an encoder-decoder transformer
                architecture outperforms the prior state-of-the-art model while dramatically
                reducing the training compute budget.
              </>
            }
          />

          <SubSection title="Encode once, decode many times.">
            <p>
              Decoder-only LVSM recomputes context information for every target view rendered. 
              SVSM instead uses an encoder-decoder design: a bidirectional encoder processes the 
              context images <em>once</em> into latent tokens <InlineMath>{"\\mathbf{z} = \\mathcal{E}[\\mathfrak{C}]"}</InlineMath>, 
              then a cross-attention decoder renders each target view from this fixed representation. 
              This reduces rendering complexity 
              from <InlineMath>{"\\mathcal{O}(V_T V_C)"}</InlineMath> to <InlineMath>{"\\mathcal{O}(V_T + V_C)"}</InlineMath>—a 
              significant saving when rendering many views. The tradeoff: unlike LVSM, the encoder 
              can&apos;t discard target-irrelevant information. But SVSM&apos;s compute efficiency lets us 
              scale up model size and training steps such that, normalized by compute budget, SVSM 
              significantly outperforms LVSM.
            </p>
          </SubSection>

          <SubSection title="Why is this better? Effective Batch Size.">
            <p className="mb-4">
              Training cost scales with both the number of scenes (batch size <InlineMath>B</InlineMath>) and 
              target views per scene (<InlineMath>V_T</InlineMath>). We find empirically that what matters 
              is their product—the <em>effective batch size</em>{" "}
              <InlineMath>{"B_{\\text{eff}} \\equiv B \\cdot V_T"}</InlineMath>. Configurations with the 
              same <InlineMath>{"B_{\\text{eff}}"}</InlineMath> achieve nearly identical performance 
              (within ±0.2 PSNR).
            </p>
            <figure>
              <img
                src="/research/svsm/ebs.png"
                alt="Effective batch size scaling law"
                className="rounded-xl border w-full mb-2"
              />
              <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400">
                Effective batch size scaling: configurations with same <InlineMath>{"B_{\\text{eff}}"}</InlineMath> achieve nearly identical performance.
              </figcaption>
            </figure>
            <p className="mb-4">
              For decoder-only LVSM, compute scales as:
            </p>
            <BlockMath>{"\\chi^{\\text{(LVSM)}} \\propto B \\cdot V_T \\cdot (V_C + 1) = B_{\\text{eff}}(V_C + 1)"}</BlockMath>
            <p className="mb-4">
              So there&apos;s <em>no advantage</em> to tuning <InlineMath>V_T</InlineMath>—all 
              configurations at fixed <InlineMath>{"B_{\\text{eff}}"}</InlineMath> cost the same. 
              In contrast, SVSM scales as:
            </p>
            <BlockMath>{"\\chi^{\\text{(SVSM)}} \\propto B(V_C + V_T) = B_{\\text{eff}} + B \\cdot V_C"}</BlockMath>
            <p>
              By reducing <InlineMath>B</InlineMath> and increasing <InlineMath>V_T</InlineMath>, 
              we achieve the same effective batch size—and performance—with <em>lower compute</em>. 
              This justifies our encoder-decoder design that efficiently decodes multiple targets.
            </p>
          </SubSection>
        </Section>

        <Section title="Results">
          <SubSection title="Scaling Laws: compute-efficent Pareto frontier.">
            <p>
              We evaluate our architecture rigorously by training both models on various compute budgets. We also test in several datasets and view context count settings: RE10K (2 context views), DL3DV (4 context views), and Objaverse (8 context views). In all cases, SVSM (in blue) consistently requires much less training compute to achieve the same performance as LVSM.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left column: RE10K Main */}
              <figure className="h-full flex flex-col justify-between">
                <img
                  src="/research/svsm/teaser_flop_fixed_final.png"
                  alt="Scaling law: Overall model compute efficiency"
                  className="rounded-xl border w-full mb-2"
                />
                <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400">
                  RE10K: 2 context views. SVSM achieves equal performance with 3 times less compute.
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/research/svsm/data_param_laws_fix.png"
                  alt="Scaling law: RE10K experiment"
                  className="rounded-xl border w-full mb-2"
                />
                <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400">
                  RE10K: Data and parameter chinchilla-style scaling laws.
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/research/svsm/dl3dv_scaling_fixed.png"
                  alt="Scaling law: DL3DV experiment"
                  className="rounded-xl border w-full mb-2"
                />
                <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400">
                  DL3DV: 4 context views. PRoPE enables SVSM to match LVSM in scaling with a lower compute cost.
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/research/svsm/obj_scaling_final_fixed.png"
                  alt="Scaling law: Objaverse experiment"
                  className="rounded-xl border w-full mb-2"
                />
                <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Objaverse: 8 context views. SVSM has substantial compute advantage.
                </figcaption>
              </figure>
            </div>

            {/* <p>
              By design, the rendering speed is also significantly faster.
            </p> */}
            {/* <div className="overflow-x-auto mb-8">
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
            </div> */}
          </SubSection>

          <SubSection title="Qualitative Results: RE10K, DL3DV, Objaverse.">
            <Figure
              src="/research/svsm/qualitative_twoview_new.png"
              alt="RE10K qualitative results"
              caption="Qualitative comparison on RE10K dataset (2 context views)."
            />
            
            <Figure
              src="/research/svsm/qualitative_fourview.png"
              alt="DL3DV qualitative results"
              caption="Qualitative comparison on DL3DV dataset (4 context views)."
            />

            <Figure
              src="/research/svsm/objaverse_samples.png"
              alt="Objaverse qualitative results"
              caption="Multiview consistency of SVSM outputs on Objaverse."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <Video 
                src="/research/svsm/re10k_compile_final.mp4"
                caption="Novel view synthesis on RE10K dataset with full compute"
                autoPlay={true}
                loop={true}
                muted={true}
              />
              <Video 
                src="/research/svsm/svsm_obj_only.mp4"
                caption="SVSM (ours) on Objaverse with limited compute"
                autoPlay={true}
                loop={true}
                muted={true}
              />
              <Video 
                src="/research/svsm/lvsm_obj_only.mp4"
                caption="LVSM (decoder-only) on Objaverse with limited compute"
                autoPlay={true}
                loop={true}
                muted={true}
              />
              
            </div>
          </SubSection>
        </Section>

        <Section title="Citation">
          <p className="mb-4">If you find this work useful, please cite:</p>
          <BibTeX
            citation={`@inproceedings{kim2026svsm,
  title={Scaling View Synthesis Transformers},
  author={Evan Kim and Hyunwoo Ryu and Thomas W. Mitchel and Vincent Sitzmann},
  booktitle={arXiv preprint arXiv:2602.xxxxx},
  year={2026}
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
