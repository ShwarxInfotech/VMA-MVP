'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container-max flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
              <Image
                src="/images/maxresdefault.jpg"
                alt="VMA Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-normal">
                <span className="hidden sm:inline">Varachcha Medical Association</span>
                <span className="sm:hidden">VMA</span>
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[20px] font-semibold">
            <Link href="/events" className="hover:text-brand-700">
              Events
            </Link>
            <Link href="/members" className="hover:text-brand-700">
              Members
            </Link>
            <Link href="/executive" className="hover:text-brand-700">
              Executive Committee
            </Link>
            <Link href="/policy" className="hover:text-brand-700">
              Policy
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="container-max py-4 flex flex-col space-y-4">
              <Link 
                href="/events" 
                className="text-lg font-semibold hover:text-brand-700 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/members" 
                className="text-lg font-semibold hover:text-brand-700 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Members
              </Link>
              <Link 
                href="/executive" 
                className="text-lg font-semibold hover:text-brand-700 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Executive Committee
              </Link>
              <Link 
                href="/policy" 
                className="text-lg font-semibold hover:text-brand-700 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Policy
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-16">
        {/* Main Footer */}
        <div className="bg-gray-800 text-white py-12">
          <div className="container-max grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Varachcha Medical Association
              </h3>
              <p className="text-gray-300 leading-relaxed">
                United for clinical excellence, continuous medical education,
                and community service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link
                  href="/events"
                  className="block text-gray-300 hover:text-white"
                >
                  Events
                </Link>
                <Link
                  href="/members"
                  className="block text-gray-300 hover:text-white"
                >
                  Members
                </Link>
                <Link
                  href="/executive"
                  className="block text-gray-300 hover:text-white"
                >
                  Executive Committee
                </Link>
                <Link
                  href="/policy"
                  className="block text-gray-300 hover:text-white"
                >
                  Policy
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-300">
                <p>VMA Office, Varachcha, Surat, Gujarat</p>
                <p>
                  <a href="mailto:contact@vma.org" className="hover:text-white">
                    contact@vma.org
                  </a>
                </p>
                <p>
                  <a href="tel:+911234567890" className="hover:text-white">
                    +91 12345 67890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="bg-gray-900 text-gray-400 py-4">
          <div className="container-max flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>
              © {new Date().getFullYear()} Varachcha Medical Association (VMA).
              All rights reserved.
            </p>
            <p className="text-sm">
              Developed by{" "}
              <a
                href="mailto:shwarxinfotech@gmail.com"
                className="text-brand-400 hover:text-brand-300"
              >
                shwarxinfotech@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
