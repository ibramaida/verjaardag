import React from "react";

const Navigation = () => {
  return (
    <ul className="flex gap-4 items-center justify-between xs:justify-normal grow-1 xs:grow-0">
      <li>
        <a
          href="#"
          className="font-bold text-violet-50  md:py-2 hover:text-violet-300"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-bold text-violet-50  md:py-2 hover:text-violet-300"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-bold text-violet-50  md:py-2 hover:text-violet-300"
        >
          Design
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-bold text-violet-50  md:py-2 hover:text-violet-300"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
