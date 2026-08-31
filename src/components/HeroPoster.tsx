import React, { useState } from 'react';
import { ChevronDown, Calendar, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { CONCERT_INFO } from '../data/concertData';

interface HeroPosterProps {
  onScrollToProgram: () => void;
}

export const HeroPoster: React.FC<HeroPosterProps> = ({ onScrollToProgram }) => {
  const [showDDayModal, setShowDDayModal] = useState(false);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpCount, setRsvpCount] = useState('2');

  const handleRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;
    setRsvpSuccess(true);
    setTimeout(() => {
      setShowDDayModal(false);
      setRsvpSuccess(false);
      setRsvpName('');
    }, 2000);
  };

  return (
    <section id="hero" className="relative pt-6 pb-12 px-4 flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-b from-[#111113] via-[#18181b] to-[#121214]">
      {/* Outer Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Pamphlet Display */}
      <div className="relative w-full max-w-[340px] sm:max-w-[450px] shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-[1.01] rounded-sm overflow-hidden border border-[#c5a880]/20 bg-[#111113]">
        <img
          src="/pamphlet.png"
          alt="Concert Pamphlet"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* SCROLL Indicator */}
      <div className="mt-8 flex flex-col items-center justify-center">
        <button
          id="hero-scroll-btn"
          onClick={onScrollToProgram}
          className="group flex flex-col items-center gap-1.5 text-[#c5a880] hover:text-[#fedeb2] transition-colors focus:outline-none"
        >
          <span className="font-sans-clean text-[11px] font-medium tracking-[0.25em] uppercase text-[#a8957c] group-hover:text-[#fedeb2]">
            SCROLL
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c5a880] group-hover:text-[#fedeb2]" />
        </button>
      </div>

      {/* D-Day & Concert Info Modal */}
      {showDDayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-sm bg-[#1c1b1b] border border-[#c5a880]/40 rounded-xl p-6 shadow-2xl text-[#fcf8f7] relative">
            <button
              id="close-dday-modal-btn"
              onClick={() => setShowDDayModal(false)}
              className="absolute top-4 right-4 text-[#888] hover:text-white text-lg p-1"
            >
              ✕
            </button>

            <div className="text-center pb-4 border-b border-[#333]">
              <span className="inline-block px-3 py-1 bg-[#281800] border border-[#c5a880]/50 text-[#fedeb2] text-xs font-semibold rounded-full mb-2">
                D - 14일 남음
              </span>
              <h3 className="font-serif-classic text-lg text-[#fedeb2]">
                {CONCERT_INFO.title}
              </h3>
              <p className="text-xs text-[#a8957c] mt-1">{CONCERT_INFO.subtitle}</p>
            </div>

            <div className="py-4 space-y-3 text-xs text-[#ddd9d8]">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>{CONCERT_INFO.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>{CONCERT_INFO.venue}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>러닝타임 약 100분 (인터미션 15분 포함)</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span className="text-[#fedeb2] font-medium">{CONCERT_INFO.admission}</span>
              </div>
            </div>

            {/* RSVP Form */}
            <div className="pt-3 border-t border-[#333]">
              {rsvpSuccess ? (
                <div className="py-3 text-center bg-[#243520] border border-[#528748] rounded-lg text-[#b8f5aa] text-xs flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>초대 좌석 예약 신청이 완료되었습니다!</span>
                </div>
              ) : (
                <form onSubmit={handleRsvp} className="space-y-3">
                  <p className="text-[11px] text-[#aaa]">원활한 좌석 배정을 위해 참석 인원을 알려주세요 (무료 초대석):</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="성함 / 닉네임"
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      required
                      className="flex-1 bg-[#121214] border border-[#444] focus:border-[#c5a880] rounded px-3 py-2 text-xs text-white outline-none"
                    />
                    <select
                      value={rsvpCount}
                      onChange={(e) => setRsvpCount(e.target.value)}
                      className="bg-[#121214] border border-[#444] text-xs text-white rounded px-2 py-2 outline-none"
                    >
                      <option value="1">1인</option>
                      <option value="2">2인</option>
                      <option value="3">3인</option>
                      <option value="4">4인 이상</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-[#725b38] to-[#9c7847] hover:from-[#876e4b] hover:to-[#b08b53] text-[#fcf8f7] font-medium text-xs rounded shadow-md transition-all"
                  >
                    무료 초대석 예약하기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
