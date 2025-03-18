"use client";

import { SplineScene } from "@/components/Splite";
import { Card } from "@/components/AICard";
import { Spotlight } from "@/components/Spotlight";
import { FaArrowRight } from "react-icons/fa";
import { GradientButton } from "./GradientButton";

export function AIHero() {
  return (
    <div className="w-full p-4 sm:py-12 sm:px-6 lg:px-8">
      <Card className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-purple-900 via-purple-900 to-purple-500 relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

        <div className="flex flex-col md:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 z-10 p-4 sm:p-6 md:p-8 relative flex flex-col justify-center">
            <h1 className="text-3xl hidden md:block md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Jaxcoder LLC
            </h1>
            <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base text-neutral-300 max-w-lg text-center md:text-left">
              Bring your business to life with AI. Create immersive experiences
              that capture attention and enhance your users experience.
            </p>
            <div className="sm:block flex justify-start mt-64 space-x-4">
              <GradientButton className="slide-in">Learn More</GradientButton>
              <GradientButton className="slide-in" variant="variant">
                <div className="flex flex-row items-center justify-center">
                  Get Started
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </div>
              </GradientButton>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative h-[200px] sm:h-[250px] md:h-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
