
import React from 'react';
import { ChevronRight, Hammer, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 bg-black">
      {/* Achtergrond met de bedrijfsbus */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bedrijfsbus.jpg"
          alt="Boer2 Bedrijfsbus"
          className="w-full h-full object-cover object-center brightness-[0.45] transition-opacity duration-1000"
          onError={(e) => {
            // Als de foto nog niet gevonden is, tonen we een professionele placeholder
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1620215175664-cb8617300137?auto=format&fit=crop&w=2400&q=80";
          }}
        />
        {/* Gradients voor leesbaarheid en diepte */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="w-12 h-12 bg-[#009fe3] flex items-center justify-center rounded-sm shadow-xl">
              <Hammer className="text-white w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-[#e30613] flex items-center justify-center rounded-sm shadow-xl">
              <Zap className="text-white w-6 h-6" fill="currentColor" />
            </div>
            <div className="h-10 w-px bg-zinc-800 hidden sm:block"></div>
            <div className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-xs hidden sm:block">
              Linschoten Regionaal
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white leading-none mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 tracking-tighter">
            BOER<span className="text-zinc-600">²</span><br />
            <span className="text-[#e30613]">VAK</span>MANSCHAP
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-300 mb-10 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Wim Boer & Mark den Boer. De perfecte optelsom van <span className="text-[#009fe3] font-bold">Bouw</span> en <span className="text-[#e30613] font-bold">Installatie</span>. 
            Eerlijk advies, direct contact en resultaat dat staat als een huis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#e30613] hover:bg-[#009fe3] text-white px-10 py-5 rounded-sm font-black text-sm flex items-center justify-center gap-3 transition-all uppercase tracking-widest shadow-2xl shadow-red-900/40"
            >
              Project starten <ChevronRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('over-ons')}
              className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-sm font-black text-sm border border-white/10 transition-all uppercase tracking-widest backdrop-blur-md"
            >
              Maak kennis
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-8 animate-in fade-in duration-1000">
        <div className="flex flex-col items-end">
          <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Bouw Specialist</div>
          <div className="text-xl font-black text-[#009fe3]">Wim Boer</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Technisch Expert</div>
          <div className="text-xl font-black text-[#e30613]">Mark den Boer</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
