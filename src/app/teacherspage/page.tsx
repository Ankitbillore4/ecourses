'use client';
import { useState } from 'react';
import { Footer } from '@/components/layout/footer';
import { Headeraut } from '@/components/layout/headeraut';
import Link from 'next/link';
import Image from 'next/image';
import { Share2 } from 'lucide-react';

interface Teacher {
    name: string;
    role: string;
    image: string;
}

const teachers: Teacher[] = Array(8).fill({
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    image: '/images/authorphoto.png?height=200&width=200',
});

export default function MessageChat() {
    const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

    return (
        <>
            <Headeraut />
            <div className="min-h-screen bg-gray-50 text-primary-100">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left Sidebar */}
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

                        {/* Main Content */}
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-medium">
                                    Teachers <span className="text-gray-500 font-normal">(12)</span>
                                </h1>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <svg
                                        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 4h8m-4 16V4m0 16c5.333 0 10-4.667 10-10S13.333 0 8 0m0 16C2.667 16-2 11.333-2 6S2.667 0 8 0"
                                        />
                                    </svg>
                                    <input
                                        placeholder="Search User"
                                        className="pl-9 w-full border border-gray-300 rounded-md py-2"
                                    />
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {teachers.map((teacher, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-lg p-4 text-center"
                                    >
                                        <img
                                            src={teacher.image}
                                            alt={teacher.name}
                                            className="w-24 h-24 rounded-full object-cover mx-auto"
                                        />
                                        <div className="mt-4">
                                            <h3 className="font-medium">{teacher.name}</h3>
                                            <p className="text-sm text-gray-500">{teacher.role}</p>
                                        </div>
                                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md w-full">
                                            Send Message
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
