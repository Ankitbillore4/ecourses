'use client';
import { useState } from 'react';
import { Footer } from '@/components/layout/footer';
import { Headeraut } from '@/components/layout/headeraut';
import Link from 'next/link';
import Image from 'next/image';
import { Share2, Mail, Search } from 'lucide-react';

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

export default function TeacherMessage() {
    const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

    return (
        <>
            <div className="flex-1 space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium">
                        Teachers <span className="text-gray-500 font-normal">(12)</span>
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
                            <button className="mt-4 px-4 py-2 flex flex-row justify-center gap-2 bg-blue-500 text-white rounded-md w-full">
                                <Mail />
                                Send Message
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
