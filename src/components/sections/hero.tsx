import Image from "next/image"

export function Hero() {
  return (
    <section className="container relative min-h-screen">
      {/* Background dots pattern */}
      <div className="absolute right-0 top-0 -z-10 h-[300px] w-[300px] opacity-80">
        <Image
          src="/images/frame.png"
          alt="Background pattern"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      <div className="grid items-center gap-12 pb-8 pt-6 md:grid-cols-2 md:py-10">
        {/* Left content */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter text-gray-900 md:text-5xl lg:text-6xl">
            Unlock Your Potential with Company&apos;s Name
          </h1>
          <p className="max-w-[600px] text-lg text-gray-600">
            Welcome to Company&apos;s Name, where learning knows no bounds. We believe that education is the key to personal
            and professional growth, and we&apos;re here to guide you on your journey to success.
          </p>
          <button className="rounded-full bg-blue-500 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-600">
            Start your instructor journey
          </button>
        </div>

        {/* Right content - Images */}
        <div className="relative h-[400px] md:h-[600px]">
          {/* Blue circle with image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="relative h-[250px] w-[250px] rounded-full bg-blue-500">
              <Image
                src="/images/image 8.png"
                alt="Student"
                width={260}
                height={260}
                className="absolute left-1/2 top-[15vh] -translate-x-1/2 -translate-y-1/2 rounded-full "
              />
            </div>
          </div>

          {/* Red circle with image */}
          <div className="absolute right-32 top-0">
            <div className="relative h-[250px] w-[250px] rounded-full bg-red-400">
              <Image
                src="/images/image 6.png"
                alt="Student"
                width={220}
                height={220}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Yellow circle with image */}
          <div className="absolute bottom-0 right-48">
            <div className="relative h-[250px] w-[250px] rounded-full bg-yellow-400">
              <Image
                src="/images/image 7.png"
                alt="Student"
                width={260}
                height={260}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover "
              />
            </div>
          </div>

          {/* Community card */}
          <div className="absolute bottom-24 right-4 rounded-xl bg-white p-4 shadow-lg">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src={`/images/peopleFrame.png`}
                    alt={`Student ${i}`}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-sm font-medium text-gray-900">
              Join our community of<br />1200+ Students
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

