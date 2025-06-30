"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import AuthButtons from "./AuthButtons";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    // { href: "/", label: "Home" },
    // { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="relative z-50">
      <nav className="w-full">
        <div className="flex justify-between h-16 items-center font-bold px-4">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-foreground">
              Jax Labs
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2 transition-colors hover:border-border hover:border-2 hover:rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
              <Suspense fallback={<div className="h-8 w-8 animate-pulse rounded-full bg-muted" />}>
                <AuthButtons />
              </Suspense>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
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
        className={`fixed inset-0 w-full h-full bg-background transform transition-transform duration-300 ease-in-out md:hidden z-[100] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center h-16 px-4 border-b">
            <Link 
              href="/" 
              className="text-xl font-bold text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Jax Labs
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
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
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-lg font-medium text-muted-foreground hover:text-foreground border-b border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-4 space-y-4">
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
                <Suspense fallback={<div className="h-10 w-full animate-pulse rounded bg-muted" />}>
                  <div onClick={() => setIsMobileMenuOpen(false)}>
                    <AuthButtons />
                  </div>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
