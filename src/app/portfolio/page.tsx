import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PortfolioClient from "./PortfolioClient";
import Link from "next/link";

interface ProjectMeta {
  title: string;
  description: string;
  image: string;
  slug: string;
  tags?: string[];
  type?: string;
  date?: string;
}

function getProjects(): ProjectMeta[] {
  const projectsDir = path.join(process.cwd(), "src/content/projects");
  const files = fs.readdirSync(projectsDir);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(projectsDir, file);
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      return {
        title: data.title || file,
        description: data.description || "",
        image: data.image || "",
        slug: file.replace(/\.md$/, ""),
        tags: data.tags || [],
        type: data.type || "personal",
        date: data.date || "",
      };
    })
    .sort((a, b) => {
      if (a.date && b.date) return b.date.localeCompare(a.date);
      return 0;
    });
}

export default function PortfolioPage() {
  const projects = getProjects();
  return (
    <main className="max-w-5xl mx-auto py-16 px-4 bg-champagne dark:bg-dark-purple min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-dark-purple dark:text-champagne">portfolio.</h1>
        <Link
          href="/"
          className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne transition"
        >
          ← return
        </Link>
      </div>
      <PortfolioClient projects={projects} />
    </main>
  );
}