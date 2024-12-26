import Link from "next/link"
import { Facebook, Github, Mail, MapPin, Phone, Twitter, ComputerIcon as Windows } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-slate-800 text-slate-50 flex items-center justify-center"> 
      <div className="container flex justify-center gap-[6vw] py-28 md:grid-cols-2 lg:grid-cols-4 ">
        <div className=" w-auto">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="text-orange-500">
            <img
                src="/images/skillsmedialogo.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-52 h-12"
              />
           
            </div>
          </Link>
          <p className="mt-4 text-[text-[#F5EFE7]] text-lg">
            Empowering learners through accessible and engaging online <br /> education.
          </p>
          <p className="mt-4 text-[text-[#F5EFE7]] text-lg">
            Byway is a leading online learning platform dedicated to <br /> providing high-quality, flexible, and affordable
            educational <br /> experiences.
          </p>
        </div>
        <div className=" w-auto text-lg">
          <h3 className="mb-4 text-xl font-semibold ">Get Help</h3>
          <ul className="space-y-2 text-[#F5EFE7]">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/articles">Latest Articles</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className=" w-auto text-lg">
          <h3 className="mb-4 text-xl font-semibold">Programs</h3>
          <ul className="space-y-2 text-[text-[#F5EFE7]]">
            <li>
              <Link href="/programs/art-design">Art & Design</Link>
            </li>
            <li>
              <Link href="/programs/business">Business</Link>
            </li>
            <li>
              <Link href="/programs/it-software">IT & Software</Link>
            </li>
            <li>
              <Link href="/programs/languages">Languages</Link>
            </li>
            <li>
              <Link href="/programs/programming">Programming</Link>
            </li>
          </ul>
        </div>
        <div className=" w-auto text-lg">
          <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
          <ul className="space-y-4 text-[text-[#F5EFE7]]">
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Address: 123 Main Street, Anytown, CA 12345
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Tel: +(123) 456-7890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Mail: client@skillsmedia.in
            </li>
          </ul>
          <div className="mt-6 flex gap-8 ">
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
            <img
                src="/images/facebook.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-6 h-6"
              />
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
            <img
                src="/images/github.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-6 h-6"
              />
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
            <img
                src="/images/google.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-6 h-6"
              />
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
            <img
                src="/images/twitter.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-6 h-6"
              />
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
            <img
                src="/images/microsoft.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-6 h-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

