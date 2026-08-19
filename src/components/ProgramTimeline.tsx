import React, { useState } from 'react';
import { Coffee, Info, User } from 'lucide-react';
import { ARTISTS, PROGRAM_PARTS } from '../data/concertData';
import { Artist } from '../types';

interface ProgramTimelineProps {
  onSelectArtist: (artist: Artist) => void;
}

export const ProgramTimeline: React.FC<ProgramTimelineProps> = ({ onSelectArtist }) => {
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
          <p className="text-xs text-[#a8957c] mt-1 font-sans">제 34회 오르페우스 정기연주회 연주 순서</p>
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
                  PART I – 17:00
                </span>
                <h3 className="font-serif-classic text-xl font-bold text-[#1c1b1b] mt-0.5">
                  Chamber Ensembles
                </h3>
              </div>

              {/* Ensemble Piece 1 & 2 (Team 1: Guitar Duo) */}
              <div className="space-y-6">
                {/* Team 1 Header Pill */}
                <div className="flex items-center flex-wrap gap-2.5 pt-1">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#1c1b1b] text-[#fcf8f7] rounded">
                    Team 1
                  </span>
                  <span className="text-xs font-semibold text-[#5e5f5d]">Guitar Duo</span>
                  
                  {/* Performers Avatars & Names */}
                  <div className="flex items-center gap-2 bg-[#ece8e7] px-2.5 py-1 rounded-full border border-[#c5c7c3] ml-auto">
                    <div className="flex -space-x-2">
                      <img
                        src={ARTISTS.minsoo.avatar}
                        alt={ARTISTS.minsoo.name}
                        onClick={() => onSelectArtist(ARTISTS.minsoo)}
                        className="w-6 h-6 rounded-full object-cover border border-white cursor-pointer hover:scale-110 transition-transform"
                        title="김민수 프로필 보기"
                      />
                      <img
                        src={ARTISTS.jieun.avatar}
                        alt={ARTISTS.jieun.name}
                        onClick={() => onSelectArtist(ARTISTS.jieun)}
                        className="w-6 h-6 rounded-full object-cover border border-white cursor-pointer hover:scale-110 transition-transform"
                        title="이지은 프로필 보기"
                      />
                    </div>
                    <span className="text-[11px] font-medium text-[#2c2c2c]">
                      1st Guitar Team (김민수, 이지은)
                    </span>
                  </div>
                </div>

                {/* Piece 1: F. Sor */}
                <div className="pt-2">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">F. Sor</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug">
                        L'Encouragement Op.34
                      </h4>
                    </div>
                  </div>

                  {/* Program Notes Box */}
                  <div className="mt-2.5 bg-[#cfcac8]/70 border border-[#b8b3b1] rounded-lg p-3">
                    <p className="text-[11px] font-bold text-[#444844] mb-1 flex items-center gap-1">
                      <span>곡 소개 및 해설</span>
                    </p>
                    <p className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal">
                      소르의 위안은 두 대의 기타가 주고받는 우아한 대화가 돋보이는 곡입니다. 서정적인 칸타빌레와 경쾌한 왈츠가 대비를 이룹니다.
                    </p>
                  </div>
                </div>

                {/* Piece 2: M. Giuliani */}
                <div className="pt-3 border-t border-[#cfcac8]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">M. Giuliani</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug">
                        Variazioni Concertanti Op.130
                      </h4>
                    </div>
                  </div>

                  {/* Program Notes Box */}
                  <div className="mt-2.5 bg-[#cfcac8]/70 border border-[#b8b3b1] rounded-lg p-3">
                    <p className="text-[11px] font-bold text-[#444844] mb-1">곡 소개 및 해설</p>
                    <p className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal">
                      줄리아니의 화려한 기교가 돋보이는 이중주곡입니다. 변주곡 형식을 통해 기타 특유의 다채로운 음색과 리듬감을 극대화하여 보여줍니다.
                    </p>
                  </div>
                </div>

                {/* Team 2 Header Pill & Performers */}
                <div className="pt-4 border-t border-[#cfcac8] space-y-3">
                  <div className="flex items-center flex-wrap gap-2.5">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#1c1b1b] text-[#fcf8f7] rounded">
                      Team 2
                    </span>
                    <span className="text-xs font-semibold text-[#5e5f5d]">Guitar Trio</span>

                    {/* Performers Avatars */}
                    <div className="flex items-center gap-2 bg-[#ece8e7] px-2.5 py-1 rounded-full border border-[#c5c7c3] ml-auto">
                      <div className="flex -space-x-1.5">
                        <img
                          src={ARTISTS.jihyun.avatar}
                          alt={ARTISTS.jihyun.name}
                          onClick={() => onSelectArtist(ARTISTS.jihyun)}
                          className="w-6 h-6 rounded-full object-cover border border-white cursor-pointer hover:scale-110 transition-transform"
                          title="박지현 프로필"
                        />
                        <img
                          src={ARTISTS.taeyoung.avatar}
                          alt={ARTISTS.taeyoung.name}
                          onClick={() => onSelectArtist(ARTISTS.taeyoung)}
                          className="w-6 h-6 rounded-full object-cover border border-white cursor-pointer hover:scale-110 transition-transform"
                          title="최태영 프로필"
                        />
                        <img
                          src={ARTISTS.suah.avatar}
                          alt={ARTISTS.suah.name}
                          onClick={() => onSelectArtist(ARTISTS.suah)}
                          className="w-6 h-6 rounded-full object-cover border border-white cursor-pointer hover:scale-110 transition-transform"
                          title="정수아 프로필"
                        />
                      </div>
                      <span className="text-[11px] font-medium text-[#2c2c2c]">
                        2nd Guitar Team (박지현, 최태영, 정수아)
                      </span>
                    </div>
                  </div>

                  {/* Piece 3: A. Vivaldi */}
                  <div className="pt-1">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-xs font-serif text-[#725b38] font-semibold">A. Vivaldi</p>
                        <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug">
                          Lute Concerto in D Major
                        </h4>
                      </div>
                    </div>

                    <div className="mt-2.5 bg-[#cfcac8]/70 border border-[#b8b3b1] rounded-lg p-3">
                      <p className="text-[11px] font-bold text-[#444844] mb-1">곡 소개 및 해설</p>
                      <p className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal">
                        비발디의 류트 협주곡을 3대의 기타를 위해 편곡한 버전입니다. 바로크 특유의 활기찬 리듬과 서정적인 선율이 일품입니다.
                      </p>
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
                  PART II – 18:00
                </span>
                <h3 className="font-serif-classic text-xl font-bold text-[#1c1b1b] mt-0.5">
                  Full Orchestra
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
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#c5a880] shadow-sm group-hover:scale-105 transition-transform"
                />
                <div className="flex-1">
                  <span className="text-[10px] font-sans font-bold tracking-wider text-[#725b38] uppercase">
                    CONDUCTOR
                  </span>
                  <h4 className="text-sm font-serif font-bold text-[#1c1b1b] group-hover:text-[#725b38] transition-colors flex items-center gap-1.5">
                    <span>Maestro Kim Ji-hoon</span>
                    <Info className="w-3.5 h-3.5 text-[#a8957c]" />
                  </h4>
                  <p className="text-[11px] text-[#5e5f5d]">오르페우스 클래식 기타 오케스트라 상임지휘자</p>
                </div>
              </div>

              {/* Piece 4: J. Rodrigo Concierto de Aranjuez */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">J. Rodrigo</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug">
                        Concierto de Aranjuez
                      </h4>
                    </div>
                  </div>

                  {/* Movements list */}
                  <div className="my-2.5 pl-3 border-l-2 border-[#c5a880]/60 space-y-0.5 text-xs text-[#555] font-serif italic">
                    <p>I. Allegro con spirito</p>
                    <p>II. Adagio</p>
                    <p>III. Allegro gentile</p>
                  </div>

                  {/* Orchestra Program Note Box */}
                  <div className="bg-[#f7f3f2] border border-[#e5e2e1] rounded-lg p-3">
                    <p className="text-[11px] font-bold text-[#444844] mb-1">Orchestra Program Note</p>
                    <p className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal">
                      스페인의 정취를 흠뻑 느낄 수 있는 기타 협주곡의 대명사입니다. 2악장의 아다지오 선율은 전 세계적으로 널리 사랑받고 있습니다.
                    </p>
                  </div>
                </div>

                {/* Piece 5: C. Domeniconi Koyunbaba */}
                <div className="pt-4 border-t border-[#e5e2e1]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">C. Domeniconi</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug">
                        Koyunbaba
                      </h4>
                    </div>
                  </div>

                  {/* Orchestra Program Note Box */}
                  <div className="mt-2.5 bg-[#f7f3f2] border border-[#e5e2e1] rounded-lg p-3">
                    <p className="text-[11px] font-bold text-[#444844] mb-1">Orchestra Program Note</p>
                    <p className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal">
                      터키의 양치기를 의미하는 코윤바바는 독특한 조율과 주법을 통해 신비롭고 이국적인 분위기를 자아내는 현대 기타의 명곡입니다. 오케스트라 편곡으로 더욱 웅장하게 선보입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
