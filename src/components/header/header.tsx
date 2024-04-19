import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container flex flex-col h-40 items-center justify-evenly">
      <Link href="/">
        <h2 className="flex items-center text-4xl font-extrabold cursor-pointer select-none">
          Poké
          <span className="dark:bg-foreground dark:text-primary text-white bg-primary px-0.5">
            Verse
          </span>
        </h2>
      </Link>
      {/* <Button variant="outline">About</Button> */}
      {/* <p>Made with love by Awil</p> */}
    </header>
  );
};

export default Header;
