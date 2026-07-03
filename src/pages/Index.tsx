import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CONSOLE_IMG =
  'https://cdn.poehali.dev/projects/7723bd69-f535-45f6-9d71-53de464c2a8d/files/b5298548-2f9b-4040-a9c2-313fec5afb9d.jpg';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О консоли' },
  { id: 'specs', label: 'Характеристики' },
  { id: 'devs', label: 'Разработчикам' },
  { id: 'games', label: 'Галерея игр' },
  { id: 'console', label: 'Консоль запросов' },
  { id: 'contacts', label: 'Контакты' },
];

const SPECS = [
  { icon: 'Cpu', label: 'Процессор', value: 'X-Core 8×3.6 ГГц' },
  { icon: 'MemoryStick', label: 'Память', value: '32 ГБ LPDDR5' },
  { icon: 'HardDrive', label: 'Накопитель', value: '2 ТБ NVMe SSD' },
  { icon: 'MonitorPlay', label: 'Графика', value: 'RDNA3 · 4K@120fps' },
  { icon: 'Wifi', label: 'Связь', value: 'Wi-Fi 6E · BT 5.3' },
  { icon: 'Zap', label: 'Питание', value: '180 Вт · USB-C PD' },
];

const FEATURES = [
  { icon: 'Code2', title: 'Открытый API', text: 'Создавай собственные приложения, моды и утилиты с полным доступом к SDK.' },
  { icon: 'Unlock', title: 'Полная открытость', text: 'Никаких закрытых экосистем — ставь любой софт и меняй систему под себя.' },
  { icon: 'Boxes', title: 'Магазин модов', text: 'Публикуй и скачивай моды сообщества прямо из интерфейса консоли.' },
  { icon: 'Terminal', title: 'Консоль запросов', text: 'Предлагай добавить или убрать функции — мы слушаем сообщество.' },
];

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
          <button onClick={() => scrollTo('home')} className="font-display font-black text-xl tracking-widest text-neon-cyan text-glow-cyan">
            X-SMASH
          </button>
          <nav className="hidden lg:flex gap-6">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors font-body">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('buy')}
            className="bg-neon-magenta text-black hover:bg-neon-magenta/80 font-display font-bold box-glow-magenta">
            Купить
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center cyber-grid pt-16">
        <div className="absolute inset-0 animate-grid-move cyber-grid opacity-40" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/40 text-neon-cyan text-xs font-display tracking-widest mb-6 box-glow-cyan">
              <Icon name="Sparkles" size={14} /> НОВОЕ ПОКОЛЕНИЕ · 2026
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl leading-none mb-6">
              <span className="text-glow-cyan text-neon-cyan">X-SMASH</span>
              <br />
              <span className="text-foreground">CONSOLE</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Игровая консоль нового поколения на <span className="text-neon-cyan">SteamOS</span> с открытым API.
              Играй, создавай, взламывай границы.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" onClick={() => scrollTo('buy')}
                className="bg-neon-cyan text-black hover:bg-neon-cyan/80 font-display font-bold box-glow-cyan">
                <Icon name="ShoppingCart" size={18} className="mr-2" /> Купить сейчас
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('devs')}
                className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10 font-display">
                <Icon name="Code2" size={18} className="mr-2" /> Открытый API
              </Button>
            </div>
            <div className="flex items-center gap-3 mt-8 text-muted-foreground">
              <Icon name="Gamepad2" size={22} className="text-neon-cyan" />
              <span className="text-sm font-display tracking-wider">РАБОТАЕТ НА</span>
              <span className="font-display font-bold text-lg text-foreground">Steam<span className="text-neon-cyan">OS</span></span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-neon-magenta/20 blur-3xl rounded-full animate-glow-pulse" />
            <img src={CONSOLE_IMG} alt="X-SMASH Console"
              className="relative z-10 rounded-2xl border border-neon-cyan/30 box-glow-cyan animate-float w-full" />
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
                className="glass p-6 rounded-xl border border-border hover:border-neon-cyan/50 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center mb-4 group-hover:box-glow-cyan transition-all">
                  <Icon name={f.icon} size={24} className="text-neon-cyan" />
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
          <SectionTitle badge="ХАРАКТЕРИСТИКИ" title="Мощность из будущего" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {SPECS.map((s) => (
              <div key={s.label} className="glass p-6 rounded-xl border border-border flex items-center gap-4 hover:border-neon-magenta/50 transition-all">
                <div className="w-14 h-14 rounded-lg bg-neon-magenta/10 flex items-center justify-center shrink-0">
                  <Icon name={s.icon} size={26} className="text-neon-magenta" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-display tracking-widest">{s.label}</div>
                  <div className="font-display font-bold text-lg text-foreground">{s.value}</div>
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
                    <Icon name="CircleCheck" size={20} className="text-neon-cyan shrink-0" />
                    <span className="text-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-xl border border-neon-cyan/30 p-6 font-mono text-sm box-glow-cyan">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-neon-magenta" />
                <span className="w-3 h-3 rounded-full bg-neon-lime" />
                <span className="w-3 h-3 rounded-full bg-neon-cyan" />
              </div>
              <pre className="text-neon-cyan whitespace-pre-wrap leading-relaxed">
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
                <div className={`absolute inset-0 ${i % 2 ? 'bg-gradient-to-br from-neon-magenta/30 to-neon-purple/40' : 'bg-gradient-to-br from-neon-cyan/30 to-neon-purple/40'}`} />
                <div className="absolute inset-0 cyber-grid opacity-30" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <Icon name="Gamepad2" size={28} className="text-white/80 mb-2 group-hover:scale-125 transition-transform" />
                  <h3 className="font-display font-bold text-xl text-white text-glow-cyan">{g}</h3>
                  <span className="text-xs text-white/70 font-display tracking-widest">EXCLUSIVE</span>
                </div>
              </div>
            ))}
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
          <div className="glass rounded-xl border border-neon-cyan/30 p-6 box-glow-cyan">
            <div className="flex gap-3 mb-5">
              <button onClick={() => setReqType('add')}
                className={`flex-1 py-2.5 rounded-lg font-display font-bold text-sm transition-all ${reqType === 'add' ? 'bg-neon-cyan text-black box-glow-cyan' : 'border border-border text-muted-foreground'}`}>
                <Icon name="Plus" size={16} className="inline mr-1" /> Добавить функцию
              </button>
              <button onClick={() => setReqType('remove')}
                className={`flex-1 py-2.5 rounded-lg font-display font-bold text-sm transition-all ${reqType === 'remove' ? 'bg-neon-magenta text-black box-glow-magenta' : 'border border-border text-muted-foreground'}`}>
                <Icon name="Minus" size={16} className="inline mr-1" /> Удалить функцию
              </button>
            </div>
            <Textarea value={reqText} onChange={(e) => setReqText(e.target.value)}
              placeholder="Опишите вашу идею или пожелание..."
              className="bg-input border-border min-h-32 mb-4 font-body resize-none" />
            <Button onClick={submitRequest}
              className="w-full bg-neon-cyan text-black hover:bg-neon-cyan/80 font-display font-bold">
              <Icon name="Send" size={16} className="mr-2" /> Отправить запрос
            </Button>
          </div>
        </div>
      </section>

      {/* BUY */}
      <section id="buy" className="py-24 relative cyber-grid">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass rounded-2xl border border-neon-magenta/40 p-10 text-center box-glow-magenta">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-magenta/40 text-neon-magenta text-xs font-display tracking-widest mb-6">
              ОГРАНИЧЕННАЯ СЕРИЯ
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-4">
              X-SMASH <span className="text-neon-magenta text-glow-magenta">CONSOLE</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Полный комплект: консоль, беспроводной геймпад и годовая подписка на маркетплейс модов.
            </p>
            <div className="font-display font-black text-5xl text-neon-cyan text-glow-cyan mb-8">
              49 990 ₽
            </div>
            <Button size="lg"
              className="bg-neon-magenta text-black hover:bg-neon-magenta/80 font-display font-bold text-lg px-10 box-glow-magenta">
              <Icon name="ShoppingCart" size={20} className="mr-2" /> Оформить заказ
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="py-16 border-t border-border relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="font-display font-black text-2xl tracking-widest text-neon-cyan text-glow-cyan mb-3">X-SMASH</div>
              <p className="text-sm text-muted-foreground">Игровая консоль нового поколения на SteamOS с открытым API.</p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 tracking-widest text-sm">КОНТАКТЫ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Icon name="Mail" size={16} className="text-neon-cyan" /> hello@x-smash.io</li>
                <li className="flex items-center gap-2"><Icon name="Phone" size={16} className="text-neon-cyan" /> +7 800 555-35-35</li>
                <li className="flex items-center gap-2"><Icon name="MapPin" size={16} className="text-neon-cyan" /> Орбитальная станция «Мир-2»</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 tracking-widest text-sm">ПОДПИСКА</h4>
              <div className="flex gap-2">
                <Input placeholder="Ваш email" className="bg-input border-border" />
                <Button className="bg-neon-cyan text-black hover:bg-neon-cyan/80 shrink-0">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
              <div className="flex gap-3 mt-4">
                {['Github', 'Youtube', 'Twitter', 'MessageCircle'].map((s) => (
                  <button key={s} className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan transition-colors">
                    <Icon name={s} size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground font-display tracking-widest">
            © 2026 X-SMASH CONSOLE · POWERED BY STEAMOS
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ badge, title }: { badge: string; title: string }) {
  return (
    <div className="text-center">
      <span className="inline-block px-4 py-1.5 rounded-full border border-neon-cyan/40 text-neon-cyan text-xs font-display tracking-widest mb-4">
        {badge}
      </span>
      <h2 className="font-display font-black text-3xl md:text-5xl">{title}</h2>
    </div>
  );
}
