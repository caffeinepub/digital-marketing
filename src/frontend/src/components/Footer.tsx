import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'ab-digital-craft';

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-sm">
            © {currentYear} A B Digital Craft. All rights reserved.
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-brand-coral fill-brand-coral" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-brand-coral transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
