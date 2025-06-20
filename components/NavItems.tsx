'use client'; //rendered on the client side, using client functionalities
import { cn } from '@/lib/utils';
//like tapping into the path that we're currently on 

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Companions', href: '/companions'}, //routes 
    {label: 'My Journey', href: '/my-journey'},
    // {label: 'Subscribe', href: '/subscriptions'},
    // {label: 'Sign In', href: '/sign-in'},
]
const NavItems = () => {

    const pathname = usePathname();
  return (
    <nav className='flex items-center gap-4'>
        {navItems.map(({ label, href }) => (  //destructure each navItem
            <Link 
                href={href} 
                key={label} 
                className={cn(pathname === href && 'text-primary font-semibold')}
            > 
                {label}
            </Link>
        ))}
    </nav>
    //pathname can be used like up above to track which page we're on --
    // ^ the current page that we're on will have specific styles: semibold 
  )
}

export default NavItems