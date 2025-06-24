import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu
import logo from "../../assets/image/logo.svg";
import { Link } from "react-router-dom";

const ChanceKartHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className=" bg-white">
      {/* Header */}
      {/* Header */}
      <header className="container py-4 md:py-8 px-4 flex items-center justify-between">
        {/* Logo - Always visible */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="GermanyWale Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        {/* <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 mx-auto">
          <Link
            to="#"
            className="text-black hover:text-orange-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/next"
            className="text-black hover:text-orange-500 transition-colors"
          >
            How it works
          </Link>
          <a
            href="/next"
            className="text-black hover:text-orange-500 transition-colors"
          >
            Pricing
          </a>
          <Link
            to="/next"
            className="text-black hover:text-orange-500 transition-colors"
          >
            Reviews
          </Link>
          <Link
            to="/sc"
            className="text-black hover:text-orange-500 transition-colors"
          >
            FAQ
          </Link>
        </nav> */}

        {/* Desktop Auth Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="text-black hover:text-orange-500 transition-colors"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="bg-gradient-to-r from-[#FF9422] to-[#D63715] hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors text-sm lg:px-6 lg:text-base"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-orange-500 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu - Slides in from top */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-black hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <Link
              to="/next"
              className="text-black hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              to="/next"
              className="text-black hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/next"
              className="text-black hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              to="/sc"
              className="text-black hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <a
                href="/login"
                className="text-black hover:text-orange-500 transition-colors text-center py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </a>
              <a
                href="/signup"
                className="bg-gradient-to-r from-[#FF9422] to-[#D63715] hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
      <section className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl  md:text-6xl font-bold mb-6 flex flex-col gap-y-1.5">
          <span className="text-orange-500">Germany Needs</span>
          {/* <br /> */}
          <span> Skilled Talent.</span>
          {/* <br /> */}
          <span> Are You Ready?</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          We simplify the Chancenkarte and job connections—so you can take the
          next big step in your career.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/*  */}
          <a
            href="/eligibility"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md  transition-colors bg-gradient-to-r from-[#FF9422] to-[#D63715]"
          >
            Can you work in Germany?
          </a>
          <a
            href="/jobs"
            className="border-2 border-orange-500 text-orange-500 hover:bg-gradient-to-r from-[#FF9422] to-[#D63715] hover:text-white hover:bg-orange-50 px-6 py-2 rounded-md  transition-colors"
          >
            Apply 5 jobs now in Germany!
          </a>
        </div>
      </section>
      {/* Features Section */}
      <section className="container mx-auto px-4 py-1 grid grid-cols-1 md:grid-cols-5 gap-2 items-end">
        {/* Calendar Widget - First Column (full height) */}
        <div className="bg-orange-100 rounded-3xl  p-6 md:row-span-2">
          {/* Calendar content remains the same */}
          <div className="mb-4">
            <p className="text-gray-700">Select slot</p>
            <h3 className="text-2xl font-bold">June 12, 2025</h3>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {/* Calendar days */}

            <div className="bg-orange-200 p-2 rounded-lg text-center">
              <p className="text-xs">Mon</p>
              <p className="font-bold">11</p>
            </div>
            <div className="bg-orange-500 p-2 rounded-lg text-center text-white">
              <p className="text-xs">Tue</p>
              <p className="font-bold">12</p>
            </div>
            <div className="bg-orange-200 p-2 rounded-lg text-center">
              <p className="text-xs">Fri</p>
              <p className="font-bold">13</p>
            </div>
          </div>
          <div className="space-y-3">
            {/* Calendar events */}

            <div className="flex items-center gap-3 bg-orange-300 p-3 rounded-lg">
              <div className="bg-white p-1 rounded">
                <div className="h-4 w-4 bg-black rounded-sm"></div>
              </div>
              <span>13:00</span>
              <span className="font-medium">Schedule posts</span>
            </div>

            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="border border-gray-300 p-1 rounded">
                <div className="h-4 w-4 rounded-sm"></div>
              </div>
              <span>14:00</span>
              <span className="font-medium">Have a meeting</span>
            </div>

            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="border border-gray-300 p-1 rounded">
                <div className="h-4 w-4 text-center leading-4 text-gray-500">
                  +
                </div>
              </div>
              <span>15:00</span>
              <span className="font-medium">Add new event</span>
            </div>
          </div>
        </div>

        {/* Image Div - Second Column (aligned to bottom) */}
        <div className="bg-gray-200 rounded-3xl p-0 overflow-hidden h-[200px]  md:row-span-2 ">
          <img
            src="https://img.freepik.com/premium-photo/typing-keyboard-man-formal-clothes-is-working-modern-office-using-computer_146671-90213.jpg"
            alt="Business"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Div - Third Column (aligned to bottom) */}
        <div className="bg-orange-400 rounded-3xl p-6 text-white h-[150px] flex items-center md:row-span-2 ">
          <h3 className="text-2xl font-bold text-black">
            Always know what waits your biz today
          </h3>
        </div>

        {/* Taller Div - Fourth Column (aligned to bottom) */}
        <div className="bg-orange-400 rounded-3xl p-6 md:row-span-2 h-[350px] ">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-orange-500 overflow-hidden">
              <img
                src="https://thumbs.dreamstime.com/b/portrait-serious-fashionable-handsome-man-formal-clothes-175510673.jpg"
                alt="Business"
                className="w-10 h-10 object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-black">John</p>
              <p className="text-sm text-white">10 mins ago</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-black rounded-lg p-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-300">Feb</span>
                <span className="font-bold text-white">25</span>
              </div>
              <p className="font-bold text-white">Hiring interview</p>
              <p className="text-sm text-gray-300">10am → 11am</p>
            </div>

            <div className="bg-black rounded-lg p-4">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-300">Feb</span>
                <span className="font-bold text-white">26</span>
              </div>
              <p className="font-bold text-white">Board meeting</p>
              <p className="text-sm text-gray-300">1pm → 3pm</p>
            </div>
          </div>
        </div>

        {/* Video Section with Computer Background */}
        <div className="relative bg-green-100 rounded-3xl p-6 h-[450px] flex flex-col justify-between md:row-span-2 overflow-hidden">
          {/* Computer Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://i.pinimg.com/originals/c8/67/3a/c8673ad4c46ade00cf3bd0049db62b16.jpg"
              alt="Computer screen"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>

          {/* Text at Top */}
          <div className="relative z-10 text-white pt-6">
            <h3 className="text-2xl font-bold">
              Know if someone is available in a glance
            </h3>
          </div>

          {/* Button at Bottom */}
          <div className="relative z-10 pb-6 flex justify-center">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-500"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Watch how it works</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChanceKartHero;
