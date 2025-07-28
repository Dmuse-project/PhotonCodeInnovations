export default function ServicePage() {
  return (
    <>
      <div className="services">
        <section className="service__hero">
          <h1>We Build. We Grow. We Convert.</h1>
          <p>
            At Phonto Code Innovations, we craft high-performing full-stack
            websites with Next.js, launch strategic digital campaigns that drive
            growth, and create content that truly captivates. Whether you're
            launching a new brand or scaling an existing business, we’ve got
            you covered.
          </p>
        </section>

        <section className="service">
          <h2>Our Services</h2>
          <div className="service__cards">
            <div className="service__card">
              <h3>Next.js Web Development</h3>
              <p>
                Fast, SEO-friendly, and scalable websites built for modern
                businesses. We build with performance in mind, speed, structure,
                and searchability.
              </p>
            </div>
            <div className="service__card">
              <h3>UI/UX Design</h3>
              <p>
                Beautiful interfaces with purpose. We design experiences that
                guide users, reflect your brand story, and drive meaningful
                action.
              </p>
            </div>
            <div className="service__card">
              <h3>Digital Marketing</h3>
              <p>
                From social media ads to email automations, we build data-driven
                campaigns that turn clicks into loyal customers.
              </p>
            </div>
            <div className="service__card">
              <h3>Content Creation</h3>
              <p>
                Words, visuals, and videos that spark emotion and inspire
                action. Let your brand speak louder and smarter.
              </p>
            </div>
          </div>
        </section>

        <section className=" service__why-us">
          <h2>Why Choose Phonto Code Innovations?</h2>
          <ul>
            <li>✅ Built with performance-first tools like Next.js</li>
            <li>
              ✅ Campaigns tailored to real business goals not vanity metrics
            </li>
            <li>✅ Fast delivery & crystal-clear communication</li>
            <li>
              ✅ We support all stages. From early startups to scaling
              enterprises
            </li>
          </ul>
        </section>

        <section className="service__process">
          <h2>Our 3-Step Process</h2>
          <ol>
            <li>
              <strong>Discover:</strong> We dive deep to understand your goals,
              challenges & vision
            </li>
            <li>
              <strong>Design & Develop:</strong> We design, build, test, and
              optimize
            </li>
            <li>
              <strong>Launch & Grow:</strong> We launch with intention, analyze,
              iterate, and scale you scale.
            </li>
          </ol>
        </section>

        <section className="service__cta">
          <h2>Ready to Elevate Your Digital Presence?</h2>
          <a href="/contact" className="contact__form__button">
            Let’s Build Together →
          </a>
        </section>
      </div>
    </>
  );
}
