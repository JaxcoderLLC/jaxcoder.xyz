"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Get the width of a single item (including margin/padding)
    const firstItem = scrollRef.current.children[0] as HTMLElement;
    if (firstItem) {
      const computedStyle = window.getComputedStyle(firstItem);
      const totalWidth = firstItem.offsetWidth +
        parseInt(computedStyle.marginLeft || '0') +
        parseInt(computedStyle.marginRight || '0') +
        parseInt(computedStyle.paddingLeft || '0') +
        parseInt(computedStyle.paddingRight || '0');

      setItemWidth(totalWidth);
    }

    // Initially set scroll position in the middle of the duplicated items
    const totalItems = scrollRef.current.children.length;
    const middleIndex = Math.floor(totalItems / 3);
    scrollRef.current.scrollLeft = middleIndex * itemWidth;

    setScrollWidth(scrollRef.current.scrollWidth);
  }, [itemWidth]);

  useEffect(() => {
    if (!scrollRef.current || !itemWidth) return;

    const handleScroll = () => {
      if (!scrollRef.current) return;

      scrollRef.current.scrollLeft += 1;

      // When we've scrolled far enough right, jump back to the middle section
      if (scrollRef.current.scrollLeft >= (scrollWidth * 2 / 3)) {
        // Jump without animation to create the illusion of infinite scrolling
        scrollRef.current.style.scrollBehavior = 'auto';
        scrollRef.current.scrollLeft = scrollWidth / 3;
        setTimeout(() => {
          if (scrollRef.current) {
            scrollRef.current.style.scrollBehavior = 'smooth';
          }
        }, 50);
      }

      // If somehow we scroll too far left, jump to the middle section
      if (scrollRef.current.scrollLeft <= 10) {
        scrollRef.current.style.scrollBehavior = 'auto';
        scrollRef.current.scrollLeft = scrollWidth / 3;
        setTimeout(() => {
          if (scrollRef.current) {
            scrollRef.current.style.scrollBehavior = 'smooth';
          }
        }, 50);
      }
    };

    const interval = setInterval(handleScroll, 20);
    return () => clearInterval(interval);
  }, [scrollWidth, itemWidth]);

  // Create the projects array
  const projects = [
    {
      url: "https://ethdenver.com",
      image: "/images/eden-sm-logo.png",
      alt: "ETHDenver",
      backgroundColor: "bg-purple-100",
      description: "ETHDenver - The world's largest Web3 BUIDLathon"
    },
    // TODO: Add project images for current and past projects @codenamejason
    {
      url: "https://loadoutent.gg/",
      image: "/images/le_logo.png",
      alt: "Loadout Entertainment",
      backgroundColor: "bg-white",
      description: "Event Operations and Execution"
    },
    {
      url: "https://santehomeinfusions.com/",
      image: "/images/sante-1.png",
      alt: "Santé Home Infusions",
      backgroundColor: "bg-green-100",
      description: "Medical infusion services for patients at home"
    },
    {
      url: "/",
      image: "/images/tire-1.jpg",
      alt: "Truck Track",
      backgroundColor: "bg-black",
      description: "Fleet management and vehicle tracking platform"
    },
    // { url: "https://project5-url.com", image: "/images/eden-sm-logo.png", alt: "Project 5" },
  ];

  // Triple the array to create the illusion of infinite scrolling
  const tripleProjects = [...projects, ...projects, ...projects];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center mb-6">Our Projects</h2>
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide py-4 space-x-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tripleProjects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0"
            >
              <div className="flex flex-col w-[300px]">
                <div className={`relative h-[200px] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${project.backgroundColor || 'bg-gray-100'}`}>
                  {project.alt === "Truck Track" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative animate-spin-slow hover:animate-none">
                        <Image
                          src={project.image}
                          alt={project.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-contain p-4"
                    />
                  )}
                </div>
                {project.description && (
                  <div className="mt-2 text-center px-2">
                    <p className="text-sm text-gray-700 font-medium truncate">{project.alt}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{project.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;