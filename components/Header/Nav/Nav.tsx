"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Nav.css";

interface NavProps {}

const NavComponent: React.FC<NavProps> = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li className={pathname === "/" ? "nav-link active" : "nav-link"}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "nav-link active" : "nav-link"}>
          <Link href="/about">About</Link>
        </li>
        <li
          className={pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
