'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp, Clock, Book, Award, Star } from 'lucide-react'
import Link from 'next/link'
import { Headeraut } from '@/components/layout/headeraut'
import { Footer } from '@/components/layout/footer'
export default function CourseDetails() {
    return (
        <div className=''>
            <Headeraut />
            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <img src="/images/checkout.png" alt="checkoutimage" className='h-[20vw] p-4 my-10'/>
         
        </div>
            <Footer/>
        </div>
    )
}