import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";

export default async function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="blog">
      <div className="blog-hero">
        <h1>Insights & Growth Strategies</h1>
        <p>
          Actionable ideas, tech trends, and brand strategies from the minds at
          Photon Code Innovations. From lightning-fast Next.js builds to
          marketing campaigns that convert, learn what fuels online success
        </p>
      </div>

      <main className="blog-container">
        <section className="blog-category">
          <div className="blog-category__container">
          {["Web-Development", "Digital-Marketing", "Content-Creation"].map(
            (category) => {
              return (
                <div key={category}>
                  <h2>{category.replace("-", " ")}</h2>

                  <div className="blog-cards">
                    {allPostsData
                      .filter((post) => post.category === category)
                      .map(({ slug, category, date, title, image, description }) => (
                        <article key={slug} className="blog-card">
                          {image && (

                              <img
                                src={image}
                                alt={title}
                              />
                          
                          )}
                          
                            <h3>
                            <Link
                              href={`/posts/${category}/${slug}`}
                              className="text-blue-600 hover:underline text-lg font-semibold"
                            >
                              {title}
                            </Link>
                            </h3>
                            <p className="text-gray-700 text-sm mb-1">
                              {description}
                            </p>
                            <small className="text-gray-500">{date}</small>
                      
                        </article>
                      ))}
                  </div>
                </div>
              );
            }
          )}
          </div>
        </section>
      </main>
    </div>
  );
}
