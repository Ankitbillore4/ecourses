import { Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Instructors() {
  const instructors = [
    {
      name: "Ronald Richards",
      role: "UI/UX Designer",
      rating: 4.9,
      students: "2400 Students",
      image: "/images/Rectangle 1136.png",
    },
    {
      name: "Ronald Richards",
      role: "UI/UX Designer",
      rating: 4.9,
      students: "2400 Students",
      image: "/images/Rectangle 1136.png",
    },
    {
      name: "Ronald Richards",
      role: "UI/UX Designer",
      rating: 4.9,
      students: "2400 Students",
      image: "/images/Rectangle 1136.png",
    },
    {
      name: "Ronald Richards",
      role: "UI/UX Designer",
      rating: 4.9,
      students: "2400 Students",
      image: "/images/Rectangle 1136.png",
    },
    
    // Add more instructors
  ]

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Top Instructors</h2>
        <Link href="/instructors" className="text-sm text-blue-600 hover:underline">
          See All
        </Link>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {instructors.map((instructor, index) => (
          <Link 
            key={index} 
            href={`/instructor/${instructor.name.toLowerCase().replace(/ /g, "-")}`}
            className="block"
          >
            <div className="rounded-3xl bg-white p-4 shadow-xl transition-shadow hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 space-y-2  text-center">
                <h3 className="text-xl font-semibold text-gray-900 ">{instructor.name}</h3>
                <p className="text-lg text-gray-500">{instructor.role}</p>
                <div className="flex items-center justify-between px-6 gap-4 border-t-2 pt-2">
                  <div className="flex items-center gap-2 ">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-700">{instructor.rating}</span>
                  </div>
                  <span className="text-md text-gray-700">{instructor.students}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

