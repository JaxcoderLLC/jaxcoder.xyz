import Glitch from "@/components/Glitch";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-80">
      {/* Hidden button / show on hover - onClick() go to member mint page. Enjoy 🥳 */}
      <div>
        <Link href="/">
          Enter
        </Link>
      </div>
    </main>
  );
}
