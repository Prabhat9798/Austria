import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className='bg-[#f5fafe]'>
      <div className="w-[80%] mx-auto py-16 pb-10">
        {/* Upper Footer */}
        <div className="pb-8 border-b border-[#c2cad3] flex flex-col md:flex-row justify-between gap-8">
          {/* Left Section - Austria Logo */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <img 
                className="h-8" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1200px-Flag_of_Austria.svg.png" 
                alt="Austria Logo"
                style={{ width: '32px', height: 'auto' }}
              />
              <span className="text-xl font-semibold text-[#002147]">Austria</span>
            </div>
            <div className="text-[#5c7189] w-[260px]">
              Shape your future in Austria
            </div>
          </div>

          {/* Right Section */}
          <div className="text-[#5c7189] flex flex-col gap-3 items-start md:items-end">
            <a 
              target="_blank" 
              href="/privacy-policy" 
              className="hover:underline cursor-pointer"
            >
              Privacy Policy
            </a>
          
            <a 
              target="_blank" 
              href="/terms-and-conditions" 
              className="hover:underline cursor-pointer"
            >
              Terms & Conditions
            </a>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.instagram.com/germanywale_official/"
                className="text-xl text-[#5c7189] hover:text-[#002147]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/germanywale.official"
                className="text-xl text-[#5c7189] hover:text-[#002147]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/35885346/"
                className="text-xl text-[#5c7189] hover:text-[#002147]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@germanywale_official"
                className="text-xl text-[#5c7189] hover:text-[#002147]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiYoutubeLine />
              </a>
            </div>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="mt-8 text-[#5c7189] text-base">
          Copyright Ⓒ 2025, GermanyWale.<br /> All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;