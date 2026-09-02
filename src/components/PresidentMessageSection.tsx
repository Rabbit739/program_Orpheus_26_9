import React from 'react';

export const PresidentMessageSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#0a0a0b] relative border-t border-[#222]">
      <div className="max-w-md mx-auto relative z-10 text-center">
        <h2 className="font-serif-classic text-xl font-bold text-[#fcf8f7] tracking-wider mb-8">
          회장단 인사말
        </h2>
        
        <div className="mb-6">
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden border border-[#c5a880]/40 shadow-2xl relative bg-[#1c1b1b]">
            <img 
              src="./Excutive.jpeg" 
              alt="회장" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="font-serif text-lg font-bold text-[#c5a880] mb-1">
          오르페우스 회장단
        </h3>
        <p className="text-[11px] text-[#a8957c] font-sans mb-1">
          Executive of Orpheus
        </p>
        <p className="text-[12px] text-[#d4cfce] mb-6 font-sans">
          위준서, 김효림, 홍준혁, 송하영, 최승모
        </p>

        <div className="bg-[#151517] rounded-xl p-6 border border-[#222] shadow-inner text-left relative">
          <span className="text-[#c5a880] text-3xl font-serif absolute top-3 left-4 opacity-50">"</span>
          <div className="text-[13px] text-[#d4cfce] leading-relaxed font-sans px-4 pt-4 pb-2 relative z-10 break-keep">
            <p className="mb-4">뜨거웠던 여름이 지나고 어느덧 초가을의 문턱에 섰습니다. 오르페우스 제53회 정기연주회를 찾아주신 관객 여러분께 진심으로 감사드립니다.</p>
            <p className="mb-4">오르페우스에게 정기연주회는 한 해 동안 함께 나눈 음악과 시간을 한자리에 모아 여러분께 선보이는 뜻깊은 자리입니다. 각자의 일상 속에서 클래식 기타를 매개로 만나 함께 연습하고 웃으며 보낸 시간들이 오늘 하나의 무대로 이어지게 되었습니다.</p>
            <p className="mb-4">이번 연주회가 있기까지 무대 위의 연주자뿐 아니라 보이지 않는 곳에서 힘을 보태 준 많은 부원들과, 언제나 따뜻한 관심과 응원을 보내 주시는 동문 선배님들이 함께해 주셨습니다. 또한 귀한 시간을 내어 이 자리를 찾아주신 가족과 지인, 모든 관객 여러분께도 깊이 감사드립니다.</p>
            <p className="mb-4">저희가 정성껏 준비한 음악이 잠시나마 여러분의 일상에 여유와 즐거움을 더하고, 오늘 함께한 시간이 좋은 기억으로 남기를 바랍니다. 무대에 오르는 단원들에게 따뜻한 박수와 격려를 보내주시며 끝까지 함께 즐겨주시길 바랍니다.</p>
            <p className="mb-6">감사합니다.</p>
            <p className="text-right">58기 회장단 일동</p>
          </div>
          <span className="text-[#c5a880] text-3xl font-serif absolute bottom-0 right-4 opacity-50">"</span>
        </div>
      </div>
    </section>
  );
};
