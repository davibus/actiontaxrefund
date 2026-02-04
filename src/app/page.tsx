import Link from 'next/link';
import Image from 'next/image';
import { Calculator, Truck, HeadphonesIcon, Star, ArrowRight, CheckCircle2, Phone } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero_216413689_Preview.jpeg')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
        {/* Decorative elements */}
        <div className="absolute inset-0 geometric-accent opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex items-center min-h-[600px] lg:min-h-[700px]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-current" />
              Trusted Tax Professionals
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert Tax Services for{' '}
              <span className="text-gold-400">Maximum Returns</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              At Action Tax Refund, we specialize in providing top-notch tax preparation
              and professional services to meet all your financial needs. Get the refund
              you deserve with personalized attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 rounded-xl font-semibold hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 btn-shine"
              >
                Schedule Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:530-701-6538"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                (530) 701-6538
              </a>
            </div>
            {/* Floating accent */}
            <div className="mt-12 inline-flex items-center gap-6">
              <div className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <p className="font-display text-3xl font-bold text-white">35+</p>
                <p className="text-sage-300 text-sm">Years Experience</p>
              </div>
              <div className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <p className="font-display text-3xl font-bold text-white">4000+</p>
                <p className="text-sage-300 text-sm">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                A Family-Owned Business <span className="text-gold-400">You Can Trust</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Action Tax Refund was established with a simple mission:
                to provide accurate, reliable tax services with the personal touch that
                larger firms can&apos;t offer. Led by Mark D. Call, our team brings over a
                decade of experience to every return we prepare.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We take pride in our commitment to customer satisfaction. Every client
                receives personalized attention and expert guidance to ensure they get
                the maximum refund they&apos;re entitled to.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* About Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/mark-call.jpg"
                  alt="Mark D. Call - Owner of Action Tax Refund"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-xl bg-gold-500/20 -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-sage-500/20 -z-10" />
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
              We combine expertise with personalized service to ensure you get the best results.
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
                Our team of certified tax professionals brings years of experience
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

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-sage-600 to-sage-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to Get Your Maximum Refund?
              </h2>
              <p className="text-white/80">
                Call us today to book an appointment with Mark D. Call
              </p>
            </div>
            <a
              href="tel:530-701-6538"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 rounded-xl font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20"
            >
              <Phone className="w-6 h-6" />
              (530) 701-6538
            </a>
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
                src="/images/money-back.png"
                alt="Get your maximum tax refund"
                fill
                className="object-contain"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6 gold-line">
                Check Out Our Exclusive Services
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                With 35+ years of experience in tax preparation and financial
                services, we bring expertise and dedication to every client. Our
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
