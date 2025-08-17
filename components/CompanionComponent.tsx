'use client'

import { cn, getSubjectColor } from '@/lib/utils'
import { vapi } from '@/lib/vapi.sdk';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

enum CallStatus { 
    INACTIVE ='INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const CompanionComponent = ({companionId, subject, topic, name, userName, userImage, style, voice}: CompanionComponentProps) => {
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  //without enum, you would just have a string by default. if you misspell the string, say "INACIVE", the ide would not sense it
  //as an error and it would be hard to find the issue (no red underline). enum makes it so that these issues do pop up. 
  const [isSpeaking, setIsSpeaking] = useState(false)

  useEffect(() => { 
    const onCallStart = () => setCallStatus(CallStatus.ACTIVE)
    const onCallEnd = () => setCallStatus(CallStatus.FINISHED)
    const onSpeechStart = () => setIsSpeaking(true)
    const onSpeechEnd = () => setIsSpeaking(false)
    const onError = (error: Error) => console.log('Error', error)

    vapi.on('call-start', onCallStart)
    vapi.on('call-end', onCallEnd)
    vapi.on('speech-start', onSpeechStart)
    vapi.on('speech-end', onSpeechEnd)
    vapi.on('error', onError)

    const onMessage = () => {}
    return () => {
        vapi.off('call-start', onCallStart)
        vapi.off('call-end', onCallEnd)
        vapi.off('speech-start', onSpeechStart)
        vapi.off('speech-end', onSpeechEnd)
        vapi.off('error', onError)
    }
  }, [])
  return (
    <section className='flex flex-col h-[70vh]'>
        <section className='flex gap-8 max-sm:flex-col'>
            <div className='companion-section'>
                <div className='companion-avatar' style={{backgroundColor: getSubjectColor(subject)}}>
                    <div 
                      className={
                        cn(
                          'absolute transition-opacity duration-1000',
                          callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-100' : 'opacity-0',
                          callStatus == CallStatus.CONNECTING && 'opacity-100 animate-pulse'
                        )
                    }>
                      <Image src={`/icons/${subject}.svg`} alt={subject} width={150} height={150} className="max-sm:w-fit" />
                    </div>

                    <div className={
                      cn(
                        'absolute transition-opacity duration-1000', 
                        callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0'
                      )
                    }>

                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default CompanionComponent