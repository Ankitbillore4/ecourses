export default function Start() {
    return (
      <div className="flex justify-center pb-10 flex-col items-center min-h-screen">
        <div className="flex flex-col md:flex-row items-center max-w-7xl bg-green-500">
          {/* Left Section - Image */}
         
              <img
                src="/images/image.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-96 h-96"
              />
  
          {/* Right Section - Text */}
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left bg-red-400">
            <h2 className="text-3xl font-semibold text-gray-800">
              Become an Instructor
            </h2>
            <p className="mt-4 text-gray-600 ">
              Instructors from around the world teach millions of students on
              Client. We provide the tools and skills to teach what you love.
            </p>
            <button className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none">
              Start Your Instructor Journey →
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center max-w-4xl">
  
          {/* Right Section - Text */}
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              Become an Instructor
            </h2>
            <p className="mt-4 text-gray-600">
              Instructors from around the world teach millions of students on
              Client. We provide the tools and skills to teach what you love.
            </p>
            <button className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none">
              Start Your Instructor Journey →
            </button>
          </div>
          <img
                src="/images/Group 143.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-96 h-96"
              />
        </div>
      </div>
    );
  }