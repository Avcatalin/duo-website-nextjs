import React from "react";
import Link from "next/link";
import logoImage from "../../../assets/img/logo.png";
import Image from "next/image";

interface LogoProps {
  alt: string;
  url: string;
}

const LogoComponent: React.FC<LogoProps> = ({ alt, url }) => {
  return (
    <div className="logo">
      <Link href={url}>
        <Image src={logoImage} alt={alt} width={110} height={59} />
      </Link>
    </div>
  );
};

export default LogoComponent;
