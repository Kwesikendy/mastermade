import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Hammer,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Network,
  Palette,
  Phone,
  Quote,
  Send,
  Settings2,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';
import {
  Link,
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

const images = {
  logo: '/assets/mastermade_1789311852714.jpg',
  shito: '/assets/shito_1789311845316.jpeg',
  shitoAlt: '/assets/shito1_1789311845316.jpeg',
  shitoPouch: '/assets/shito2_1789311845317.jpeg',
  tomBrown: '/assets/tombrown_1789311845317.jpeg',
  tomBrownClose: '/assets/tombrown1_1789311845317.jpeg',
  tomBrownShelf: '/assets/tombrown2_1789311845317.jpeg',
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/tech-services', label: 'Tech services' },
  { href: '/foods', label: 'Foods' },
  { href: '/contact', label: 'Contact' },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" data-testid="link-brand-home">
      <span className={`grid size-10 place-items-center rounded-xl border-2 text-lg font-bold ${light ? 'border-[#F0B429] bg-[#F0B429] text-[#0B493A]' : 'border-[#0B493A] bg-[#0B493A] text-[#F6EFDF]'}`}>
        M
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-semibold tracking-tight ${light ? 'text-[#F6EFDF]' : 'text-[#0B493A]'}`}>MasterMade</span>
        <span className={`font-mono-label text-[9px] uppercase tracking-[.2em] ${light ? 'text-[#E8D9B7]' : 'text-[#567368]'}`}>Enterprise solutions</span>
      </span>
    </Link>
  );
}

function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-40">
      <div className="hidden bg-[#0B493A] px-6 py-2 text-center font-mono-label text-[10px] uppercase tracking-[.18em] text-[#E8D9B7] md:block">
        Built for growing businesses · Made for Ghanaian homes
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8 lg:px-10" aria-label="Primary navigation">
        <BrandMark />
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="nav-link text-sm font-semibold text-[#214E41] transition-colors hover:text-[#D9342B]"
              aria-current={location === item.href ? 'page' : undefined}
              data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="group flex items-center gap-2 rounded-full bg-[#D9342B] px-5 py-3 text-sm font-bold text-[#FFF8E9] transition-transform hover:-translate-y-0.5" data-testid="link-header-quote">
            Start a conversation <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-[#CFC2A8] text-[#0B493A] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          data-testid="button-mobile-menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && (
        <div className="absolute left-4 right-4 top-[76px] rounded-2xl border border-[#D8CDB7] bg-[#FFF9EC] p-4 shadow-xl md:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-[#214E41] hover:bg-[#F0E5CF]" data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-between rounded-xl bg-[#D9342B] px-4 py-3 font-bold text-[#FFF8E9]" data-testid="link-mobile-quote">
              Request a quote <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B493A] text-[#F6EFDF]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_.7fr_.7fr] md:px-8 lg:px-10">
        <div>
          <BrandMark light />
          <p className="mt-7 max-w-sm text-sm leading-7 text-[#C7D5C9]">
            Practical digital tools for ambitious businesses, plus trusted food products made close to home.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#3E705F] px-3 py-1.5 font-mono-label text-[10px] uppercase tracking-[.14em] text-[#E8D9B7]">Accra, Ghana</span>
            <span className="rounded-full border border-[#3E705F] px-3 py-1.5 font-mono-label text-[10px] uppercase tracking-[.14em] text-[#E8D9B7]">Locally made</span>
          </div>
        </div>
        <div>
          <p className="font-mono-label text-[10px] uppercase tracking-[.18em] text-[#F0B429]">Explore</p>
          <div className="mt-5 grid gap-3 text-sm text-[#D7E1D7]">
            {navItems.map((item) => <Link href={item.href} key={item.href} className="w-fit transition-colors hover:text-[#F0B429]" data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-mono-label text-[10px] uppercase tracking-[.18em] text-[#F0B429]">Talk to us</p>
          <div className="mt-5 grid gap-4 text-sm text-[#D7E1D7]">
            <a href="tel:+233000000000" className="flex items-center gap-3 hover:text-[#F0B429]" data-testid="link-footer-phone"><Phone size={16} /> +233 (0) 00 000 0000</a>
            <a href="mailto:hello@mastermade.example" className="flex items-center gap-3 hover:text-[#F0B429]" data-testid="link-footer-email"><Mail size={16} /> hello@mastermade.example</a>
            <span className="flex items-center gap-3"><MapPin size={16} /> Accra, Ghana</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2F6252] px-5 py-5 text-center font-mono-label text-[10px] uppercase tracking-[.14em] text-[#9FB8A7] md:px-8">
        © 2024 MasterMade Enterprise Solutions · Good work, made close.
      </div>
    </footer>
  );
}

function PageShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useEffect(() => {
    const pageMeta: Record<string, { title: string; description: string }> = {
      '/': { title: 'MasterMade Enterprise Solutions | Made for the next move', description: 'Practical technology services and proudly Ghanaian food products from MasterMade Enterprise Solutions.' },
      '/tech-services': { title: 'Technology Services | MasterMade Enterprise Solutions', description: 'Web, app, IT setup, networking, hardware repair, software and UI/UX services for growing businesses.' },
      '/foods': { title: 'MasterMade Foods | Shito and Tom Brown', description: 'Meet MasterMade Shito and Tom Brown, locally made Ghanaian pantry favourites.' },
      '/contact': { title: 'Contact MasterMade | Request a Quote', description: 'Start a conversation with MasterMade about a technology project or food order.' },
    };
    const meta = pageMeta[location.split('?')[0]] || pageMeta['/'];
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]') || document.createElement('meta');
    description.setAttribute('name', 'description');
    description.setAttribute('content', meta.description);
    if (!description.parentNode) document.head.appendChild(description);
  }, [location]);
  return <div className="paper-grain min-h-[100dvh] bg-[#F6EFDF]"><Header /><main className="route-enter">{children}</main><Footer /></div>;
}

function SectionKicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`font-mono-label text-[10px] font-bold uppercase tracking-[.2em] ${light ? 'text-[#F0B429]' : 'text-[#D9342B]'}`}>{children}</p>;
}

function SectionTitle({ children, className = '', light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return <h2 className={`font-display text-4xl font-semibold leading-[.98] tracking-[-.035em] md:text-6xl ${light ? 'text-[#FFF8E9]' : 'text-[#0B493A]'} ${className}`}>{children}</h2>;
}

function Home() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16 lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:px-10">
        <div className="reveal">
          <SectionKicker>One company · two ways to grow</SectionKicker>
          <h1 className="mt-6 max-w-xl font-display text-6xl font-semibold leading-[.9] tracking-[-.05em] text-[#0B493A] sm:text-7xl lg:text-[6.8rem]">
            Made for the <span className="text-[#D9342B]">next move.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#567368] md:text-lg">
            MasterMade helps growing businesses work smarter—and brings honest, boldly Ghanaian flavour to everyday tables.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/tech-services" className="group inline-flex items-center gap-2 rounded-full bg-[#0B493A] px-6 py-3.5 text-sm font-bold text-[#FFF8E9] transition-all hover:bg-[#D9342B]" data-testid="link-hero-tech">
              Explore tech services <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/foods" className="inline-flex items-center gap-2 rounded-full border border-[#BDAF93] px-6 py-3.5 text-sm font-bold text-[#0B493A] transition-colors hover:border-[#0B493A] hover:bg-[#EADFC8]" data-testid="link-hero-foods">
              Meet the foods <ShoppingBag size={16} />
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-5 border-t border-[#D8CDB7] pt-5">
            <div className="flex -space-x-2">
              <span className="grid size-9 place-items-center rounded-full border-2 border-[#F6EFDF] bg-[#D9342B] font-display text-sm text-white">S</span>
              <span className="grid size-9 place-items-center rounded-full border-2 border-[#F6EFDF] bg-[#F0B429] font-display text-sm text-[#0B493A]">T</span>
              <span className="grid size-9 place-items-center rounded-full border-2 border-[#F6EFDF] bg-[#0B493A] font-display text-sm text-white">M</span>
            </div>
            <p className="max-w-[220px] text-xs leading-5 text-[#567368]">Practical solutions. Real products. A team that gets the assignment.</p>
          </div>
        </div>
        <div className="relative min-h-[500px] reveal delay-2 md:min-h-[590px]">
          <div className="absolute right-0 top-0 h-[74%] w-[76%] overflow-hidden rounded-[2.2rem] rounded-bl-[7rem] bg-[#D9C9AA] image-zoom">
            <img src={images.shito} alt="MasterMade Shito jar beside red flowers" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 h-[45%] w-[56%] overflow-hidden rounded-[1.8rem] rounded-tr-[5rem] border-[9px] border-[#F6EFDF] bg-[#DEBD4F] image-zoom shadow-lg">
            <img src={images.tomBrownClose} alt="MasterMade Tom Brown jar with yellow pouches behind it" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-[13%] right-[4%] rounded-2xl bg-[#F0B429] px-4 py-3 shadow-lg">
            <p className="font-mono-label text-[9px] font-bold uppercase tracking-[.14em] text-[#0B493A]">Proudly Ghanaian</p>
            <p className="mt-1 font-display text-xl font-semibold text-[#0B493A]">Good things, made here.</p>
          </div>
          <div className="absolute left-[9%] top-[8%] grid size-16 place-items-center rounded-full border border-[#F6EFDF] bg-[#0B493A] text-[#F0B429] shadow-lg"><Sparkles size={23} /></div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#D8CDB7] bg-[#EFE4CE] py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 font-mono-label text-[10px] font-bold uppercase tracking-[.22em] text-[#557166] md:px-8 lg:px-10">
          <span className="whitespace-nowrap">Digital craft</span><span className="text-[#D9342B]">/</span><span className="whitespace-nowrap">Everyday flavour</span><span className="text-[#D9342B]">/</span><span className="whitespace-nowrap">Ghana, with care</span><span className="hidden whitespace-nowrap sm:inline">/</span><span className="hidden whitespace-nowrap sm:inline">Your next move</span>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[.72fr_1.28fr] lg:px-10">
        <div>
          <SectionKicker>The MasterMade point of view</SectionKicker>
          <SectionTitle className="mt-5 max-w-sm">Useful should also feel good.</SectionTitle>
        </div>
        <div className="max-w-2xl">
          <p className="font-display text-3xl leading-tight text-[#214E41] md:text-4xl">We believe the best businesses are built from small, well-made decisions.</p>
          <p className="mt-7 max-w-xl leading-7 text-[#567368]">The right website makes your work easier to find. The right system makes a busy day lighter. The right jar on the table makes a meal worth gathering around. We make all three possible—with local perspective and a practical eye.</p>
          <Link href="/contact" className="group mt-8 inline-flex items-center gap-3 border-b-2 border-[#D9342B] pb-2 text-sm font-bold text-[#0B493A]" data-testid="link-home-about">
            Tell us what you’re building <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="bg-[#0B493A] px-5 py-20 text-[#FFF8E9] md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><SectionKicker light>Two practices, one standard</SectionKicker><SectionTitle light className="mt-5 max-w-2xl">The right tools. The right taste.</SectionTitle></div>
            <span className="font-mono-label text-xs text-[#9FB8A7]">01 — 02</span>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <Link href="/tech-services" className="group lift relative overflow-hidden rounded-[1.5rem] bg-[#164F40] p-7 md:min-h-[350px] md:p-9" data-testid="card-home-tech">
              <div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-xl bg-[#F0B429] text-[#0B493A]"><MonitorCog size={23} /></span><ArrowUpRight size={21} className="text-[#91B4A1] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              <div className="mt-24"><p className="font-mono-label text-[10px] uppercase tracking-[.18em] text-[#F0B429]">For businesses in motion</p><h3 className="mt-3 font-display text-4xl font-semibold">Technology that pulls its weight.</h3><p className="mt-4 max-w-sm text-sm leading-6 text-[#BFD2C5]">Websites, apps, systems and support that turn good ideas into better operations.</p></div>
              <div className="absolute -bottom-14 -right-8 size-44 rounded-full border border-[#2D6B59]" />
            </Link>
            <Link href="/foods" className="group lift relative overflow-hidden rounded-[1.5rem] bg-[#D9342B] p-7 md:min-h-[350px] md:p-9" data-testid="card-home-foods">
              <div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-xl bg-[#F0B429] text-[#0B493A]"><ShoppingBag size={23} /></span><ArrowUpRight size={21} className="text-[#FFD1AF] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              <div className="mt-24"><p className="font-mono-label text-[10px] uppercase tracking-[.18em] text-[#F0B429]">For tables worth gathering around</p><h3 className="mt-3 font-display text-4xl font-semibold">Flavour with a point of view.</h3><p className="mt-4 max-w-sm text-sm leading-6 text-[#FFE1D0]">MasterMade Shito and Tom Brown—made locally, packed with character, ready for the everyday.</p></div>
              <div className="absolute -bottom-14 -right-8 size-44 rounded-full border border-[#EC6959]" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-10">
        <div className="relative h-[430px] overflow-hidden rounded-[2rem] bg-[#E8D9B7] image-zoom">
          <img src={images.shitoPouch} alt="Front and back view of a MasterMade Hot Shito pouch" className="h-full w-full object-cover" />
          <span className="absolute left-5 top-5 rounded-full bg-[#F0B429] px-3 py-2 font-mono-label text-[9px] font-bold uppercase tracking-[.14em] text-[#0B493A]">Shelf favourite</span>
        </div>
        <div>
          <SectionKicker>From our kitchen</SectionKicker>
          <SectionTitle className="mt-5 max-w-lg">A little heat changes everything.</SectionTitle>
          <p className="mt-6 max-w-md leading-7 text-[#567368]">MasterMade Shito is our rich, savoury answer to the “something is missing” moment. Spoon it over rice, banku, yam or whatever is already on the plate.</p>
          <div className="mt-8 grid gap-3 border-t border-[#D8CDB7] pt-5 text-sm font-semibold text-[#214E41] sm:grid-cols-2">
            <span className="flex items-center gap-2"><Check size={16} className="text-[#D9342B]" /> Bold, balanced heat</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-[#D9342B]" /> Made for sharing</span>
          </div>
          <Link href="/foods" className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#D9342B] px-6 py-3.5 text-sm font-bold text-[#FFF8E9]" data-testid="link-home-shito">
            See the food range <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="mx-5 mb-20 overflow-hidden rounded-[2rem] bg-[#F0B429] md:mx-8 lg:mx-auto lg:mb-28 lg:max-w-7xl lg:px-10">
        <div className="grid items-center gap-8 px-7 py-12 md:grid-cols-[1fr_auto] md:px-12 md:py-14">
          <div><SectionKicker>Have a brief? A craving? Both?</SectionKicker><h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-[#0B493A] md:text-5xl">Let’s make the next move a good one.</h2></div>
          <Link href="/contact" className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#0B493A] px-6 py-3.5 text-sm font-bold text-[#FFF8E9]" data-testid="link-home-contact">Start here <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
        </div>
      </section>
    </PageShell>
  );
}

const techServices = [
  { icon: Code2, title: 'Web development', copy: 'Clear, credible websites that help customers find you, trust you and take the next step.' },
  { icon: Layers3, title: 'App development', copy: 'Purpose-built apps for the moments where a simple process can become a better experience.' },
  { icon: Settings2, title: 'IT setup & support', copy: 'Get your team set up with the devices, software and practical guidance to keep work moving.' },
  { icon: Network, title: 'Networking', copy: 'Reliable connections for offices, teams and the day-to-day work that keeps your business going.' },
  { icon: Hammer, title: 'Hardware repair', copy: 'Thoughtful diagnosis and repair for the equipment your business depends on.' },
  { icon: Palette, title: 'Software & UI/UX design', copy: 'Useful interfaces and considered software experiences that people enjoy returning to.' },
];

function TechServices() {
  return (
    <PageShell>
      <section className="bg-[#0B493A] px-5 py-20 text-[#FFF8E9] md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.78fr] lg:items-end">
          <div className="reveal"><SectionKicker light>MasterMade / technology</SectionKicker><h1 className="mt-6 max-w-3xl font-display text-6xl font-semibold leading-[.9] tracking-[-.05em] sm:text-7xl md:text-[7rem]">Make work <span className="text-[#F0B429]">flow.</span></h1></div>
          <div className="reveal delay-2"><p className="max-w-md text-lg leading-8 text-[#C7D5C9]">Practical technology services for businesses that are ready to look sharper, work faster and grow with confidence.</p><Link href="/contact?service=Tech%20Services" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#D9342B] px-6 py-3.5 text-sm font-bold text-[#FFF8E9]" data-testid="link-tech-hero-quote">Discuss your project <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl border-t border-[#2F6252] pt-5"><div className="flex items-center gap-3 font-mono-label text-[10px] uppercase tracking-[.18em] text-[#9FB8A7]"><span className="size-2 rounded-full bg-[#F0B429]" /> Built around the way you actually work</div></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><SectionKicker>What we do</SectionKicker><SectionTitle className="mt-5 max-w-sm">No jargon. Just useful.</SectionTitle><p className="mt-6 max-w-sm leading-7 text-[#567368]">We listen first, then build the clearest answer to the problem in front of you. Start with one service or bring us the full picture.</p></div>
          <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
            {techServices.map(({ icon: Icon, title, copy }, index) => <article key={title} className="lift rounded-[1.4rem] border border-[#D8CDB7] bg-[#FFF9EC] p-6" data-testid={`card-service-${index}`}><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-xl bg-[#E6F0E5] text-[#0B493A]"><Icon size={21} /></span><span className="font-mono-label text-[10px] text-[#9A8E78]">0{index + 1}</span></div><h3 className="mt-9 font-display text-2xl font-semibold text-[#0B493A]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#567368]">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#E8D9B7] px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionKicker>How we work</SectionKicker><SectionTitle className="mt-5 max-w-2xl">A straight line from “we need help” to “that works.”</SectionTitle></div><span className="font-mono-label text-[10px] uppercase tracking-[.16em] text-[#6A7764]">The MasterMade method</span></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-[#CFC1A3] bg-[#CFC1A3] md:grid-cols-3">
            {[['01', 'Listen properly', 'We learn the business, the people and the pinch points before recommending anything.'], ['02', 'Build the right-sized answer', 'No unnecessary layers. We make the solution clear, useful and ready for real life.'], ['03', 'Stay in your corner', 'Good work should keep working. We make it easy to ask questions, improve and move forward.']].map(([number, title, copy]) => <div key={number} className="bg-[#F2E8D2] p-7 md:p-9"><span className="font-mono-label text-xs text-[#D9342B]">{number}</span><h3 className="mt-14 font-display text-3xl font-semibold text-[#0B493A]">{title}</h3><p className="mt-4 text-sm leading-6 text-[#567368]">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_.85fr] lg:items-center lg:px-10">
        <div><SectionKicker>For the owner with a to-do list</SectionKicker><SectionTitle className="mt-5 max-w-xl">You know where you want to go. We help clear the road.</SectionTitle><p className="mt-6 max-w-lg leading-7 text-[#567368]">Whether you need a first website, a smoother internal tool or help getting the basics right, we meet you where the business is today—and build for where it is heading.</p><Link href="/contact?service=Tech%20Services" className="group mt-8 inline-flex items-center gap-3 border-b-2 border-[#D9342B] pb-2 text-sm font-bold text-[#0B493A]" data-testid="link-tech-contact">Tell us what’s stuck <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></div>
        <div className="relative rounded-[2rem] bg-[#0B493A] p-8 text-[#FFF8E9] md:p-10"><Quote size={42} className="text-[#F0B429]" /><p className="mt-8 font-display text-3xl leading-tight">“Good technology should feel like getting a capable extra pair of hands.”</p><div className="mt-9 border-t border-[#346756] pt-5 font-mono-label text-[10px] uppercase tracking-[.17em] text-[#A8C1AF]">Our working brief</div></div>
      </section>
    </PageShell>
  );
}

function ProductCard({ name, description, image, accent, testId }: { name: string; description: string; image: string; accent: string; testId: string }) {
  const [, setLocation] = useLocation();
  return <article className="group overflow-hidden rounded-[1.5rem] border border-[#D8CDB7] bg-[#FFF9EC]" data-testid={testId}>
    <div className={`relative h-72 overflow-hidden ${accent} image-zoom`}><img src={image} alt={`${name} by MasterMade`} className="h-full w-full object-cover" /><span className="absolute left-5 top-5 rounded-full bg-[#FFF9EC] px-3 py-1.5 font-mono-label text-[9px] font-bold uppercase tracking-[.13em] text-[#0B493A]">MasterMade foods</span></div>
    <div className="p-6 md:p-7"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-3xl font-semibold text-[#0B493A]">{name}</h3><span className="mt-1 grid size-9 place-items-center rounded-full border border-[#D8CDB7] text-[#D9342B]"><ArrowUpRight size={17} /></span></div><p className="mt-3 text-sm leading-6 text-[#567368]">{description}</p><div className="mt-7 flex flex-wrap gap-2"><button type="button" onClick={() => setLocation(`/contact?service=Food%20Order&product=${encodeURIComponent(name)}`)} className="rounded-full bg-[#D9342B] px-5 py-3 text-sm font-bold text-[#FFF8E9] transition-transform hover:-translate-y-0.5" data-testid={`button-order-${name.toLowerCase().replaceAll(' ', '-')}`}>Order now</button><button type="button" onClick={() => setLocation(`/contact?service=Food%20Order&product=${encodeURIComponent(name)}`)} className="rounded-full border border-[#BDAF93] px-5 py-3 text-sm font-bold text-[#0B493A] hover:bg-[#EFE4CE]" data-testid={`button-contact-${name.toLowerCase().replaceAll(' ', '-')}`}>Contact seller</button></div></div>
  </article>;
}

function Foods() {
  const [, setLocation] = useLocation();
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16 lg:grid-cols-[.88fr_1.12fr] lg:items-end lg:px-10">
        <div className="reveal"><SectionKicker>MasterMade / foods</SectionKicker><h1 className="mt-6 max-w-2xl font-display text-6xl font-semibold leading-[.9] tracking-[-.05em] text-[#0B493A] sm:text-7xl md:text-[7rem]">Made to be <span className="text-[#D9342B]">shared.</span></h1></div>
        <div className="reveal delay-2 max-w-md lg:pb-2"><p className="text-lg leading-8 text-[#567368]">Two pantry staples. One proud promise: good ingredients, generous flavour and a little more joy in the everyday.</p><div className="mt-6 flex items-center gap-3 font-mono-label text-[10px] uppercase tracking-[.18em] text-[#D9342B]"><span className="size-2 rounded-full bg-[#D9342B]" /> Locally made in Ghana</div></div>
      </section>
      <section className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10"><div className="grid gap-6 md:grid-cols-2"><ProductCard name="MasterMade Shito" description="Deep, savoury and properly lively. Our Hot Shito brings garlic, ginger, pepper and a rich oil base together for the spoonful your meal was waiting for." image={images.shito} accent="bg-[#D9342B]" testId="card-food-shito" /><ProductCard name="MasterMade Tom Brown" description="A comforting, nourishing blend made for warm mornings and easy family meals. Rich cereal goodness with a smooth, familiar taste." image={images.tomBrownClose} accent="bg-[#E5B72B]" testId="card-food-tom-brown" /></div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-10">
        <div className="grid grid-cols-[1.1fr_.9fr] gap-4">
          <div className="image-zoom overflow-hidden rounded-[1.7rem] bg-[#E8D9B7]"><img src={images.shitoPouch} alt="Front and back of the MasterMade Hot Shito pouch" className="h-[370px] w-full object-cover" /></div>
          <div className="mt-16 image-zoom overflow-hidden rounded-[1.7rem] bg-[#E8D9B7]"><img src={images.shitoAlt} alt="MasterMade Shito jar in a home setting" className="h-[310px] w-full object-cover" /></div>
        </div>
        <div><SectionKicker>01 / Shito</SectionKicker><SectionTitle className="mt-5">The jar that wakes up the plate.</SectionTitle><p className="mt-6 leading-7 text-[#567368]">Shito is a Ghanaian table essential for good reason. MasterMade’s version is rich and balanced, with enough heat to be exciting and enough depth to keep you coming back.</p><div className="mt-8 grid gap-3 border-y border-[#D8CDB7] py-5 text-sm font-semibold text-[#214E41]"><span className="flex items-center gap-2"><Check size={16} className="text-[#D9342B]" /> Delicious with rice, banku, kenkey and yam</span><span className="flex items-center gap-2"><Check size={16} className="text-[#D9342B]" /> Available in jar and Hot Shito pouch formats</span></div><button type="button" onClick={() => setLocation('/contact?service=Food%20Order&product=MasterMade%20Shito')} className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0B493A] px-6 py-3.5 text-sm font-bold text-[#FFF8E9]" data-testid="button-shito-order">Order Shito <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button></div>
      </section>

      <section className="bg-[#E8D9B7] px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="order-2 lg:order-1"><SectionKicker>02 / Tom Brown</SectionKicker><SectionTitle className="mt-5">Start warm. Stay nourished.</SectionTitle><p className="mt-6 leading-7 text-[#567368]">A comforting cup of Tom Brown turns a busy morning into a softer one. MasterMade’s special blend is made with quality ingredients and a familiar, satisfying taste.</p><div className="mt-8 flex flex-wrap gap-3"><span className="rounded-full border border-[#BBAE91] px-4 py-2 font-mono-label text-[10px] uppercase tracking-[.13em] text-[#214E41]">For the whole family</span><span className="rounded-full border border-[#BBAE91] px-4 py-2 font-mono-label text-[10px] uppercase tracking-[.13em] text-[#214E41]">Quality ingredients</span></div><button type="button" onClick={() => setLocation('/contact?service=Food%20Order&product=MasterMade%20Tom%20Brown')} className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#D9342B] px-6 py-3.5 text-sm font-bold text-[#FFF8E9]" data-testid="button-tom-brown-order">Order Tom Brown <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button></div>
          <div className="order-1 grid grid-cols-[.9fr_1.1fr] gap-4 lg:order-2"><div className="mt-12 image-zoom overflow-hidden rounded-[1.7rem] bg-[#D4B03B]"><img src={images.tomBrownShelf} alt="MasterMade Tom Brown jar surrounded by yellow pouches" className="h-[330px] w-full object-cover" /></div><div className="image-zoom overflow-hidden rounded-[1.7rem] bg-[#D4B03B]"><img src={images.tomBrown} alt="MasterMade Tom Brown pouches and jar on a shelf" className="h-[410px] w-full object-cover" /></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="grid items-center gap-10 rounded-[2rem] bg-[#0B493A] px-7 py-12 text-[#FFF8E9] md:grid-cols-[1fr_auto] md:px-12 md:py-14"><div><SectionKicker light>For homes, shops and thoughtful gifts</SectionKicker><h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">Bring MasterMade to your table—or your shelf.</h2><p className="mt-5 max-w-xl text-sm leading-6 text-[#C7D5C9]">Ask us about orders, availability and getting products to your corner of Ghana.</p></div><Link href="/contact?service=Food%20Order" className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#F0B429] px-6 py-3.5 text-sm font-bold text-[#0B493A]" data-testid="link-foods-contact">Contact seller <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></div>
      </section>
    </PageShell>
  );
}

function Contact() {
  const [location, setLocation] = useLocation();
  const query = new URLSearchParams(location.split('?')[1] || '');
  const initialService = query.get('service') || '';
  const product = query.get('product') || '';
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: initialService, message: product ? `I would like to order ${product}. Please share availability and delivery details.` : '' });
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  return (
    <PageShell>
      <section className="bg-[#0B493A] px-5 py-20 text-[#FFF8E9] md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end"><div><SectionKicker light>Start a conversation</SectionKicker><h1 className="mt-6 max-w-3xl font-display text-6xl font-semibold leading-[.9] tracking-[-.05em] sm:text-7xl md:text-[7rem]">Let’s make <span className="text-[#F0B429]">good work.</span></h1></div><p className="max-w-md text-lg leading-8 text-[#C7D5C9]">Tell us what you’re working on, what you need on the shelf, or what feels stuck. We’ll take it from there.</p></div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[.72fr_1.28fr] lg:px-10">
        <div>
          <SectionKicker>Find your starting point</SectionKicker><SectionTitle className="mt-5 max-w-sm">Clear ask, open door.</SectionTitle><p className="mt-6 max-w-sm leading-7 text-[#567368]">Use the form for a quick request. For the fastest response, include the context, timing and the outcome you have in mind.</p>
          <div className="mt-10 grid gap-5 border-t border-[#D8CDB7] pt-6 text-sm"><a href="mailto:hello@mastermade.example" className="flex items-start gap-4 text-[#214E41] hover:text-[#D9342B]" data-testid="link-contact-email"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#E6F0E5] text-[#0B493A]"><Mail size={18} /></span><span><strong className="block">Email</strong><span className="mt-1 block text-[#567368]">hello@mastermade.example</span></span></a><a href="tel:+233000000000" className="flex items-start gap-4 text-[#214E41] hover:text-[#D9342B]" data-testid="link-contact-phone"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#F7E0DA] text-[#D9342B]"><Phone size={18} /></span><span><strong className="block">Phone</strong><span className="mt-1 block text-[#567368]">+233 (0) 00 000 0000</span></span></a><div className="flex items-start gap-4 text-[#214E41]"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#F7EED0] text-[#0B493A]"><MapPin size={18} /></span><span><strong className="block">Based in</strong><span className="mt-1 block text-[#567368]">Accra, Ghana · exact address to be confirmed</span></span></div></div>
        </div>
        <div className="rounded-[1.7rem] border border-[#D8CDB7] bg-[#FFF9EC] p-6 shadow-[var(--shadow-sm)] md:p-9">
          {submitted ? <div className="flex min-h-[450px] flex-col items-center justify-center text-center"><span className="grid size-16 place-items-center rounded-full bg-[#E6F0E5] text-[#0B493A]"><Check size={30} /></span><h2 className="mt-7 font-display text-4xl font-semibold text-[#0B493A]">Request received.</h2><p className="mt-4 max-w-sm leading-7 text-[#567368]">Thanks, {form.name || 'there'}. This is a static preview, but your request is perfectly formed and ready for the MasterMade team.</p><button type="button" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', message: '' }); setLocation('/contact'); }} className="mt-8 rounded-full bg-[#0B493A] px-6 py-3.5 text-sm font-bold text-[#FFF8E9]" data-testid="button-send-another">Send another request</button></div> :
            <form onSubmit={submit} className="grid gap-6" noValidate><div><p className="font-mono-label text-[10px] uppercase tracking-[.18em] text-[#D9342B]">Request form</p><h2 className="mt-3 font-display text-4xl font-semibold text-[#0B493A]">What can we help with?</h2></div><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-[#214E41]">Name<input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" className="h-12 rounded-xl border border-[#D8CDB7] bg-[#F6EFDF] px-4 font-normal outline-none placeholder:text-[#9A8E78] focus:border-[#D9342B] focus:ring-2 focus:ring-[#D9342B]/20" data-testid="input-name" /></label><label className="grid gap-2 text-sm font-semibold text-[#214E41]">Email<input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@company.com" className="h-12 rounded-xl border border-[#D8CDB7] bg-[#F6EFDF] px-4 font-normal outline-none placeholder:text-[#9A8E78] focus:border-[#D9342B] focus:ring-2 focus:ring-[#D9342B]/20" data-testid="input-email" /></label></div><label className="grid gap-2 text-sm font-semibold text-[#214E41]">Service needed<div className="relative"><select required value={form.service} onChange={(e) => update('service', e.target.value)} className="h-12 w-full appearance-none rounded-xl border border-[#D8CDB7] bg-[#F6EFDF] px-4 font-normal outline-none focus:border-[#D9342B] focus:ring-2 focus:ring-[#D9342B]/20" data-testid="select-service"><option value="" disabled>Choose one</option><option value="Tech Services">Tech Services</option><option value="Food Order">Food Order</option></select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-3.5 text-[#567368]" /></div></label><label className="grid gap-2 text-sm font-semibold text-[#214E41]">Message<textarea required value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us a little about what you need..." rows={6} className="resize-none rounded-xl border border-[#D8CDB7] bg-[#F6EFDF] px-4 py-3 font-normal outline-none placeholder:text-[#9A8E78] focus:border-[#D9342B] focus:ring-2 focus:ring-[#D9342B]/20" data-testid="textarea-message" /></label><button type="submit" className="group flex h-13 items-center justify-center gap-3 rounded-full bg-[#D9342B] px-6 text-sm font-bold text-[#FFF8E9] transition-transform hover:-translate-y-0.5" data-testid="button-submit-quote">Request a quote <Send size={16} className="transition-transform group-hover:translate-x-1" /></button><p className="text-center text-xs text-[#8A8977]">We’ll use your details only to respond to this request.</p></form>}
        </div>
      </section>
    </PageShell>
  );
}

function ScrollReset() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location]);
  return null;
}

function Router() {
  return <><ScrollReset /><ErrorBoundary><Switch><Route path="/" component={Home} /><Route path="/tech-services" component={TechServices} /><Route path="/foods" component={Foods} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch></ErrorBoundary></>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;