import { readFileSync, readdirSync, existsSync } from "fs"
import { join } from "path"
import matter from "gray-matter"

export interface PostMeta {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
}

export interface Post extends PostMeta {
  content: string
}

const BLOG_DIR = join(process.cwd(), "src/content/blog")

export function getAllPosts(): PostMeta[] {
  try {
    if (!existsSync(BLOG_DIR)) {
      console.warn(`Blog directory ${BLOG_DIR} does not exist`)
      return []
    }

    const files = readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"))

    return files
      .map((file) => {
        try {
          const fullPath = join(BLOG_DIR, file)
          const fileContents = readFileSync(fullPath, "utf8")
          const { data } = matter(fileContents)

          return {
            slug: data.slug || file.replace(".md", ""),
            title: data.title || "Untitled",
            date: data.date || new Date().toISOString().split("T")[0],
            tags: data.tags || [],
            excerpt: data.excerpt || "",
          } as PostMeta
        } catch (error) {
          console.error(`Error processing file ${file}:`, error)
          return null
        }
      })
      .filter((post): post is PostMeta => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

export function getPost(slug: string): Post | null {
  try {
    const fullPath = join(BLOG_DIR, `${slug}.md`)

    if (!existsSync(fullPath)) {
      console.warn(`Post file ${fullPath} does not exist`)
      return null
    }

    const fileContents = readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug: data.slug || slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split("T")[0],
      tags: data.tags || [],
      excerpt: data.excerpt || "",
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}
