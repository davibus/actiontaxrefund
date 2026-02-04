import Link from 'next/link';
import { Calendar, Clock, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

const appointmentTypes = [
  {
    title: 'Individual Tax Preparation',
    duration: '60 minutes',
    description: 'Complete tax return preparation for individuals and families.',
  },
  {
    title: 'Business Tax Consultation',
    duration: '90 minutes',
    description: 'Tax planning and preparation services for small businesses.',
  },
  {
    title: 'Tax Planning Session',
    duration: '45 minutes',
    description: 'Strategic tax planning for the upcoming tax year.',
  },
  {
    title: 'IRS Issue Consultation',
    duration: '60 minutes',
    description: 'Review and strategy session for IRS notices or audits.',
  },
];

const whatToBring = [
  'Photo ID (Driver\'s License or State ID)',
  'Social Security cards for all family members',
  'W-2 forms from all employers',
  '1099 forms (freelance, investments, retirement)',
  'Last year\'s tax return',
  'Bank account information for direct deposit',
  'Mortgage interest statement (Form 1098)',
  'Charitable donation receipts',
  'Medical expense records',
  'Business income and expense records (if applicable)',
];

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 geometric-accent opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Schedule an <span className="text-gold-400">Appointment</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Book your tax appointment with Mark D. Call today.
            Choose a time that works best for you.
          </p>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="py-20 bg-white paper-texture">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Scheduling Form/Widget */}
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-6 gold-line">
                Book Your Appointment
              </h2>

              {/* Call to Schedule */}
              <div className="bg-gradient-to-br from-navy-50 to-white rounded-2xl border border-navy-200 p-8">
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-10 h-10 text-gold-600" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                    Ready to Book?
                  </h3>
                  <p className="text-navy-500 mb-6">
                    Call us to schedule your appointment at a time<br />
                    that works best for you.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:530-701-6538"
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 rounded-xl font-semibold hover:from-gold-400 hover:to-gold-500 transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      Call to Schedule: (530) 701-6538
                    </a>
                    <p className="text-navy-400 text-sm">
                      We&apos;ll find the perfect time for your visit
                    </p>
                  </div>
                </div>
              </div>

              {/* Appointment Types */}
              <div className="mt-10">
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-4">
                  Appointment Types
                </h3>
                <div className="space-y-3">
                  {appointmentTypes.map((type, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-navy-50 rounded-xl border border-navy-100"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-gold-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">{type.title}</h4>
                        <p className="text-navy-500 text-sm">{type.duration}</p>
                        <p className="text-navy-600 text-sm mt-1">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What to Bring */}
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-6 gold-line">
                What to Bring
              </h2>
              <p className="text-navy-600 text-lg mb-8">
                To make the most of your appointment, please gather the following
                documents before your visit:
              </p>
              <div className="bg-sage-50 rounded-2xl border border-sage-200 p-8">
                <ul className="space-y-4">
                  {whatToBring.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                      <span className="text-navy-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Office Location */}
              <div className="mt-10">
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-4">
                  Office Location
                </h3>
                <div className="bg-navy-900 rounded-2xl p-6 text-white">
                  <p className="text-white/80 mb-2">Action Tax Refund</p>
                  <p className="font-display text-xl mb-4">
                    1060 Northridge Dr.<br />
                    Yuba City, CA 95991
                  </p>
                  <a
                    href="https://maps.google.com/?q=1060+Northridge+Dr+Yuba+City+CA+95991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Contact Alternative */}
              <div className="mt-8 p-6 border border-navy-200 rounded-2xl">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Prefer to Call?
                </h3>
                <p className="text-navy-600 mb-4">
                  Give us a call and we&apos;ll help you find the perfect time for your appointment.
                </p>
                <a
                  href="tel:530-701-6538"
                  className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (530) 701-6538
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
              Business Hours
            </h2>
            <p className="text-navy-600">
              We&apos;re here to help during the following hours
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 border border-navy-100 text-center">
              <p className="font-semibold text-navy-900">Monday - Friday</p>
              <p className="text-navy-600">9:00 AM - 5:00 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-navy-100 text-center">
              <p className="font-semibold text-navy-900">Saturday</p>
              <p className="text-navy-600">By Appointment</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-navy-100 text-center">
              <p className="font-semibold text-navy-900">Sunday</p>
              <p className="text-navy-600">Closed</p>
            </div>
            <div className="bg-gold-50 rounded-xl p-6 border border-gold-200 text-center">
              <p className="font-semibold text-navy-900">Tax Season</p>
              <p className="text-gold-700">Extended Hours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
