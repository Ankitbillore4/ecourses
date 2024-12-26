'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PlayCircle, ChevronDown, ChevronUp, Clock } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { Headeraut } from '@/components/layout/headeraut'

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState('details')
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
    <Headeraut/>
    <div className="container mx-auto px-4 py-6 text-primary-200">
      <h1 className="text-2xl font-bold mb-6">Introduction to User Experience Design</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content Column */}
        <div className="flex-1">
          {/* Video Preview */}
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden bg-gray-100 w-full">
            <Image
              src="/images/videosample.png"
              alt="Course preview"
              fill
              className="object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
              <PlayCircle className="w-16 h-16 text-white" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="flex space-x-8 border-b">
              {['Details', 'Instructor', 'Courses', 'Reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`py-2 -mb-px ${
                    activeTab === tab.toLowerCase()
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'details' && (
            <>
              {/* Course Overview */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
                <p className="text-gray-600 leading-relaxed">
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
                    <a href="#" className="text-blue-600 font-medium hover:underline">Ronald Richards</a>
                    <p className="text-sm text-gray-600 mt-1">UX/UI Designer</p>
                    <div className="flex gap-4 text-sm text-gray-600 mt-2">
                      <span>40,445 Reviews</span>
                      <span>500 Students</span>
                      <span>15 Courses</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                      With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He 
                      has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless 
                      and engaging user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Course Completion Sidebar */}
        <div className="lg:w-[350px] text-gray-600">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="font-semibold mb-4">Course Completion</h2>
            
            {/* Introduction Section */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection('intro')}
                className="flex items-center justify-between w-full mb-3"
              >
                <span className="font-medium">Introduction to UX Design</span>
                {expandedSections.includes('intro') ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections.includes('intro') && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white p-3 rounded">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked
                        id="lesson1" 
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="lesson1" className="text-sm">
                        1. What is User Experience (UX) Design?
                      </label>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-3 h-3 mr-1" />
                      4min
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white p-3 rounded">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked
                        id="lesson2" 
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="lesson2" className="text-sm">
                        2. Historical Overview of UX Design
                      </label>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-3 h-3 mr-1" />
                      4min
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#1E2A3B] text-white p-3 rounded">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        id="lesson3" 
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="lesson3" className="text-sm">
                        3. Understanding User-Centered Design
                      </label>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      4min
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        id="lesson4" 
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="lesson4" className="text-sm">
                        4. The Role of UX Design in Digital Products
                      </label>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-3 h-3 mr-1" />
                      4min
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        id="lesson5" 
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="lesson5" className="text-sm">
                        5. Introduction to UX Design Tools and Techniques
                      </label>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-3 h-3 mr-1" />
                      4min
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Sections */}
            {[
              'Basics of User-Centered Design',
              'Elements of User Experience',
              'Visual Design Principles'
            ].map((title) => (
              <div key={title} className="mb-3">
                <button
                  onClick={() => toggleSection(title)}
                  className="flex items-center justify-between w-full"
                >
                  <span className="font-medium">{title}</span>
                  <ChevronDown className="w-4 h-4" />
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

