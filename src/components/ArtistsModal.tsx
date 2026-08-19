import React from 'react';
import { X, Award, Music, Sparkles } from 'lucide-react';
import { ARTISTS } from '../data/concertData';
import { Artist } from '../types';

interface ArtistsModalProps {
  selectedArtist: Artist | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArtistsModal: React.FC<ArtistsModalProps> = ({ selectedArtist, isOpen, onClose }) => {
  if (!isOpen) return null;

  const allArtists = Object.values(ARTISTS);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative max-w-md w-full bg-[#18181a] text-[#fcf8f7] rounded-2xl overflow-hidden shadow-2xl border border-[#c5a880]/50 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 bg-[#201f22] flex items-center justify-between border-b border-[#333]">
          <div>
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#c5a880]">
              ORPHEUS GUITAR
            </span>
            <h3 className="font-serif-classic text-base font-semibold text-[#fedeb2]">
              {selectedArtist ? '연주자 프로필' : '연주자 & 합주단 소개'}
            </h3>
          </div>
          <button
            id="close-artists-modal-btn"
            onClick={onClose}
            className="text-[#999] hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-6">
          {/* If a specific artist was selected */}
          {selectedArtist && (
            <div className="bg-[#242327] border border-[#3e3d42] rounded-xl p-4 flex gap-4 items-center">
              <img
                src={selectedArtist.avatar}
                alt={selectedArtist.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#c5a880] shadow-md shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold text-[#c5a880] uppercase tracking-wide">
                  {selectedArtist.role}
                </span>
                <h4 className="font-serif-classic text-base font-bold text-white">
                  {selectedArtist.name}
                </h4>
                <p className="text-xs text-[#fedeb2]/80">{selectedArtist.instrument}</p>
                {selectedArtist.bio && (
                  <p className="text-xs text-[#aaa] mt-1.5 leading-relaxed">{selectedArtist.bio}</p>
                )}
              </div>
            </div>
          )}

          {/* All Performers List */}
          <div>
            <h4 className="font-serif-classic text-sm font-semibold text-[#c5a880] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>출연진 명단 (Orpheus Artists)</span>
            </h4>

            <div className="grid grid-cols-1 gap-2.5">
              {allArtists.map((artist) => (
                <div
                  key={artist.id}
                  className={`p-3 rounded-lg border flex items-center gap-3 transition-colors ${
                    selectedArtist?.id === artist.id
                      ? 'bg-[#2a241e] border-[#c5a880]'
                      : 'bg-[#1e1e21] border-[#2e2e32] hover:border-[#444]'
                  }`}
                >
                  <img
                    src={artist.avatar}
                    alt={artist.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#c5a880]/50 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xs font-bold text-white truncate">
                        {artist.name}
                      </span>
                      <span className="text-[10px] text-[#c5a880] font-sans shrink-0">
                        {artist.role}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#888] truncate">{artist.instrument}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orchestra info */}
          <div className="p-3.5 bg-[#141416] border border-[#2e2e32] rounded-xl text-xs text-[#888] leading-relaxed">
            <p className="font-serif text-[#ddd] font-semibold mb-1">
              오르페우스 클래식 기타 합주단 (Orpheus Guitar Ensemble)
            </p>
            <p>
              1991년 창단 이래 34년간 클래식 기타 특유의 섬세한 음색과 오케스트라의 웅장한 화성을 탐구해온 대한민국 대표 클래식 기타 앙상블입니다.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-[#201f22] border-t border-[#333] text-center">
          <button
            onClick={onClose}
            className="w-full py-2 bg-[#725b38] text-white rounded-lg text-xs font-medium hover:bg-[#876e4b]"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
