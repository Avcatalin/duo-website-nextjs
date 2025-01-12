"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./Breadcrumbs.module.css";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  // Get the current path
  const currentPath = pathname || "/"; // e.g., "/about-us"

  // Extract the page name
  const pageName = currentPath
    .split("/") // Split the path by '/'
    .filter(Boolean) // Remove empty strings from the array
    .pop() // Get the last part of the path (slug)
    ?.replace(/-/g, " ") // Replace hyphens with spaces
    ?.toUpperCase(); // Convert to uppercase or format as needed

  return (
    <>
      <ul className={`${classes.breadcrumbs} flex items-center justify-center`}>
        <li className={classes.prevLink}>
          <Link href="/">Acasa</Link>
        </li>
        <li>
          <a className={classes.active}>{pageName}</a>
        </li>
      </ul>
    </>
  );
};

export default Breadcrumbs;
