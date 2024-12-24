import { Telescope, Code, Briefcase, Atom } from 'lucide-react'
import Link from "next/link"

export function Categories() {
  const categories = [
    { name: "Astrology", icon: Telescope, courses: "11 Courses" },
    { name: "Development", icon: Code, courses: "12 Courses" },
    { name: "Marketing", icon: Briefcase, courses: "12 Courses" },
    { name: "Physics", icon: Atom, courses: "14 Courses" },
  ]

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Top Categories</h2>
        <Link href="/categories" className="text-sm text-blue-600 hover:underline">
          See All
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.name.toLowerCase()}`}
            className="block"
          >
            <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                <category.icon className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{category.courses}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

