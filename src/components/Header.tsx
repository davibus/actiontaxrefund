'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Me', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-navy-900 sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-navy-950 text-white/80 py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold-500" />
            <a href="tel:530-701-6538" className="hover:text-gold-400 transition-colors">
              (530) 701-6538
            </a>
          </div>
          <div className="hidden sm:block text-white/60">
            1060 Northridge Dr. Yuba City, CA 95991
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/action-tax-logo.webp"
              alt="Action Tax Refund"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
            <span className="font-display text-xl font-bold text-white">Action Tax Refund</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 rounded-lg font-semibold text-sm hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 btn-shine"
            >
              Schedule Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 rounded-lg font-semibold text-center hover:from-gold-400 hover:to-gold-500 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
