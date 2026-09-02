import React, { useState } from 'react';
import { CONCERT_INFO } from '../data/concertData';

export const InvitationSection: React.FC = () => {
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  return (
    <section id="invitation" className="py-16 px-6 bg-[#141416] text-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-[#221e1a]/40 to-transparent pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10 flex flex-col items-center">
        {/* Title */}
        <h2 className="font-serif-classic text-xl sm:text-2xl font-normal text-[#fcf8f7] tracking-wider mb-6">
          초대의 글
        </h2>

        {/* Invitation Paragraph */}
        <p className="font-sans-clean text-[#ddd9d8] text-sm sm:text-base leading-relaxed tracking-normal max-w-sm mx-auto font-light text-center whitespace-pre-line">
          {CONCERT_INFO.invitationText}
        </p>

        {/* Gold Lyre / Harp Seal Medallion Ornament */}
        <div className="mt-8 flex items-center justify-center">
          <div 
            className="relative group p-1 cursor-pointer"
            onClick={() => setShowWinnerModal(true)}
          >
            {/* Outer subtle glow */}
            <div className="absolute inset-0 rounded-full bg-[#c5a880]/15 blur-sm group-hover:bg-[#fedeb2]/25 transition-all" />

            <div className="w-14 h-14 rounded-full border border-[#c5a880]/60 bg-[#1c1b1b] flex items-center justify-center shadow-md relative z-10 group-hover:scale-105 group-hover:border-[#fedeb2] transition-all duration-300">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#c5a880] group-hover:text-[#fedeb2] transition-colors"
              >
                {/* Classical Lyre Emblem */}
                <path
                  d="M14 12C14 26 17 38 24 38C31 38 34 26 34 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12C12 10 16 8 16 8H32C32 8 36 10 36 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                {/* Strings */}
                <line x1="20" y1="10" x2="20" y2="35" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.8" />
                <line x1="24" y1="9" x2="24" y2="38" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.8" />
                <line x1="28" y1="10" x2="28" y2="35" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.8" />
                {/* Base */}
                <path
                  d="M19 41H29"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Small gold flourish divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/40 to-transparent mt-8" />
      </div>

      {/* Winner Easter Egg Modal */}
      {showWinnerModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowWinnerModal(false)}
        >
          <div 
            className="relative w-full h-full sm:max-h-[90vh] flex flex-col justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWinnerModal(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 text-[#c5a880] flex items-center justify-center transition-colors hover:text-white"
            >
              <span className="text-xl">✕</span>
            </button>
            <img
              src="./winner.jpeg"
              alt="Winner hidden photo"
              className="max-w-full max-h-full sm:max-h-[85vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 animate-fade-in"
            />
          </div>
        </div>
      )}
    </section>
  );
};
