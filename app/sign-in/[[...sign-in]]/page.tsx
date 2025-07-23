//each folder in the app folder represents a route. 
// Only files named page.tsx inside a folder are treated a route entry points

import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className='flex items-center justify-center'>
      <SignIn />
    </main>
  )
}