import Link from 'next/link';
import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Me', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Schedule Appointment', href: '/contact' },
  ],
  services: [
    { name: 'Individual Tax Preparation', href: '/services#individual' },
    { name: 'Business Tax Services', href: '/services#business' },
    { name: 'Tax Planning', href: '/services#planning' },
    { name: 'IRS Representation', href: '/services#representation' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="font-display text-navy-900 text-lg font-bold">A</span>
              </div>
              <span className="font-display text-white text-lg font-semibold">
                Action Tax Refund
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional tax preparation services with personalized attention.
              Helping individuals and businesses in Yuba City and surrounding areas
              get the maximum refund they deserve.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold-500 flex items-center justify-center text-white/60 hover:text-navy-900 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold-500 flex items-center justify-center text-white/60 hover:text-navy-900 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-gold-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-gold-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">
              Contact Me
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sage-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-sage-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:530-701-6538" className="text-white hover:text-gold-400 transition-colors">
                    (530) 701-6538
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sage-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-sage-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Address</p>
                  <p className="text-white/80">
                    1060 Northridge Dr.<br />
                    Yuba City, CA 95991
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sage-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-sage-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:info@actiontaxrefund.com" className="text-white hover:text-gold-400 transition-colors">
                    info@actiontaxrefund.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Action Tax Refund. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Mark D. Call, EA | Professional Tax Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
