import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="p-20 m-4 bg-gray-100 dark:bg-gray-500 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">zandimt</h1>
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">welcome to zandi&apos;s personal portofolio and blog.</p>
            <Link
              href="/about"
              className="text-blue-600 dark:text-gray-200 underline hover:text-gray-600 dark:hover:text-gray-400 transition"
            >
              about
            </Link>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-gray-200 underline hover:text-gray-600 dark:hover:text-gray-400 transition"
            >
              blog
            </Link>
            <Link
              href="/portfolio"
              className="text-blue-600 dark:text-gray-200 underline hover:text-gray-600 dark:hover:text-gray-400 transition"
            >
              portfolio
            </Link>
            <div className="mt-8">
              <iframe 
                style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/track/0oPTWt05jiLscvsAbS9Fi4?utm_source=generator" 
                width="300" 
                height="152" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>
          </div>
      </div>
    </main>
  );
}
