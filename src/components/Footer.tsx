import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center font-bold">
          <p className="text-black">
            &copy;{new Date().getFullYear()} Jaxcoder LLC. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <Link 
              href="/privacy-policy" 
              className="text-black hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              href="/terms-of-service" 
              className="text-black hover:text-gray-700 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
