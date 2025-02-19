import React from "react";
import LogoComponent from "./Logo/Logo";
import NavComponent from "./Nav/Nav";

interface HeaderProps {}

const HeaderComponent: React.FC<HeaderProps> = () => {
  return (
    <div className="header-parent py-4">
      <div className="container mx-auto px-4 flex flex-row items-center justify-between">
        <LogoComponent url="/" alt="Duo Design Advertising" />
        <NavComponent />
      </div>
    </div>
  );
};

export default HeaderComponent;
