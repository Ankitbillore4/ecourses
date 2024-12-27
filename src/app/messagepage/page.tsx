'use client'
import { Footer } from "@/components/layout/footer";
import { Headeraut } from "@/components/layout/headeraut"
import Link from "next/link";
import Image from "next/image";
import { Share2 } from "lucide-react";

export default function MessageChat() {
    const messages = [
        {
            id: 1,
            avatar: "/images/authorphoto.png?height=40&width=40",
            name: "Ronald Richards",
            message: "Thank you for asking your doubt, I'll send you a pdf file which cover the problems you are facing. If you have any...",
            date: "18th March, 2024",
            initials: "RR"
        },
        {
            id: 2,
            avatar: "/images/Ellipse 14q.png?height=40&width=40",
            name: "Devon Lane",
            message: "I'll Get back to you as soon as possible.",
            date: "18th March, 2024",
            initials: "DL"
        }
    ];
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
                                        fill
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

                        <div className="container mx-auto p-4 space-y-6">
                            <h1 className="text-xl font-medium">Messages</h1>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <input
                                        placeholder="Search User"
                                        className="pl-9 w-full border border-gray-300 rounded-md py-2"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <div className="relative">
                                        <button className="w-[130px] justify-between border border-gray-300 rounded-md py-2 px-4 flex items-center">
                                            Relevance
                                            <svg className="h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md">
                                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Most Recent</button>
                                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Oldest First</button>
                                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Unread</button>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 border border-gray-300 rounded-md py-2 px-4">
                                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6h4m-2 12h2m-3-6h4m2-6h2" />
                                        </svg>
                                        Filter
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {messages.map((message) => (
                                    <div key={message.id} className="p-4 border rounded-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                <img src={message.avatar} alt={message.name} className="h-full w-full rounded-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-medium">{message.name}</h3>
                                                    <span className="text-sm text-gray-500">{message.date}</span>
                                                </div>
                                                <p className="text-gray-600 text-sm mt-1 truncate">
                                                    {message.message}
                                                </p>
                                            </div>
                                        </div>
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