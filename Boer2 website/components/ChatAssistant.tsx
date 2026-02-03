
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { getGeminiAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hoi! Ik ben de virtuele assistent van Boer2. Hoe kunnen we je vandaag helpen met je bouw- of installatieproject?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await getGeminiAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="bg-zinc-950 w-[350px] md:w-[400px] h-[500px] rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-zinc-800 flex flex-col mb-4 overflow-hidden animate-in zoom-in-95 duration-200 origin-bottom-right">
          {/* Header */}
          <div className="bg-zinc-900 border-b border-zinc-800 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-2 rounded-sm shadow-inner">
                <Bot size={20} />
              </div>
              <div>
                <div className="font-bold text-sm uppercase tracking-widest">Boer<span className="text-red-600">2</span> Bot</div>
                <div className="text-[10px] text-zinc-500 flex items-center gap-1 uppercase font-bold">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Live Ondersteuning
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-zinc-950">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-sm text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-zinc-900 text-zinc-300 border border-zinc-800'}`}>
                  <span className="leading-relaxed">{msg.text}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-3 rounded-sm border border-zinc-800 flex gap-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse delay-150"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-900">
            <div className="relative flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Stel uw vraag..."
                className="flex-1 bg-zinc-950 border border-zinc-800 text-white pl-4 pr-10 py-3 rounded-sm focus:outline-none focus:border-blue-600 transition-all text-xs"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-red-600 p-3 rounded-sm text-white hover:bg-blue-600 disabled:opacity-30 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 hover:bg-blue-600 text-white p-4 rounded-sm shadow-2xl transition-all hover:scale-105 group border-2 border-white/5"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default ChatAssistant;