"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'ABOUT', path: '/' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FAFAFA] md:pr-[1.7rem] min-h-[3.8rem] flex justify-end items-center">
      {/* Mobile Hamburger */}
      <div className="md:hidden absolute top-0 right-0 p-[1.1rem_1.5rem] cursor-pointer z-50" onClick={toggleMenu}>
        <div className={`w-[2.1rem] h-[.25rem] bg-[#555555] mb-[.4rem] rounded-[3px] transition-transform duration-500 origin-top-left ${isOpen ? 'rotate-45 translate-y-[0.4rem]' : ''}`}></div>
        <div className={`w-[2.1rem] h-[.25rem] bg-[#555555] mb-[.4rem] rounded-[3px] transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-[2.1rem] h-[.25rem] bg-[#555555] rounded-[3px] transition-transform duration-500 origin-bottom-left ${isOpen ? '-rotate-45 -translate-y-[0.4rem]' : ''}`}></div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-end w-full">
        <ul className="flex items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`font-open-sans font-bold text-[0.75rem] tracking-[0.3rem] text-[#666666] hover:text-[#999999] transition-all duration-300 py-[1.2rem] my-[1.1rem] mx-[1.4rem] relative group inline-block ${pathname === link.path ? 'bg-transparent' : ''}`}
              >
                {link.name}
                {/* Custom animated underline effect matching legacy pseudo element */}
                <span className={`absolute left-[-0.1rem] bottom-[0.1rem] w-full h-[2px] bg-[#555555] transition-transform duration-200 origin-left ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-slate-800 shadow-xl flex flex-col pt-24 px-8 md:hidden"
          >
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} onClick={() => setIsOpen(false)} className="font-open-sans text-base tracking-[0.4rem] text-[#FEFEFE] hover:text-gray-300 block my-2">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
