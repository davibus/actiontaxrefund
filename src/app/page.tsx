import Link from 'next/link';
import Image from 'next/image';
import { Calculator, Truck, HeadphonesIcon, Star, ArrowRight, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background Video - Optimized: 53MB → 1.6MB */}
        <div className="absolute inset-0">
          {/* Fallback image for initial load and no-JS */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-video-poster.webp')" }}
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/hero-video-poster.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-video-optimized.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
        {/* Decorative elements */}
        <div className="absolute inset-0 geometric-accent opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-16 lg:pb-32 flex items-start min-h-[600px] lg:min-h-[700px]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-current" />
              Trusted Tax Professionals
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert <span className="text-gold-400">Tax Returns</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-white/80 leading-relaxed mb-8 max-w-xl">
              Claim Prepared.<br />
              Forms Filed.<br />
              Refunds Maximized.
            </p>
            {/* Prominent Phone Number */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="tel:530-701-6538"
                className="group relative inline-flex items-center gap-4"
              >
                {/* Animated pulse ring */}
                <span className="absolute inset-2 rounded-2xl bg-gold-500/10 animate-ping" style={{ animationDuration: '3s' }} />
                <span className="absolute inset-1 rounded-2xl bg-gold-500/5 animate-pulse" />

                <div className="relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 shadow-2xl shadow-gold-500/40 border-2 border-gold-300/50">
                  {/* Phone icon with ring animation */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-navy-900/20 rounded-full blur-md" />
                    <div className="relative w-14 h-14 rounded-full bg-navy-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-gold-400 group-hover:animate-bounce" />
                    </div>
                  </div>

                  {/* Phone number text */}
                  <div className="flex flex-col">
                    <span className="text-navy-900/70 text-sm font-semibold uppercase tracking-wider">Call Now - Free Consultation</span>
                    <span className="font-display text-3xl sm:text-4xl font-black text-navy-900 tracking-tight">(530) 701-6538</span>
                  </div>
                </div>
              </a>

              {/* Text Us Button */}
              <a
                href="sms:530-701-6538"
                className="group relative inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-sage-500 to-sage-600 shadow-xl shadow-sage-500/30 border-2 border-sage-400/50 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">Prefer Texting?</span>
                  <span className="font-display text-xl font-bold text-white">Text Us</span>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 rounded-xl font-semibold hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 btn-shine"
              >
                Schedule Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            {/* Free Consultation Boxes */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-sage-600 to-sage-700 shadow-lg shadow-sage-900/20 border border-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <p className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Free Consultation
                </p>
              </div>
              <div className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-sage-600 to-sage-700 shadow-lg shadow-sage-900/20 border border-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <p className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Free Prior Year Review
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                One on One <span className="text-gold-400">Personal Service</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Action Tax Refund was established with a simple mission:
                to provide accurate, reliable tax services with the personal touch that
                larger firms can&apos;t offer. I&apos;m Mark D. Call, CRTP, and I bring over 4 decades of experience to every return I prepare.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                I take pride in my commitment to customer satisfaction. Every client
                receives personalized attention and expert guidance to ensure they get
                the maximum refund they&apos;re entitled to.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors"
              >
                Learn More About Me
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-white paper-texture">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Why Choose Action Tax Refund?
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              I combine expertise with personalized service to ensure you get the best results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tax Experts Card */}
            <div className="group bg-gradient-to-br from-navy-50 to-white rounded-2xl p-8 border border-navy-100 card-lift">
              <div className="w-14 h-14 rounded-xl bg-gold-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator className="w-7 h-7 text-navy-900" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                Tax Experts
              </h3>
              <p className="text-navy-600 leading-relaxed">
                As a certified tax professional, I bring years of experience
                to maximize your refund while ensuring full compliance.
              </p>
            </div>

            {/* Convenient Service Card */}
            <div className="group bg-gradient-to-br from-navy-50 to-white rounded-2xl p-8 border border-navy-100 card-lift">
              <div className="w-14 h-14 rounded-xl bg-sage-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                Convenient Service
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Flexible scheduling options including in-office appointments
                and document drop-off for your convenience.
              </p>
            </div>

            {/* Professional Support Card */}
            <div className="group bg-gradient-to-br from-navy-50 to-white rounded-2xl p-8 border border-navy-100 card-lift">
              <div className="w-14 h-14 rounded-xl bg-navy-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeadphonesIcon className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                Professional Support
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Year-round support for all your tax questions. We&apos;re here to
                help you navigate complex tax situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Bold Phone Focus */}
      <section className="relative bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-16 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Get Your <span className="text-gold-400">Maximum Refund?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Talk to Mark D. Call, CRTP today and discover how much you could be getting back
            </p>

            {/* Large prominent phone & text CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:530-701-6538"
                className="group relative inline-flex flex-col items-center"
              >
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gold-500/30 rounded-2xl blur-xl group-hover:bg-gold-500/50 transition-all duration-500" />

                <div className="relative px-8 py-5 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-2xl shadow-2xl shadow-gold-500/30 border border-gold-300/30 group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    {/* Animated phone icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-navy-900 rounded-full animate-ping opacity-20" />
                      <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-gold-400" />
                      </div>
                    </div>

                    <div className="text-left">
                      <span className="block text-navy-900/70 text-xs font-bold uppercase tracking-widest mb-1">Call Now</span>
                      <span className="block font-display text-2xl sm:text-3xl font-black text-navy-900">(530) 701-6538</span>
                    </div>
                  </div>
                </div>
              </a>

              <span className="text-white/50 text-lg font-medium hidden sm:block">or</span>

              <a
                href="sms:530-701-6538"
                className="group relative inline-flex flex-col items-center"
              >
                {/* Outer glow */}
                <div className="absolute inset-0 bg-sage-500/30 rounded-2xl blur-xl group-hover:bg-sage-500/50 transition-all duration-500" />

                <div className="relative px-8 py-5 bg-gradient-to-br from-sage-400 via-sage-500 to-sage-600 rounded-2xl shadow-2xl shadow-sage-500/30 border border-sage-300/30 group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>

                    <div className="text-left">
                      <span className="block text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Text Us</span>
                      <span className="block font-display text-2xl font-black text-white">Send a Message</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <p className="mt-6 text-gold-400 font-semibold">
              Free Consultation Available
            </p>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-white paper-texture">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Services Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/money-back.webp"
                alt="Get your maximum tax refund"
                fill
                className="object-contain drop-shadow-lg"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6 gold-line">
                Exclusive Services
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                With 35+ years of experience in tax preparation and financial
                services, I bring expertise and dedication to every client. My
                comprehensive services are designed to meet all your tax needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sage-500 flex-shrink-0" />
                  <span className="text-navy-700">Individual & Family Tax Returns</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sage-500 flex-shrink-0" />
                  <span className="text-navy-700">Small Business Tax Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sage-500 flex-shrink-0" />
                  <span className="text-navy-700">Tax Planning & Consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sage-500 flex-shrink-0" />
                  <span className="text-navy-700">IRS Audit Representation</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-xl font-semibold hover:bg-navy-800 transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
