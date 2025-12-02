import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-0.5 fiber-line animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 fiber-line animate-pulse" style={{ animationDelay: '300ms' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-0.5 fiber-line animate-pulse" style={{ animationDelay: '700ms' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 fiber-glow">
            <span className="text-primary font-medium">Профессиональное обслуживание ВОЛС</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Надёжные решения для<br />
            <span className="text-primary">волоконно-оптических</span><br />
            линий связи
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Сварка муфт, устранение обрывов, рефлектометрия и полный комплекс услуг по обслуживанию ВОЛС
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg fiber-glow" onClick={() => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Zap" size={20} className="mr-2" />
              Срочная заявка
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Наши услуги
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
