import React from 'react';

interface MenuProps {
  name: string;
  url: string;
  isExternal: boolean;
};

const FooterMenu: React.FC<MenuProps> = ({ name, url, isExternal }) => {
  return (
    <div>
      <a
        href={url}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        {name}
      </a>
    </div>
  );
};

export default FooterMenu;