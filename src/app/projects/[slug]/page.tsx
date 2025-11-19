import { notFound } from "next/navigation";

export const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      imageUrl: "/images/projects/project-1/project-1-cover.jpg",
      slug: "project-1",
    },
  ];

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <article>
      <h1>{project.title}</h1>
      {/* render MDX or sections */}
    </article>
  );
}