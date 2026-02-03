
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hammer, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleSmartCall = (e: React.MouseEvent<HTMLAnchorElement>, phone: string) => {
    const isDesktop = window.innerWidth > 768;
    if (isDesktop) {
      e.preventDefault();
      scrollToSection(e, 'contact');
    }
    // On mobile, the default <a> behavior with tel: will trigger the dialer.
    if (!isDesktop) {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Diensten', id: 'diensten' },
    { name: 'Projecten', id: 'projecten' },
    { name: 'Over Ons', id: 'over-ons' },
    { name: 'Contact', id: 'contact' },
  ];

  const Logo = () => (
    <div className="flex flex-col items-center md:items-start select-none">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#009fe3] flex items-center justify-center rounded-sm">
          <Hammer className="text-white w-5 h-5 md:w-6 md:h-6 transform -rotate-12" />
        </div>
        <div className="text-2xl md:text-4xl font-black tracking-tighter text-white flex items-start">
          BOER<span className="text-zinc-400 text-xl md:text-2xl mt-1">²</span>
        </div>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#e30613] flex items-center justify-center rounded-sm">
          <Zap className="text-white w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
        </div>
      </div>
      <div className="text-[10px] md:text-[12px] font-bold tracking-[0.3em] text-zinc-400 mt-1 uppercase pl-1">
        Bouw & Installatie
      </div>
    </div>
  );

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 border-b border-zinc-800 shadow-2xl py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex items-center">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="font-bold uppercase text-[11px] tracking-[0.2em] text-zinc-400 transition-colors hover:text-white relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex items-center gap-3 pl-4 border-l border-zinc-800">
            <a
              href="tel:0647027152"
              onClick={(e) => handleSmartCall(e, '0647027152')}
              className="flex items-center gap-2 bg-[#009fe3] hover:bg-white hover:text-[#009fe3] text-white px-4 py-2 rounded-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-900/20"
            >
              <Phone size={12} />
              <span className="font-bold text-[9px] uppercase tracking-widest">Wim</span>
            </a>
            <a
              href="tel:0612609139"
              onClick={(e) => handleSmartCall(e, '0612609139')}
              className="flex items-center gap-2 bg-[#e30613] hover:bg-white hover:text-[#e30613] text-white px-4 py-2 rounded-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-900/20"
            >
              <Phone size={12} />
              <span className="font-bold text-[9px] uppercase tracking-widest">Mark</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white p-2" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-950 shadow-2xl animate-in slide-in-from-top duration-300 border-b border-zinc-800 h-screen overflow-y-auto">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-2xl font-black text-white border-b border-zinc-900 pb-4 hover:text-[#e30613] transition-colors uppercase tracking-tighter"
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.name}
              </a>
            ))}
            <div className="grid grid-cols-1 gap-4 pt-4">
              <a
                href="tel:0647027152"
                onClick={(e) => handleSmartCall(e, '0647027152')}
                className="bg-[#009fe3] text-white text-center py-5 rounded-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-transform"
              >
                <Phone size={20} /> Bel Wim (Bouw)
              </a>
              <a
                href="tel:0612609139"
                onClick={(e) => handleSmartCall(e, '0612609139')}
                className="bg-[#e30613] text-white text-center py-5 rounded-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-transform"
              >
                <Phone size={20} /> Bel Mark (Installatie)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
