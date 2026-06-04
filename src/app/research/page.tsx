import { Navbar } from "../Navbar";
import { PublicationList } from "@/components/PublicationList";

export default function ResearchLandingPage() {
  return (
    <div className="flex flex-col min-h-screen items-center p-4 pt-8">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <Navbar />
        <main className="w-full flex flex-col items-center">
          <div className="flex flex-col w-full items-start px-8 mt-8">
            <h1 className="text-3xl mb-6">Publications</h1>
            <PublicationList showTeaser />
          </div>
        </main>
      </div>
    </div>
  );
}
