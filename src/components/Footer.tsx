import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 border border-t-1 border-t-green-500">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center font-bold">
          <p className="text-green-600">
            &copy;{new Date().getFullYear()} Jaxcoder LLC. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <Link 
              href="/privacy-policy" 
              className="text-green-600 hover:text-green-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-green-300">•</span>
            <Link 
              href="/terms-of-service" 
              className="text-green-600 hover:text-green-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
