"use client";
import Link from "next/link";
import React from "react";
import { navigation } from "./common/nav";
import { Disclosure } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";

export const Navbar = () => {
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed bg-white z-50 ${
        isScrolling ? "shadow-lg shadow-gray-400" : "border-0 shadow-none"
      }`}
    >
      <nav className="container relative flex  flex-wrap items-center justify-between p-6 mx-auto lg:justify-between xl:px-1">
        <div className="flex gap-10 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-baseline text-gray-900">
            <span className="font-serif flex items-baseline space-x-2 dark:text-gray-100">
              <span className="font-serif text-red-500 font-bold text-3xl lg:text-5xl sm:text-md leading-none">
                RTI
              </span>
              <span className="font-serif text-gray-600 text-xl lg:text-3xl sm:text-md leading-none">
                solution
              </span>
            </span>
          </Link>
          {/* Menu */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="relative group nav__item mr-3" key={index}>
                  <Link
                    href={menu?.path}
                    className={`relative px-4 py-2 text-black font-semibold hover:text-red-500 transition-colors after:content-[''] 
                      after:absolute after:w-full after:h-[2px] after:bg-red-500 
                      after:left-0 after:right-0 after:bottom-[-2px] 
                      after:scale-x-0 after:origin-center 
                      hover:after:scale-x-100 after:transition-transform 
                      after:duration-300`}
                  >
                    {menu?.name}
                    {menu?.subNav && (
                      <svg
                        className="w-4 h-4 inline ml-1 transition-transform duration-200 group-hover:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    )}
                  </Link>
                  {menu?.subNav && (
                    <ul className="absolute left-0 hidden bg-white shadow-lg group-hover:block">
                      {menu.subNav.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.path}
                            className="block px-4 py-2 text-black hover:bg-red-400 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Block Appointment Button */}
        <div className="gap-3 nav__item lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden lg:flex mr-3">
            <Link
              href="/"
              className="flex items-center px-1 py-1 xl:px-4 xl:py-2 text-black bg-amber-400 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              <span className="text-sm">Book Appointment</span>
            </Link>
          </div>
          <div className=" lg:hidden mr-3 ">
            <Link
              href="/"
              className="flex items-center px-2 py-2 xl:px-4 xl:py-2 text-black bg-amber-400 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* menu*/}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-grey-200 focus:text-grey-300 focus:bg-red-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-col w-full lg:hidden shadow-lg shadow-gray-400">
                {navigation.map((menu, index) => (
                  <div key={index} className="w-full">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full px-4 py-2 text-left text-gray-500 rounded-md hover:text-red-500 focus:outline-none focus:bg-red-100 dark:text-gray-300 dark:focus:bg-gray-800">
                            <span>{menu?.name}</span>
                            {menu?.subNav && (
                              <IoMdArrowDropdown className="w- h-6 text-gray-500" />
                            )}
                          </Disclosure.Button>
                          {menu?.subNav && (
                            <Disclosure.Panel className="pl-6">
                              {menu.subNav.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.path}
                                  className="block px-4 py-2 text-gray-500 hover:bg-red-100 dark:hover:bg-gray-700 dark:text-gray-300"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          )}
                        </>
                      )}
                    </Disclosure>
                  </div>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  );
};
