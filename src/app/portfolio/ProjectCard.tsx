import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

export default function ProjectCard({ slug, title, description, image, tags }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="block rounded-xl overflow-hidden shadow-custom bg-desert-sand dark:bg-caribbean-current hover:scale-105 transition-transform duration-200 border border-desert-sand dark:border-caribbean-current"
    >
      <div className="w-full h-40 bg-gray-200 dark:bg-dark-purple flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-dark-purple dark:text-champagne mb-1">{title}</h2>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-caribbean-current text-champagne text-xs font-semibold tracking-wide border border-champagne"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-dark-cyan dark:text-desert-sand">{description}</p>
      </div>
    </Link>
  );
} 