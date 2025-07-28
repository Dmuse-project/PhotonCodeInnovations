export default function blogPage() {
  return (
    <>
      <div className="blog">
        <div className="blog-hero">
          <h1>Insights & Growth Strategies</h1>
          <p>
            Actionable ideas, tech trends, and brand strategies from the minds
            at Photon Code Innovations. From lightning-fast Next.js builds to
            marketing campaigns that convert, learn what fuels online success
          </p>
        </div>

        <main className="blog-container">
          <section className="blog-category">
            <h2>Web Development</h2>
            <div className="blog-cards">
              <article className="blog-card">
                <h3>
                  Why We Build With Next.js — And Why Your Business Should Care
                </h3>
                <p>
                  Discover how Next.js powers faster load times, better SEO, and
                  seamless scalability for modern brands.
                </p>
                <a href="#" className="contact__form__button">
                  Read More →
                </a>
              </article>
              <article className="blog-card">
                <h3>5 Website Mistakes Costing Your Business Customers</h3>
                <p>
                  From slow speeds to poor UX, fix these common errors and keep
                  your visitors engaged.
                </p>
                <a href="#" className="contact__form__button">
                  Read More →
                </a>
              </article>
              <article className="blog-card">
                <h3>5 Website Mistakes Costing Your Business Customers</h3>
                <p>
                  Simple errors that turn visitors away — and how to fix them.
                </p>
                <a href="#" className="contact__form__button">
                  Read More →
                </a>
              </article>
            </div>
          </section>

          <section className="blog-category">
            <h2>Digital Marketing</h2>
            <div className="blog-cards">
              <article className="blog-card">
                <h3>SEO vs Ads: Where Should Your Money Go in 2025?</h3>
                <p>
                  A practical breakdown of where to invest — and how to maximize
                  ROI with a hybrid strategy.
                </p>
                <a href="#" className="contact__form__button">
                  Read More →
                </a>
              </article>
              <article className="blog-card">
                <h3>The ROI of Email Marketing — Why It’s Not Dead</h3>
                <p>
                  Explore why email campaigns continue to outperform most ad
                  platforms in long-term value.
                </p>
                <a href="#" className="contact__form__button">
                  Read More →
                </a>
              </article>
            </div>
          </section>

          <section className="blog-category">
            <h2>Content & Brand</h2>
            <div className="blog-cards">
              <article className="blog-card">
                <h3>How to Craft Content That Actually Converts</h3>
                <p>
                  Go beyond pretty words. Learn frameworks that turn readers
                  into buyers.
                </p>
                <a href="#" className="contact__form__button">
                  Read More →
                </a>
              </article>
              <article className="blog-card">
                <h3>
                  Building Trust with Storytelling: Why Your Story Matters
                </h3>
                <p>
                  Authenticity wins. Discover how to make your brand story
                  relatable, credible, and unforgettable.
                </p>
                <a href="#" className="contact__form__button">
                  Read More →
                </a>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
