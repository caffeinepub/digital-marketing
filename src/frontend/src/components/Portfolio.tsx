import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';

const caseStudies = [
  {
    title: 'E-Commerce Growth Strategy',
    client: 'TechStyle Boutique',
    description: 'Implemented a comprehensive digital marketing strategy combining SEO, social media, and email campaigns to drive online sales.',
    results: [
      { label: 'Revenue Increase', value: '285%', icon: TrendingUp },
      { label: 'New Customers', value: '12K+', icon: Users },
    ],
    tags: ['SEO', 'Social Media', 'Email Marketing'],
  },
  {
    title: 'Brand Awareness Campaign',
    client: 'GreenLife Wellness',
    description: 'Launched a multi-channel brand awareness campaign focusing on content marketing and influencer partnerships.',
    results: [
      { label: 'Brand Reach', value: '2.5M', icon: Target },
      { label: 'Engagement Rate', value: '8.4%', icon: Zap },
    ],
    tags: ['Content Marketing', 'Influencer', 'Social Media'],
  },
  {
    title: 'Lead Generation Funnel',
    client: 'CloudTech Solutions',
    description: 'Designed and optimized a complete lead generation funnel with targeted PPC campaigns and conversion rate optimization.',
    results: [
      { label: 'Lead Growth', value: '420%', icon: TrendingUp },
      { label: 'Cost Per Lead', value: '-65%', icon: Target },
    ],
    tags: ['PPC', 'Analytics', 'CRO'],
  },
  {
    title: 'Local SEO Domination',
    client: 'Urban Eats Restaurant Group',
    description: 'Optimized local search presence across 15 locations, improving visibility and driving foot traffic through strategic SEO.',
    results: [
      { label: 'Local Rankings', value: 'Top 3', icon: TrendingUp },
      { label: 'Store Visits', value: '+180%', icon: Users },
    ],
    tags: ['Local SEO', 'Content', 'Reviews'],
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. See how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-brand-teal/50"
            >
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-brand-coral/10 text-brand-coral hover:bg-brand-coral/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl font-display">{study.title}</CardTitle>
                <CardDescription className="text-base font-semibold text-brand-teal">
                  {study.client}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  {study.results.map((result, resultIndex) => {
                    const Icon = result.icon;
                    return (
                      <div
                        key={resultIndex}
                        className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-brand-coral/5 to-brand-amber/5"
                      >
                        <Icon className="h-6 w-6 text-brand-coral mb-2" />
                        <div className="text-3xl font-bold text-brand-coral mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-muted-foreground text-center">
                          {result.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
