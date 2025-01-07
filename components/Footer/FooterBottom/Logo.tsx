import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerImage from "../../../assets/img/logo-dark.png"

interface FooterProps {
  alt: string;
  url: string;
}

const FooterLogoComponent: React.FC<FooterProps> = ({ alt, url }) => {
  return (
    <div className="footer-logo flex justify-center w-2/5">
      <Link href={url}>
        <Image src={footerImage} alt={alt} width={90} height={48} />
      </Link>
    </div>
  );
};

export default FooterLogoComponent;
