"use client";

import { SplineScene } from "@/components/Splite";
import { Card } from "@/components/AICard";
import { Spotlight } from "@/components/Spotlight";
import { Button } from "./ui/button";

const AIHero = () => {
  return (
    <div className="w-full">
      <Card className="w-full h-[200px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-violet-700 via-violet-900 to-purple-400 relative overflow-hidden">
        <Spotlight className="hidden sm:block absolute z-20 -top-40 left-0 md:left-60 md:-top-20 opacity-80" />

        <div className="flex flex-col md:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 z-10 p-4 sm:p-6 md:p-8 relative flex flex-col justify-center">
            <h1 className="text-3xl hidden md:block md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Jax Labs
            </h1>
            <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base text-neutral-300 max-w-lg text-center md:text-left">
              Bring your business to life with AI. Create immersive experiences
              that capture attention and enhance your users experience.
            </p>
            {/* <div className="sm:block flex justify-start mt-64 space-x-4">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
              >
                Learn More
              </Button>
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
              >
                Get Started
              </Button>
            </div> */}
          </div>

          {/* Right content */}
          <div className="hidden sm:flex flex-1 relative h-[200px] sm:h-[250px] md:h-full z-10">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export { AIHero };
