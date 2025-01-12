import React from "react";
import Link from "next/link";
import classes from "../Footer.module.css";

interface AboutFooterProps {
  title: string;
  content: string;
  ctaUrl: string;
  ctaLabel: string;
}

const FooterAbout: React.FC<AboutFooterProps> = ({
  title,
  content,
  ctaUrl,
  ctaLabel,
}) => {
  return (
    <>
      <h4 className={classes.footerHeading}>{title}</h4>
      <p className={classes.footerDescription}>{content}</p>
      <Link className={classes.footerCta} href={ctaUrl}>
        {ctaLabel}
      </Link>
    </>
  );
};

export default FooterAbout;
