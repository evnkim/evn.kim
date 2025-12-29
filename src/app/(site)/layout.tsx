import { Navbar } from "../Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen items-center p-4 pt-8">
      <div className="max-w-3xl w-full flex flex-col space-between items-center">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

