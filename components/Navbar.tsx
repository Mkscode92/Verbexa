import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import { type Metadata } from 'next'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
// most important style for the navbar spacing: justify content: space between 
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/verbexa.svg" alt="logo" width={46} height={44} />
        </div>
      </Link> 
      <div className ="flex items-center gap-8">
            <NavItems />
            {/* renders the code that only needs to be shown when we're signed out */}
            <SignedOut> 
                <SignInButton> 
                  <button className="btn-signin">Sign In</button>
                </SignInButton>
            </SignedOut>
            {/* renders the code that only needs to be shown when we're signed in */}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            
      </div> 
    </nav> // html semantic nav
  );
};

export default Navbar;
