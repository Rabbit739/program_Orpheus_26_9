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

                {/* Piece 1 */}
                <div className="pt-2">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">C. McKay (arr. M. Baker)</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug mt-1">
                        The Swan 'LK 243'<br/>
                        <span className="text-[13px] font-sans">(스완호 'LK 243')</span>
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

                {/* Piece 2 */}
                <div className="pt-3 border-t border-[#cfcac8]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">K. Jenkins (arr. M. Baker)</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug mt-1">
                        Palladio<br/>
                        <span className="text-[13px] font-sans">(팔라디오)</span>
                      </h4>
                    </div>
                  </div>

                  {/* Program Notes Box */}
                  <div className="mt-2.5 bg-[#cfcac8]/70 border border-[#b8b3b1] rounded-lg p-3">
                    <p className="text-[11px] font-bold text-[#444844] mb-1">곡 소개 및 해설</p>
                    <p className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal">
                      고전적인 아름다움과 현대적인 감각이 조화를 이룬 곡으로, 웅장한 선율과 섬세한 화성이 돋보입니다.
                    </p>
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

                  {/* Piece 3: A. Ramirez */}
                  <div className="pt-1">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-xs font-serif text-[#725b38] font-semibold">A. Ramirez (arr. R. Dyens)</p>
                        <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug mt-1">
                          Alfonsina y el mar<br/>
                          <span className="text-[13px] font-sans">(알폰시나와 바다)</span>
                        </h4>
                      </div>
                    </div>

                    <div className="mt-2.5 bg-[#cfcac8]/70 border border-[#b8b3b1] rounded-lg p-3">
                      <p className="text-[11px] font-bold text-[#444844] mb-1">곡 소개 및 해설</p>
                      <p className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal">
                        아르헨티나의 구전 민요를 바탕으로 한 아름다운 곡입니다. 애절한 선율과 짙은 감성이 특징입니다.
                      </p>
                    </div>
                  </div>

                  {/* Piece 4: W. Bolcom */}
                  <div className="pt-3 border-t border-[#cfcac8]">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-xs font-serif text-[#725b38] font-semibold">W. Bolcom (arr. 정민영)</p>
                        <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug mt-1">
                          Graceful Ghost<br/>
                          <span className="text-[13px] font-sans">(우아한 유령)</span>
                        </h4>
                      </div>
                    </div>

                    <div className="mt-2.5 bg-[#cfcac8]/70 border border-[#b8b3b1] rounded-lg p-3">
                      <p className="text-[11px] font-bold text-[#444844] mb-1">곡 소개 및 해설</p>
                      <p className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal">
                        랙타임 특유의 리듬과 서정적인 멜로디가 어우러져 독특한 매력을 발산하는 곡입니다.
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

              {/* Piece 5: Beethoven */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">L. v. Beethoven & R. Tedder<br/>(The Pian Guys, arr. 정민영)</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug mt-1">
                        Beethoven's 5 Secrets<br/>
                        <span className="text-[13px] font-sans">(베토벤의 다섯 가지 비밀)</span>
                      </h4>
                    </div>
                  </div>

                  {/* Orchestra Program Note Box */}
                  <div className="bg-[#f7f3f2] border border-[#e5e2e1] rounded-lg p-3">
                    <p className="text-[11px] font-bold text-[#444844] mb-1">Orchestra Program Note</p>
                    <p className="text-xs text-[#2c2c2c] leading-relaxed font-sans font-normal">
                      스페인의 정취를 흠뻑 느낄 수 있는 기타 협주곡의 대명사입니다. 2악장의 아다지오 선율은 전 세계적으로 널리 사랑받고 있습니다.
                    </p>
                  </div>
                </div>

                {/* Piece 6: G. Rossini */}
                <div className="pt-4 border-t border-[#e5e2e1]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-serif text-[#725b38] font-semibold">G. Rossini (arr. 정민영)</p>
                      <h4 className="text-base font-serif font-bold text-[#1c1b1b] leading-snug">
                        The baber of Seville - Overture<br/>
                        <span className="text-[13px] font-sans">(세비야의 이발사 - 서곡)</span>
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
