import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PartData {
  id: string;
  title: string;
  imageSrc: string;
  names: { 
    text: string; 
    isHighlighted?: boolean;
    isBold?: boolean;
    color?: string;
    isBreak?: boolean;
  }[];
  description?: string;
}

const PARTS_DATA: PartData[] = [
  {
    id: 'first',
    title: 'First',
    imageSrc: './first.jpg',
    names: [
      { text: '고한슬(59)' }, { text: '김율희(59)' }, { text: '안호성(59)' }, { text: '윤도현(55)' },
      { text: '', isBreak: true },
      { text: '송지민(51)' }, { text: '이서진(57)', isBold: true }, { text: '윤주희(57)', isBold: true, color: 'text-[#c5a880]' }, { text: '임지민(57)' },
      { text: '', isBreak: true },
      { text: '태유준(59)' }, { text: '김영훈(57)' }, { text: '윤준환(58)' }
    ],
    description: `가장 높고 선명한 목소리로 이야기를 이끄는 사람들, 1st

클래식 기타 앙상블에서 퍼스트는 곡의 주선율을 중심으로 음악의 이야기를 이끌어가는 파트입니다. 무대의 공기를 가르며 가장 먼저 귀에 닿는 높은 선율을 맡는 만큼, 맑은 음색과 정교한 테크닉, 그리고 섬세한 표현이 함께 요구되는 자리이기도 합니다.

이번 정기연주회에서는 클래식 기타의 매력에 첫발을 내디딘 신입생 4명과 든든하게 중심을 잡아준 기존 부원 7명, 총 11명의 연주자가 퍼스트의 선율을 함께 만들었습니다. 서로 다른 연주 습관과 음색을 하나로 모으기 위해 한 음 한 음의 뉘앙스를 맞추고, 보다 맑고 깨끗한 소리를 만들어 내기 위해 긴 여름 동안 끊임없이 기타를 마주했습니다.

열한 대의 기타가 하나의 선율로 이어지는 순간, 그 안에 담긴 고민과 노력까지 함께 전해지기를 바랍니다. 때로는 섬세하게, 때로는 힘차게 곡의 이야기를 이끌어갈 퍼스트의 목소리에 귀 기울여 주세요.`
  },
  {
    id: 'second',
    title: 'Second',
    imageSrc: './second.jpg',
    names: [
      { text: '최혁준(51)' }, { text: '윤채원(59)' }, { text: '김성주(59)' }, { text: '김규아(59)' }, { text: '박성하(58)', isBold: true },
      { text: '', isBreak: true },
      { text: '최민정(57)', isBold: true, color: 'text-[#c5a880]' },
      { text: '', isBreak: true },
      { text: '이은우(58)' }, { text: '양윤지(57)' }, { text: '정재호(55)' }, { text: '김동헌(59)' }, { text: '오창완(59)' }
    ],
    description: `서로 다른 색으로 완성하는 단단한 화음, 2nd

세컨드는 저마다의 색깔이 선명한 사람들이 모여, 그만큼 다채로운 음악을 만들어 내는 파트입니다. 든든한 음량으로 중심을 잡아주는 혁준, 자신만의 박자로 당당히 나아가는 채원, 자유로운 에너지로 연습실을 채우는 성주까지. 세컨드가 모이는 곳에는 언제나 웃음과 활기가 함께했습니다.

뒤늦게 존재감을 드러낸 숨은 에이스 규아, 세컨드를 이끄는 든든한 대장 민정, 언제나 포스로의 탈출 기회를 엿보는 은우도 빠질 수 없습니다. 한마디로 분위기를 살리는 윤지와 설명이 필요 없는 ‘재호재호 정재호’까지, 서로 너무 달라서 오히려 세컨드다운 색깔이 완성되었습니다.

물론 음악 앞에서는 그 개성들이 종종 만만치 않은 숙제가 되기도 했습니다. 박자와 매번 새로운 관계를 맺는 성하, 빈틈만 보이면 템포를 끌어올리는 동헌, 정신을 차려 보면 어느새 앞서 나가 있는 창완까지. 수없이 엇갈리고 다시 맞춰가는 과정 끝에, 각자의 소리는 조금씩 하나의 음악 안에 자리를 잡아갔습니다.

잘하는 것도, 좋아하는 것도, 연주하는 방식도 제각각이라 가끔은 삐걱거리지만, 그래서 더욱 예상치 못한 아름다운 순간을 만들어 내는 사람들. 세컨드만의 유쾌하고 단단한 화음을 즐겨주시길 바랍니다.

P.S. 강철 세컨드는 오늘도 뇌에 힘을 주고 기타를 칩니다.`
  },
  {
    id: 'third',
    title: 'Third',
    imageSrc: './third.png',
    names: [
      { text: '황수아(59)' }, { text: '이규연(56)', isBold: true, color: 'text-[#c5a880]' }, { text: '최우성(59)' }, { text: '이서영(59)' },
      { text: '', isBreak: true },
      { text: '이해찬(56)' }, { text: '문경후(58)' }, { text: '김동하(58)', isBold: true }, { text: '이영민(58)' },
      { text: '', isBreak: true },
      { text: '노윤지(59)' }, { text: '김효림(57)' }, { text: '이재호(59)' }
    ],
    description: `유쾌함 속에서 가장 깊은 소리를 만드는 사람들, 3rd

동아리에서도 손꼽히는 외향인들이 모인 써드는 연주회 준비 기간 내내 합주단의 든든한 분위기메이커였습니다. 웃음이 끊이지 않는 사람들이지만, 연습이 시작되는 순간만큼은 누구보다 진지하게 기타와 마주하는 반전의 파트이기도 합니다.

써드가 맡은 단단한 저음과 드롭 D 튜닝의 묵직한 베이스, 그리고 곳곳에서 모습을 드러내는 섬세한 서브 멜로디는 이번 합주의 색채를 만드는 중요한 요소입니다. 서정적인 선율과 거친 에너지가 교차하는 <베토벤의 다섯 가지 비밀>부터, 경쾌한 리듬 속에서 쉼 없이 앞으로 달려가는 <세비야의 이발사>까지, 쉽지 않은 리듬과 변화를 자연스럽게 소화하기 위해 많은 시간을 함께 보냈습니다.

가장 유쾌한 사람들이 만들어 내는 가장 깊고 진중한 소리. 웃음 뒤에 숨겨 두었던 써드의 묵직한 매력을 오늘 무대에서 만나보시길 바랍니다.`
  },
  {
    id: 'fourth',
    title: 'Fourth',
    imageSrc: './fourth.png',
    names: [
      { text: '서정주(57)' }, { text: '박은수(59)' }, { text: '공경배(52)' }, { text: '위준서(58)', isBold: true, color: 'text-[#c5a880]' }, { text: '문소영(58)', isBold: true },
      { text: '', isBreak: true },
      { text: '정예은(59)' }, { text: '정원지(57)' }, { text: '윤소희(59)' }, { text: '이준한(59)' },
      { text: '', isBreak: true },
      { text: '김도형(57)' }, { text: '김예림(58)' }
    ],
    description: `묵직한 베이스부터 화려한 멜로디까지, 4th

곡의 바닥을 단단하게 받치는 베이스부터 어느 순간 관객의 귀를 사로잡는 선명한 멜로디까지. 하나의 역할에 머물지 않고 음악 곳곳을 자유롭게 누비는 사람들, 일명 ‘포켓몬 마스터’, 줄여서 ‘포스’가 무대에 오릅니다.

때로는 가장 낮은 곳에서 곡의 중심을 붙잡고, 때로는 앞으로 나서 선율을 이끌며 포스는 합주에서 가장 넓은 역할을 오갑니다. 곡마다 달라지는 역할과 음역에 적응하고, 그때마다 필요한 소리를 만들어 내기 위해 각자의 자리에서 꾸준히 연주를 다듬어 왔습니다.

한 파트 안에서 베이스와 멜로디를 넘나드는 만큼, 포스의 재미는 한 가지 모습으로 설명하기 어렵습니다. 클래식 기타 한 대가 보여줄 수 있는 넓은 음역과 다양한 표정을 포스의 연주 속에서 찾아보시길 바랍니다.

베이스도, 멜로디도, 무대도 놓치지 않는 포스.
연주회, 넌 내꺼야~!`
  }
];

export const PartPhotosSection: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<PartData | null>(null);

  return (
    <section className="py-12 px-4 sm:px-6 bg-[#0a0a0b] relative border-t border-[#222]">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* 1 Column Stack for Parts */}
        <div className="grid grid-cols-1 gap-12 md:gap-16 max-w-2xl mx-auto">
          {PARTS_DATA.map((part) => (
            <div key={part.id} className="flex flex-col items-center">
              {/* Title */}
              <h3 className="font-serif-classic text-2xl font-bold text-[#e4e2e1] mb-3 self-start md:self-center">
                {part.title}
              </h3>
              
              {/* Photo Card with Hover Effect */}
              <div 
                className="w-full aspect-[4/3] rounded-sm overflow-hidden border border-[#c5a880]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#111] cursor-pointer group relative"
                onClick={() => setSelectedPart(part)}
              >
                <img 
                  src={part.imageSrc} 
                  alt={`${part.title} Part`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm tracking-wider uppercase border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    크게 보기
                  </span>
                </div>
              </div>

              {/* Names List */}
              <div className="mt-4 flex flex-wrap justify-center gap-x-2 gap-y-1 max-w-[90%]">
                {part.names.map((nameObj, idx) => {
                  if (nameObj.isBreak) return <div key={idx} className="w-full h-0 basis-full" />;

                  let textClass = 'text-[#c0b9b6]';
                  if (nameObj.color) textClass = nameObj.color;
                  else if (nameObj.isHighlighted) textClass = 'text-[#e97a3a]';

                  let weightClass = 'font-normal';
                  if (nameObj.isBold || nameObj.isHighlighted) weightClass = 'font-bold';

                  return (
                    <span 
                      key={idx} 
                      className={`text-[12px] sm:text-[13px] font-sans ${textClass} ${weightClass}`}
                    >
                      {nameObj.text}
                    </span>
                  );
                })}
              </div>

              {/* Part Description */}
              {part.description && (
                <div className="mt-3 max-w-[90%] border-t border-[#333] pt-3">
                  <p className="text-[12px] sm:text-[13px] text-[#9a918c] font-sans text-center leading-relaxed whitespace-pre-line">
                    {part.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Modal View (Image Lightbox) */}
      {selectedPart && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedPart(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedPart(null)}
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <img 
            src={selectedPart.imageSrc} 
            alt={`${selectedPart.title} Part`} 
            className="w-full max-w-5xl max-h-[90vh] object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
