import Footer from "../Footer";
import { CyanLink } from "@/components";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center w-full px-8 mt-8">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-3xl mb-2">👋 Hello!</h1>
          <div>
            <p>
              Im currently a student at MIT studying Computer Science, Physics,
              and some Math (8 + 6-3 + 18). I&apos;m interested in doing
              meaningful research in quantum computing or AI/computer vision -
              see the <CyanLink href="/projects">projects</CyanLink> tab for my
              progress thus far. Some highlights include creating the{" "}
              <CyanLink href="https://doi.org/10.1088/1361-648X/acfdeb">
                first generative model for superconductors
              </CyanLink>
              , experimenting with different flow matching trajectories, and
              increasing qubit fidelity with composite pulses. My research has
              also been recognized by the{" "}
              <CyanLink href="https://www.societyforscience.org/regeneron-sts/2023-student-finalists/evan-kim/">
                Regeneron Science Talent Search
              </CyanLink>
              .
            </p>
            <p>
              In the past, I was an avid academic competitor, participating in
              the{" "}
              <CyanLink href="https://ipho-unofficial.org/timeline/2023/individual">
                intl physics olympiad
              </CyanLink>
              ,{" "}
              <CyanLink href="https://usaaao.org/2023/08/19/16th-ioaa-has-ended/">
                intl astronomy
              </CyanLink>{" "}
              <CyanLink href="https://usaaao.org/2022/08/23/15th-ioaa-has-ended/">
                olympiad
              </CyanLink>
              , Science Bowl, and math olympiad, just to name a few. I&apos;ve
              also translated this experience into the form of{" "}
              <CyanLink href="https://youtube.com/@slippinghexagons">
                educational YouTube videos
              </CyanLink>
              , which gained some amount of traction during the pandemic. I also
              offer <CyanLink href="https://cambphys.com/">tutoring</CyanLink>.
            </p>
            <p>
              In my free time, I enjoy playing basketball, trying new foods, and
              puzzling with my friends.
            </p>
            <p>
              Please contact me at evnkim [at] mit [dot] edu if you would like
              to chat!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

