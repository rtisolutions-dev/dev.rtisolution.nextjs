'use client'
import React, { useState, useEffect } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
export const MoveToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px or more
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Button only appears when isVisible is true */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="fixed bottom-5 right-5 bg-amber-600 text-white text-extrabold rounded-full p-3 shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition-all"
        >
         <IoMdArrowRoundUp/>
        </button>
        )}
    </div>
  );
};


