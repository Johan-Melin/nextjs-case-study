import { ProjectCard } from "@/components/ProjectCard";
import { getProjectSlugs, getProjectBySlug } from "@/lib/projects";
export default async function Home() {
  const slugs = await getProjectSlugs();

  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getProjectBySlug(slug);
      return {
        slug,
        title: frontmatter.title,
        description: frontmatter.description,
        imageUrl: frontmatter.coverImage,
      };
    }),
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      
      <section className="text-center m-8">
        <h1 className="text-4xl md:text-6xl text-black dark:text-white font-bold mb-8">
          Next.js Case Study Template
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
          Clean. Fast. Extendable.
        </h2>
      </section>

      <section className="flex flex-col w-full items-center py-8">
        <h2 className="text-2xl md:text-4xl text-black dark:text-white font-bold mb-8">Case Studies</h2>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            slug={project.slug}
          />
        ))}
      </section>
    </main>
  );
}
