import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center fiber-glow">
              <Icon name="Cable" className="text-primary" size={24} />
            </div>
            <span className="text-2xl font-bold">ИТИС</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#request" className="hover:text-primary transition-colors">Заявка</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 960 156-90-40
          </Button>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                <a 
                  href="#hero" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Главная
                </a>
                <a 
                  href="#services" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#about" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О компании
                </a>
                <a 
                  href="#request" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Заявка
                </a>
                <a 
                  href="#contacts" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <div className="pt-4 border-t border-border">
                  <Button className="w-full" asChild>
                    <a href="tel:+79601569040">
                      <Icon name="Phone" size={16} className="mr-2" />
                      +7 960 156-90-40
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
