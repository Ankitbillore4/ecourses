'use client'
import { Footer } from "@/components/layout/footer";
import { Headeraut } from "@/components/layout/headeraut"
import Link from "next/link";
import Image from "next/image";
import { Share2 } from "lucide-react";

export default function MessageChat() {
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
                        <div className="flex flex-col h-screen max-w-3xl border rounded-xl mx-auto">
                            {/* Header */}
                            <div className="flex items-center gap-3 p-4 border-b">
                                <button className="rounded-full p-2 hover:bg-gray-200">
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                                    <img src="/images/authorphoto.png?height=48&width=48" alt="Ronald Richards" className="h-full w-full rounded-full object-cover" />
                                </div>
                                <h1 className="text-lg font-medium flex-1">Ronald Richards</h1>
                                <button className="rounded-full p-2 hover:bg-gray-200">
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                <div className="text-center">
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                        Today
                                    </span>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {/* User Messages */}
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="flex items-end gap-2">
                                            <span className="text-xs text-gray-500">10:25 am</span>
                                            <div className="bg-[#0F172A] text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                                                Hello
                                            </div>
                                        </div>
                                        <div className="flex items-end gap-2">
                                            <span className="text-xs text-gray-500">10:25 am</span>
                                            <div className="bg-[#0F172A] text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                                                Just wanted to tell you that I started your course and it’s going great!!
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Message */}
                                    <div className="flex gap-2">
                                        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                                            <img src="/images/authorphoto.png?height=32&width=32" alt="Ronald Richards" className="h-full w-full rounded-full object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                                                Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP
                                            </div>
                                            <span className="text-xs text-gray-500 ml-2">12:23 pm</span>
                                        </div>
                                    </div>

                                    {/* User Message */}
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="flex items-end gap-2">
                                            <span className="text-xs text-gray-500">10:25 am</span>
                                            <div className="bg-[#0F172A] text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                                                Yes Sure
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message Input */}
                            <div className="p-4 border-t">
                                <div className="flex gap-2">
                                    <input
                                        placeholder="Type Your Message"
                                        className="flex-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="bg-[#3B82F6] hover:bg-blue-600 text-white rounded-md px-4 py-2">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}