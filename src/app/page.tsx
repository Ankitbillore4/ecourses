import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { Categories } from "@/components/sections/categories"
import { Testimonials } from "@/components/sections/testimonials"
import { Courses } from "@/components/sections/courses"
import { Instructors } from "@/components/sections/instructors"
import Start from "@/components/sections/start"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-20">
        <Hero />
        <Stats />
        <Categories />
        <Courses />
        <Instructors />
        <Testimonials />
        <Start/>
      </main>
      <Footer />
    </div>
  )
}

