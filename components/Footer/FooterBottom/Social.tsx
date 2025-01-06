import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface SocialProps {
  alt: string;
  url: string;
  imageUrl: StaticImageData;
}

const SocialComponent: React.FC<SocialProps> = ({ alt, url, imageUrl }) => {
  return (
    <div className="social-link">
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Image src={imageUrl} alt={alt} width={32} height={32} />
      </Link>
    </div>
  );
};

export default SocialComponent;
