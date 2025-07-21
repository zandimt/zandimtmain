"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "light";
  });
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setRotating(true);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    setTimeout(() => setRotating(false), 400);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={`fixed bottom-6 left-6 z-50 p-3 rounded-full shadow-lg bg-champagne dark:bg-dark-purple border-2 border-dark-purple dark:border-champagne transition-colors duration-300 focus:outline-none flex items-center justify-center ${rotating ? "animate-spin-slow" : ""}`}
      style={{ minWidth: 48, minHeight: 48 }}
    >
      {theme === "dark" ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}

// Add custom animation to globals.css:
// @keyframes spin-slow { 100% { transform: rotate(360deg); } }
// .animate-spin-slow { animation: spin-slow 0.4s linear; }

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-champagne dark:bg-dark-purple">
      <ThemeToggle />
      <div className="p-20 m-4 bg-desert-sand dark:bg-caribbean-current flex flex-col gap-4 justify-center items-center rounded-lg shadow-custom">
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
            <Link
              href="/contact"
              className="text-caribbean-current dark:text-champagne underline hover:text-dark-cyan dark:hover:text-desert-sand transition"
            >
              contact
            </Link>
          </div>
      </div>
    </main>
  );
}
