import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";

// Navigation items
const navigation = [
  { name: "Home", href: "/", exact: true },
  { name: "About", href: "/about", exact: true },
  { name: "Products", href: "/products", exact: true },
  { name: "Contact", href: "/contact", exact: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const location = useLocation();

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full bg-slate-900 backdrop-blur-lg border-b border-emerald-800 shadow-lg z-50" // Ensure navbar is on top
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="block h-6 w-6 group-data-[open]:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden h-6 w-6 group-data-[open]:block"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center hidden sm:block">
              <img alt="Your Company" src="/ghub.png" className="h-12 w-12" />
            </div>

            <div className="hidden sm:ml-6 sm:block md:mt-2">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={
                      location.pathname === item.href ? "page" : undefined
                    }
                    className={classNames(
                      location.pathname === item.href
                        ? "bg-emerald-800 text-white"
                        : "text-gray-100 hover:bg-emerald-600 hover:text-white",
                      "rounded-md flex items-center px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* button login sign in */}
          <div className="mt-2 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/register"
              className="bg-emerald-700 hover:bg-emerald-500 text-white mb-2 py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
            >
              <UserPlus className="mr-2" size={18} />
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-gray-600 hover:bg-gray-500 text-white mb-2 ml-2 py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
            >
              <LogIn className="mr-2" size={18} />
              Login
            </Link>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden z-50">
        {" "}
        {/* z-50 on the mobile menu panel */}
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              aria-current={
                location.pathname === item.href ? "page" : undefined
              }
              className={classNames(
                location.pathname === item.href
                  ? "bg-emerald-800 text-white"
                  : "text-gray-100 hover:bg-emerald-600 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
