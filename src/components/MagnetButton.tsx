"use client"

import * as React from "react"
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Magnet } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface MagnetizeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number;
  attractRadius?: number;
  children: React.ReactNode;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

const MagnetizeButton = React.forwardRef<HTMLButtonElement, MagnetizeButtonProps>(({
  className,
  particleCount = 12,
  attractRadius = 50,
  children,
  ...props
}, ref) => {
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesControl = useAnimation();

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * attractRadius * 2 - attractRadius,
      y: Math.random() * attractRadius * 2 - attractRadius,
    }));
    setParticles(newParticles);
  }, [particleCount, attractRadius]);

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true);
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    });
  }, [particlesControl]);

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false);
    await particlesControl.start((i) => ({
      x: particles[i].x,
      y: particles[i].y,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }));
  }, [particlesControl, particles]);

  return (
    <div className="relative" style={{ padding: attractRadius }}>
      <div className="absolute inset-0 overflow-visible">
        {particles.map((_, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ x: particles[index].x, y: particles[index].y }}
            animate={particlesControl}
            className={cn(
              "absolute w-1.5 h-1.5 rounded-full left-1/2 top-1/2",
              "bg-white/30 dark:bg-white/40",
              "transition-opacity duration-300",
              isAttracting ? "opacity-100" : "opacity-40"
            )}
          />
        ))}
      </div>
      <Button
        ref={ref}
        className={cn(
          "min-w-40 relative",
          "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
          "hover:from-gray-800 hover:via-gray-700 hover:to-gray-800",
          "text-white",
          "border-2 border-gray-600/30 hover:border-gray-400/40",
          "transition-all duration-500",
          className
        )}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        {...props}
      >
        <span className="relative w-full flex items-center justify-center gap-2">
          <Magnet
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isAttracting && "scale-110"
            )}
          />
          {children}
        </span>
      </Button>
    </div>
  );
});

MagnetizeButton.displayName = "MagnetizeButton";

export { MagnetizeButton };