import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-primary-200 py-8">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center font-bold">
          <p className="text-primary-600">
            &copy;{new Date().getFullYear()} Jaxcoder LLC. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <Link 
              href="/privacy-policy" 
              className="text-primary-600 hover:text-primary-800 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-primary-300">•</span>
            <Link 
              href="/terms-of-service" 
              className="text-primary-600 hover:text-primary-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
