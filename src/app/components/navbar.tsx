"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { label: '/', href: '/' },
    { label: 'Projects', href: 'https://github.com/Monishobaid' },
    { label: 'Download CV', href: '/monishHere.pdf', download: true },
    { label: 'Contact', href: 'mailto:monishobaid@gmail.com' }
  ];

  return (
    <nav className='pb-4 sm:pb-2'>
      <div className='flex select-none gap-4 text-xs justify-end items-center text-gray-500 font-mono'>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`cursor-pointer hover:text-gray-800 transition-all ${
              item.label === '/' ? '' : 'underline underline-offset-[3px] decoration-dotted decoration-1 decoration-gray-400 hover:decoration-gray-800'
            }`}
            target={item.download ? "_blank" : undefined}
            rel={item.download ? "noopener noreferrer" : undefined}
            locale={false}
            download={item.download}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;