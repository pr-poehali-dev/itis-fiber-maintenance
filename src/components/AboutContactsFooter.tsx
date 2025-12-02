import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function AboutContactsFooter() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    address: '',
    description: ''
  });
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
    <>
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
    </>
  );
}
