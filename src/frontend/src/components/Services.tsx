import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'SEO Optimization',
    description: 'Boost your search rankings and organic traffic with data-driven SEO strategies that put you ahead of the competition.',
    icon: '/assets/generated/seo-icon.dim_128x128.png',
  },
  {
    title: 'Social Media Marketing',
    description: 'Build authentic connections and grow your community across all major social platforms with engaging content.',
    icon: '/assets/generated/social-icon.dim_128x128.png',
  },
  {
    title: 'Content Marketing',
    description: 'Tell your brand story with compelling content that educates, entertains, and converts your target audience.',
    icon: '/assets/generated/content-icon.dim_128x128.png',
  },
  {
    title: 'PPC Advertising',
    description: 'Maximize ROI with targeted paid campaigns that reach the right people at the right time across multiple channels.',
    icon: '/assets/generated/ppc-icon.dim_128x128.png',
  },
  {
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized email campaigns that drive engagement and conversions.',
    icon: '/assets/generated/email-icon.dim_128x128.png',
  },
  {
    title: 'Analytics & Insights',
    description: 'Make informed decisions with comprehensive analytics and actionable insights that measure what matters most.',
    icon: '/assets/generated/analytics-icon.dim_128x128.png',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your unique business goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-brand-coral/50"
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-coral to-brand-amber p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl font-display text-center group-hover:text-brand-coral transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
