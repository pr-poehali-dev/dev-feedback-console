import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CONSOLE_IMG =
  'https://cdn.poehali.dev/projects/7723bd69-f535-45f6-9d71-53de464c2a8d/files/17eb43bd-7514-4c86-8e03-eb323cfd7c40.jpg';
const LOGO_IMG =
  'https://cdn.poehali.dev/projects/7723bd69-f535-45f6-9d71-53de464c2a8d/bucket/d7aff5b7-7eaa-4fad-9b85-08137d084963.png';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О консоли' },
  { id: 'specs', label: 'Характеристики' },
  { id: 'devs', label: 'Разработчикам' },
  { id: 'games', label: 'Галерея игр' },
  { id: 'versions', label: 'Версии' },
  { id: 'kickstarter', label: 'Kickstarter' },
  { id: 'console', label: 'Консоль запросов' },
  { id: 'contacts', label: 'Контакты' },
];

const SPECS = [
  { icon: 'Cpu', label: 'Платформа', value: 'Firebat AM01' },
  { icon: 'Gauge', label: 'Процессор', value: 'AMD Ryzen · до 5.1 ГГц' },
  { icon: 'MemoryStick', label: 'Память', value: 'до 32 ГБ LPDDR5' },
  { icon: 'HardDrive', label: 'Накопитель', value: 'до 2 ТБ NVMe SSD' },
  { icon: 'MonitorPlay', label: 'Экран', value: '7" IPS · 120 Гц' },
  { icon: 'Wifi', label: 'Связь', value: 'Wi-Fi 6 · BT 5.2' },
  { icon: 'BatteryCharging', label: 'Батарея', value: '50 Вт·ч · USB-C PD' },
  { icon: 'Gamepad2', label: 'Управление', value: 'Холловские стики' },
];

const FEATURES = [
  { icon: 'Code2', title: 'Открытый API', text: 'Создавай собственные приложения, моды и утилиты с полным доступом к SDK.' },
  { icon: 'Unlock', title: 'Полная открытость', text: 'Никаких закрытых экосистем — ставь любой софт и меняй систему под себя.' },
  { icon: 'Boxes', title: 'Магазин модов', text: 'Публикуй и скачивай моды сообщества прямо из интерфейса консоли.' },
  { icon: 'Terminal', title: 'Консоль запросов', text: 'Предлагай добавить или убрать функции — мы слушаем сообщество.' },
];

const VERSIONS = [
  { name: 'Lite', price: '$299', ram: '8 ГБ', ssd: '256 ГБ', tag: 'Старт', highlight: false },
  { name: 'Standard', price: '$450', ram: '16 ГБ', ssd: '512 ГБ', tag: 'Хит', highlight: true },
  { name: 'Pro', price: '$599', ram: '24 ГБ', ssd: '1 ТБ', tag: 'Мощь', highlight: false },
  { name: 'Elite', price: '$799', ram: '32 ГБ', ssd: '2 ТБ', tag: 'Максимум', highlight: false },
];

const REGIONS = ['🇪🇺 Европа', '🇷🇺 Россия', '🇹🇷 Турция', '🇰🇿 Казахстан'];

const GAMES = ['Neon Drift', 'Cyber Siege', 'Void Runner', 'Ghost Protocol', 'Synth Arena', 'Pulse Wars'];

export default function Index() {
  const { toast } = useToast();
  const [reqType, setReqType] = useState<'add' | 'remove'>('add');
  const [reqText, setReqText] = useState('');

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const submitRequest = () => {
    if (!reqText.trim()) {
      toast({ title: 'Опишите запрос', description: 'Поле не может быть пустым' });
      return;
    }
    toast({
      title: reqType === 'add' ? 'Запрос на добавление отправлен' : 'Запрос на удаление отправлен',
      description: '✦ Космический экипаж рассмотрит вашу идею',
    });
    setReqText('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <img src={LOGO_IMG} alt="X-SMASH" className="h-9 w-auto" />
          </button>
          <nav className="hidden xl:flex gap-5">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground hover:text-neon-red transition-colors font-body">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('versions')}
            className="bg-neon-red text-white hover:bg-neon-red/80 font-display font-bold box-glow-red">
            Купить
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center cyber-grid pt-16">
        <div className="absolute inset-0 animate-grid-move cyber-grid opacity-40" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-red/40 text-neon-red text-xs font-display tracking-widest mb-6 box-glow-red">
              <Icon name="Sparkles" size={14} /> ПОРТАТИВНАЯ · FIREBAT AM01
            </div>
            <img src={LOGO_IMG} alt="X-SMASH" className="h-24 md:h-32 w-auto mb-4 animate-flicker" />
            <h1 className="font-display font-black text-4xl md:text-6xl leading-none mb-6 text-foreground">
              CONSOLE
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Портативная игровая консоль на базе <span className="text-neon-red">Firebat AM01</span> с открытым API.
              Играй где угодно, создавай что угодно.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" onClick={() => scrollTo('versions')}
                className="bg-neon-red text-white hover:bg-neon-red/80 font-display font-bold box-glow-red">
                <Icon name="ShoppingCart" size={18} className="mr-2" /> Выбрать версию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('kickstarter')}
                className="border-neon-red text-neon-red hover:bg-neon-red/10 font-display">
                <Icon name="Rocket" size={18} className="mr-2" /> Kickstarter
              </Button>
            </div>
            <div className="flex items-center gap-3 mt-8 text-muted-foreground">
              <Icon name="Gamepad2" size={22} className="text-neon-red" />
              <span className="text-sm font-display tracking-wider">РАБОТАЕТ НА</span>
              <span className="font-display font-bold text-lg text-foreground">Steam<span className="text-neon-red">OS</span></span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-neon-red/25 blur-3xl rounded-full animate-glow-pulse" />
            <img src={CONSOLE_IMG} alt="X-SMASH Console"
              className="relative z-10 rounded-2xl border border-neon-red/30 box-glow-red animate-float w-full" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionTitle badge="О КОНСОЛИ" title="Свобода в каждом пикселе" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {FEATURES.map((f) => (
              <div key={f.title}
                className="glass p-6 rounded-xl border border-border hover:border-neon-red/50 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-lg bg-neon-red/10 flex items-center justify-center mb-4 group-hover:box-glow-red transition-all">
                  <Icon name={f.icon} size={24} className="text-neon-red" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="py-24 relative cyber-grid">
        <div className="container mx-auto px-4">
          <SectionTitle badge="ХАРАКТЕРИСТИКИ" title="Мощность в кармане" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {SPECS.map((s) => (
              <div key={s.label} className="glass p-6 rounded-xl border border-border flex items-center gap-4 hover:border-neon-red/50 transition-all">
                <div className="w-14 h-14 rounded-lg bg-neon-red/10 flex items-center justify-center shrink-0">
                  <Icon name={s.icon} size={26} className="text-neon-red" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-display tracking-widest">{s.label}</div>
                  <div className="font-display font-bold text-base text-foreground">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVS */}
      <section id="devs" className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionTitle badge="ДЛЯ РАЗРАБОТЧИКОВ" title="Открытость — наша философия" />
          <div className="grid lg:grid-cols-2 gap-10 mt-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Мы верим в открытые системы. X-SMASH даёт разработчикам полный доступ к SDK,
                документации и инструментам. Создавай приложения, моды и целые экосистемы —
                без ограничений и закрытых магазинов.
              </p>
              <ul className="space-y-3">
                {['Открытый REST & WebSocket API', 'SDK для C++, Rust, Python', 'Публикация модов в маркетплейс', 'Прямая связь с командой через консоль запросов'].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Icon name="CircleCheck" size={20} className="text-neon-red shrink-0" />
                    <span className="text-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-xl border border-neon-red/30 p-6 font-mono text-sm box-glow-red">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-neon-red" />
                <span className="w-3 h-3 rounded-full bg-neon-lime" />
                <span className="w-3 h-3 rounded-full bg-neon-cyan" />
              </div>
              <pre className="text-neon-red whitespace-pre-wrap leading-relaxed">
{`> xsmash init my-mod
✦ Создаём проект...
> import { XSmashAPI } from 'xsmash-sdk'

const api = new XSmashAPI({ open: true })
api.registerApp('my-cool-mod')

✓ Готово! Ваш мод в эфире 🚀`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="py-24 relative cyber-grid">
        <div className="container mx-auto px-4">
          <SectionTitle badge="ГАЛЕРЕЯ ИГР" title="Библиотека без границ" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {GAMES.map((g, i) => (
              <div key={g}
                className="relative h-52 rounded-xl overflow-hidden border border-border group cursor-pointer">
                <div className={`absolute inset-0 ${i % 2 ? 'bg-gradient-to-br from-neon-red/40 to-black' : 'bg-gradient-to-br from-neon-red/25 to-neon-purple/30'}`} />
                <div className="absolute inset-0 cyber-grid opacity-30" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <Icon name="Gamepad2" size={28} className="text-white/80 mb-2 group-hover:scale-125 transition-transform" />
                  <h3 className="font-display font-bold text-xl text-white text-glow-red">{g}</h3>
                  <span className="text-xs text-white/70 font-display tracking-widest">EXCLUSIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERSIONS */}
      <section id="versions" className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionTitle badge="ВЕРСИИ КОНСОЛИ" title="Выбери свою мощь" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {VERSIONS.map((v) => (
              <div key={v.name}
                className={`relative glass rounded-xl p-6 border transition-all hover:-translate-y-2 ${v.highlight ? 'border-neon-red box-glow-red scale-105' : 'border-border hover:border-neon-red/50'}`}>
                {v.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-red text-white text-xs font-display font-bold px-3 py-1 rounded-full tracking-widest">
                    ПОПУЛЯРНАЯ
                  </span>
                )}
                <div className="text-xs font-display tracking-widest text-neon-red mb-1">{v.tag}</div>
                <h3 className="font-display font-black text-2xl mb-4">X-SMASH {v.name}</h3>
                <div className="font-display font-black text-4xl text-neon-red text-glow-red mb-5">{v.price}</div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2"><Icon name="MemoryStick" size={16} className="text-neon-red" /> {v.ram} RAM</li>
                  <li className="flex items-center gap-2"><Icon name="HardDrive" size={16} className="text-neon-red" /> {v.ssd} SSD</li>
                  <li className="flex items-center gap-2"><Icon name="Cpu" size={16} className="text-neon-red" /> Firebat AM01</li>
                </ul>
                <Button className={`w-full font-display font-bold ${v.highlight ? 'bg-neon-red text-white hover:bg-neon-red/80' : 'bg-muted text-foreground hover:bg-neon-red hover:text-white'}`}>
                  Заказать
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KICKSTARTER */}
      <section id="kickstarter" className="py-24 relative cyber-grid">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="glass rounded-2xl border border-neon-red/40 p-8 md:p-12 box-glow-red">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-red/40 text-neon-red text-xs font-display tracking-widest mb-5">
                  <Icon name="Rocket" size={14} /> КРАУДФАНДИНГ
                </div>
                <h2 className="font-display font-black text-3xl md:text-4xl mb-4">
                  Поддержи нас на <span className="text-neon-red text-glow-red">Kickstarter</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Стань частью запуска X-SMASH. Первые волны поставок — в Европе, России, Турции и Казахстане.
                  Все бэкеры кампании получают эксклюзивную привилегию.
                </p>
                <div className="glass rounded-xl border border-neon-red/40 p-5 mb-6 box-glow-red">
                  <div className="flex items-center gap-3">
                    <Icon name="BadgePercent" size={32} className="text-neon-red shrink-0" />
                    <div>
                      <div className="font-display font-black text-2xl text-neon-red text-glow-red">−30% НАВСЕГДА</div>
                      <div className="text-sm text-muted-foreground">Пожизненная скидка на игры и все версии консоли</div>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="bg-neon-red text-white hover:bg-neon-red/80 font-display font-bold box-glow-red">
                  <Icon name="Rocket" size={18} className="mr-2" /> Поддержать проект
                </Button>
              </div>
              <div>
                <div className="text-sm font-display tracking-widest text-muted-foreground mb-4">ПЕРВЫЕ ВОЛНЫ ПОСТАВОК</div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {REGIONS.map((r) => (
                    <div key={r} className="glass rounded-lg border border-border p-4 text-center font-display font-bold hover:border-neon-red/50 transition-all">
                      {r}
                    </div>
                  ))}
                </div>
                <div className="glass rounded-lg border border-border p-4 text-sm text-muted-foreground flex items-center gap-3">
                  <Icon name="Globe" size={20} className="text-neon-red shrink-0" />
                  Далее — продажи по всему миру
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST CONSOLE */}
      <section id="console" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle badge="КОНСОЛЬ ЗАПРОСОВ" title="Управляй развитием консоли" />
          <p className="text-center text-muted-foreground mt-4 mb-10">
            Хочешь новую функцию или считаешь что-то лишним? Отправь запрос — мы открыты для сообщества.
          </p>
          <div className="glass rounded-xl border border-neon-red/30 p-6 box-glow-red">
            <div className="flex gap-3 mb-5">
              <button onClick={() => setReqType('add')}
                className={`flex-1 py-2.5 rounded-lg font-display font-bold text-sm transition-all ${reqType === 'add' ? 'bg-neon-red text-white box-glow-red' : 'border border-border text-muted-foreground'}`}>
                <Icon name="Plus" size={16} className="inline mr-1" /> Добавить функцию
              </button>
              <button onClick={() => setReqType('remove')}
                className={`flex-1 py-2.5 rounded-lg font-display font-bold text-sm transition-all ${reqType === 'remove' ? 'bg-neon-red text-white box-glow-red' : 'border border-border text-muted-foreground'}`}>
                <Icon name="Minus" size={16} className="inline mr-1" /> Удалить функцию
              </button>
            </div>
            <Textarea value={reqText} onChange={(e) => setReqText(e.target.value)}
              placeholder="Опишите вашу идею или пожелание..."
              className="bg-input border-border min-h-32 mb-4 font-body resize-none" />
            <Button onClick={submitRequest}
              className="w-full bg-neon-red text-white hover:bg-neon-red/80 font-display font-bold">
              <Icon name="Send" size={16} className="mr-2" /> Отправить запрос
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="py-16 border-t border-border relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <img src={LOGO_IMG} alt="X-SMASH" className="h-12 w-auto mb-3" />
              <p className="text-sm text-muted-foreground">Портативная игровая консоль на Firebat AM01 с открытым API.</p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 tracking-widest text-sm">КОНТАКТЫ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Icon name="Mail" size={16} className="text-neon-red" /> hello@x-smash.io</li>
                <li className="flex items-center gap-2"><Icon name="Phone" size={16} className="text-neon-red" /> +7 800 555-35-35</li>
                <li className="flex items-center gap-2"><Icon name="MapPin" size={16} className="text-neon-red" /> Орбитальная станция «Мир-2»</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 tracking-widest text-sm">ПОДПИСКА</h4>
              <div className="flex gap-2">
                <Input placeholder="Ваш email" className="bg-input border-border" />
                <Button className="bg-neon-red text-white hover:bg-neon-red/80 shrink-0">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
              <div className="flex gap-3 mt-4">
                {['Github', 'Youtube', 'Twitter', 'MessageCircle'].map((s) => (
                  <button key={s} className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-neon-red hover:border-neon-red transition-colors">
                    <Icon name={s} size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground font-display tracking-widest">
            © 2026 X-SMASH CONSOLE · POWERED BY STEAMOS · FIREBAT AM01
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ badge, title }: { badge: string; title: string }) {
  return (
    <div className="text-center">
      <span className="inline-block px-4 py-1.5 rounded-full border border-neon-red/40 text-neon-red text-xs font-display tracking-widest mb-4">
        {badge}
      </span>
      <h2 className="font-display font-black text-3xl md:text-5xl">{title}</h2>
    </div>
  );
}
