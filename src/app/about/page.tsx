import Link from 'next/link';
import Image from 'next/image';
import { Award, Users, Clock, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Expertise',
    description: 'Over a decade of experience in tax preparation and financial services.',
  },
  {
    icon: Users,
    title: 'Personal Service',
    description: 'Every client receives individualized attention and customized solutions.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Dependable service you can count on, year after year.',
  },
  {
    icon: Target,
    title: 'Accuracy',
    description: 'Meticulous attention to detail ensures error-free returns.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 geometric-accent opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-gold-400">Me</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get to know the person behind Action Tax Refund and my commitment
            to your financial success.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white paper-texture">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mark-call.webp"
                  alt="Mark D. Call, EA - Owner of Action Tax Refund"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-navy-100">
                <p className="font-display text-xl font-semibold text-navy-900">Mark D. Call, EA</p>
                <p className="text-navy-500 text-sm">Owner & Tax Professional</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6 gold-line">
                Meet Mark D. Call, EA
              </h2>
              <div className="space-y-6 text-navy-600 text-lg leading-relaxed">
                <p>
                  Welcome to Action Tax Refund! I&apos;m Mark D. Call, EA,
                  and I&apos;ve been helping individuals and businesses with their tax needs
                  for over 35 years.
                </p>
                <p>
                  Based in Yuba City, California, I founded Action Tax Refund
                  with a simple goal: to provide professional, accurate tax services with
                  the personal touch that larger firms simply can&apos;t offer.
                </p>
                <p>
                  I believe that every client deserves individual attention
                  and expert guidance. Whether you&apos;re filing a simple return or navigating
                  complex tax situations, I&apos;m here to help you every step of the way.
                </p>
              </div>

              <div className="mt-8 p-6 bg-sage-50 rounded-xl border border-sage-200">
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-3">
                  Certifications & Credentials
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-navy-700">
                    <CheckCircle2 className="w-5 h-5 text-sage-500" />
                    IRS Registered Tax Preparer
                  </li>
                  <li className="flex items-center gap-2 text-navy-700">
                    <CheckCircle2 className="w-5 h-5 text-sage-500" />
                    35+ Years of Tax Preparation Experience
                  </li>
                  <li className="flex items-center gap-2 text-navy-700">
                    <CheckCircle2 className="w-5 h-5 text-sage-500" />
                    Annual Continuing Education Certified
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              My Core Values
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything I do at Action Tax Refund.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-navy-100 text-center card-lift"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-gold-600" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-sage-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            My Mission
          </h2>
          <p className="text-white/90 text-xl leading-relaxed mb-8">
            &ldquo;To provide accurate, reliable, and personalized
            tax services that help my clients achieve their financial goals while building
            lasting relationships based on trust and integrity.&rdquo;
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sage-700 rounded-xl font-semibold hover:bg-gold-100 transition-all shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
