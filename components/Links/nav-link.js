"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();

  // DEBUGGING
//   console.log("Current Path", path);
//   console.log("href", href);
  return (
    <>
      <Link
        href={href}
        className={`header__nav-link ${path.startsWith(href) ? "active" : ""} `}
      >
        {children}
      </Link>
    </>
  );
}
