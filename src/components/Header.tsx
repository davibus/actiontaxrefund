'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

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
          <div className="flex items-center gap-4">
            <a href="tel:530-701-6538" className="flex items-center gap-2 hover:text-gold-400 transition-colors group">
              <Phone className="w-4 h-4 text-gold-500 group-hover:text-gold-400" />
              <span className="hidden xs:inline">(530) 701-6538</span>
              <span className="xs:hidden">Call</span>
            </a>
            <span className="text-white/30">|</span>
            <a href="sms:530-701-6538" className="flex items-center gap-2 hover:text-gold-400 transition-colors group">
              <MessageSquare className="w-4 h-4 text-sage-400 group-hover:text-gold-400" />
              <span>Text Us</span>
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
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo.png"
              alt="Action Tax Refund"
              width={56}
              height={56}
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
              priority
            />
            <span className="font-display text-base sm:text-lg md:text-xl font-bold text-white">Action Tax Refund</span>
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
              Schedule Free Consultation
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
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
