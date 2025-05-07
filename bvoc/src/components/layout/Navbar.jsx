'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { name: 'Cortex', href: '/' },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'Learn & Grow', href: '/learn-grow' },
  { name: 'Sentience', href: '/sentience' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#000] fixed w-full z-20 top-0">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-center">
        <ul className="flex space-x-10 text-white font-medium">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <li key={name} className="relative">
                <Link href={href} className={`transition-colors ${isActive ? 'font-bold' : 'hover:text-gray-300'}`}>
                  {name}
                </Link>
                {isActive && (
                  <div className="absolute left-1/2 -bottom-1 transform -translate-x-1/2">
                    <span className="w-1 h-1 bg-purple-500 rounded-full block" />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
