import Link from 'next/link';
import { Calculator, Truck, HeadphonesIcon, Star, ArrowRight, CheckCircle2, Phone } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 geometric-accent opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-current" />
                Trusted Tax Professionals
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Expert Tax Services for{' '}
                <span className="text-gold-400">Maximum Returns</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  (530) 701-6538
                </a>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-6">
                    <Calculator className="w-16 h-16 text-gold-400" />
                  </div>
                  <p className="text-white/40 text-sm">[Hero Image Placeholder]</p>
                  <p className="text-white/30 text-xs mt-2">Replace with professional photo</p>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl bg-sage-500/20 backdrop-blur-sm border border-sage-500/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-white">10+</p>
                  <p className="text-sage-400 text-sm">Years Experience</p>
                </div>
              </div>
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-sage-700 rounded-xl font-bold text-lg hover:bg-gold-100 transition-all shadow-lg"
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
            {/* Image Placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-100 to-navy-50 border border-navy-200 flex items-center justify-center order-2 lg:order-1">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-navy-200/50 flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-12 h-12 text-navy-400" />
                </div>
                <p className="text-navy-400 text-sm">[Services Image Placeholder]</p>
                <p className="text-navy-300 text-xs mt-2">Replace with office or team photo</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6 gold-line">
                Check Out Our Exclusive Services
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                With more than 10 years of experience in tax preparation and financial
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

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                A Family-Owned Business <span className="text-gold-400">You Can Trust</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                [About placeholder] Action Tax Refund was established with a simple mission:
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

            {/* About Image Placeholder */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-4xl text-gold-400 font-bold">MC</span>
                </div>
                <p className="text-white/40 text-sm">[About Image Placeholder]</p>
                <p className="text-white/30 text-xs mt-2">Photo of Mark D. Call</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
