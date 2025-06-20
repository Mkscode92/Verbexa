import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
// most important style for the navbar spacing: justify content: space between 
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link> 
      <div className ="flex items-center gap-8">
            <NavItems />
            
      </div> 
    </nav> // html semantic nav
  );
};

export default Navbar;
