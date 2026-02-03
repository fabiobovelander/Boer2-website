
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  // Fallback afbeeldingen voor als de gebruiker nog geen project1.jpg etc heeft geupload
  const fallbacks: Record<string, string> = {
    '1': 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
    '2': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    '3': 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <section id="projecten" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[#009fe3] font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl font-extrabold text-white mb-0 uppercase tracking-tighter leading-none">
              GEREALISEERD <span className="text-[#e30613]">VAKWERK</span>
            </h3>
          </div>
          <a 
            href="#contact" 
            className="bg-white text-black px-6 py-3 rounded-sm font-bold hover:bg-[#e30613] hover:text-white transition-all uppercase tracking-widest text-sm"
          >
            Uw project hier?
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-zinc-900 border border-zinc-800">
              <div className="aspect-[4/3] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbacks[project.id];
                  }}
                />
              </div>
              <div className="p-8 border-t border-zinc-800">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${parseInt(project.id) % 2 === 0 ? 'bg-[#e30613]' : 'bg-[#009fe3]'}`}></span>
                  <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-xl font-black mb-3 text-white uppercase tracking-tight">{project.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm translate-y-4 group-hover:translate-y-0">
                <div className={`w-12 h-1 ${parseInt(project.id) % 2 === 0 ? 'bg-[#e30613]' : 'bg-[#009fe3]'} mb-6`}></div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{project.title}</h4>
                <p className="mb-8 text-zinc-400 text-sm italic">"{project.description}"</p>
                <button className={`border-2 ${parseInt(project.id) % 2 === 0 ? 'border-[#e30613] text-[#e30613]' : 'border-[#009fe3] text-[#009fe3]'} px-6 py-2 rounded-sm font-black hover:bg-white hover:text-black hover:border-white transition-all uppercase tracking-widest text-xs`}>
                  Details Bekijken
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
