import Background from "@/components/Background";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Link href="/">
          <Button
            radius="full"
            className="bg-gradient-to-tr p-8 from-gray-300  via-gray-400 to-gray-500 text-black text-4xl shadow-lg shiny-button"
          >
            Enter
          </Button>
        </Link>
      </div>
    </div>
  );
}
