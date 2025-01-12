"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./Nav.module.css";

interface NavProps {}

const NavComponent: React.FC<NavProps> = () => {
  const pathname = usePathname();

  return (
    <nav className={classes.nav}>
      <ul>
        <li className={pathname === "/" ? classes.active : undefined}>
          <Link className={classes.navLink} href="/">
            Acasa
          </Link>
        </li>
        <li className={pathname === "/despre" ? classes.active : undefined}>
          <Link className={classes.navLink} href="/despre">
            Despre
          </Link>
        </li>
        <li className={pathname === "/servicii" ? classes.active : undefined}>
          <Link className={classes.navLink} href="/servicii">
            Servicii
          </Link>
        </li>
        <li className={pathname === "/portofoliu" ? classes.active : undefined}>
          <Link className={classes.navLink} href="/portofoliu">
            Portofoliu
          </Link>
        </li>
        <li className={pathname === "/contact" ? classes.active : undefined}>
          <Link className={classes.navLink} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
