'use client'
import { Footer } from "@/components/layout/footer";
import { Headeraut } from "@/components/layout/headeraut"
import Link from "next/link";
import Image from "next/image";
import { Share2,Search } from "lucide-react";
import { useState } from "react";
interface Course {
    title: string;
    author: string;
    ratings: number;
    image: string;
  }

export default function MyCourses() {
   const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

    const courses: Course[] = Array(9).fill({
        title: "Beginner's Guide to Design",
        author: 'Ronald Richards',
        ratings: 1200,
        image: '/images/course.png?height=200&width=400',
      });
    return (
        <>
           

                        {/* Main Content */}
                        <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">
          Courses <span className="text-gray-500 font-normal">(12)</span>
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
        <input
                            placeholder="Search User"
                            className="pl-4 w-full border border-gray-300 rounded-md py-2"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            {/* The icon from lucide-react */}
                            <Search className="w-5 h-5 text-gray-500" />
                        </div>
        </div>
        <div className="flex gap-2">
        <div className="relative">
                                        <button
                                            onClick={() => setDropdownVisible(!isDropdownVisible)}
                                            className="w-[130px] justify-between border border-gray-300 rounded-md py-2 px-4 flex items-center"
                                        >
                                            Relevance
                                            <svg
                                                className="h-4 w-4 ml-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>
                                        {isDropdownVisible && (
                                            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md">
                                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                                    Most Recent
                                                </button>
                                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                                    Most Popular
                                                </button>
                                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                                    Alphabetical
                                                </button>
                                            </div>
                                        )}
                                    </div>
          </div>
          <button className="flex items-center gap-2 border border-gray-300 rounded-md py-2 px-4">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6h4m-2 12h2m-3-6h4m2-6h2"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="border overflow-hidden rounded-lg">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="font-medium">{course.title}</h3>
              <p className="text-sm text-gray-500">By {course.author}</p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.521L24 9.751l-6 5.848 1.417 8.266L12 18.896l-7.417 4.969L6 15.599 0 9.751l8.332-1.643L12 .587z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  ({course.ratings} Ratings)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-1 pt-4">
        <button
          className="h-8 w-8 border border-gray-300 rounded-md flex items-center justify-center"
          disabled
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`h-8 w-8 border border-gray-300 rounded-md flex items-center justify-center ${
              page === 1 ? 'bg-gray-200' : ''
            }`}
          >
            {page}
          </button>
        ))}
        <button className="h-8 w-8 border border-gray-300 rounded-md flex items-center justify-center">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
        </>
    );
}

function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    );
  }
  
  function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    );
  }