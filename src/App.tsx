import React, { useState } from 'react';
import { ShieldCheck, Phone } from 'lucide-react';

function App() {
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-[#111b21] text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-[#00a884] p-6 rounded-full shadow-lg shadow-[#00a884]/20">
            <ShieldCheck size={80} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">SafeTalk</h1>
          <p className="text-[#8696a0] text-lg">Sua comunicação, protegida.</p>
        </div>

        <div className="bg-[#202c33] p-8 rounded-2xl shadow-xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-[#e9edef]">Bem-vindo ao SafeTalk</h2>
            <p className="text-[#8696a0] text-sm">Insira seu número de telefone para começar.</p>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8696a0]">
              <Phone size={20} />
            </div>
            <input
              type="tel"
              placeholder="Seu número com DDD"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#2a3942] border-none rounded-xl py-4 pl-12 pr-4 text-[#e9edef] placeholder-[#8696a0] focus:ring-2 focus:ring-[#00a884] transition-all outline-none"
            />
          </div>

          <button className="w-full bg-[#00a884] hover:bg-[#06cf9c] text-[#111b21] font-bold py-4 rounded-xl transition-all transform active:scale-95 shadow-lg">
            AVANÇAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
