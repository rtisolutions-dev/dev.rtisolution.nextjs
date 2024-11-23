/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import SocialIcon from "./iconsStyle";
import { FaXTwitter } from "react-icons/fa6";

export const Header = () => {
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full bg-black ${isScrolling ? "hidden" : "flex"}`}>
      <div className="container relative flex flex-wrap items-center justify-between mx-auto px-4 md:px-8 lg:px-16 xl:px-1">
        <div className="flex gap-3 px-2 py-2 justify-center w-full sm:w-auto">
          {/* Social Icons */}
          <SocialIcon
            name="X-twitter"
            size={15}
            color="#fff"
            bgColor="#262626"
            height={30}
            width={30}
            Icon={<FaXTwitter />}
          />
          <SocialIcon
            name="facebook"
            size={15}
            color="#fff"
            bgColor="#3b5998"
            height={30}
            width={30}
            Icon={<SiFacebook />}
          />
          <SocialIcon
            name="whatsapp"
            size={15}
            color="#fff"
            bgColor="#25d366"
            height={30}
            width={30}
            Icon={<FaWhatsapp />}
          />
          <SocialIcon
            name="youtube"
            size={15}
            color="#fff"
            bgColor="#cd201f"
            height={30}
            width={30}
            Icon={<FaYoutube />}
          />
          <SocialIcon
            name="instagram"
            size={15}
            color="#fff"
            bgColor="#262626"
            height={30}
            width={30}
            Icon={<FaInstagram />}
          />
          <SocialIcon
            name="linkedin"
            size={15}
            color="#fff"
            bgColor="#0077b5"
            height={30}
            width={30}
            Icon={<FaLinkedin />}
          />
        </div>
        {/* Call Us - Hidden Only on Mobile */}
        <div className="hidden sm:flex nav__item ml-auto">
          <p className="text-white text-xl font-bold">
            Call Us : +91-799950-6996
          </p>
        </div>
      </div>
    </div>
  );
};
