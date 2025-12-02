import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    address: '',
    description: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', serviceType: '', address: '', description: '' });
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр работ по обслуживанию и ремонту волоконно-оптических линий связи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="hover:border-primary/50 transition-all duration-300 hover:fiber-glow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">Сварка оптических муфт и кроссов</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Высококачественная сварка оптических волокон с контролем качества соединений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Монтаж и герметизация оптических муфт различного типа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Установка и коммутация оптических кроссов с маркировкой портов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-all duration-300 hover:fiber-glow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Search" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">Поиск и устранение обрывов</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Оперативный выезд на объект при аварийных ситуациях</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Локализация повреждений с использованием специального оборудования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Восстановление целостности с проверкой работоспособности</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-all duration-300 hover:fiber-glow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Activity" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">Снятие рефлектограмм</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Проведение измерений с помощью оптического рефлектометра (OTDR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Фиксация параметров: длина линии, затухание, потери на соединениях</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Анализ и выявление проблемных участков с составлением отчётов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-all duration-300 hover:fiber-glow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="FileText" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">Отчётная документация</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Оформление актов выполненных работ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Составление протоколов измерений с графиками</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Ведение журналов учёта обслуживания и рекомендации</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">О компании</h2>
              <p className="text-muted-foreground text-lg">
                ООО «ИТИС» — профессиональные решения для вашей инфраструктуры
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Target" className="text-primary" size={24} />
                    Преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Zap" className="text-primary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Оперативность</h4>
                        <p className="text-sm text-muted-foreground">Выезд на объект и устранение неисправностей в кратчайшие сроки</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Award" className="text-primary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Качество</h4>
                        <p className="text-sm text-muted-foreground">Соблюдение отраслевых стандартов и требований к монтажу</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="FileCheck" className="text-primary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Документация</h4>
                        <p className="text-sm text-muted-foreground">Полное сопровождение работ с отчётными материалами</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Users" className="text-primary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Опыт</h4>
                        <p className="text-sm text-muted-foreground">Квалифицированные специалисты с опытом работы на различных типах ВОЛС</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Cpu" className="text-primary" size={24} />
                    Используемое оборудование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                      <Icon name="Radio" className="text-primary" size={20} />
                      <span className="text-sm">Оптические рефлектометры (OTDR)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                      <Icon name="Flame" className="text-primary" size={20} />
                      <span className="text-sm">Сварочные аппараты для волоконной оптики</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                      <Icon name="Gauge" className="text-primary" size={20} />
                      <span className="text-sm">Измерители оптической мощности</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                      <Icon name="Scissors" className="text-primary" size={20} />
                      <span className="text-sm">Инструменты для разделки кабеля</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Сфера применения услуг</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Телекоммуникационные компании',
                    'Операторы связи',
                    'Предприятия с сетевой инфраструктурой',
                    'Критическая инфраструктура',
                    'Энергетика и транспорт',
                    'Корпоративные клиенты'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name="Building2" className="text-primary flex-shrink-0" size={16} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="request" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-primary font-medium">Быстрый отклик</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Оставить заявку</h2>
              <p className="text-muted-foreground text-lg">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <Card className="fiber-glow">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input 
                        id="name" 
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Тип услуги *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="welding">Сварка оптических муфт и кроссов</SelectItem>
                        <SelectItem value="repair">Поиск и устранение обрывов</SelectItem>
                        <SelectItem value="reflectometry">Снятие рефлектограмм</SelectItem>
                        <SelectItem value="documentation">Подготовка документации</SelectItem>
                        <SelectItem value="consultation">Консультация</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес объекта</Label>
                    <Input 
                      id="address" 
                      placeholder="Город, улица, дом"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Описание проблемы</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Опишите вашу ситуацию или задачу..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full fiber-glow">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-muted-foreground text-lg">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+79601569040" className="text-primary hover:underline">
                    +7 960 156-90-40
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    141402, Московская обл., г. Химки, ул. Ленинградская, д. 29, эт. 1, оф. 123
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name="Building" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Реквизиты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-1">ООО «ИТИС»</p>
                  <p className="text-sm text-muted-foreground">ИНН: 5047217978</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon name="Cable" className="text-primary" size={20} />
              </div>
              <span className="font-bold">ИТИС</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2024 ООО «ИТИС». Все права защищены. Обслуживание ВОЛС.
            </p>
            <div className="flex items-center gap-4">
              <a href="#hero" className="text-sm hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}