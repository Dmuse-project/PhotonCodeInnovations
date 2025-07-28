export default function ProjectPage() {
  return (
    <>
      <section className="projects">
        <div className="project__typography">
          <h1>Case Studies & Featured Project</h1>
          <p>
            Every project tells a story of transformation, from concept to
            launch and beyond. Here's how we've helped businesses like yours
            scale with cutting edge web platforms and marketing that drives
            result.
          </p>
        </div>

        <div className="project__container">
          <div className="project">
            <div className="project__content">
              <h3 className="project__content__title">
                Modern Solar Web Platform
              </h3>
              <p className="project__content__client">
                <strong>Client:</strong> Genesis Eco-power Systems
              </p>
              <p className="project__content__stack">
                <strong>Tech Stack:</strong> Next.js, Sass, Javascript
              </p>
              <p className="project__content__overview">
                Interface for Genesis Eco Power’s internal platform.
              </p>
              <ul className="project__content__highlight">
                <li>✅ Interactive solar calculator</li>
                <li>✅ Inventory dashboard</li>
                <li>✅ Fully responsive design</li>
              </ul>
              <a
                href="https://dmuse-project.github.io/Genesis-Eco-power_UI/"
                className="project__content__button"
              >
                View Project
              </a>
            </div>
          </div>
                    <div className="project">
            <div className="project__content">
              <h3 className="project__content__title">Next Meals App</h3>
              <p className="project__content__client">
                <strong>Type:</strong> ShowCase Project
              </p>
              <p className="project__content__stack">
                <strong>Tech Stack:</strong> React, Next.js, Css Module
              </p>
              <p className="project__content__overview">
               Focused on elegant UI, performance & Moduar components.
              </p>
              <ul className="project__content__highlight">
                  <li>✅ Category-based filtering</li>
                <li>✅ Meal submission & image upload </li>
               
                <li>✅ Fully responsive layout & routing</li>
              </ul>
              <a
                href="https://next-meal-app.vercel.app/meals"
                className="project__content__button"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project__content">
              <h3 className="project__content__title">
                Modern Restaurant Website
              </h3>
              <p className="project__content__client">
                <strong>Type:</strong> ShowCase Project
              </p>
              <p className="project__content__stack">
                <strong>Tech Stack:</strong> Next.js, Sass, React
              </p>
              <p className="project__content__overview">
                A sleek and responsive web interface for a modern
                restaurant brand.
              </p>
              <ul className="project__content__highlight">
                <li>✅ Stripe-ready checkout mockup</li>
                <li>✅ Inventory-style menu dashboard</li>
                <li>✅ Mobile-first layout and animations</li>
              </ul>
              <a
                href="https://dmuse-project.github.io/Restaurant-Ecommerce-Application/"
                className="project__content__button"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project__content">
              <h3 className="project__content__title">Real Estate Listing Platform</h3>
              <p className="project__content__client">
                <strong>Type:</strong> ShowCase Project
              </p>
              <p className="project__content__stack">
                <strong>Tech Stack:</strong> React, Next,js, sass
              </p>
              <p className="project__content__overview">
                 Modern real estate listing interface tailored for property agencies
              </p>
              <ul className="project__content__highlight">
                <li>✅ Optimized for fast browsing </li>
                <li>✅ Filter by location and property type</li>
                <li>✅ Responsive grid layout </li>
                
                
              </ul>
              <a
                href="https://dmuse-project.github.io/Nexter_UI/"
                className="project__content__button"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project__content">
              <h3 className="project__content__title">Modern Hotel UI</h3>
              <p className="project__content__client">
                <strong>Type:</strong> ShowCase Project
              </p>
              <p className="project__content__stack">
                <strong>Tech Stack:</strong> React, Sass, Javascript
              </p>
              <p className="project__content__overview">
               Stylish and responsive hotel website UI
              </p>
              <ul className="project__content__highlight">
                <li>✅ Fully responsive</li>
                <li>✅ Booking call-to-action mockups</li>
              
                <li>✅ Gallery and testimonial sections</li>
              </ul>
              <a
                href="https://dmuse-project.github.io/Trilo_UI/"
                className="project__content__button"
              >
                View Project
              </a>
            </div>
          </div>
      

        </div>
      </section>
    </>
  );
}
