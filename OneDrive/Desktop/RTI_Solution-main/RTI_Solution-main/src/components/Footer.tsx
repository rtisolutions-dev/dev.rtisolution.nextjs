import React from "react";
import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import SocialIcon from "./iconsStyle";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
  return (
    <footer className="bg-[#00332c] text-white px-6 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-2">About</h3>
          <ul className="space-y-2">
            <li>Careers</li>
            <li>Our Blog</li>
            <li>About Us</li>
            <li>The Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Products</h3>
          <ul className="space-y-2">
            <li>Online RTI Filing</li>
            <li>First Appeal Filing</li>
            <li>Anonymous RTI Filing</li>
            <li>10 min Micro Consultation</li>
            <li>20 min Micro Consultation</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Personal</h3>
          <ul className="space-y-2">
            <li>Micro Consultation</li>
            <li>Follow-up Add-ons</li>
            <li>Online RTI Solution</li>
            <li>First Appeal Solution</li>
            <li>Anonymous RTI Solution</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Business</h3>
          <ul className="space-y-2">
            <li>Micro Consultation</li>
            <li>Follow-up Add-ons</li>
            <li>Online RTI Solution</li>
            <li>First Appeal Solution</li>
            <li>Anonymous RTI Solution</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <button className="text-white font-semibold flex items-center mx-auto space-x-2">
          <span>Load More</span>
          <span>→</span>
        </button>
      </div>

      {/* Divider */}
      <hr className="my-10 border-t border-gray-600" />

      <div className="text-center mt-6 mb-6">
      
          <strong>Get in Touch with us</strong>
    
      </div>
      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white text-black rounded-lg p-6 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">📞</span>
            <h4 className="font-bold text-lg">Give us a call</h4>
          </div>
          <p className="mt-2 font-semibold">+91 79995 06996</p>
        </div>
        <div className="bg-white text-black rounded-lg p-6 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">📧</span>
            <h4 className="font-bold text-lg">Send us an email</h4>
          </div>
          <p className="mt-2 font-semibold">help@rtiwala.com</p>
        </div>
        <div className="bg-white text-black rounded-lg p-6 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">🌐</span>
            <h4 className="font-bold text-lg">Connect with us</h4>
          </div>
          <div className="flex space-x-4 mt-4">
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
          </div>
        </div>
      </div>
    </footer>
  );
};


