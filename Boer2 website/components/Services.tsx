
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';

const Services: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="diensten" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-[#009fe3] font-bold uppercase tracking-[0.4em] text-xs mb-4">Onze Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">BOUW & <span className="text-[#e30613]">INSTALLATIE</span></h3>
          <p className="text-zinc-500 text-lg md:text-xl font-medium">
            Door de combinatie van Wim's bouwkundige expertise en Mark's technische installatiekennis, bieden wij een alles-in-één oplossing voor uw woning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const IconComponent = ICON_MAP[service.icon];
            const isInstallatie = service.id === 'installatie' || service.id === 'elektra' || service.id === 'duurzaam';
            const themeColor = isInstallatie ? 'border-[#e30613] group-hover:bg-[#e30613]' : 'border-[#009fe3] group-hover:bg-[#009fe3]';
            const iconBg = isInstallatie ? 'bg-red-950/30' : 'bg-blue-950/30';
            const iconColor = isInstallatie ? 'text-[#e30613]' : 'text-[#009fe3]';

            return (
              <div
                key={service.id}
                className="p-10 border border-zinc-800 rounded-sm bg-zinc-950 transition-all hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none transform translate-x-12 -translate-y-12`}>
                   {IconComponent && <IconComponent className={`w-full h-full ${iconColor}`} />}
                </div>

                <div className={`mb-8 w-14 h-14 rounded-sm flex items-center justify-center transition-all duration-500 bg-zinc-900 group-hover:bg-white`}>
                  {IconComponent && <IconComponent className={`w-7 h-7 ${iconColor} group-hover:text-black`} />}
                </div>
                <h4 className="text-xl font-black mb-4 text-white uppercase tracking-tight">{service.title}</h4>
                <p className="text-zinc-500 leading-relaxed mb-8 text-sm font-medium group-hover:text-zinc-300">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  onClick={scrollToContact}
                  className={`font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-2 transition-all ${isInstallatie ? 'text-[#e30613]' : 'text-[#009fe3]'} hover:gap-4`}
                >
                  Project starten <span>→</span>
                </a>
                
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-zinc-800 transition-all ${idx % 2 === 0 ? 'group-hover:bg-[#009fe3]' : 'group-hover:bg-[#e30613]'}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
