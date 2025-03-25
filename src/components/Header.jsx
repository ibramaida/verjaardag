import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-amber-700 text-amber-50">
      <div className="container m-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
