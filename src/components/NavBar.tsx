"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import { FaBars } from 'react-icons/fa';

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'resume/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3 }}
          className="relative w-full top-0 left-0 z-50 bg-black"
        >
          <div className="mx-auto flex items-center justify-between py-4 px-8">
            <div className="text-white font-bold text-xl">
              <Link href="https://github.com/H4x0rModdz"><AnimatedTitle /></Link>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <FaBars className="text-white" />
            </button>
            <div className="hidden md:flex space-x-6 text-white">
              <Link href="#about" className="hover:text-red-500 transition">
                About Me
              </Link>
              <Link href="#works" className="hover:text-red-500 transition">
                Works
              </Link>
              <Link href="#contact" className="hover:text-red-500 transition">
                Contact
              </Link>
              <button
                className="hover:text-red-500 transition"
                onClick={handleDownloadResume}
               >
                Download CV
              </button>
            </div>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full right-8 md:right-auto w-auto flex flex-col items-end space-y-4 text-white md:hidden"
                >
                  <Link href="#about" className="hover:text-red-500 transition">
                    About Me
                  </Link>
                  <Link href="#works" className="hover:text-red-500 transition">
                    Works
                  </Link>
                  <Link href="#contact" className="hover:text-red-500 transition">
                    Contact
                  </Link>
                  <button
                    className="hover:text-red-500 transition"
                    onClick={handleDownloadResume}
                  >
                    Download CV
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
