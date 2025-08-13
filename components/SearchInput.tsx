'use client'
import Image from 'next/image';
// general tip --> if a function starts with "use" or requires input, you'll most likely need 'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils"

// on the server side you can get params via props but for the client you use .get
const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams(); //gets all the attached params in the link 
    const topic_param = searchParams.get('topic') || ''; // topic param retrieved 

    const [searchQuery, setSearchQuery] = useState('')
    //dependency array implementation 
    useEffect(() => { 
        const delayDebounceFn = setTimeout(() => {
            if(searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: ["topic"],
                    value: [searchQuery],
                });

                router.push(newUrl, { scroll: false });
            } else {
                if(pathname === '/companions') {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["topic"],
                    });

                    router.push(newUrl, { scroll: false });
                }
            }
        }, 500) 
    }, [searchQuery, router, searchParams, pathname])  // basically calls this useEffect whenever any of these change 

    //useState hook now to be able to modify these params later on 
  return (
    <div className = "search-input">
        <Image src = "/icons/search.svg" alt="search" width={16} height={16} />
        <input 
            placeholder="Search companions..." 
            className='outline-none'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
  )
}

export default SearchInput



// Hooks are special functions in React that let you 
// “hook into” React features (like state, lifecycle, or context) inside functional components. 
// They make it possible to use features that were previously only available in class components.