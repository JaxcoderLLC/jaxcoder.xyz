import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-80">
      {/* Hidden button / show on hover - onClick() go to member mint page. Enjoy 🥳 */}
      <div>
        <Link
          href="/members"
        >
          <div className="relative inline-flex items-center justify-center">
            <div className="w-16 h-16 hover:bg-blue-500 rounded-full"></div>
            <div className="w-16 h-16 hover:bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-16 h-16 hover:bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </Link>
      </div>
    </main>
  );
}
