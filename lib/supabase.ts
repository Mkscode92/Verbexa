import { auth } from "@clerk/nextjs/server";
import {createClient} from "@supabase/supabase-js";

// A client usually refers to code that interacts with a server or API.
// - Connect to third-party services (like Supabase)
// - Make network requests (e.g., fetch data)
// - etc

export const createSupabaseClient = () => { 
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, { 
            async accessToken() { //returns the auth token 
                return ((await auth()).getToken())
            }
        }
           
    )
}

// 🔹 import { auth } from "@clerk/nextjs/server"
// This brings in Clerk's auth helper, specifically for server-side code (e.g. in API routes, middleware, SSR).

// 🔹 auth()
// Calling auth() gives you access to the currently logged-in user's data, like:
// Their userId
// Their JWT token (getToken())
// This token proves to Supabase that "Hey, I'm user_123".

// 🔹 createClient(...)
// This is a function from @supabase/supabase-js. It creates a Supabase client that knows how to:
// Talk to your Supabase database (via a URL)
// Use a specific API key (anon or service key)
// Attach an accessToken() (used for user authentication)

// 🔹 accessToken(...)
// This says:
// Every time you use this Supabase client to make a request, run auth() and grab the 
// token for the current user, and attach it to the request.
// That token is what lets Supabase know who is making the request.
// Think of it as adding your passport to every request you send.

