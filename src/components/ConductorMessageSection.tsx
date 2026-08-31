import React from 'react';
import { ARTISTS } from '../data/concertData';

export const ConductorMessageSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#0a0a0b] relative border-t border-[#222]">
      <div className="max-w-md mx-auto relative z-10 text-center">
        <h2 className="font-serif-classic text-xl font-bold text-[#fcf8f7] tracking-wider mb-8">
          지휘자의 말
        </h2>
        
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#c5a880] shadow-lg">
            <img 
              src={ARTISTS.conductor.avatar} 
              alt={ARTISTS.conductor.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="font-serif text-lg font-bold text-[#c5a880] mb-1">
          {ARTISTS.conductor.name}
        </h3>
        <p className="text-[11px] text-[#a8957c] mb-6 font-sans">
          {ARTISTS.conductor.role}
        </p>

        <div className="bg-[#151517] rounded-xl p-6 border border-[#222] shadow-inner text-left relative">
          <span className="text-[#c5a880] text-3xl font-serif absolute top-3 left-4 opacity-50">"</span>
          <p className="text-[13px] text-[#d4cfce] leading-relaxed font-sans whitespace-pre-line px-4 pt-4 pb-2 relative z-10">
            여기에 지휘자의 인사말이 들어갈 예정입니다.
            이번 연주회를 준비하며 단원들과 함께 나눈 열정, 
            그리고 관객분들께 전하고 싶은 따뜻한 메시지를 담을 공간입니다.
          </p>
          <span className="text-[#c5a880] text-3xl font-serif absolute bottom-0 right-4 opacity-50">"</span>
        </div>
      </div>
    </section>
  );
};
