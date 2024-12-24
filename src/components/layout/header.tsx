"use client"

import Link from "next/link"
import { Search, ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b text-primary-100 bg-white shadow-md">
      <div className="container flex h-16 items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <div>
           <img className="h-10" src="/images/logo.png" alt=""/>
          </div>
          Client
        </Link>
        <button className="text-sm font-medium text-gray-700 hover:text-gray-900">Categories</button>
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search courses"
              className="w-full bg-gray-100 pl-10 py-2 rounded-md text-sm border border-primary-100 focus:outline-none"
            />
          </div>
        </div>
        <Link href="/teach" className="text-sm font-medium text-primary-100 hover:text-gray-900">
          Teach on Client
        </Link>
        <button className="relative p-2 hover:bg-gray-200 rounded-full">
          <ShoppingCart className="h-5 w-5 text-gray-800" />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500 text-xs font-bold text-white flex items-center justify-center">
            0
          </span>
        </button>
        <Link href="/login" className="text-sm font-medium  hover:text-gray-900">
          Log In
        </Link>
        <Link href="/signup" className="text-sm px-6 py-3 text-white  rounded-lg bg-primary-100">
          Sign Up
        </Link>
      </div>
    </header>
  )
}
