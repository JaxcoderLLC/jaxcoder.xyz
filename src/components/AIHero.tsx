'use client'

import { SplineScene } from "@/components/Splite";
import { Card } from "@/components/AICard"
import { Spotlight } from "@/components/Spotlight"

export function AIHero() {
  return (
    <div className="w-full p-4 sm:py-12 sm:px-6 lg:px-8">
      <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
        />

        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-9 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Jaxcoder LLC
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              Bring your business to life with AI. Create immersive experiences
              that capture attention and enhance your users experience.
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}