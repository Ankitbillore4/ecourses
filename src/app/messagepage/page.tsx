'use client'
import { Footer } from "@/components/layout/footer";
import { Headeraut } from "@/components/layout/headeraut"
import Link from "next/link";
import Image from "next/image";
import { Share2, Search } from "lucide-react";
import { useState } from "react";

export default function MessagePage() {
    const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
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

            {/* Main Content */}

            <div className="container mx-auto p-4 space-y-6">
                <h1 className="text-xl font-medium">Messages</h1>

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

        </>
    );
}