import React from 'react';

interface ContactProps {
    title: string;
    email: string;
    phoneNo: string;
    phoneDisplay: string;
    schedule: string;
};

const FooterContact: React.FC<ContactProps> = ({ title, email, phoneNo, phoneDisplay, schedule }) => {
  return (
    <div className="w-2/5 text-center">
      <h4 className="text-base uppercase font-bold mb-5">{title}</h4>
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
    </div>
  );
};

export default FooterContact;