import { CyanLink, PublicationList, SiteLinks } from "@/components";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center w-full px-8 mt-8">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-3xl mb-2">👋 Hello!</h1>
          <div>
            <p>
              I&apos;m currently a researcher at OpenAI. Before that, I studied Computer Science and
              Physics at MIT where I did research on{" "}
              <CyanLink href="https://doi.org/10.1088/1361-648X/acfdeb">generative modeling</CyanLink>
              ,{" "}
              <CyanLink href="/research/svsm">novel view synthesis</CyanLink>, and{" "}
              <CyanLink href="https://vera.csail.mit.edu">world models for robotics</CyanLink>.
            </p>
            <p>
              Before that, I received gold medals at the{" "}
              <CyanLink href="https://ipho-unofficial.org/timeline/2023/individual">
                International Physics Olympiad
              </CyanLink>{" "}
              and the{" "}
              <CyanLink href="https://usaaao.org/2023/08/19/16th-ioaa-has-ended/">
                International Olympiad on Astronomy and Astrophysics
              </CyanLink>
              . I also offer{" "}
              <CyanLink href="https://cambphys.com/">tutoring</CyanLink>.
            </p>
          </div>
          <SiteLinks />
          <h2 className="text-2xl font-semibold mt-8 mb-3">Publications</h2>
          <PublicationList />
        </div>
      </div>
    </main>
  );
}
