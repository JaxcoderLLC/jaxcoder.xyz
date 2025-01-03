import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-white border border-t-1 border-t-blue-500">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <p className="text-gray-600">
            &copy;{new Date().getFullYear()} Jaxcoder LLC. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <Link 
              href="/privacy-policy" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              href="/terms-of-service" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
