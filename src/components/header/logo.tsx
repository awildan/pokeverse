import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" target="_top">
      <h2 className="flex items-center text-4xl font-extrabold cursor-pointer select-none">
        Poké
        <span className="dark:bg-foreground dark:text-primary text-white bg-primary px-0.5">
          Verse
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
