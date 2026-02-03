
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-red-600 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Services Section */}
        <Services />

        {/* About Section */}
        <section id="over-ons" className="py-24 bg-black border-y border-zinc-900 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-zinc-900 p-2 rounded-sm transform translate-y-8 border-t-4 border-[#009fe3] transition-transform hover:translate-y-6 duration-500">
                    <img 
                      src="wim.jpg" 
                      alt="Wim Boer" 
                      className="rounded-sm shadow-2xl aspect-[4/5] object-cover" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&h=500&q=80";
                      }}
                    />
                    <div className="mt-4 p-2 text-center">
                      <div className="text-[#009fe3] font-black uppercase text-xs tracking-widest">Wim Boer</div>
                      <div className="text-zinc-500 text-[10px] uppercase font-bold">Bouw & Constructie</div>
                    </div>
                  </div>
                  <div className="bg-zinc-900 p-2 rounded-sm border-t-4 border-[#e30613] transition-transform hover:-translate-y-2 duration-500">
                    <img 
                      src="mark.jpg" 
                      alt="Mark den Boer" 
                      className="rounded-sm shadow-2xl aspect-[4/5] object-cover" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&h=500&q=80";
                      }}
                    />
                    <div className="mt-4 p-2 text-center">
                      <div className="text-[#e30613] font-black uppercase text-xs tracking-widest">Mark den Boer</div>
                      <div className="text-zinc-500 text-[10px] uppercase font-bold">Installatietechniek</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-[#e30613] font-bold uppercase tracking-[0.4em] text-sm mb-4">Onze Kracht</h2>
                <h3 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
                  BOER<span className="text-zinc-500">²</span>:<br />
                  TWEE MAN, <span className="text-[#009fe3]">ÉÉN MISSIE</span>
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  Boer² Bouw & Installatie is het resultaat van de krachtenbundeling tussen Wim Boer en Mark den Boer. Gevestigd in Linschoten, maar met een bereik door de hele regio, vormen wij een duo dat bouwkundige ervaring naadloos laat aansluiten op technische innovatie.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  De "²" in onze naam staat voor deze dubbele expertise. Wim focust op de solide basis en de constructie (Bouw), terwijl Mark zorgt voor de vitale systemen en de afwerking (Installatie). Samen garanderen wij een project dat van fundering tot meterkast klopt.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { label: "Locatie Linschoten", color: "bg-[#009fe3]" },
                    { label: "Wim Boer & Mark den Boer", color: "bg-[#e30613]" },
                    { label: "Korte Lijnen", color: "bg-[#009fe3]" },
                    { label: "Direct Contact", color: "bg-[#e30613]" },
                    { label: "Regionaal Actief", color: "bg-[#009fe3]" },
                    { label: "Totaaloplossing", color: "bg-[#e30613]" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color} animate-pulse`}></div>
                      <span className="font-bold text-xs uppercase tracking-[0.2em] text-zinc-200">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Werkwijze Section */}
        <section className="py-24 bg-zinc-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-[#009fe3] font-bold uppercase tracking-[0.4em] text-xs mb-4">Hoe wij werken</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">VAKMANSCHAP <span className="text-[#e30613]">IN VIER STAPPEN</span></h3>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Kennismaking", desc: "Wim of Mark komt persoonlijk langs om de situatie op te nemen en uw plannen te bespreken." },
                { title: "Scherpe Offerte", desc: "U ontvangt een heldere prijsopgave. Eerlijk en transparant, zoals u van ons mag verwachten." },
                { title: "Directe Uitvoering", desc: "Wij werken met korte lijnen. U weet precies wanneer we starten en wie er over de vloer komt." },
                { title: "Nette Oplevering", desc: "Wij zijn pas klaar als alles werkt en de werkplek weer blinkend schoon is." }
              ].map((step, i) => (
                <div key={i} className={`relative p-8 bg-zinc-900 border border-zinc-800 rounded-sm hover:border-${i % 2 === 0 ? '[#009fe3]' : '[#e30613]'} transition-all group`}>
                  <div className={`absolute -top-4 -left-4 w-10 h-10 ${i % 2 === 0 ? 'bg-[#009fe3]' : 'bg-[#e30613]'} flex items-center justify-center font-black text-xl shadow-lg`}>{i + 1}</div>
                  <h4 className="text-xl font-black mb-4 mt-2 text-white uppercase tracking-tight group-hover:text-white transition-colors">{step.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white py-16 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-[#009fe3] flex items-center justify-center rounded-sm">
                  <span className="text-[10px] font-black">B</span>
                </div>
                <span className="text-2xl font-black tracking-tighter">
                  BOER<span className="text-zinc-500">²</span>
                </span>
                <div className="w-6 h-6 bg-[#e30613] flex items-center justify-center rounded-sm">
                  <span className="text-[10px] font-black">I</span>
                </div>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-widest font-bold">
                Wim Boer & Mark den Boer.<br />
                Uw partner in Linschoten.
              </p>
            </div>
            <div>
              <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.3em] text-[#e30613]">Navigatie</h4>
              <ul className="space-y-3 text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
                <li><a href="#diensten" className="hover:text-[#009fe3] transition-colors">Diensten</a></li>
                <li><a href="#projecten" className="hover:text-[#e30613] transition-colors">Projecten</a></li>
                <li><a href="#over-ons" className="hover:text-[#009fe3] transition-colors">Over Ons</a></li>
                <li><a href="#contact" className="hover:text-[#e30613] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.3em] text-[#009fe3]">Contact</h4>
              <ul className="space-y-3 text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
                <li>Wim: 06 4702 7152</li>
                <li>Mark: 06 1260 9139</li>
                <li>info@boer2.nl</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.3em] text-zinc-600">Locatie</h4>
              <ul className="space-y-3 text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
                <li>Molentocht 8</li>
                <li>3461 JB Linschoten</li>
                <li>Utrecht & Omstreken</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-700 text-[9px] uppercase tracking-[0.4em] font-black">
            <div>&copy; {new Date().getFullYear()} BOER² BOUW & INSTALLATIE</div>
            <div className="mt-4 md:mt-0 flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Voorwaarden</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;
