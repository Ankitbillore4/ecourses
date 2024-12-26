'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function InstructorProfile() {
  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-8 text-primary-100">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <div className="text-sm text-gray-600 mb-2">Instructor</div>
              <h1 className="text-3xl font-bold mb-1">Ronald Richards</h1>
              <p className="text-gray-600 mb-6">Web developer, UX/UI Designer, and Teacher</p>
              
              <div className="flex gap-12">
                <div>
                  <div className="text-sm text-gray-600">Total Students</div>
                  <div className="text-2xl font-bold">1000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Reviews</div>
                  <div className="text-2xl font-bold">154</div>
                </div>
              </div>
            </div>

            <div className="w-32 sm:w-40 lg:hidden">
              <Image
                src="/images/instructor.png"
                alt="Ronald Richards"
                width={160}
                height={160}
                className="rounded-full w-full h-auto"
              />
            </div>
          </div>

          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-3">About Ronald Richard</h2>
            <p className="text-gray-600">
              Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric 
              digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating 
              intuitive interfaces that delight users and drive business results.
            </p>
          </div>

          {/* Areas of Expertise */}
          <div>
            <h2 className="text-xl font-bold mb-3">Areas of Expertise</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• User Experience (UX) Design</li>
              <li>• User Interface (UI) Design</li>
              <li>• Information Architecture</li>
              <li>• Interaction Design</li>
              <li>• Visual Design</li>
              <li>• Usability Testing</li>
              <li>• Wireframing and Prototyping</li>
              <li>• Design Thinking</li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xl font-bold mb-3">Professional Experience</h2>
            <p className="text-gray-600">
              Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned 
              companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects 
              spanning web applications, mobile apps, and e-commerce platforms.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 min-w-[200px]">
          <div className="hidden lg:block mb-8">
            <Image
              src="/images/instructor.png"
              alt="Ronald Richards"
              width={200}
              height={200}
              className="rounded-full w-full h-auto"
            />
          </div>
          
          <button 
            className="w-full justify-center py-6 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg"
          >
            <Link href="#">Website</Link>
          </button>
          <button 
            className="w-full justify-center py-6 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg"
          >
            <Link href="#">Twitter</Link>
          </button>
          <button 
            className="w-full justify-center py-6 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg"
          >
            <Link href="#">Youtube</Link>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}