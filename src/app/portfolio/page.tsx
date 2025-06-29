import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 bg-champagne dark:bg-dark-purple min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-dark-purple dark:text-champagne">portfolio.</h1>
        <Link
          href="/"
          className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne transition"
        >
          ← return
        </Link>
      </div>
      <p className="text-dark-cyan dark:text-desert-sand mb-4">
        welcome to my portfolio! here you&apos;ll find some of my projects and work.
      </p>
      <div className="text-dark-cyan dark:text-desert-sand">
        <p>coming soon...</p>
      </div>
    </main>
  );
}