import React from 'react';
import { ARTISTS } from '../data/concertData';

export const ConductorMessageSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#0a0a0b] relative border-t border-[#222]">
      <div className="max-w-md mx-auto relative z-10 text-center">
        <h2 className="font-serif-classic text-xl font-bold text-[#fcf8f7] tracking-wider mb-8">
          지휘자 인사말
        </h2>

        <div className="mb-6">
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden border border-[#c5a880]/40 shadow-2xl relative bg-[#1c1b1b]">
            <img
              src={ARTISTS.conductor.avatar}
              alt={ARTISTS.conductor.name}
              className="w-full h-full object-cover filter contrast-105"
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
          <div className="text-[13px] text-[#d4cfce] leading-relaxed font-sans px-4 pt-4 pb-2 relative z-10 space-y-4">
            <p>
              안녕하세요.<br />
              제53회 정기연주회 합주 지휘를 맡은 55기 정민영입니다.
            </p>
            <p>
              &nbsp;&nbsp;무더운 여름이 조금씩 물러나고 선선한 바람이 찾아오기 시작한 초가을의 문턱에서, 마흔여섯 명의 연주자들과 함께 여러분을 만나 뵙게 되어 반갑습니다.
            </p>
            <p>
              &nbsp;&nbsp;오늘 저희가 들려드릴 음악은 본래 여러 악기의 서로 다른 음색으로 이루어진 곡들을 클래식 기타라는 하나의 악기로 새롭게 풀어낸 연주입니다. 한 가지 악기에서 만들어지는 다양한 소리와 표현을 통해 클래식 기타와 음악의 매력을 함께 느끼실 수 있기를 바랍니다.
            </p>
            <p>
              &nbsp;&nbsp;이번 연주회를 위해 마흔네 명의 합주 단원들은 지난 두 달 동안 무더운 여름날을 함께 보내며 연습해 왔습니다. 서로의 소리에 귀를 기울이고 하나씩 호흡을 맞추며 준비한 합주에 두 팀의 중주가 더해져, 오늘 총 마흔여섯 명의 연주자가 무대에 오르게 되었습니다.
            </p>
            <p>
              &nbsp;&nbsp;그 과정에서 아낌없는 관심과 도움을 보내 주신 동문 선배님들과 여러 부원들께도 진심으로 감사드립니다. 많은 분들의 마음이 모여 만들어진 오늘의 무대를 편안한 마음으로 즐겨주시길 바랍니다.
            </p>
            <p>
              감사합니다.<br /><br />
              정민영 올림
            </p>
          </div>
          <span className="text-[#c5a880] text-3xl font-serif absolute bottom-0 right-4 opacity-50">"</span>
        </div>
      </div>
    </section>
  );
};
