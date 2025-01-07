import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface SocialProps {
  alt: string;
  url: string;
  imageUrl: StaticImageData;
  ariaLabel: string;
}

const SocialComponent: React.FC<SocialProps> = ({ alt, url, imageUrl, ariaLabel }) => {
  return (
    <div className="social-link">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        <Image src={imageUrl} alt={alt} width={32} height={32} />
      </Link>
    </div>
  );
};

export default SocialComponent;
