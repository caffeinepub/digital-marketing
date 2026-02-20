import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSubmitEntry } from '../hooks/useQueries';
import { Loader2, CheckCircle2, Mail, Phone, User, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const submitEntry = useSubmitEntry();

  const onSubmit = async (data: FormData) => {
    try {
      await submitEntry.mutateAsync({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: selectedService,
        message: data.message,
      });
      
      setShowSuccess(true);
      reset();
      setSelectedService('');
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-brand-coral/5 via-brand-amber/5 to-brand-teal/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let's Start Your Success Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-display">Get in Touch</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      {...register('phone', { required: 'Phone number is required' })}
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest *</Label>
                    <Select value={selectedService} onValueChange={setSelectedService} required>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seo">SEO Optimization</SelectItem>
                        <SelectItem value="social">Social Media Marketing</SelectItem>
                        <SelectItem value="content">Content Marketing</SelectItem>
                        <SelectItem value="ppc">PPC Advertising</SelectItem>
                        <SelectItem value="email">Email Marketing</SelectItem>
                        <SelectItem value="analytics">Analytics & Insights</SelectItem>
                        <SelectItem value="all">All Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project and goals..."
                      rows={5}
                      {...register('message', { required: 'Message is required' })}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitEntry.isPending || !selectedService}
                    className="w-full bg-gradient-to-r from-brand-coral to-brand-amber hover:from-brand-coral/90 hover:to-brand-amber/90 text-white font-semibold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {submitEntry.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
