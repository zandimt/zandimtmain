"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectMeta {
  title: string;
  description: string;
  image: string;
  slug: string;
  tags?: string[];
  type?: string;
  date?: string;
}

type FilterType = 'all' | 'professional' | 'personal';

export default function PortfolioClient({ projects }: { projects: ProjectMeta[] }) {
  const [filter, setFilter] = useState<FilterType>('all');

  // Sort by date (newest first), fallback to original order if no date
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.date && b.date) return b.date.localeCompare(a.date);
    return 0;
  });

  const filteredProjects =
    filter === 'all'
      ? sortedProjects
      : sortedProjects.filter((p) => (p.type || 'personal') === filter);

  const handleFilterChange = (newFilter: FilterType) => {
    console.log('Filter changing from', filter, 'to', newFilter);
    setFilter(newFilter);
  };

  console.log('Current filter:', filter);

  return (
    <>
      <div className="mb-8 text-dark-cyan dark:text-desert-sand text-lg">
        Here you can explore my professional and personal projects. Use the toggle below to switch between them!
      </div>
      <div className="flex gap-4 mb-8">
        <button
          className="portfolio-btn"
          style={{
            backgroundColor: filter === 'all' ? 'var(--caribbean-current)' : 'transparent',
            color: filter === 'all' ? 'var(--champagne)' : 'var(--caribbean-current)',
            borderColor: 'var(--caribbean-current)',
            fontWeight: 600,
          }}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          className="portfolio-btn"
          style={{
            backgroundColor: filter === 'professional' ? 'var(--caribbean-current)' : 'transparent',
            color: filter === 'professional' ? 'var(--champagne)' : 'var(--caribbean-current)',
            borderColor: 'var(--caribbean-current)',
            fontWeight: 600,
          }}
          onClick={() => handleFilterChange('professional')}
        >
          Professional
        </button>
        <button
          className="portfolio-btn"
          style={{
            backgroundColor: filter === 'personal' ? 'var(--caribbean-current)' : 'transparent',
            color: filter === 'personal' ? 'var(--champagne)' : 'var(--caribbean-current)',
            borderColor: 'var(--caribbean-current)',
            fontWeight: 600,
          }}
          onClick={() => handleFilterChange('personal')}
        >
          Personal
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>

      <style jsx>{`
        .portfolio-btn {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          border-width: 2px;
          font-size: 0.875rem;
          transition: all 0.2s;
          outline: none;
          cursor: pointer;
          font-weight: 600;
        }
        .portfolio-btn:not([style*='background-color: var(--caribbean-current)']):hover {
          background: var(--desert-sand);
        }
      `}</style>
    </>
  );
} 