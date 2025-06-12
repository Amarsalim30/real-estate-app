'use client';
import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Search,
  Info,
  Building,
  Calculator,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";

export const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '#', icon: Info },
  { name: 'Properties', href: '/property-listings', icon: Search },
  { name: 'Services', href: '/services', icon: Building },
  { name: 'Calculator', href: '/calculator', icon: Calculator },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Estate</h1>
              <p className="text-xs text-gray-500">Premium Properties</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                    pathname === link.href
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <button className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 py-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <div
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                      pathname === link.href
                        ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </div>
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-200/50 space-y-2">
                <Link href="/login">
                  <button className="w-full text-left text-gray-600 hover:text-gray-900 px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-200">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
