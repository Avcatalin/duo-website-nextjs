import React from "react";
import classes from "../Footer.module.css";

interface ContactProps {
  title: string;
  email: string;
  phoneNo: string;
  phoneDisplay: string;
  schedule: string;
}

const FooterContact: React.FC<ContactProps> = ({
  title,
  email,
  phoneNo,
  phoneDisplay,
  schedule,
}) => {
  return (
    <>
      <h4 className={classes.footerHeading}>{title}</h4>
      <ul>
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          <a href={`tel:${phoneNo}`}>{phoneDisplay}</a>
        </li>
        <li>
          <p>{schedule}</p>
        </li>
      </ul>
    </>
  );
};

export default FooterContact;
