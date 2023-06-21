"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const links = [
  { name: "Get in touch", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Learn about us", href: "#" },
  { name: "Sponsor us", href: "#" },
];
const stats = [
  { name: "Members", value: "42" },
  { name: "Workshops", value: "6" },
  { name: "Events", value: "3" },
  { name: "Alumni ", value: "1,200" },
];
// background-color: #000000;
// opacity: 0.5;
export default function Example() {
  return (
    <div
      className="relative isolate overflow-hidden bg-black bg-opacity-50 py-24 sm:py-32 h-2/5 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url("https://images.unsplash.com/photo-1687116947527-f7e420413970")',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">CCRC IT Club</h1>
          <div className="mt-6 text-xl font-semibold text-gray-300">
            <p className="leading-relaxed">CCRC IT Club is a student-led club in CCRC.</p>
            <p>dedicated to IT, Computer science and technology</p>
            <br />
            <p>Being established in 2068BS,</p>
            <p>
              we aim to foster a culture of innovation and learning in the field of technology among
              students.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
