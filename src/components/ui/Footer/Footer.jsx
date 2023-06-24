import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/logo.svg";

import Contact from "./Contact";

// Icons
import { IoIosCall } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <div>
      <Contact />
      <footer className="text-gray-600 body-font bg-[#F3F6F7] h-full">
        <div className="container px-5 py-24 mx-auto  ">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CONTACT
              </h2>
              <nav className="list-none mb-10">
                <li className="flex items-center gap-1">
                  <IoIosCall />
                  9123456789
                </li>
                <li className="flex items-center gap-1">
                  <IoLogoFacebook />
                  <Link href={"https://www.facebook.com/ccrcinfotechclub"} target="_blank">
                    Facebook
                  </Link>
                </li>
                <li className="flex items-center gap-1">
                  <IoLogoInstagram />
                  <Link href={"https://www.facebook.com/ccrcinfotechclub"} target="_blank">
                    Instagram
                  </Link>
                </li>
                <li className="flex items-center gap-1">
                  <IoMdPin />
                  Koteshwor - 32 Kathmandu
                </li>
                <li className="flex items-center gap-1">
                  <IoMdTime />
                  Sun - Fri | 9am - 5pm
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-3xl title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                QUICK LINKS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>

            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="text-3xl title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" class="leading-7 text-sm text-gray-600">
                    Subscribe to keep being updated about future events
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Image
              className="cursor-pointer"
              src={Logo}
              alt="CCRC IT Club logo"
              height={40}
              width={40}
            />
            <span className="ml-3 text-xl">CCRC It club</span>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2023 CCRC IT CLUB —
              <a
                href="https://ccrc.edu.np/"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                Capital Collage and Research Center
              </a>
              <span className="inline font-medium">
                &nbsp; | Desgined and developed by
                <Link
                  href={"https://www.facebook.com/eclipsuu"}
                  target="_blank"
                  className="text-sky-600"
                >
                  &nbsp;Rajeev Shrestha
                </Link>
              </span>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
