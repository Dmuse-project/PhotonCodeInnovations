
import fs from 'fs';
import path from 'path';


import Image from 'next/image';;
import { getPostData, getPostsByCategory } from '@/lib/posts';
import Link from 'next/link';


const postsDirectory = path.join(process.cwd(), 'posts');


// MAin generate static params.
export async function generateStaticParams() {
  const categories = fs.readdirSync(postsDirectory);

  const paths = [];

  categories.forEach((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const files = fs.readdirSync(categoryPath);

    // Add category only route: e.g. /posts/web-development
    paths.push({ filter: [category] });

    // Add category + slug route: e.g. /posts/web-development/why-nextjs
    files.forEach((file) => {
      const slug = file.replace(/\.md$/, '');
      paths.push({ filter: [category, slug] });
    });
  });

  // Also add root blog route with no filter: /posts
  paths.push({ filter: [] });

  return paths;
}

////////////////////////////////////////////////////

////POST 1
export default async function PostsPage({ params }) {
  const filter = params.filter || [];

  if (filter.length === 0) {
    // No filter — maybe list all categories or recent posts
    // Implement getAllPosts() or similar to fetch all posts here
    return <div>Show all categories or posts</div>;
  } else if (filter.length === 1) {
    const category = filter[0];
    // Show all posts in this category
    const posts = await getPostsByCategory(category);

    return (
      <div>
        <h1>Posts in {category}</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  } else if (filter.length === 2) {
    const [category, slug] = filter;
    // Show single post page
    const postData = await getPostData(category, slug);

   
     return (
      <main className="blog-post post">
    <div className="post-container">
       <h1 className="post-title">{postData.title}</h1>
       <small className="post-meta">By <strong>Photon Code Team</strong> | {postData.date}</small>

      {postData.image && (
          <img
            src={postData.image}
            alt={postData.title}
            className= "post-image"
            
          />
        
      )}

     

      {postData.description && (
       <article className="post-content" >
        <p className="text-base text-gray-600 italic">{postData.description}</p>
        </article>
      )}

      <article className="post-content" >
  
      
   

    
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
     <p>Want to get started? <Link href="https://wa.link/88d7ro">Contact us</Link> today to build a website that truly represents your business.</p>
     </article>
    
    </div>
    </main>
  );
  } else {
    return <div>Invalid URL</div>;
  }
}





