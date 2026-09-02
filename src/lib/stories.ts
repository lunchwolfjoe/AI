import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const storiesDirectory = path.join(process.cwd(), "content/stories");

export interface Story {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  authorHandle?: string;
  part?: number;
  content: string;
}

export interface StoryMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  authorHandle?: string;
  part?: number;
}

export async function getStories(): Promise<StoryMeta[]> {
  if (!fs.existsSync(storiesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(storiesDirectory);
  const allStories = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(storiesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
        author: data.author,
        authorHandle: data.authorHandle,
        part: data.part,
      };
    });

  return allStories.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getStory(slug: string): Promise<Story | null> {
  const fullPath = path.join(storiesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    author: data.author,
    authorHandle: data.authorHandle,
    part: data.part,
    content: contentHtml,
  };
}

export async function getAllStorySlugs(): Promise<string[]> {
  if (!fs.existsSync(storiesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(storiesDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}
