"use client"

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MatrixHero() {
  return (
    <div className="relative min-h-[calc(75vh-theme(spacing.24)-theme(spacing.24))] flex items-center justify-center overflow-hidden">
      {/* Canvas Reveal Effect Background */}
      <div className="absolute inset-0">
        <CanvasRevealEffect
          animationSpeed={6}
          containerClassName="bg-black"
          colors={[
            [147, 51, 234], // Purple
            [168, 85, 247], // Light purple
            [192, 132, 252], // Lighter purple
          ]}
          dotSize={3}
          opacities={[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1]}
        />
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Welcome to the Future
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
          Experience the power of innovation with our cutting-edge solutions. Join us on a journey to transform your
          digital landscape.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

