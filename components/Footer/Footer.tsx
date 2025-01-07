import React from "react";
import CopyrightComponent from "./FooterBottom/Copyright";
import FooterLogoComponent from "./FooterBottom/Logo";
import SocialComponent from "./FooterBottom/Social";
import facebookIcon from "../../assets/img/facebook.png";
import linkedinIcon from "../../assets/img/linkedin-logo.png";
import FooterContact from "./FooterTop/Contact";
import FooterMenu from "./FooterTop/Menu";

const menuLinks = [
  {
    name: "Servicii",
    url: "/servicii",
    isExternal: false,
  },
  {
    name: "Portofoliu",
    url: "/portofoliu",
    isExternal: false,
  },
  {
    name: "Contact",
    url: "/contact",
    isExternal: false,
  },
  {
    name: "Confidentialitate",
    url: "/politica-de-confidentialitate",
    isExternal: false,
  },
  {
    name: "Cookie-uri",
    url: "/utilizare-cookie-uri",
    isExternal: false,
  },
  {
    name: "ANPC",
    url: "https://anpc.ro/",
    isExternal: true,
  },
];

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
      <div className="footer-top">
        <div className="container px-4 flex flex-row items-start">
          <div className="w-2/5 text-center">
            <h4 className="text-base uppercase font-bold mb-5">Meniu</h4>
            {menuLinks.map((item, index) => (
              <FooterMenu
                key={index}
                name={item.name}
                url={item.url}
                isExternal={item.isExternal ?? false}
              />
            ))}
          </div>
          <FooterContact
            title="Contact"
            email="contact@duoadv.ro"
            phoneNo="+40771190628"
            phoneDisplay="+40 771 190 628"
            schedule="L-V: 09:00 - 17:00"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container px-4 flex flex-row items-center">
          <CopyrightComponent year="2025" />
          <FooterLogoComponent url="/" alt="Duo Design Advertising" />
          <div className="social-link-container flex flex-row items-center justify-end gap-2.5 w-2/5">
            {socialLinks.map((link, index) => (
              <SocialComponent
                key={index}
                url={link.url}
                imageUrl={link.imageUrl}
                alt={link.alt}
                ariaLabel={`Visit our ${link.alt} page`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
