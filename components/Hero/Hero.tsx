import React from "react";

import classes from "./Hero.module.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className={classes.heroImage}>
      <h1>{title}</h1>
      <Breadcrumbs />
    </div>
  );
};

export default Hero;
