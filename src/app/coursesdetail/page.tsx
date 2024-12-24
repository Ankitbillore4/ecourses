'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp, Clock, Book, Award, Star } from 'lucide-react'
import Link from 'next/link'
import { Headeraut } from '@/components/layout/headeraut'
import { Footer } from '@/components/layout/footer'
export default function CourseDetails() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const syllabus = [
    {
      id: '1',
      title: 'Introduction to UX Design',
      lessons: 5,
      duration: '1 hour'
    },
    {
      id: '2',
      title: 'Basics of User-Centered Design',
      lessons: 5,
      duration: '1 hour'
    },
    {
      id: '3',
      title: 'Elements of User Experience',
      lessons: 5,
      duration: '1 hour'
    },
    {
      id: '4',
      title: 'Visual Design Principles',
      lessons: 5,
      duration: '1 hour'
    }
  ]

  return (
    <>
    <Headeraut/>
    <div className="container mx-auto px-4 py-8 text-primary-100">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {/* Course Header */}
          <div className="mb-8">
         
        <div className="flex gap-2 text-sm">
          <Link href="/categories" className="text-gray-600">Home</Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-blue-600">Categories</span>
        </div>
            <h1 className="text-3xl font-bold mb-4">
              Introduction to User Experience Design
            </h1>
            <p className="text-gray-600 mb-4">
              This course is meticulously crafted to provide you with a foundational understanding of the
              principles, methodologies, and tools that drive exceptional user experiences in the digital
              landscape.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-semibold">4.6</span>
                <span className="text-gray-600 ml-1">(146,951 rating)</span>
              </div>
              <div className="text-gray-600">
                22 Total Hours, 155 Lectures, All levels
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/authorphoto.png"
                alt="Instructor"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>Created by Ronald Richards</span>
            </div>
          </div>

          {/* Course Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Course Description</h2>
            <p className="text-gray-600">
              This comprehensive course will introduce you to User Experience (UX) design, the art of creating
              products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles
              and learn to apply them in real-world scenarios through engaging modules and interactive exercises.
            </p>
          </div>

          {/* Certification */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Certification</h2>
            <p className="text-gray-600">
              You will understand the significance of formal recognition for your hard work and dedication to
              continuous learning. Upon successful completion of the course, you will earn a prestigious certification that
              not only validates your expertise but also opens doors to new opportunities in your chosen field.
            </p>
          </div>

          {/* Syllabus */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Syllabus</h2>
            <div className="space-y-4">
              {syllabus.map((section) => (
                <div key={section.id} className="border rounded-lg">
                  <button
                    className="w-full px-4 py-3 flex items-center justify-between"
                    onClick={() => setExpandedSection(
                      expandedSection === section.id ? null : section.id
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{section.title}</span>
                      <span className="text-sm text-gray-600">
                        {section.lessons} Lessons • {section.duration}
                      </span>
                    </div>
                    {expandedSection === section.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSection === section.id && (
                    <div className="px-4 py-3 border-t">
                      <p className="text-gray-600">
                        Detailed content for {section.title} goes here...
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Info Card */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-4">
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/images/tumbnail.png"
                alt="Course preview"
                width={400}
                height={225}
                className="w-full"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold">$49.5</div>
                  <div className="text-green-600">50% Off</div>
                </div>
                <div className="space-y-4">
                  <Link href="/buynow">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
                    Buy Now
                  </button>
                  </Link>
                  
                  <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 focus:outline-none">
                    Add to Cart
                  </button>
                  
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>22 Total Hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Book className="w-5 h-5" />
                    <span>155 Lectures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
