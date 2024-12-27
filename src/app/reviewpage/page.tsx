'use client'

import React from 'react';

export default function MyReviews() {
  const reviews = [
    {
      courseName: "Beginner's Guide to Design",
      rating: 5,
      review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    },
    {
      courseName: "Intermediate Graphic Design",
      rating: 4,
      review: "Great course, but I feel like some of the content could be expanded upon. The examples were helpful, but I wish there were more hands-on exercises.",
    },
    {
      courseName: "Advanced Design Principles",
      rating: 3,
      review: "This course was a bit too advanced for me. I found it challenging to keep up, especially with the speed of the lessons. More explanation would have been helpful.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto ml-20 p-4 space-y-6">
      <h2 className="text-xl font-semibold">
        Reviews <span className="text-gray-500 font-normal">(12)</span>
      </h2>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border rounded-lg p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <p className="font-medium">Course Name: {review.courseName}</p>
                <div className="flex items-center space-x-1">
                  <p className="text-sm text-gray-500">Rating:</p>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.193-5.918 5.761 1.396 8.144-7.346-3.862-7.346 3.862 1.396-8.144-5.918-5.761 8.2-1.193z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative inline-block">
                <button className="p-2 rounded-full hover:bg-gray-200 focus:outline-none">⋮</button>
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg hidden group-hover:block">
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">Edit Review</button>
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">Delete Review</button>
                  <button className="block px-4 py-2 text-left hover:bg-gray-100">Report Review</button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Review:</p>
              <p className="text-sm mt-1 leading-relaxed">{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-1 pt-4">
        <button
          className="h-8 w-8 flex items-center justify-center border rounded disabled:opacity-50"
          disabled
        >
          <ChevronLeft />
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`h-8 w-8 flex items-center justify-center border rounded ${page === 1 ? 'bg-gray-200' : ''}`}
          >
            {page}
          </button>
        ))}
        <button className="h-8 w-8 flex items-center justify-center border rounded">
          <ChevronRight />
        </button>
      </div>
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
