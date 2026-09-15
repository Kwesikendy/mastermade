import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ShieldCheck, MonitorSmartphone, Headset, Globe2, Code2, Server, Hammer, ArrowRight, MessageCircle, Network, Mail, CheckCircle2, Menu, X } from 'lucide-react';

// ==========================================
// UTILS & CONSTANTS
// ==========================================
const GLASS_CLASSES = "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// ==========================================
// SECTIONS
// ==========================================

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#022c22]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/assets/mastermade_1789311852714-removebg-preview.png" alt="MasterMade Logo" className="h-10 w-auto rounded-sm" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-emerald-50">
          <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#pantry" className="hover:text-amber-400 transition-colors">Pantry</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          <a href="#contact" className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] text-white rounded-full transition-all font-semibold text-sm">
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#064e3b] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-emerald-50 font-semibold">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-amber-400 transition-colors py-2 border-b border-white/5">Services</a>
              <a href="#pantry" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-amber-400 transition-colors py-2 border-b border-white/5">Pantry</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-amber-400 transition-colors py-2 border-b border-white/5">Contact</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-block mt-2 px-6 py-3 bg-emerald-500 text-white rounded-full text-center transition-all">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#020617] relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
        
        {/* Left Column (Text) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-20"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6 text-amber-400 font-bold tracking-widest text-xs uppercase border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
            MasterMade Enterprise
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-tight tracking-tight mb-6 text-white">
            Technology Solutions Built Around <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">Your Business</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-emerald-50/70 mb-10 max-w-xl leading-relaxed">
            Delivering robust infrastructure, scalable development, and seamless hardware solutions tailored for modern corporate enterprises.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a href="#services" className="bg-gradient-to-r from-emerald-500 to-green-400 text-white px-8 py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all flex items-center gap-2">
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="bg-white/5 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column (Realistic Devices Mockups) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-16 md:mt-0"
        >
          {/* Glowing Anchor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[350px] lg:w-[500px] h-[250px] md:h-[350px] lg:h-[500px] bg-emerald-400/20 blur-[60px] md:blur-[100px] rounded-full z-0 pointer-events-none" />
          
          <motion.img 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src="/assets/monitor-mockup-removebg-preview.png" 
            alt="Monitor Mockup"
            className="absolute top-0 right-0 md:top-4 md:right-4 lg:right-12 w-[240px] md:w-[350px] lg:w-[500px] z-10 drop-shadow-2xl transition-transform duration-700 hover:scale-105" 
          />
          <motion.img 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            src="/assets/laptop-mockup.png" 
            alt="Laptop Mockup"
            className="absolute bottom-8 left-0 md:bottom-10 md:-left-4 lg:-left-16 lg:bottom-12 w-[200px] md:w-[300px] lg:w-[480px] z-20 drop-shadow-2xl transition-transform duration-700 hover:scale-105" 
          />
          <motion.img 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            src="/assets/phone-mockup-removebg-preview.png" 
            alt="Phone Mockup"
            className="absolute bottom-10 right-4 md:bottom-12 md:right-12 lg:bottom-16 lg:right-24 w-[75px] md:w-[110px] lg:w-[150px] z-30 drop-shadow-2xl transition-transform duration-700 hover:-translate-y-4" 
          />
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: <Server />, text: "Reliable Infrastructure" },
    { icon: <Hammer />, text: "Expert Installation" },
    { icon: <Headset />, text: "Ongoing Support" },
    { icon: <Globe2 />, text: "Your Success Our Priority" }
  ];

  return (
    <section className="bg-emerald-900 text-white py-8 relative z-20 border-b border-emerald-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-between gap-6 md:gap-4">
          {items.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="flex items-center gap-3 text-emerald-50"
            >
              <div className="p-2 bg-white/5 rounded-lg text-amber-400 shrink-0">{item.icon}</div>
              <span className="text-xs md:text-sm font-semibold tracking-wide">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreServices() {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="inline-block mb-6 text-emerald-600 font-bold tracking-widest text-xs uppercase bg-emerald-50 px-4 py-1.5 rounded-full">
            SOFTWARE & IT SOLUTIONS
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-6">
            Powerful Solutions for Greater Efficiency
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed mb-8">
            We streamline your operations by offering end-to-end technology services. From crafting bespoke web and mobile applications to deploying solid office networks, we build what works.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
              <span className="font-semibold text-slate-700">Custom Software</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
              <span className="font-semibold text-slate-700">Web Applications</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
              <span className="font-semibold text-slate-700">IT Setup</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
              <span className="font-semibold text-slate-700">Network Infrastructure</span>
            </div>
          </motion.div>

          <motion.a variants={fadeInUp} href="#contact" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold shadow-lg shadow-emerald-500/30 transition-all inline-block">
            Explore Solutions
          </motion.a>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full"></div>
          
          <img 
            src="/assets/software-dashboard.png" 
            alt="Software Dashboard" 
            className="w-full shadow-2xl rounded-2xl border border-slate-200 relative z-10" 
          />

          {/* Floating Tablet */}
          <motion.img 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src="/assets/tablet.png" 
            alt="Tablet Mockup"
            className="absolute -bottom-10 -left-6 md:-left-12 w-[140px] md:w-[200px] lg:w-[240px] z-20 drop-shadow-2xl transition-transform duration-700 hover:scale-105" 
          />

          {/* Floating Phone */}
          <motion.img 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            src="/assets/phone-mockup-removebg-preview.png" 
            alt="Phone Mockup"
            className="absolute -top-8 -right-4 md:-right-8 lg:-right-12 w-[80px] md:w-[120px] lg:w-[150px] z-20 drop-shadow-2xl transition-transform duration-700 hover:scale-105" 
          />
        </motion.div>

      </div>
    </section>
  );
}

function PantrySection() {
  return (
    <section id="pantry" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4 text-emerald-600 font-bold tracking-widest text-xs uppercase bg-emerald-50 px-4 py-1.5 rounded-full">
            Locally Crafted
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">MasterMade Pantry</motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl mx-auto">
            Beyond technology, we bring bold, authentic Ghanaian flavors to your table with our premium crafted goods.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {/* Shito */}
          <motion.div variants={fadeInUp} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-lg group">
            <div className="h-64 overflow-hidden relative bg-slate-200 flex items-center justify-center">
              <img src="/assets/shito_1789311845316.jpeg" alt="MasterMade Shito" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Premium Shito</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">A rich, deeply flavorful authentic Ghanaian hot black pepper sauce made with uncompromising quality.</p>
              <a href="https://wa.me/233595749197" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-bold shadow-md shadow-green-500/20 transition-all">
                <MessageCircle className="w-5 h-5" /> Order via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Tom Brown */}
          <motion.div variants={fadeInUp} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-lg group">
            <div className="h-64 overflow-hidden relative bg-slate-200 flex items-center justify-center">
              <img src="/assets/tombrown_1789311845317.jpeg" alt="MasterMade Tom Brown" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Classic Tom Brown</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">A nutritious, traditional roasted corn porridge mix, perfectly balanced for a hearty breakfast.</p>
              <a href="https://wa.me/233595749197" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-bold shadow-md shadow-green-500/20 transition-all">
                <MessageCircle className="w-5 h-5" /> Order via WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#012616] pt-24 pb-8 text-white relative border-t border-[#064e3b]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 mb-16">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold mb-6">Ready to Elevate<br/>Your Infrastructure?</motion.h2>
          <motion.p variants={fadeInUp} className="text-emerald-100/70 mb-10 max-w-md text-lg">
            Reach out to discuss how MasterMade Enterprise can architect the right solutions for your organization.
          </motion.p>
          
          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-xl font-bold text-amber-400">
              <Headset className="w-8 h-8 p-1.5 bg-white/5 rounded-lg" />
              0595749197
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-xl font-bold text-emerald-400">
              <Mail className="w-8 h-8 p-1.5 bg-white/5 rounded-lg" />
              amekudzisaacnewton@gmail.com
            </motion.div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring", damping: 20 }}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-emerald-100/70 mb-2">First Name</label>
                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-emerald-100/70 mb-2">Last Name</label>
                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-emerald-100/70 mb-2">Email Address</label>
              <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-emerald-100/70 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-emerald-100/50 mt-8">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src="/assets/mastermade_1789311852714-removebg-preview.png" alt="Logo" className="h-6 w-auto opacity-50 grayscale rounded-sm" />
          <span className="font-bold tracking-widest uppercase">MasterMade.</span>
        </div>
        <p>&copy; {new Date().getFullYear()} MasterMade Enterprise. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-slate-50 selection:bg-amber-400 selection:text-[#012616]">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <CoreServices />
        <PantrySection />
      </main>
      <Footer />
    </div>
  );
}