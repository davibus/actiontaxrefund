import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 geometric-accent opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact <span className="text-gold-400">Us</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have questions or ready to schedule an appointment?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white paper-texture">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-6 gold-line">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-navy-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-navy-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="(530) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="individual">Individual Tax Preparation</option>
                    <option value="business">Business Tax Services</option>
                    <option value="planning">Tax Planning</option>
                    <option value="representation">IRS Representation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 rounded-xl font-semibold hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg btn-shine"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-6 gold-line">
                Get in Touch
              </h2>
              <p className="text-navy-600 text-lg mb-8">
                Have questions about our services? Ready to schedule an appointment?
                Reach out to us using any of the methods below.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Phone</h3>
                    <a href="tel:530-701-6538" className="text-navy-600 hover:text-gold-600 transition-colors">
                      (530) 701-6538
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                    <a href="mailto:info@actiontaxrefund.com" className="text-navy-600 hover:text-gold-600 transition-colors">
                      info@actiontaxrefund.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Address</h3>
                    <p className="text-navy-600">
                      1060 Northridge Dr.<br />
                      Yuba City, CA 95991
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Business Hours</h3>
                    <p className="text-navy-600">
                      [Hours placeholder]<br />
                      Monday - Friday: 9am - 5pm<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-navy-100 to-navy-50 border border-navy-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-navy-300 mx-auto mb-4" />
                  <p className="text-navy-400 text-sm">[Map Placeholder]</p>
                  <p className="text-navy-300 text-xs mt-2">Embed Google Map here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Prefer to Schedule Online?
          </h2>
          <p className="text-white/80 mb-6">
            Use our online scheduling tool to book an appointment at your convenience.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sage-700 rounded-xl font-semibold hover:bg-gold-100 transition-all shadow-lg"
          >
            Schedule Appointment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
