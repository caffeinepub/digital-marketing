import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'TechStyle Boutique',
    role: 'CEO',
    testimonial: 'Working with this team has been transformative for our business. Their strategic approach to digital marketing helped us triple our online revenue in just 6 months. The ROI speaks for itself.',
    initials: 'SM',
  },
  {
    name: 'David Chen',
    company: 'CloudTech Solutions',
    role: 'Marketing Director',
    testimonial: 'The lead generation funnel they built for us is incredible. We went from struggling to find qualified leads to having more opportunities than we can handle. Their data-driven approach makes all the difference.',
    initials: 'DC',
  },
  {
    name: 'Emily Rodriguez',
    company: 'GreenLife Wellness',
    role: 'Founder',
    testimonial: 'Not only did they help us reach millions of potential customers, but they also helped us build a brand that people truly connect with. Their creativity and strategic thinking are unmatched.',
    initials: 'ER',
  },
  {
    name: 'Michael Thompson',
    company: 'Urban Eats Restaurant Group',
    role: 'Operations Manager',
    testimonial: 'The local SEO work they did for our 15 locations was phenomenal. We now dominate local search results and have seen a massive increase in foot traffic. Highly recommend their services!',
    initials: 'MT',
  },
  {
    name: 'Jessica Park',
    company: 'Innovate Labs',
    role: 'CMO',
    testimonial: 'Their team is professional, responsive, and truly understands the digital landscape. They don\'t just execute campaigns—they become a strategic partner in your growth journey.',
    initials: 'JP',
  },
  {
    name: 'Robert Williams',
    company: 'Apex Financial',
    role: 'VP of Marketing',
    testimonial: 'The analytics and insights they provide are invaluable. Every decision is backed by data, and the results have exceeded our expectations quarter after quarter.',
    initials: 'RW',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
            >
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Quote className="h-10 w-10 text-brand-coral/30" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <Avatar className="h-12 w-12 bg-gradient-to-br from-brand-coral to-brand-amber">
                    <AvatarFallback className="text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
