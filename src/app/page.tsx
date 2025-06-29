import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-champagne dark:bg-dark-purple">
      <div className="p-20 m-4 bg-desert-sand dark:bg-caribbean-current flex flex-col gap-4 justify-center items-center rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-dark-purple dark:text-champagne">zandimt</h1>
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-lg text-dark-cyan dark:text-desert-sand mb-8">welcome to zandi&apos;s personal portofolio and blog.</p>
            <Link
              href="/about"
              className="text-caribbean-current dark:text-champagne underline hover:text-dark-cyan dark:hover:text-desert-sand transition"
            >
              about
            </Link>
            <Link
              href="/blog"
              className="text-caribbean-current dark:text-champagne underline hover:text-dark-cyan dark:hover:text-desert-sand transition"
            >
              blog
            </Link>
            <Link
              href="/portfolio"
              className="text-caribbean-current dark:text-champagne underline hover:text-dark-cyan dark:hover:text-desert-sand transition"
            >
              portfolio
            </Link>
          </div>
      </div>
    </main>
  );
}
