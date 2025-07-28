import Image from "next/image";

// import HTML5 from "../../img/"

export default function OverviewPage() {
  return (
    <>
      <section className="overview">
        <div className="overview__container">
          <h1> Photon Code Innovations — Your Partner for Digital Growth</h1>
          <h2>Who We Are</h2>
          <p className="overview__intro">
            At <strong>Photon Code Innovations</strong>, we do more than build
            mordern web apps, we craft complete digital ecosystem that help
            brands thrive. From robust Next.js platform to targeted marketing
            campaigns and captivating content, our mission is simple:
            <strong>
              {" "}
              help you grow online, impress your audience & achieve measurable
              results.
            </strong>
          </p>

          <div className="overiew__section">
            <div className="overview__section__block">
              <h2>Our Mission</h2>
              <p>
                To empower brands with intelligent digital systems that connect,
                convert, and scale across web and marketing platforms.
              </p>
              <div className="overview__section__block">
                <h2>Our Approach</h2>
                <p>
                  We blend tech with storytelling — coding functional beauty,
                  creating scroll-stopping content, and deploying data-driven
                  marketing strategies that move the needle.
                </p>
              </div>

              <div className="overview__section__block">
                <h2>Meet the Founder</h2>
                <p>
                  Hi, I’m <strong>Nzube Uche-Daniel </strong>, the Founder &
                  Lead Developer of Phonto Code Innovations. I’m an Electrical
                  Electronics Engineer with the passion for technology,
                  stroytelling and solving real-world problems. I wear many hats
                  — developer, marketer, strategist — all in the service of
                  helping brands look, feel, and perform their best online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-stack " className="tech-stack">
        <div className="tech-stack__typography">
          <h1>What makes us different. </h1>
          <div className="tech-stack__typography__cards">
            <div className="tech-stack__typography__card">
              <h3>Perfomance-First Development</h3>
              <p>
                Next.js and full-stack builds designed for speed and high search
                rankings.
              </p>
            </div>
            <div className="tech-stack__typography__card">
              <h3>ROI-Driven Marketing</h3>
              <p>
                Campaigns focused on generating real revenue, not just vanity
                metrics..
              </p>
            </div>
            <div className="tech-stack__typography__card">
              <h3>Content That Converts</h3>
              <p>
                Stories, Visuals & Strategises that makes your audience core.
              </p>
            </div>
            <div className="tech-stack__typography__card">
              <h3>Tailored Solution</h3>
              <p>
                Every brand is unique, we build solutions designed around you.
              </p>
            </div>
          </div>
        </div>
        <div className="tech-stack__container">
          <h2>Tech Stack</h2>
          <p className="intro">
            Here are the core technologies and tools we use to build robust,
            scalable, and modern solutions.
          </p>
          <div className="stack-grid">
            <div className="stack-item">
              <Image
                src="img/vscode-icons--file-type-html.svg"
                alt="HTML5"
                width={40}
                height={40}
                style={{ display: "inline-block" }}
                className="stack-item__img"
              />
              <span className="stack-item__span">HTML5</span>
            </div>
            <div className="stack-item">
              <Image
                src="img/vscode-icons--file-type-css2.svg"
                alt="CSS3"
                width={40}
                height={40}
                style={{ display: "inline-block" }}
                className="stack-item__img"
              />
              <span className="stack-item__span">CSS3 / Sass</span>
            </div>
            <div className="stack-item">
              <Image
                src="img/material-icon-theme--javascript.svg"
                alt="JavaScript"
                width={40}
                height={40}
                style={{ display: "inline-block" }}
                className="stack-item__img"
              />
              <span className="stack-item__span">JavaScript (ES6+)</span>
            </div>
            <div className="stack-item">
              <Image
                src="img/logos--nextjs.svg"
                alt="React"
                width={40}
                height={40}
                style={{ display: "inline-block" }}
                className="stack-item__img"
              />
              <span className="stack-item__span">React / Next.js</span>
            </div>
            <div className="stack-item">
              <Image
                src="img/fa-brands--node.svg"
                alt="Node.js"
                width={40}
                height={40}
                style={{ display: "inline-block" }}
                className="stack-item__img"
              />
              <span className="stack-item__span">Node.js / Express</span>
            </div>
            <div className="stack-item">
              <Image
                src="img/devicon--mongodb-wordmark.svg"
                alt="MongoDB"
                width={40}
                height={40}
                style={{ display: "inline-block" }}
                className="stack-item__img"
              />
              <span className="stack-item__span">MongoDB</span>
            </div>
            <div className="stack-item">
              <Image
                src="img/cib--git.svg"
                alt="Git"
                width={40}
                height={40}
                style={{ display: "inline-block" }}
                className="stack-item__img"
              />
              <span className="stack-item__span">Git / GitHub</span>
            </div>
            <div className="stack-item">
              <Image
                src="img/logos--docker.svg"
                alt="Docker"
                width={40}
                height={40}
                style={{ display: "inline-block" }}
                className="stack-item__img"
              />
              <span className="stack-item__span">Docker</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
