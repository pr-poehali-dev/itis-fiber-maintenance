import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  return (
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
  );
}
