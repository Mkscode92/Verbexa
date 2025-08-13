import CompanionCard from '@/components/CompanionCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import TimeFilter from '@/components/TimeFilter';
import { getAllCompanions } from '@/lib/actions/companions.actions';
import { getSubjectColor } from '@/lib/utils';
import React from 'react'

const CompanionsLibrary = async ({searchParams} : SearchParams) => {
  const params = await searchParams;
  const subject = params.subject ? params.subject : ''
  const topic = params.topic ? params.topic : ''
  const durationMin = params.durationMin ? Number(params.durationMin) : 0
  const durationMax = params.durationMax ? Number(params.durationMax) : 0
  
  const companions = await getAllCompanions({subject, topic, durationMin, durationMax})

  console.log(companions)
  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companion Library</h1>
        <div className='flex gap-4'>
          <SearchInput />
          <SubjectFilter />
          <TimeFilter />
        </div>
      </section>
      <section className='companions-grid'>
        {companions.map((companion) => ( 
          <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)}/>
        ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary