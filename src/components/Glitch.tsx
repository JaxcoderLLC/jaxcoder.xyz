"use client";

import { useEffect, useState } from "react";

export default function Glitch() {
  const [glitch, setGlitch] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const getRandomPosition = () => {
    const x = Math.random() * (window.innerWidth - 100); // 100 is the approx width of the element
    const y = Math.random() * (window.innerHeight - 100); // 100 is the approx height of the element
    return { top: y, left: x };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setPosition(getRandomPosition());
      setTimeout(() => setGlitch(false), 1000); // Adjust time for glitch appearance
    }, 5000); // Adjust interval for how often the glitch appears

    return () => clearInterval(interval);
  }, []);

  const glitchStyle: React.CSSProperties = {
    position: "absolute",
    top: `${position.top}px`,
    left: `${position.left}px`,
  };

  return (
    <div style={glitchStyle} className={`p-4 ${glitch ? "glitch" : ""}`}>
      <div className="relative inline-flex items-center justify-center">
        <div className="w-16 h-16 hover:bg-blue-500 rounded-full"></div>
        <div className="w-16 h-16 hover:bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-16 h-16 hover:bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>
  );
}
