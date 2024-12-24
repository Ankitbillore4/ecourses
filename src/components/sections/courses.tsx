import { Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
export function Courses() {
  const courses = [
    {
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 5,
      reviews: "1200 Ratings",
      duration: "22 Total Hours. 155 Lectures. Beginner",
      price: "$149.9",
      image: "/images/course.png",
    },
    {
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 5,
      reviews: "1200 Ratings",
      duration: "22 Total Hours. 155 Lectures. Beginner",
      price: "$149.9",
      image: "/images/course.png",
    },
    {
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 5,
      reviews: "1200 Ratings",
      duration: "22 Total Hours. 155 Lectures. Beginner",
      price: "$149.9",
      image: "/images/course.png",
    },
    {
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 5,
      reviews: "1200 Ratings",
      duration: "22 Total Hours. 155 Lectures. Beginner",
      price: "$149.9",
      image: "/images/course.png",
    },
    // Add more courses
  ]

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Top Courses</h2>
        <Link href="/course" className="text-sm text-blue-600 hover:underline">
          See All
        </Link>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course, index) => (
          <Link 
            key={index} 
            href={`/course/${course.title.toLowerCase().replace(/ /g, "-")}`}
            className="block"
          >
            <div className="rounded-3xl bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="text-md text-gray-600">By {course.instructor}</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                  </div>
                  <span className="text-md text-gray-500">({course.reviews})</span>
                </div>
                <p className="text-md text-gray-600">{course.duration}</p>
                <p className="text-xl font-bold text-gray-900">{course.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

