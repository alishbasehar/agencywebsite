import React from "react";
import assets from "../images/assets";

const Footer = ({ theme }) => {
  const currentdate = new Date();
  const mounth = currentdate.getFullYear();
  return (
    <footer className="bg-slate dark:bg-gray-900 mt-20">
      {/* INNER CONTAINER – SAME AS NAVBAR */}
      <div className="container max-w-7xl mx-auto px-6 lg:px-20 pt-12">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-7 max-w-md">
            <img
              src={theme === "dark" ? assets.logo_dark : assets.logo}
              className="w-32 sm:w-44"
              alt="logo"
            />

            <p className="dark:text-gray-400">
              From strategy to execution we craft digital solutions that move
              your business forward
            </p>

            <ul className="flex flex-col gap-3 dark:text-gray-400">
              <li>
                <a href="#hero" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#ourwork" className="hover:text-primary">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contactus" className="hover:text-primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-gray-600 dark:text-gray-400 max-w-md mt-7 md:mt-28 ">
            <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>

            <p className="mb-6">
              The latest news, articles, and resources sent to your inbox daily
            </p>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-sm outline-none rounded bg-transparent border border-gray-300 dark:border-gray-500 dark:text-gray-200"
              />
              <button className="bg-primary text-white rounded-full px-6 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="border-gray-300 dark:border-gray-600 my-8" />

        {/* BOTTOM SECTION */}
        <div className="pb-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {mounth} agency.io. All rights reserved.</p>

          <div className="flex gap-4">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.instagram_icon} alt="instagram" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
