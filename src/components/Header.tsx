"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    // { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="relative z-50">
      <nav className="w-full">
        <div className="flex justify-between h-16 items-center font-bold">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-black">
              Jaxcoder LLC
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 transition-colors hover:border-gray-200 hover:border-2 hover:rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Suspense fallback={<div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />}>
                <AuthButtons />
              </Suspense>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white border-l border-gray-200 shadow-lg transform transition-transform duration-200 ease-in-out md:hidden z-[60] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ top: "4rem" }}
      >
        <div className="py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-[55]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
