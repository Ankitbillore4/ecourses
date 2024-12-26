'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Share2 } from 'lucide-react'

export default function ProfileEditPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
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
          <div className="flex-1 bg-white rounded-lg p-6">
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md p-2"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md p-2"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Headline */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Headline
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md p-2"
                  placeholder="Enter headline"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full border-gray-300 rounded-md p-2 min-h-[100px]"
                  placeholder="Enter description"
                ></textarea>
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <select
                  className="w-full border-gray-300 rounded-md p-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select language
                  </option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>

              {/* Image Upload */}
              <div>
                <h3 className="text-lg font-medium mb-4">Image Preview</h3>
                <div className="border-2 border-dashed rounded-lg p-4">
                  {selectedImage ? (
                    <div className="relative h-48">
                      <Image
                        src={selectedImage}
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-48 flex items-center justify-center bg-gray-50">
                      <div className="text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="Add/Change Image"
                    className="flex-1 border-gray-300 rounded-md p-2 mr-4"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-200 rounded-md"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      Upload Image
                    </button>
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                      Save Image
                    </button>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-lg font-medium mb-4">Links</h3>
                <div className="space-y-4">
                  {['Website', 'WhatsApp', 'LinkedIn', 'YouTube', 'Facebook'].map(
                    (label) => (
                      <div key={label}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {label}
                        </label>
                        <input
                          type="text"
                          className="w-full border-gray-300 rounded-md p-2"
                          placeholder={`Enter ${label.toLowerCase()} URL`}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
