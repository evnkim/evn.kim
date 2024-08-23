import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-100 h-[70vh]">
      <h1 className="text-6xl font-bold text-black dark:text-white mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 text-center dark:text-gray-400 mb-4">
        The page you&#39;re looking for doesn&#39;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
