
import Image from "next/image"

export function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:grid-cols-2 md:py-10 pl-8 pr-6">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl text-primary-200">
          Unlock Your Potential with Company&apos;s Name
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground text-primary-100">
          Welcome to Company&apos;s Name, where learning knows no bounds. We believe that education is the key to personal
          and professional growth, and we&apos;re here to guide you on your journey to success.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
           Start your instructor journey
        </button>

      </div>
      <div className="relative h-[400px] md:h-[500px]">
        <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-500">
          <Image
            src="/images/image 7.png"
            alt="Student"
            width={250}
            height={250}
            className="absolute left-1/2 top-[8vw] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
          />
        </div>
        <div className="absolute right-32 top-0 h-48 w-48 rounded-full bg-red-500">
          <Image
            src="/images/image 8.png"
            alt="student"
            width={180}
            height={180}
            className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-48 h-56 w-56 rounded-full bg-yellow-500">
          <Image
            src="/images/image 6.png"
            alt="Student"
            width={200}
            height={200}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

