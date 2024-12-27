'use client';

import { Footer } from "@/components/layout/footer";
import { Headeraut } from "@/components/layout/headeraut";
import Link from "next/link";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { useState } from "react";

export default function MessageChat() {
  const reviews = [
    {
      courseName: "Beginner's Guide to Design",
      rating: 5,
      review:
        "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    },
    {
      courseName: "Intermediate UX Strategies",
      rating: 4,
      review:
        "Great course with practical insights into UX strategies. The hands-on exercises made it easier to understand complex concepts. Highly recommended for those wanting to advance in UX design.",
    },
    {
      courseName: "Advanced Motion Graphics",
      rating: 5,
      review:
        "This course exceeded my expectations! The instructor was very knowledgeable, and the assignments pushed me to explore creative boundaries. A must-take for anyone interested in motion graphics.",
    },
    {
        courseName: "Intermediate UX Strategies",
        rating: 4,
        review:
          "Great course with practical insights into UX strategies. The hands-on exercises made it easier to understand complex concepts. Highly recommended for those wanting to advance in UX design.",
      },
      {
        courseName: "Advanced Motion Graphics",
        rating: 5,
        review:
          "This course exceeded my expectations! The instructor was very knowledgeable, and the assignments pushed me to explore creative boundaries. A must-take for anyone interested in motion graphics.",
      }
  ];

  return (
    <>
      <Headeraut />
      <div className="min-h-screen bg-gray-50 text-primary-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="max-w-3xl mx-auto p-4 space-y-6">
              <h2 className="text-xl font-semibold">
                Reviews <span className="text-gray-500 font-normal">({reviews.length})</span>
              </h2>

              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>

              <Pagination currentPage={1} totalPages={3} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Sidebar() {
  return (
    <div className="w-full md:w-64 space-y-6">
      <div className="bg-white rounded-lg p-6 text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src="/images/Ellipse 53.png"
            alt="John Doe"
            width={128}
            height={128}
            className="rounded-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">John Doe</h2>
        <button className="text-blue-600 text-sm flex items-center justify-center gap-2 w-full">
          <Share2 className="w-4 h-4" />
          Share Profile
        </button>
      </div>

      <nav className="bg-white rounded-lg overflow-hidden">
        <div className="bg-[#1E2A3B] text-white p-4">
          <span>Profile</span>
        </div>
        <div className="p-2">
          <Link
            href="/profile/courses"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
          >
            My Courses
          </Link>
          <Link
            href="/profile/teachers"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
          >
            Teachers
          </Link>
          <Link
            href="/profile/messages"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
          >
            Message
          </Link>
          <Link
            href="/profile/reviews"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
          >
            My Reviews
          </Link>
        </div>
      </nav>
    </div>
  );
}

function ReviewCard({ review }: { review: { courseName: string; rating: number; review: string } }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-1.5">
          <p className="font-medium">Course Name: {review.courseName}</p>
          <div className="flex items-center space-x-1">
            <p className="text-sm text-gray-500">Rating:</p>
            <RatingStars rating={review.rating} />
          </div>
        </div>
        <div className="relative">
          <button
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ⋮
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
              <button className="block px-4 py-2 text-left hover:bg-gray-100">Edit Review</button>
              <button className="block px-4 py-2 text-left hover:bg-gray-100">Delete Review</button>
              <button className="block px-4 py-2 text-left hover:bg-gray-100">Report Review</button>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">Review:</p>
        <p className="text-sm mt-1 leading-relaxed">{review.review}</p>
      </div>
    </div>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.193-5.918 5.761 1.396 8.144-7.346-3.862-7.346 3.862 1.396-8.144-5.918-5.761 8.2-1.193z" />
        </svg>
      ))}
    </div>
  );
}

function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  return (
    <div className="flex justify-center items-center gap-1 pt-4">
      <button
        className={`h-8 w-8 flex items-center justify-center border rounded ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`h-8 w-8 flex items-center justify-center border rounded ${
            currentPage === page ? 'bg-gray-200' : ''
          }`}
        >
          {page}
        </button>
      ))}
      <button
        className={`h-8 w-8 flex items-center justify-center border rounded ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
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

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
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
