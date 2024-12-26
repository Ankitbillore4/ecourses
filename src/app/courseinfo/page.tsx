'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Footer } from '@/components/layout/footer'

export default function CourseDetails() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['intro'])

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id)
        ? prev.filter(section => section !== id)
        : [...prev, id]
    )
  }

  return (
    <>
    <div className="container mx-auto px-4 py-8 text-primary-100">
      <h1 className="text-2xl font-bold mb-6">Introduction to User Experience Design</h1>
      
      {/* Video Preview */}
      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src="/images/videosample.png"
          alt="Course preview"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {/* Navigation Tabs */}
          <div className="mb-8 border-b">
            <nav className="flex gap-4">
              <button className="pb-2 border-b-2 border-blue-600 text-blue-600">Details</button>
              <button className="pb-2 border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600">Instructor</button>
              <button className="pb-2 border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600">Courses</button>
              <button className="pb-2 border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600">Reviews</button>
            </nav>
          </div>

          {/* Course Overview */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
            <p className="text-gray-600">
              Embark on a transformative journey into the dynamic world of User Experience (UX) Design with our 
              comprehensive course, "Introduction to User Experience Design." This course is meticulously crafted to 
              provide you with a foundational understanding of the principles, methodologies, and tools that drive 
              exceptional user experiences in the digital landscape.
            </p>
          </div>

          {/* Key Learning Objectives */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Key Learning Objectives</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Gain a clear understanding of what User Experience (UX) Design entails and its importance in today's digital world</li>
              <li>• Explore the fundamental principles of user-centered design and how to apply them to create intuitive and user-friendly interfaces</li>
              <li>• Learn about the various elements that contribute to a positive user experience, including information architecture, interaction design, and visual design</li>
            </ul>
          </div>

          {/* Instructor Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Instructor</h2>
            <div className="flex items-start gap-4">
              <Image
                src="/images/authorphoto.png"
                alt="Ronald Richards"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="text-blue-600 font-medium">Ronald Richards</h3>
                <p className="text-sm text-gray-600 mb-2">UX/UI Designer</p>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>40,445 Reviews</span>
                  <span>500 Students</span>
                  <span>15 Courses</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He 
                  has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless 
                  and engaging user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Completion Sidebar */}
        <div className="w-full lg:w-80">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="font-semibold mb-4">Course Completion</h2>
            
            {/* Introduction Section */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection('intro')}
                className="flex items-center justify-between w-full mb-2"
              >
                <span className="font-medium">Introduction to UX Design</span>
                {expandedSections.includes('intro') ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 15.75l6.75-6.75 6.75 6.75"></path></svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M18.75 8.25l-6.75 6.75-6.75-6.75"></path></svg>
                )}
              </button>
              
              {expandedSections.includes('intro') && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="lesson1" className="form-checkbox" />
                      <label htmlFor="lesson1" className="text-sm">
                        1. What is User Experience (UX) Design?
                      </label>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m5.25-5.25H6.75"></path></svg>
                      4min
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="lesson2" className="form-checkbox" />
                      <label htmlFor="lesson2" className="text-sm">
                        2. Historical Overview of UX Design
                      </label>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m5.25-5.25H6.75"></path></svg>
                      4min
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Sections */}
            {['basics', 'elements', 'visual'].map((section, index) => (
              <div key={section} className="mb-4">
                <button
                  onClick={() => toggleSection(section)}
                  className="flex items-center justify-between w-full mb-2"
                >
                  <span className="font-medium">
                    {index === 0 && 'Basics of User-Centered Design'}
                    {index === 1 && 'Elements of User Experience'}
                    {index === 2 && 'Visual Design Principles'}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M18.75 8.25l-6.75 6.75-6.75-6.75"></path></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      <Footer/>
      </>
  )
}