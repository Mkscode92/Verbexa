
// hosts the companion builder form for the companion page 
import CompanionForm from '@/components/CompanionForm'
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'


const NewCompanion = async () => {

  const {userId} = await auth(); //awaits the userId, will return it if you're logged in and have an account 
  if(!userId) redirect('/sign-in'); //no userId? redirect to the sign in page 
  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      <article className='w-full gap-4 flex flex-col'>
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>

    </main>

  )
}

export default NewCompanion