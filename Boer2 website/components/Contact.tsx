
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-red-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 uppercase tracking-tighter">Direct contact</h3>
            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
              Heeft u vragen of wilt u een afspraak maken? U kunt Wim of Mark direct bereiken op hun mobiele nummer of ons een bericht sturen via het formulier.
            </p>

            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-5">
                  <div className="bg-zinc-800 p-4 rounded-sm text-red-600">
                    <User size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase tracking-wider text-xs mb-1">Wim Boer</div>
                    <a href="tel:0647027152" className="text-zinc-400 font-medium hover:text-white transition-colors">06 4702 7152</a>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-zinc-800 p-4 rounded-sm text-blue-500">
                    <User size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase tracking-wider text-xs mb-1">Mark den Boer</div>
                    <a href="tel:0612609139" className="text-zinc-400 font-medium hover:text-white transition-colors">06 1260 9139</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-zinc-800 p-4 rounded-sm text-zinc-400">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold text-white uppercase tracking-wider text-sm mb-1">E-mail ons</div>
                  <div className="text-zinc-400 font-medium">info@boer2.nl</div>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-zinc-800 p-4 rounded-sm text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold text-white uppercase tracking-wider text-sm mb-1">Adres</div>
                  <div className="text-zinc-400 font-medium">Molentocht 8, 3461 JB Linschoten</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-zinc-950 p-8 md:p-12 rounded-sm shadow-2xl border border-zinc-800">
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Bericht of offerte-aanvraag</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Naam</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-sm bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">E-mail</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-sm bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700"
                      placeholder="e-mail@adres.nl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Betreft</label>
                  <select className="w-full px-4 py-3 rounded-sm bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-red-600 transition-all appearance-none">
                    <option>Bouw & Renovatie</option>
                    <option>Installatietechniek</option>
                    <option>Verduurzaming</option>
                    <option>Elektrawerk</option>
                    <option>Vraag over project</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Bericht</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-sm bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700"
                    placeholder="Uw vraag of omschrijving van de klus..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-blue-600 text-white py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-3 transition-all uppercase tracking-[0.2em]"
                >
                  Verzenden <Send size={20} />
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-900/30 text-green-400 border border-green-800 rounded-sm text-center font-bold text-sm uppercase tracking-wider animate-in fade-in">
                    Bedankt voor uw bericht! Wim of Mark neemt zo spoedig mogelijk contact op.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
