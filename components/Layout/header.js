import NavLink from "../Links/nav-link";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <a href="/"> photon code-ino</a>
        </div>

        {/* <NavLink href="/overview">overview</NavLink>
        <NavLink href="/tech-stack">tech-stack</NavLink>
        <NavLink href="/blog">blog</NavLink>
        <NavLink href="/project">project</NavLink> */}

        <nav className="header__nav">
          <ul className="header__nav-links">
            <li>
              <NavLink href="/overview">overview</NavLink>
            </li>
            <li>
              <NavLink href="/services">services</NavLink>
            </li>
            <li>
              <NavLink href="/blog">blog</NavLink>
            </li>
            <li>
              <NavLink href="/projects">portfolio</NavLink>
            </li>
          </ul>

          <div className="header__nav-cta">
            <Link href="https://wa.link/88d7ro"> Hire us</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
