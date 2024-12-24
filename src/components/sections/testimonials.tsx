"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Client's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
      name: "Jane Doe",
      role: "Designer",
      avatar: "/images/Ellipse 61.png",
    },
    {
      quote:
        "The learning experience here is exceptional. The interactive content made it easier always looking to stay ahead in the rapidly for me to grasp complex topics quickly and effectively.",
      name: "John Smith",
      role: "Developer",
      avatar: "/images/Ellipse 61.png",
    },
    {
      quote:
        "This platform has been a game-changer for always looking to stay ahead in the rapidly my career growth. The courses are highly detailed, and the support from the community is unmatched.",
      name: "Emily Davis",
      role: "Product Manager",
      avatar: "/images/Ellipse 61.png",
    },
    // Add more testimonials as needed
  ]

  return (
    <section className="container py-12 ">
      <h2 className="text-2xl font-bold text-primary-200 mb-8">What Our Customers Say <br /> About Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card bg-white p-4 flex flex-col gap-4 rounded-xl shadow-lg">
            <div className="text-8xl text-blue-400 mb-1 "> 
              <img
                src="/images/vector.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-10 h-10"
              /></div>
            <p className="text-gray-600 mb-6 text-xl">{testimonial.quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-lg text-primary-200">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
