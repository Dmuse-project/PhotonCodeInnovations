
////////////////////////////////////////////////
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(category, slug) {
  const fullPath = path.join(postsDirectory, category, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    category,
    contentHtml,
    ...matterResult.data,
  };
}

export function getPostsByCategory(category) {

  console.log('getPostsByCategory called with:', category);


  if (typeof category !== 'string') {
    console.warn('Invalid category passed:', category);
    return [];
  }



  const categoryPath = path.join(postsDirectory, category);
  const fileNames = fs.readdirSync(categoryPath);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(categoryPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      slug,
      category,
      ...matterResult.data,
    };
  });

  return posts;
}


export function getSortedPostsData() {
  const entries = fs.readdirSync(postsDirectory);
  const allPosts = [];

  entries.forEach((entry) => {
    const fullPath = path.join(postsDirectory, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // It's a category folder
      const files = fs.readdirSync(fullPath);
      files.forEach((file) => {
        const slug = file.replace(/\.md$/, '');
        const content = fs.readFileSync(path.join(fullPath, file), 'utf8');
        const matterResult = matter(content);
        allPosts.push({
          slug,
          category: entry,
          ...matterResult.data,
        });
      });
    } else if (entry.endsWith('.md')) {
      // It's a top-level markdown file
      const slug = entry.replace(/\.md$/, '');
      const content = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(content);
      allPosts.push({
        slug,
        category: 'uncategorized',
        ...matterResult.data,
      });
    }
  });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}