import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content/projects");

export async function getProjectSlugs() {
  const files = await fs.readdir(contentDir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getProjectBySlug(slug: string) {
  const fullPath = path.join(contentDir, `${slug}.mdx`);
  const file = await fs.readFile(fullPath, "utf8");
  const { content, data } = matter(file);
  return { slug, frontmatter: data, content };
}