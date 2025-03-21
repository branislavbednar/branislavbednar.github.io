"use client";

import Link from "next/link";
import { useEffect } from "react";
import { setupSmoothScrolling } from "@/app/utils/scrollUtils";

export default function Navbar() {
  useEffect(() => {
    // Apply smooth scrolling only to anchor links with # prefix
    setupSmoothScrolling();
  }, []);

  return (
    <div className="w3-top">
      <div className="w3-bar">
        <Link
          href="/"
          className="w3-bar-item w3-button w3-right w3-hover-none"
          id="homeButton"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="w3-bar-item w3-button w3-right w3-hover-none"
        >
          Blog
        </Link>
        <Link
          href="/#about-me"
          className="w3-bar-item w3-button w3-right w3-hover-none"
        >
          About me
        </Link>
        <Link
          href="/#experience"
          className="w3-bar-item w3-button w3-right w3-hover-none"
        >
          Experience
        </Link>
      </div>
    </div>
  );
}
