import LandingImage from "../assets/landing.png";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="relative flex items-center  flex-col lg:flex-row  justify-between bg-[#ECD2FA] bg-opacity-35 px-6 md:px-12 lg:px-32 py-6 space-x-6">
      <div className="flex-2 space-y-4 lg:space-y-6">
        <p className="text-sm  font-medium text-[#FB2E86]">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
          New Furniture Collection <br />
          <span className="text-blue-500">For Your Home</span>
        </h1>
        <p className="text-gray-600 text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
          accumsan et viverra justo commodo.
        </p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Shop Now
        </button>
      </div>
      <div className="mt-6 lg:mt-0">
        <Image src={LandingImage} alt="Landing Image" />
      </div>

      {/* Animated Arrow */}
      <div className="absolute hidden md:flex bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
