import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/mdx-components";

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
      <MDXRemote source={project.content} components={mdxComponents} />
    </article>
  );
}