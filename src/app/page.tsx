import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Andi Toader</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Welcome to my minimalistic portfolio.</p>
      <a
        href="/blog"
        className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200 transition"
      >
        Read my blog
      </a>
    </main>
  );
}
