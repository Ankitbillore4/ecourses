'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { Headeraut } from '@/components/layout/headeraut'
import { Footer } from '@/components/layout/footer'

interface CartItem {
  id: string
  title: string
  instructor: string
  rating: number
  totalRatings: number
  hours: number
  lectures: number
  price: number
  image: string
}

export default function CartPage() {
  const cartItems: CartItem[] = [
    {
      id: '1',
      title: 'Introduction to User Experience Design',
      instructor: 'John Doe',
      rating: 4.5,
      totalRatings: 250,
      hours: 22,
      lectures: 155,
      price: 45.00,
      image: '/images/tumbnail.png'
    },
    {
      id: '2',
      title: 'Introduction to User Experience Design',
      instructor: 'John Doe',
      rating: 4.5,
      totalRatings: 250,
      hours: 22,
      lectures: 155,
      price: 45.00,
      image: '/images/tumbnail.png'
    },
    {
      id: '3',
      title: 'Introduction to User Experience Design',
      instructor: 'John Doe',
      rating: 4.5,
      totalRatings: 250,
      hours: 22,
      lectures: 155,
      price: 45.00,
      image:'/images/tumbnail.png'
    }
  ]

  return (
    <>
    <Headeraut/>
    <main className="container mx-auto px-4 py-8 text-primary-100">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="flex gap-2 text-sm">
          <Link href="/categories" className="text-gray-600">Categories</Link>
          <span className="text-gray-400">&gt;</span>
          <Link href="/details" className="text-gray-600">Details</Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-blue-600">Shopping Cart</span>
        </div>
      </div>

      <div className="text-sm text-gray-600 mb-4">
        1 Course in cart
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={100}
                  className="rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">By {item.instructor}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      ({item.totalRatings} rating)
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.hours} Total Hours, {item.lectures} Lectures, All levels
                  </div>
                  <div className="mt-2 font-bold">${item.price.toFixed(2)}</div>
                  <div className="mt-3 space-x-4">
                    <button className="text-blue-600 text-sm hover:underline">
                      Save for later
                    </button>
                    <button className="text-red-600 text-sm hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Price</span>
                <span>$300.00</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-red-600">-$10.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$20.00</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>$290.00</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  )
}
