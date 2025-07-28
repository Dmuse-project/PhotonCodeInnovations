import Link from "next/link";
export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-content__heading-1 typewriter typewriter-1">
          Launch Faster. Scale Smarter. Win online.
        </h1>
        <h2 className="hero-content__heading-2 typewriter typewriter-2">
          Modern Web Solutions + Growth Campaigns for Visionary Brands.
        </h2>
        <p className="hero-content__paragrah  ">
          At Photon Code Innovations, we craft high-performance web apps and run
          laser-focused digital campaigns to grow your brand and boost your
          revenue.
        </p>
      </div>

      <div className="hero-cta">
        <Link href="/projects" className="hero-cta__link hero-cta__link--1">
          View Our Work
        </Link>
        <Link href="/contacts" className="hero-cta__link hero-cta__link--2">
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
