import React from "react";
import Hero from "@/components/Hero/Hero";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <Hero title="Despre" />
    </div>
  );
};

export default About;
