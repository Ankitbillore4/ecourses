'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Footer } from '@/components/layout/footer'
import { Headeraut } from '@/components/layout/headeraut'
import Link from 'next/link'
export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card')

  return (
    <>
    <Headeraut/>
    <div className="container mx-auto px-4 py-8 text-primary-100">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="space-y-8">
            {/* Location Fields */}
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="flex gap-2 text-sm">
          <Link href="/course" className="text-gray-600">Categories</Link>
          <span className="text-gray-400">&gt;</span>
          <Link href="/coursesdetail" className="text-gray-600">Details</Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-blue-600">Shopping Cart</span>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Country</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">State/Union Territory</label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Payment Method Selection */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label className="ml-3">Credit/Debit Card</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/images/image 16.png" alt="Visa" width={40} height={25} />
                    <Image src="/images/image 17.png" alt="Mastercard" width={40} height={25} />
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4 p-4 border rounded-lg">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name on Card</label>
                      <input
                        type="text"
                        placeholder="Name on card"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="Card number"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVC/CVV</label>
                        <input
                          type="text"
                          placeholder="CVC"
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label className="ml-3">PayPal</label>
                  </div>
                  <Image src="/images/image 16.png" alt="PayPal" width={80} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="border rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/tumbnail.png"
                  alt="Course thumbnail"
                  width={80}
                  height={80}
                  className="rounded"
                />
                <div>
                  <div className="text-sm text-blue-600">Design</div>
                  <h3 className="font-semibold">Introduction to User Experience Design</h3>
                  <div className="text-sm text-gray-600">155 Lectures • 22 Total Hours</div>
                  <div className="font-semibold mt-1">$45.00</div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Price</span>
                  <span>$300.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Discount</span>
                  <span className="text-red-600">-$10.00</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Tax</span>
                  <span>$20.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>$290.00</span>
                </div>
              </div>
                <Link href="/checkout">
                

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg">
                Proceed to Checkout
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}