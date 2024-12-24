'use client'

import { useState } from 'react'
import { Star, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Headeraut } from '@/components/layout/headeraut'
import { Footer } from '@/components/layout/footer'

interface Course {
  id: string
  title: string
  instructor: string
  rating: number
  totalRatings: number
  hours: number
  lectures: number
  level: string
  price: number
  image: string
}

export default function CourseGrid() {
  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 4.8,
      totalRatings: 17500,
      hours: 22,
      lectures: 155,
      level: "Beginner",
      price: 149.9,
      image: "/images/course.png"
    },
    {
        id: '1',
        title: "Beginner's Guide to Design",
        instructor: "Ronald Richards",
        rating: 4.8,
        totalRatings: 17500,
        hours: 22,
        lectures: 155,
        level: "Beginner",
        price: 149.9,
        image: "/images/course.png"
      },
      {
        id: '1',
        title: "Beginner's Guide to Design",
        instructor: "Ronald Richards",
        rating: 4.8,
        totalRatings: 17500,
        hours: 22,
        lectures: 155,
        level: "Beginner",
        price: 149.9,
        image: "/images/course.png"
      },
      {
        id: '1',
        title: "Beginner's Guide to Design",
        instructor: "Ronald Richards",
        rating: 4.8,
        totalRatings: 17500,
        hours: 22,
        lectures: 155,
        level: "Beginner",
        price: 149.9,
        image: "/images/course.png"
      }
    // Add more courses as needed
  ])

  return (
    <>
    <Headeraut/>
    <div className="container mx-auto px-4 py-8 text-primary-100">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-64 space-y-6">
          <div>
            <h3 className="font-semibold mb-4">Rating</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <div className="flex items-center">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    {Array.from({ length: 5 - rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Number of Chapters</h3>
            <div className="space-y-2">
              {['1-10', '10-15', '15-20', '20-25'].map((range) => (
                <label key={range} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>{range}</span>
                </label>
              ))}
            </div>
            <button className="text-blue-600 mt-2 flex items-center">
              See More <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Price</h3>
            {/* Add price range slider or options here */}
          </div>
        </div>

        {/* Course Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link href="/coursesdetail" className="group">
                <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600">By {course.instructor}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-400 font-bold">{course.rating}</span>
                      <div className="flex items-center ml-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        ({course.totalRatings.toLocaleString()})
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {course.hours} Total Hours • {course.lectures} Lectures • {course.level}
                    </div>
                    <div className="mt-3 font-bold">${course.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

