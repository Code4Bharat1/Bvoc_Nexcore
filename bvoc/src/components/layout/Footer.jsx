'use client';
import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from 'lucide-react'; // Optional: Use Heroicons or other if preferred

const Footer = () => {
  return (
    <footer className="bg-[#2C2E33] text-white mt-auto">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Left - Description */}
          <div>
            <p className="text-sm leading-relaxed text-gray-300">
              <strong>B.Voc in AI & ML</strong> is a next-gen undergraduate program designed to equip students with real-world AI skills. Co-developed with industry leaders, it blends theory with hands-on training to launch tech-driven careers.
            </p>
          </div>

          {/* Center - Explore More */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Explore More</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/infrastructure" className="hover:underline">Infrastructure</Link>
              </li>
              <li>
                <Link href="/learn-grow" className="hover:underline">Learn and Grow</Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:underline">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">Privacy and Policy</Link>
              </li>
            </ul>
          </div>

          {/* Right - Contact Us */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Contact Us</h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 AI Street, Tech City, Country</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <span>+1 234 567 8901</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <span>contact@yourbrand.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="sm:flex sm:items-center sm:justify-between text-gray-400 text-sm">
          <span>
            © 2023{" "}
            <Link href="#" className="hover:underline text-white">
              YourBrand™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 space-x-4">
            {/* Placeholder icons */}
            {[
              { href: "#", label: "Facebook", icon: "M6.135 3H8V0H6.135..." },
              { href: "#", label: "Discord", icon: "M16.942 1.556a16.3..." },
              { href: "#", label: "Twitter", icon: "M20 1.892a8.178..." },
              { href: "#", label: "GitHub", icon: "M10 .333A9.911..." },
            ].map(({ href, label, icon }, i) => (
              <Link
                key={i}
                href={href}
                className="hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d={icon} clipRule="evenodd" />
                </svg>
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
