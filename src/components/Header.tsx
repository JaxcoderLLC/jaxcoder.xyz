import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border border-b-1 border-b-blue-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600">Jaxcoder LLC</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">Home</Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2">Services</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}