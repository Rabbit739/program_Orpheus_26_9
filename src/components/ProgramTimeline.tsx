import React, { useState } from 'react';
import { Coffee, Info, User, Image, X } from 'lucide-react';
import { ARTISTS, PROGRAM_PARTS } from '../data/concertData';
import { Artist } from '../types';

interface ProgramTimelineProps {
  onSelectArtist: (artist: Artist) => void;
}

export const ProgramTimeline: React.FC<ProgramTimelineProps> = ({ onSelectArtist }) => {
  const [isEnsembleModalOpen, setIsEnsembleModalOpen] = useState(false);
  const [isQuartet1ModalOpen, setIsQuartet1ModalOpen] = useState(false);
  const [isQuartet2ModalOpen, setIsQuartet2ModalOpen] = useState(false);

  return (
    <section id="program" className="py-12 px-4 bg-[#0e0e10] relative">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="font-serif-classic text-2xl sm:text-3xl font-medium text-[#fcf8f7] tracking-wider">
            Program
          </h2>
          <p className="text-xs text-[#a8957c] mt-1 font-sans">제 53회 오르페우스 정기연주회 연주 순서</p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8">
          {/* Vertical Connecting Timeline Line */}
          <div className="absolute left-[9px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-[#c5a880] via-[#725b38] to-[#c5a880]" />

          {/* ================= PART I: Chamber Ensembles ================= */}
          <div className="relative mb-12">
            {/* Timeline node */}
            <div className="absolute -left-[29px] top-5 w-4 h-4 rounded-full bg-[#c5a880] border-4 border-[#0e0e10] shadow-[0_0_8px_#c5a880]" />

            {/* PART I Main Card (Off-white / cream paper card) */}
            <div className="bg-[#ddd9d8] text-[#1c1b1b] rounded-xl p-5 sm:p-6 shadow-xl border border-[#c5c7c3]">
              {/* Header */}
              <div className="border-b border-[#c5c7c3] pb-3 mb-5">
                <span className="text-[11px] font-sans font-semibold tracking-wider text-[#725b38] uppercase">
                  PART I – 19:00
                </span>
                <h3 className="font-serif-classic text-xl font-bold text-[#1c1b1b] mt-0.5">
                  Quartet
                </h3>
              </div>

              {/* Ensemble Piece 1 & 2 (Team 1: Guitar Duo) */}
              <div className="space-y-6">
                {/* Team 1 Header Pill */}
                <div className="flex items-center flex-wrap gap-2.5 pt-1">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#1c1b1b] text-[#fcf8f7] rounded">
                    Quartet 1
                  </span>

                  {/* Performers Names */}
                  <div className="flex items-center gap-2 bg-[#ece8e7] px-2.5 py-1 rounded-full border border-[#c5c7c3] ml-auto">
                    <span className="text-[11px] font-medium text-[#2c2c2c]">
                      1st Guitar Quartet (김영훈, 정원지, 최민정, 문경후)
                    </span>
                  </div>
                </div>

                {/* Quartet 1 Photo */}
                <div 
                  className="mb-4 w-full aspect-video rounded-lg overflow-hidden border border-[#b8b3b1]/50 shadow-sm relative bg-[#f7f3f2] cursor-pointer group"
                  onClick={() => setIsQuartet1ModalOpen(true)}
                >
                  <img
                    src="./picture/Part_photos/quartet1.jpg"
                    alt="Quartet 1"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm tracking-wider uppercase border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                      크게 보기
                    </span>
                  </div>
                </div>

                {/* Piece 1 */}
                <div className="pt-2">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">C. McKay (arr. M. Baker)</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug mt-1">
                        The Swan 'LK 243'<br />
                        <span className="text-[13px] font-sans">(스완호 'LK 243')</span>
                      </h4>
                    </div>
                  </div>

                  {/* Program Notes Box */}
                  <div className="mt-2.5 bg-[#cfcac8]/70 border border-[#b8b3b1] rounded-lg p-3">
                    <p className="text-[11px] font-bold text-[#444844] mb-1 flex items-center gap-1">
                      <span>곡 소개 및 해설</span>
                    </p>
                    <div className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal break-keep">
                      <p className="mb-2">「The Swan LK243」는 스코틀랜드의 하프 연주자 Catriona McKay가 작곡한 서정적인 왈츠입니다.</p>
                      <p className="mb-2">&nbsp;&nbsp;곡의 제목인 ‘Swan’은 단순히 우아한 백조를 뜻하는 것이 아닙니다. 1900년 스코틀랜드 셰틀랜드 제도에서 만들어져 거친 북해를 오갔던 한 척의 청어잡이 배, 그리고 그 배에 새겨진 선박 등록 번호 ‘LK243’에서 이 곡의 이름이 탄생했습니다. McKay는 1999년 직접 이 배에 올라 항해했고, 바다 위에서 마주한 풍경과 순간들을 음악으로 남겼습니다.</p>
                      <p className="mb-2">&nbsp;&nbsp;잔잔하게 시작되는 선율에 귀를 기울이고 있으면, 넓은 바다 위에 떠 있는 작은 배 한 척의 모습이 자연스럽게 그려집니다. 때로는 고요한 물결을 따라 천천히 미끄러지고, 때로는 불어오는 바람과 파도에 몸을 맡긴 채 부드럽게 흔들립니다. 어디론가 서둘러 나아가기보다, 그저 바다가 이끄는 방향을 따라 유유히 흘러가는 항해처럼 말입니다.</p>
                      <p className="mb-2">&nbsp;&nbsp;본래 하프를 위해 쓰인 이 곡을 이번 무대에서는 네 대의 클래식 기타로 들려드립니다. 곡의 시작과 함께 모습을 드러내는 하나의 선율은 어느 한 사람에게 오래 머물지 않고, 네 명의 연주자 사이를 천천히 오가며 이어집니다. 같은 멜로디이지만 그것을 건네받는 사람에 따라 조금씩 달라지는 음색과 호흡은, 한 풍경을 바라보며 저마다 다른 기억을 떠올리는 우리의 모습과도 닮아 있습니다.</p>
                      <p>&nbsp;&nbsp;잠시 눈앞의 바쁜 일상을 내려놓고, 네 대의 기타가 만들어 내는 물결을 따라가 보셨으면 합니다. 잔잔한 바람과 일렁이는 수면, 그리고 그 위를 유유히 나아가는 오래된 배 한 척의 항해를 떠올리면서요.</p>
                    </div>
                  </div>
                </div>

                {/* Piece 2 */}
                <div className="pt-3 border-t border-[#cfcac8]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">K. Jenkins (arr. M. Baker)</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug mt-1">
                        Palladio<br />
                        <span className="text-[13px] font-sans">(팔라디오)</span>
                      </h4>
                    </div>
                  </div>

                  {/* Program Notes Box */}
                  <div className="mt-2.5 bg-[#cfcac8]/70 border border-[#b8b3b1] rounded-lg p-3">
                    <p className="text-[11px] font-bold text-[#444844] mb-1">곡 소개 및 해설</p>
                    <div className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal break-keep">
                      <p className="mb-2">「Palladio」는 영국의 작곡가 Karl Jenkins가 1995년 작곡한 작품으로, 그 이름은 르네상스를 대표하는 이탈리아 건축가 Andrea Palladio에게서 가져왔습니다. Jenkins는 Palladio의 건축에 담긴 조화와 질서, 그리고 수학적인 비례에서 영감을 받아 이를 음악 속에 담아냈습니다.</p>
                      <p className="mb-2">&nbsp;&nbsp;아름다운 건축물을 바라볼 때 우리는 하나하나의 기둥과 선을 따로 보지 않습니다. 수많은 요소가 정확한 위치에서 서로를 받치고 균형을 이루는 순간, 비로소 하나의 온전한 건축물이 눈앞에 모습을 드러냅니다.</p>
                      <p className="mb-2">&nbsp;&nbsp;이 곡 역시 그렇습니다. 짧고 단단한 리듬이 끊임없이 반복되고, 서로 다른 성부가 정교하게 맞물리며 음악을 앞으로 밀어냅니다. 어느 하나라도 조금만 어긋나면 금세 균형이 흔들릴 것 같은 긴장감 속에서, 네 대의 기타는 때로는 서로를 쫓고 때로는 하나로 합쳐지며 거대한 하나의 구조물을 세워 나갑니다.</p>
                      <p className="mb-2">&nbsp;&nbsp;유려하게 흘러가는 선율보다는 반듯하게 뻗은 직선처럼, 자유롭게 흔들리는 리듬보다는 일정한 박자로 이어지는 강한 맥박처럼 음악은 치밀한 질서 속에서 조금씩 긴장감을 높여 갑니다. 바로 그 정교한 균형과 반복 속에서 「Palladio」 특유의 단단하고 압도적인 에너지가 만들어집니다.</p>
                      <p className="mb-2">&nbsp;&nbsp;특히 이번에 연주되는 1악장 「Allegretto」의 강렬한 선율은 광고를 비롯한 여러 매체를 통해 널리 알려져 있어, 처음 듣는 분들에게도 어딘가 익숙하게 다가올 것입니다.</p>
                      <p>&nbsp;&nbsp;서로 다른 네 대의 기타가 빈틈없이 맞물리는 순간, 네 개의 소리는 비로소 하나의 거대한 울림이 됩니다. 한 음 한 음 정교하게 쌓아 올린 끝에 완성되는 음악이라는 건축물, 그리고 그 안에서 터져 나오는 팽팽한 긴장감과 에너지를 함께 느껴보시길 바랍니다.</p>
                    </div>
                  </div>
                </div>

                {/* Team 2 Header Pill & Performers */}
                <div className="pt-4 border-t border-[#cfcac8] space-y-3">
                  <div className="flex items-center flex-wrap gap-2.5">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#1c1b1b] text-[#fcf8f7] rounded">
                      Quartet 2
                    </span>

                    {/* Performers */}
                    <div className="flex items-center gap-2 bg-[#ece8e7] px-2.5 py-1 rounded-full border border-[#c5c7c3] ml-auto">
                      <span className="text-[11px] font-medium text-[#2c2c2c]">
                        2nd Guitar Quartet (최혁준, 김태성, 송지민, 임현석)
                      </span>
                    </div>
                  </div>

                  {/* Quartet 2 Photo */}
                  <div 
                    className="mt-4 mb-2 w-full aspect-video rounded-lg overflow-hidden border border-[#b8b3b1]/50 shadow-sm relative bg-[#f7f3f2] cursor-pointer group"
                    onClick={() => setIsQuartet2ModalOpen(true)}
                  >
                    <img
                      src="./picture/Part_photos/quartet2.jpeg"
                      alt="Quartet 2"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm tracking-wider uppercase border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                        크게 보기
                      </span>
                    </div>
                  </div>

                  {/* Piece 3: A. Ramirez */}
                  <div className="pt-1">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-xs font-serif text-[#725b38] font-semibold">A. Ramirez (arr. R. Dyens)</p>
                        <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug mt-1">
                          Alfonsina y el mar<br />
                          <span className="text-[13px] font-sans">(알폰시나와 바다)</span>
                        </h4>
                      </div>
                    </div>

                    <div className="mt-2.5 bg-[#cfcac8]/70 border border-[#b8b3b1] rounded-lg p-3">
                      <p className="text-[11px] font-bold text-[#444844] mb-1">곡 소개 및 해설</p>
                      <div className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal break-keep">
                        <p className="mb-2">「Alfonsina y el mar(알폰시나와 바다)」는 아르헨티나를 대표하는 시인 알폰시나 스토르니(Alfonsina Storni)의 삶과 마지막에서 영감을 받아 Ariel Ramírez가 작곡하고 Félix Luna가 가사를 붙인 곡입니다.</p>
                        <p className="mb-2">&nbsp;&nbsp;알폰시나는 어린 시절부터 경제적 어려움 속에서 생계를 위해 일해야 했고, 당시의 사회적 편견 속에서 홀로 아이를 키우면서도 시인이자 언론인으로서 여성의 자유와 권리를 이야기했습니다. 평생 자신의 목소리를 잃지 않았던 그녀에게 삶의 마지막에는 암과 육체적·정신적 고통이라는 또 다른 시련이 찾아왔고, 1938년 10월 마르델플라타에서 생을 마감했습니다.</p>
                        <p className="mb-2">&nbsp;&nbsp;그녀가 세상을 떠나기 직전 남긴 마지막 시의 제목은 「Voy a dormir(나는 자러 갑니다)」였습니다.</p>
                        <p className="mb-2 text-[#444844]">
                          &nbsp;&nbsp;“머리맡에 등불 하나를 놓아주세요.<br />
                          &nbsp;&nbsp;별자리 하나면 좋겠어요.<br />
                          &nbsp;&nbsp;어떤 것이든 괜찮으니, 조금만 낮춰주세요.”
                        </p>
                        <p className="mb-2">&nbsp;&nbsp;삶의 마지막을 앞둔 사람이 남긴 글이라고 믿기 어려울 만큼, 시는 격렬한 절망 대신 고요한 자연과 잠의 이미지를 담고 있습니다. 그리고 수십 년 뒤 탄생한 「Alfonsina y el mar」에서도 바다는 그녀를 둘러싼 고통과 작별하고 조용히 멀어져 가는 공간으로 그려집니다.</p>
                        <p className="mb-2">&nbsp;&nbsp;그러나 저희가 이 곡에서 바라보고 싶었던 것은 한 시인의 비극적인 마지막만은 아닙니다. 시대와 모습은 달라졌지만, 각자의 삶을 묵묵히 견뎌내는 모습은 어쩌면 오늘을 살아가는 우리와 크게 다르지 않기 때문입니다. 누군가는 늦은 밤까지 학점과 과제, 불확실한 미래라는 막막한 길을 걷고 있고, 또 누군가는 자신에게 주어진 책임을 어깨에 짊어진 채 거친 하루를 말없이 견디고 있습니다. 겉으로 드러나지 않을 뿐, 우리 모두에게는 저마다의 파도가 있습니다.</p>
                        <p>&nbsp;&nbsp;그래서 저희는 오늘 이 곡을 통해 그 파도를 견디며 살아가는 모든 분께 작은 위로를 전하고 싶습니다. 오늘도 강의실에서, 연구실에서, 그리고 각자의 자리에서 하루를 살아내느라 고생하셨습니다. 잠시 마음의 불을 낮추고, 클래식 기타가 그려내는 잔잔한 바다의 소리에 귀 기울이며 편안히 쉬어가시길 바랍니다.</p>
                      </div>
                    </div>
                  </div>

                  {/* Piece 4: W. Bolcom */}
                  <div className="pt-3 border-t border-[#cfcac8]">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-xs font-serif text-[#725b38] font-semibold">W. Bolcom (arr. 정민영)</p>
                        <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug mt-1">
                          Graceful Ghost Rag<br />
                          <span className="text-[13px] font-sans">(우아한 유령 래그)</span>
                        </h4>
                      </div>
                    </div>

                    <div className="mt-2.5 bg-[#cfcac8]/70 border border-[#b8b3b1] rounded-lg p-3">
                      <p className="text-[11px] font-bold text-[#444844] mb-1">곡 소개 및 해설</p>
                      <div className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal break-keep">
                        <p className="mb-2">「Graceful Ghost Rag(우아한 유령 래그)」는 미국의 작곡가 William Bolcom이 세상을 떠난 아버지를 그리워하며 쓴 곡입니다.</p>
                        <p className="mb-2">&nbsp;&nbsp;제목에는 조금 낯선 두 단어가 나란히 놓여 있습니다. ‘Graceful’, 우아한. 그리고 ‘Ghost’, 유령. 우리가 흔히 떠올리는 유령은 차갑고 두려운 존재이지만, 이 곡 속의 유령은 조금 다릅니다. 오래된 기억 한편에서 문득 모습을 드러냈다가, 미소 하나만 남기고 다시 사라지는 사람처럼 따뜻하고 다정합니다.</p>
                        <p className="mb-2">&nbsp;&nbsp;볼컴은 아버지를 위한 음악에 무겁고 비통한 선율 대신 렉타임의 경쾌한 리듬을 담았습니다. 통통 튀는 리듬 사이로 흐르는 부드럽고 쓸쓸한 선율을 듣고 있으면, 누군가를 떠올릴 때 슬픔만 남는 것은 아니라는 사실을 생각하게 됩니다. 그 사람과 함께 웃었던 날들, 별것 아닌 말에 함께 장난치던 순간들, 말없이 내 편이 되어주었던 시간들. 어쩌면 한 사람을 그리워한다는 것은 그가 떠난 순간을 기억하는 일이 아니라, 그와 함께했던 수많은 평범한 날들을 다시 꺼내 보는 일인지도 모릅니다.</p>
                        <p className="mb-2">&nbsp;&nbsp;우리는 대학생과 대학원생이라는 이름으로 저마다의 하루를 분주하게 살아갑니다. 강의와 과제, 연구와 일, 그리고 아직 알 수 없는 미래를 좇으며 앞만 보고 걷다 보면, 늘 우리의 등 뒤에서 묵묵히 자리를 지켜주셨던 부모님의 존재를 당연하게 여기고 지나칠 때도 있습니다. 하지만 우리가 힘들 때 아무 말 없이 기다려주었던 사람, 잘되었을 때 누구보다 먼저 기뻐해 주었던 사람, 돌아보면 언제나 같은 자리에서 우리를 바라보고 있던 사람이 있었습니다. 아마 그 사랑은 아주 오래전부터 우리 곁에 있었기에 너무 익숙했고, 그래서 더욱 자주 잊고 살았는지도 모르겠습니다.</p>
                        <p className="mb-2">&nbsp;&nbsp;오늘 저희 콰르텟의 연주가 흐르는 짧은 시간만큼은 잠시 바쁜 마음을 내려놓고, 기억 속 한 장면을 천천히 꺼내 보셨으면 합니다. 어릴 적 잡았던 아버지의 손, 함께 걷던 길, 별것 아닌 이야기로 웃었던 어느 저녁, 그리고 당시에는 미처 알지 못했던 수많은 사랑의 순간들을요.</p>
                        <p className="mb-2">&nbsp;&nbsp;시간은 지나가고, 사람은 언젠가 서로의 곁을 떠나게 되지만, 함께했던 순간까지 사라지는 것은 아닙니다. 때로는 음악 한 소절이, 익숙한 향기가, 오래된 사진 한 장이 그 사람을 다시 우리 곁으로 데려오기도 합니다. 그렇게 우리의 기억 속을 조용히 찾아오는 사람. 아마 그것이 이 곡이 들려주는 ‘우아한 유령’의 모습이 아닐까요.</p>
                        <p>&nbsp;&nbsp;자식을 위해 아낌없이 내어주셨던 부모님의 사랑과, 너무 익숙해서 미처 다 전하지 못했던 우리의 감사가 오늘 클래식 기타의 선율을 타고 객석의 가장 소중한 분들에게 따뜻하게 닿기를 바랍니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= INTERMISSION ================= */}
          <div className="relative my-8 py-2 flex items-center gap-3">
            {/* Timeline node with coffee cup */}
            <div className="absolute -left-[31px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1e1d1d] border border-[#c5a880] flex items-center justify-center text-[#c5a880]">
              <Coffee className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-2 text-[#a8957c] text-xs font-sans tracking-wider uppercase font-semibold">
              <span>INTERMISSION (15 MIN)</span>
            </div>
          </div>

          {/* ================= PART II: Full Orchestra ================= */}
          <div className="relative">
            {/* Timeline node */}
            <div className="absolute -left-[29px] top-5 w-4 h-4 rounded-full bg-[#c5a880] border-4 border-[#0e0e10] shadow-[0_0_8px_#c5a880]" />

            {/* PART II Main Card (Crisp light/cream card) */}
            <div className="bg-[#ffffff] text-[#1c1b1b] rounded-xl p-5 sm:p-6 shadow-2xl border border-[#e5e2e1]">
              {/* Header */}
              <div className="border-b border-[#e5e2e1] pb-3 mb-5">
                <span className="text-[11px] font-sans font-semibold tracking-wider text-[#725b38] uppercase">
                  PART II
                </span>
                <h3 className="font-serif-classic text-xl font-bold text-[#1c1b1b] mt-0.5">
                  Ensemble
                </h3>
              </div>

              {/* Conductor Box */}
              <div
                onClick={() => onSelectArtist(ARTISTS.conductor)}
                className="group flex items-center gap-3.5 p-3 rounded-lg bg-[#f7f3f2] border border-[#e4e2e1] hover:border-[#c5a880] cursor-pointer transition-all mb-6"
                title="지휘자 김지훈 프로필 보기"
              >
                <img
                  src={ARTISTS.conductor.avatar}
                  alt={ARTISTS.conductor.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#c5a880] shadow-sm group-hover:scale-105 transition-transform"
                />
                <div className="flex-1">
                  <span className="text-[10px] font-sans font-bold tracking-wider text-[#725b38] uppercase">
                    CONDUCTOR
                  </span>
                  <h4 className="text-sm font-serif font-bold text-[#1c1b1b] group-hover:text-[#725b38] transition-colors flex items-center gap-1.5">
                    <span>Maestro Jeong Min-yeong</span>
                    <Info className="w-3.5 h-3.5 text-[#a8957c]" />
                  </h4>
                  <p className="text-[11px] text-[#5e5f5d]">오르페우스 클래식 기타 오케스트라 상임지휘자</p>
                </div>
              </div>

              {/* Ensemble Photo */}
              <div 
                className="mb-6 w-full aspect-[21/9] sm:aspect-video rounded-lg overflow-hidden border border-[#c5a880]/20 shadow-sm relative bg-[#1c1b1b] cursor-pointer group"
                onClick={() => setIsEnsembleModalOpen(true)}
              >
                <img
                  src="./picture/Part_photos/ensemble.jpg"
                  alt="Ensemble"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm tracking-wider uppercase border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    크게 보기
                  </span>
                </div>
              </div>

              {/* Piece 5: Beethoven */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">L. v. Beethoven & R. Tedder<br />(The Piano Guys, arr. 정민영)</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug mt-1">
                        Beethoven's 5 Secrets<br />
                        <span className="text-[13px] font-sans">(베토벤의 다섯 가지 비밀)</span>
                      </h4>
                    </div>
                  </div>

                  {/* Orchestra Program Note Box */}
                  <div className="mt-4 bg-[#f7f3f2] border border-[#e5e2e1] rounded-lg p-4">
                    <p className="text-[12px] font-bold text-[#444844] mb-2">곡 소개 및 해설</p>
                    <p className="text-[13px] text-[#2c2c2c] leading-[1.8] font-sans font-normal break-keep">
                      「Beethoven’s 5 Secrets」는 클래식과 대중음악의 경계를 자유롭게 넘나드는 The Piano Guys가 OneRepublic의 「Secrets」와 베토벤의 「교향곡 제5번 ‘운명’」을 하나의 음악으로 엮어낸 작품입니다.
                      <br /><br />
                      &nbsp;&nbsp;곡의 제목을 가만히 들여다보면 조금 재미있는 비밀이 숨어 있습니다. 우리에게 익숙한 ‘운명 교향곡’의 네 악장 곳곳에서 다섯 개의 선율을 가져와 「Secrets」 속에 자연스럽게 숨겨 놓은 것입니다. 처음에는 익숙한 팝 음악처럼 들리던 선율 사이로 어느 순간 베토벤의 흔적이 모습을 드러내고, 다시 음악 속으로 스며듭니다. 이 다섯 개의 선율을 하나씩 발견해 나가는 것이 바로 이 곡의 또 다른 즐거움입니다.
                      <br /><br />
                      &nbsp;&nbsp;곡의 시작은 비교적 담담합니다. 「Secrets」의 부드럽고 서정적인 선율이 조용히 흐르고, 그 사이로 베토벤의 음형이 하나둘 스며듭니다. 처음에는 서로 다른 시대에서 태어난 두 음악이 조심스럽게 마주하는 듯하지만, 곡이 진행될수록 선율과 화음은 점점 촘촘하게 겹쳐지고 음악의 흐름 역시 한층 깊고 넓어집니다.
                      <br /><br />
                      &nbsp;&nbsp;이 곡의 가장 인상적인 순간은 바로 이러한 변화의 과정에 있습니다. 처음에는 한 줄기의 작은 선율로 시작했던 음악이 반복될수록 점차 힘을 얻고, 새로운 성부와 화음이 하나씩 더해지면서 어느 순간 가슴을 가득 채우는 거대한 울림으로 피어납니다. 익숙했던 멜로디가 점차 웅장한 모습으로 변해가는 과정은, 조용히 시작된 감정이 조금씩 차올라 마침내 벅찬 순간에 닿는 듯한 감동을 전합니다.
                      <br /><br />
                      &nbsp;&nbsp;이번 무대에서는 이러한 흐름이 44대의 클래식 기타가 만들어내는 풍성한 울림 속에서 펼쳐집니다. 각 파트의 선율이 서로를 이어받고 그 위에 또 다른 소리가 더해지면서, 처음의 담담했던 음악은 점차 장대하고 깊은 모습으로 변해 갑니다.
                      <br /><br />
                      &nbsp;&nbsp;200여 년의 시간을 사이에 둔 두 음악이 하나의 흐름 속에서 자연스럽게 만나는 순간, 베토벤의 선율은 더 이상 오래된 고전으로만 머물지 않고 오늘의 음악으로 다시 살아납니다. 곡 곳곳에 숨겨진 다섯 가지 ‘비밀’을 찾아보는 즐거움과 함께, 작은 선율들이 겹겹이 쌓여 마침내 벅찬 하나의 울림으로 펼쳐지는 순간까지 천천히 따라가 보시길 바랍니다.
                    </p>
                  </div>
                </div>

                {/* Piece 6: G. Rossini */}
                <div className="pt-4 border-t border-[#e5e2e1]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">G. Rossini (arr. 정민영)</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug">
                        The Barber of Seville - Overture<br />
                        <span className="text-[13px] font-sans">(세비야의 이발사 - 서곡)</span>
                      </h4>
                    </div>
                  </div>

                  {/* Orchestra Program Note Box */}
                  <div className="mt-4 bg-[#f7f3f2] border border-[#e5e2e1] rounded-lg p-4">
                    <p className="text-[12px] font-bold text-[#444844] mb-2">곡 소개 및 해설</p>
                    <p className="text-[13px] text-[#2c2c2c] leading-[1.8] font-sans font-normal break-keep">
                      「The Barber of Seville(세비야의 이발사)」 서곡은 이탈리아 오페라의 거장 Gioachino Rossini의 가장 널리 사랑받는 작품 가운데 하나입니다.
                      <br /><br />
                      &nbsp;&nbsp;흥미롭게도 이 서곡은 처음부터 「세비야의 이발사」를 위해 작곡된 음악이 아닙니다. Rossini가 앞선 오페라에서 사용했던 서곡을 다시 가져온 작품으로, 「세비야의 이발사」의 특정 인물이나 줄거리, 장면을 직접 묘사하기 위해 만들어진 음악은 아닙니다. 그럼에도 특유의 경쾌함과 재치 넘치는 분위기가 오페라의 성격과 절묘하게 어우러지며, 오늘날에는 작품을 대표하는 음악 가운데 하나로 자리 잡았습니다.
                      <br /><br />
                      &nbsp;&nbsp;곡은 처음부터 모든 에너지를 쏟아내기보다 작은 움직임을 하나씩 만들어 가며 서서히 활기를 더해 갑니다. 짧은 선율이 모습을 드러냈다가 사라지고, 다른 성부가 그 뒤를 이어받으며 음악은 마치 여러 사람이 빠르게 대화를 주고받는 듯한 생동감을 만들어 냅니다. 여기에 갑작스러운 강약의 변화와 재치 있는 리듬이 더해지면서 곡 전체에는 Rossini 특유의 유머와 긴장감이 끊임없이 흐릅니다.
                      <br /><br />
                      &nbsp;&nbsp;이 작품에서 특히 돋보이는 것은 흔히 ‘Rossini crescendo’라 불리는 점층적인 고조입니다. 하나의 리듬과 선율을 반복하는 동안 음량은 조금씩 커지고, 새로운 성부가 하나둘 더해지며 음악의 밀도와 에너지는 계속해서 높아집니다. 처음에는 작은 파문처럼 시작했던 움직임이 점차 넓게 번져 어느 순간 거대한 물결로 변하는 것처럼, 음악은 반복 속에서도 끊임없이 앞으로 나아갑니다.
                      <br /><br />
                      &nbsp;&nbsp;이러한 크레셴도의 매력은 단순히 소리가 점점 커지는 데 있지 않습니다. 같은 리듬이 반복될수록 다음 순간에 대한 기대는 더욱 커지고, 여러 성부가 차곡차곡 포개질수록 음악은 점점 숨 가쁜 긴장감으로 치닫습니다. 이미 익숙한 선율이 반복되고 있음에도, 청중은 그 에너지가 어디까지 치솟을지 자연스럽게 기다리게 됩니다.
                      <br /><br />
                      &nbsp;&nbsp;이번 연주에서는 여러 파트가 서로 다른 리듬과 선율을 주고받으며 이러한 흐름을 만들어 갑니다. 때로는 한쪽의 선율이 다른 파트를 재촉하듯 앞서 나가고, 때로는 흩어져 있던 소리가 한순간에 하나로 모이며 강렬한 울림을 만들어 냅니다.
                      <br /><br />
                      &nbsp;&nbsp;빠르게 오가는 선율과 예상치 못한 강약의 대비, 그리고 끊임없이 상승하는 크레셴도를 따라가며 Rossini 음악 특유의 재치와 생동감, 그 안에서 점차 달아오르는 에너지를 함께 느껴보시길 바랍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Modal View (Image Lightbox) for Ensemble Photo */}
      {isEnsembleModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setIsEnsembleModalOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsEnsembleModalOpen(false)}
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <img 
            src="./picture/Part_photos/ensemble.jpg" 
            alt="Ensemble Expanded" 
            loading="lazy"
            className="w-full max-w-5xl max-h-[90vh] object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Expanded Modal View (Image Lightbox) for Quartet 1 Photo */}
      {isQuartet1ModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setIsQuartet1ModalOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsQuartet1ModalOpen(false)}
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <img 
            src="./picture/Part_photos/quartet1.jpg" 
            alt="Quartet 1 Expanded" 
            loading="lazy"
            className="w-full max-w-5xl max-h-[90vh] object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Expanded Modal View (Image Lightbox) for Quartet 2 Photo */}
      {isQuartet2ModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setIsQuartet2ModalOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsQuartet2ModalOpen(false)}
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <img 
            src="./picture/Part_photos/quartet2.jpeg" 
            alt="Quartet 2 Expanded" 
            loading="lazy"
            className="w-full max-w-5xl max-h-[90vh] object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
