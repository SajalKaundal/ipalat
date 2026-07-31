"use client";
import Image from "next/image";
import Link from "next/link";
import Typography from "../typography/typography";
import { useState, useEffect } from "react";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Unsere Produkte" },
  { href: "/", label: "Ratgeber und Hilfe" },
  { href: "/", label: "Service" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="h-[60px] md:h-[100px] w-full bg-primary flex-shrink-0" />
      <nav 
        className={clsx(
          "bg-primary fixed top-0 left-0 w-full z-50 transition-transform duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
      <div className="custom-container py-1.25 md:py-3.75 px-5 md:px-10 flex justify-between items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          height={70}
          width={65}
          className="h-12.5 md:h-17.5 w-auto"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-20.75">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index} className="group relative">
              <Typography
                variant="h5"
                as="span"
                weight="extrabold"
                color="white"
              >
                {link.label}
              </Typography>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <Image
            src="/nav-bar/mobile-menu.png"
            alt="Menu"
            width={35}
            height={25}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-primary md:hidden shadow-lg z-50">
          <div className="flex items-center justify-end px-5 py-4">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-white text-4xl leading-none hover:opacity-80 transition-opacity"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col py-6 px-5">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-4 border-b border-white/10 group relative w-fit"
              >
                <Typography
                  variant="h5"
                  as="span"
                  weight="extrabold"
                  color="white"
                >
                  {link.label}
                </Typography>
                <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </div>
        </div>
      )}
      </nav>
    </>
  );
}
