import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ArrowRight, Calendar, CheckCircle2, MessageSquare } from 'lucide-react';

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

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 geometric-accent opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact <span className="text-gold-400">Me</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have questions or ready to schedule an appointment?
            I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white paper-texture">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Get in Touch - Left Column */}
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-6 gold-line">
                Get in Touch
              </h2>
              <p className="text-navy-600 text-lg mb-8">
                Have questions about my services? Ready to schedule an appointment?
                Reach out using any of the methods below.
              </p>

              <div className="space-y-6">
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
                    <MessageSquare className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Text Us</h3>
                    <a href="sms:530-701-6538" className="text-navy-600 hover:text-gold-600 transition-colors">
                      Send a text message
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                    <a href="mailto:markdcall@gmail.com" className="text-navy-600 hover:text-gold-600 transition-colors">
                      markdcall@gmail.com
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
                      Monday - Saturday: 9am - 5pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Right Column */}
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-navy-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.8!2d-121.616!3d39.140!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b3e0f1c8c8c8f%3A0x0!2s1060+Northridge+Dr%2C+Yuba+City%2C+CA+95991!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Action Tax Refund Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Appointment Section */}
      <section className="py-20 bg-navy-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Schedule an <span className="text-gold-600">Appointment</span>
            </h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Book your tax appointment with Mark D. Call, CRTP today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Scheduling Form/Widget */}
            <div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-6 gold-line">
                Book Your Appointment
              </h3>

              {/* Call to Schedule */}
              <div className="bg-gradient-to-br from-white to-navy-50 rounded-2xl border border-navy-200 p-8">
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-10 h-10 text-gold-600" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-navy-900 mb-3">
                    Ready to Book?
                  </h4>
                  <p className="text-navy-500 mb-6">
                    Call me to schedule your appointment at a time<br />
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
                    <a
                      href="sms:530-701-6538"
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-sage-500 to-sage-600 text-white rounded-xl font-semibold hover:from-sage-400 hover:to-sage-500 transition-all"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Text Us to Schedule
                    </a>
                    <p className="text-navy-400 text-sm">
                      I&apos;ll find the perfect time for your visit
                    </p>
                  </div>
                </div>
              </div>

              {/* Appointment Types */}
              <div className="mt-10">
                <h4 className="font-display text-lg font-semibold text-navy-900 mb-4">
                  Appointment Types
                </h4>
                <div className="space-y-3">
                  {appointmentTypes.map((type, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-navy-100"
                    >
                      <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-gold-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-navy-900">{type.title}</h5>
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
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-6 gold-line">
                What to Bring
              </h3>
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
                <h4 className="font-display text-lg font-semibold text-navy-900 mb-4">
                  Office Location
                </h4>
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
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-white paper-texture">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
              Business Hours
            </h2>
            <p className="text-navy-600">
              I&apos;m here to help during the following hours
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 text-center">
              <p className="font-semibold text-navy-900">Monday - Saturday</p>
              <p className="text-navy-600">9:00 AM - 5:00 PM</p>
            </div>
            <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 text-center">
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
