import Background from "@/components/Background";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
    <Background />
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <Link href="/" className="text-white text-4xl">
        Enter
      </Link>
    </div>
  </div>
  );
}
