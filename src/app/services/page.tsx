import Link from 'next/link';
import {
  Calculator,
  Building2,
  TrendingUp,
  Shield,
  FileText,
  Users,
  ArrowRight,
  CheckCircle2,
  Phone
} from 'lucide-react';

const services = [
  {
    id: 'individual',
    icon: Calculator,
    title: 'Individual Tax Preparation',
    description: 'Professional preparation of personal tax returns for individuals and families. I ensure you claim every deduction and credit you\'re entitled to.',
    features: [
      'Federal and State Returns',
      'E-filing for Faster Refunds',
      'Itemized Deductions Analysis',
      'Tax Credit Optimization',
      'Prior Year Returns',
    ],
    color: 'gold',
  },
  {
    id: 'business',
    icon: Building2,
    title: 'Business Tax Services',
    description: 'Comprehensive tax services for small businesses, partnerships, and corporations. I help you stay compliant while minimizing your tax burden.',
    features: [
      'Business Return Preparation',
      'Quarterly Estimated Taxes',
      'Payroll Tax Compliance',
      'Business Expense Tracking',
      'Entity Selection Guidance',
    ],
    color: 'sage',
  },
  {
    id: 'planning',
    icon: TrendingUp,
    title: 'Tax Planning & Strategy',
    description: 'Year-round tax planning to help you make informed financial decisions and minimize future tax liabilities.',
    features: [
      'Year-Round Tax Consultation',
      'Retirement Planning Support',
      'Investment Tax Strategy',
      'Life Event Tax Planning',
      'Tax Projection Services',
    ],
    color: 'navy',
  },
  {
    id: 'representation',
    icon: Shield,
    title: 'IRS Representation',
    description: 'Expert representation if you\'re facing an IRS audit or need help resolving tax issues. I\'ll advocate on your behalf.',
    features: [
      'Audit Representation',
      'IRS Notice Response',
      'Payment Plan Negotiation',
      'Penalty Abatement Requests',
      'Tax Problem Resolution',
    ],
    color: 'gold',
  },
  {
    id: 'bookkeeping',
    icon: FileText,
    title: 'Bookkeeping Services',
    description: 'Keep your financial records organized and accurate with my professional bookkeeping services.',
    features: [
      'Monthly Bookkeeping',
      'Financial Statement Preparation',
      'Bank Reconciliation',
      'Accounts Payable/Receivable',
      'Year-End Preparation',
    ],
    color: 'sage',
  },
  {
    id: 'consulting',
    icon: Users,
    title: 'Tax Consulting',
    description: 'Get expert advice on complex tax situations. I provide guidance for major life events and financial decisions.',
    features: [
      'Home Purchase/Sale Guidance',
      'Stock Options Consulting',
      'Business Start-up Advice',
      'Inheritance Tax Planning',
      'Multi-State Tax Issues',
    ],
    color: 'navy',
  },
];

const colorClasses = {
  gold: {
    bg: 'bg-gold-500',
    light: 'bg-gold-50',
    border: 'border-gold-200',
    text: 'text-gold-600',
  },
  sage: {
    bg: 'bg-sage-500',
    light: 'bg-sage-50',
    border: 'border-sage-200',
    text: 'text-sage-600',
  },
  navy: {
    bg: 'bg-navy-800',
    light: 'bg-navy-50',
    border: 'border-navy-200',
    text: 'text-navy-600',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 geometric-accent opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-gold-400">Services</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive tax and financial services tailored to meet your individual
            and business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white paper-texture">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              const colors = colorClasses[service.color as keyof typeof colorClasses];
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`group rounded-2xl p-8 ${colors.light} border ${colors.border} card-lift`}
                >
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-navy-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-navy-700">
                        <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Contact me today to discuss your tax needs and schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 rounded-xl font-semibold hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg btn-shine"
            >
              Schedule Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:530-701-6538"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              (530) 701-6538
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
