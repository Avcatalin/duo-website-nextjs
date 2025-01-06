import React from "react";
import CopyrightComponent from "./FooterBottom/Copyright/Copyright";
import FooterLogoComponent from "./FooterBottom/Logo/Logo";
import SocialComponent from "./FooterBottom/Social";
import facebookIcon from "../../assets/img/facebook.png";
import linkedinIcon from "../../assets/img/linkedin-logo.png";

const socialLinks = [
  {
    url: "https://www.facebook.com/duoadvertisingro",
    imageUrl: facebookIcon,
    alt: "Facebook",
  },
  {
    url: "https://www.linkedin.com/company/duo-design-advertising",
    imageUrl: linkedinIcon,
    alt: "Linkedin",
  },
];

const Footer = () => {
  return (
    <div className="footer py-4">
      <div className="container px-4 flex flex-row justify-between items-center">
        <CopyrightComponent year="2025" />
        <FooterLogoComponent url="/" alt="Duo Design Advertising" />
        <div className="social-link-container flex flex-row items-center justify-end gap-2.5 w-2/5">
          {socialLinks.map((link, index) => (
            <SocialComponent
              key={index}
              url={link.url}
              imageUrl={link.imageUrl}
              alt={link.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
