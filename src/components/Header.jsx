import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-violet-700 py-4">
      <div className="container m-auto flex items-center justify-between">
        <Logo />
        <Navigation />
        <Search />
      </div>
    </header>
  );
};

export default Header;
