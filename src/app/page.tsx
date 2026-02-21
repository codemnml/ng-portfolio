"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex-grow flex items-center justify-center min-h-[calc(100vh-160px)] relative overflow-hidden">
      {/* Overlay Background Animation */}
      <motion.div
        initial={{
          height: '4px',    // Starts as a thin 4px line
          width: '0%',      // Starts at 0 width
          opacity: 0,
          borderRadius: '2px'
        }}
        animate={{
          height: ['4px', '4px', '4px', 'auto'], // Stays 4px tall during expanding width
          width: ['0%', '10%', '100%', '100%'],  // Shoots to 100% width rapidly
          opacity: [0, 1, 1, 1],
          borderRadius: ['2px', '2px', '2px', '0px']
        }}
        transition={{
          duration: 1.2,
          times: [0, 0.2, 0.6, 1],               // Opens height during the final 40% (0.6 to 1.0)
          ease: [0.16, 1, 0.3, 1]                // Snappy smooth Apple-like ease
        }}
        className="bg-[#FEFEFE] shadow-sm flex flex-col justify-center mx-0 text-center md:text-left origin-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
          className="w-full h-full py-8 md:py-12 px-8 md:px-[5rem]"
        >
          <h1 className="font-roboto text-4xl md:text-5xl text-[#555555] leading-tight md:leading-snug mb-4">
            Hello, I'm <span className="text-gray-800 font-medium">Michael</span>.
          </h1>
          <h1 className="font-roboto text-3xl md:text-[2.5rem] text-[#555555] leading-tight md:leading-[3.5rem] mb-2">
            I build <strong>modern digital products.</strong>
          </h1>
          <h1 className="font-roboto text-3xl md:text-[2.5rem] text-[#555555] leading-tight md:leading-[3.5rem] mb-4">
            I'm a <em className="italic">full-stack developer</em> based in the San Francisco, Bay Area, specializing in custom web applications and data driven solutions.
          </h1>
          <div className="md:text-right mt-12 flex justify-end items-center">
            <Link href="/projects" className="font-roboto flex items-center text-xl text-[#777777] hover:text-[#000000] cursor-pointer pt-5 transition-colors duration-300">
              Please check out my work.
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="opacity-70 ml-1 inline-block"
              >
                |
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
