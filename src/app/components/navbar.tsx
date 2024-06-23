"use client";
import React from 'react';

interface NavItemProps {
  label: string;
  href: string;
  isHome?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, isHome, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`cursor-pointer hover:text-gray-800 transition-all ${
      isHome ? '' : 'underline underline-offset-[3px] decoration-dotted decoration-1 decoration-gray-400 hover:decoration-gray-800'
    }`}
  >
    {label}
  </a>
);

const Navbar: React.FC = () => {
  const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pdfUrl = '/assets/cv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'monishobaid.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems: NavItemProps[] = [
    { label: '/', href: '/', isHome: true },
    { label: 'Projects', href: '/projects' },
    { label: 'Download CV', href: '#', onClick: handleDownloadCV },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <nav className='pb-4 sm:pb-2'>
      <div className='flex select-none gap-4 text-xs justify-end items-center text-gray-500 font-mono'>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            {...item}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
