import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug).catch(() => null);
  if (!project) return notFound();

  return (
    <article>
      <h1>{project.frontmatter.title}</h1>
      <MDXRemote source={project.content} />
    </article>
  );
}