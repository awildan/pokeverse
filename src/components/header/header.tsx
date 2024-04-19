import Link from "next/link";
import React from "react";
import Logo from "~/components/header/logo";

const Header = () => {
  return (
    <header className="container flex flex-col h-40 items-center justify-evenly">
      <Logo />
      {/* <Button variant="outline">About</Button> */}
      {/* <p>Made with love by Awil</p> */}
    </header>
  );
};

export default Header;
