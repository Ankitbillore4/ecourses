'use client'

import { useState } from 'react';
import { Footer } from "@/components/layout/footer";
import { Headeraut } from "@/components/layout/headeraut";
import Link from "next/link";
import Image from "next/image";
import { Share2 } from "lucide-react";
import TeacherMessage from '../teacherspage/page';
import MyCourses from '../mycourses/page';
import MyReviews from '../reviewpage/page';
import Messages from '../messagepage/page';
import MessagePage from '../messagepage/page';

// Type for the activeLink state
type ActiveLink = '/profile/courses' | '/profile/teachers' | '/profile/messages' | '/profile/reviews';

const MessageChat: React.FC = () => {
    // State to track the active link, with the type defined above
    const [activeLink, setActiveLink] = useState<ActiveLink>('/profile/messages');

    // Function to handle active link change
    const handleLinkClick = (link: ActiveLink) => {
        setActiveLink(link);
    };

    // Function to render content based on the active link
    const renderContent = () => {
        switch (activeLink) {
            case '/profile/courses':
                return <div><MyCourses/></div>;
            case '/profile/teachers':
                return <div><h2><TeacherMessage/></h2></div>;
            case '/profile/messages':
                return <div><h2><MessagePage/></h2></div>;
            case '/profile/reviews':
                return <div><h2><MyReviews/></h2></div>;
            default:
                return <div><h2>Welcome!</h2></div>;
        }
    };

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
                                {/* My Courses Link */}
                                <Link
                                    href="#"
                                    className={`block p-4 text-gray-600 rounded ${activeLink === '/profile/courses' ? 'bg-primary-200 text-white' : 'bg-white'}`}
                                    onClick={() => handleLinkClick('/profile/courses')}
                                >
                                    My Courses
                                </Link>

                                {/* Teachers Link */}
                                <Link
                                    href="#"
                                    className={`block p-4 text-gray-600 rounded ${activeLink === '/profile/teachers' ? 'bg-primary-200 text-white' : 'bg-white'}`}
                                    onClick={() => handleLinkClick('/profile/teachers')}
                                >
                                    Teachers
                                </Link>

                                {/* Messages Link */}
                                <Link
                                    href="#"
                                    className={`block p-4 text-gray-600 rounded ${activeLink === '/profile/messages' ? 'bg-primary-200 text-white' : 'bg-white'}`}
                                    onClick={() => handleLinkClick('/profile/messages')}
                                >
                                    Message
                                </Link>

                                {/* Reviews Link */}
                                <Link
                                    href="#"
                                    className={`block p-4 text-gray-600 rounded ${activeLink === '/profile/reviews' ? 'bg-primary-200 text-white' : 'bg-white'}`}
                                    onClick={() => handleLinkClick('/profile/reviews')}
                                >
                                    My Reviews
                                </Link>
                            </nav>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 bg-white p-6 rounded-lg">
                            {/* Render content based on the active link */}
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MessageChat;
