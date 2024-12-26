"use client"

import { useState } from "react"
import Link from "next/link"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="grid gap-4 text-primary-100 pt-3">
      <div className="grid gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-primary-200">Sign in to your Account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your information below to create your account
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input
              id="password"
              placeholder="Create a password"
              type="password"
              autoComplete="new-password"
              disabled={isLoading}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </div>
      </form>
      <div className="relative mt-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or sign in with</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <button
          type="button"
          disabled={isLoading}
          className="flex items-center justify-center p-3 w-full border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
        >
            <img className="h-9" src="/images/facebook.png" alt="" />
          <h1 className="pl-2 text-blue-500">Facebook</h1>
        </button>
        <button
          type="button"
          disabled={isLoading}
          className="flex items-center justify-center p-3 w-full border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
        >
         <img className="h-9" src="/images/google.png" alt="" />
         <h1 className="pl-2 text-red-600">Google</h1>
        </button>
        <button
          type="button"
          disabled={isLoading}
          className="flex items-center justify-center p-3 w-full border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
        >
         <img className="h-9" src="/images/microsoft.png" alt="" />
         <h1 className="pl-2">Microsoft</h1>
        </button>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        Dont't have an account?{" "}
        <Link href="/login" className="underline underline-offset-4 hover:text-primary">
          Sign up
        </Link>
      </p>
    </div>
  )
}
