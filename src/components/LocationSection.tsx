import React, { useState } from 'react';
import { MapPin, Navigation, Bus, Car, Ticket, ExternalLink, Copy, Check } from 'lucide-react';
import { CONCERT_INFO } from '../data/concertData';

export const LocationSection: React.FC = () => {
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CONCERT_INFO.address);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

  const openMap = (type: 'naver' | 'kakao' | 'google') => {
    const encoded = encodeURIComponent('예술의전당 리사이틀홀');
    if (type === 'naver') {
      window.open(`https://map.naver.com/v5/search/${encoded}`, '_blank');
    } else if (type === 'kakao') {
      window.open(`https://map.kakao.com/link/search/${encoded}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Seoul Arts Center Recital Hall')}`, '_blank');
    }
  };

  return (
    <section id="location" className="py-16 px-4 bg-[#141416] relative text-[#fcf8f7]">
      <div className="max-w-md mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-serif-classic text-2xl sm:text-3xl font-medium text-[#fcf8f7] tracking-wider">
            Location
          </h2>
          <p className="text-sm font-serif text-[#c5a880] mt-1">
            {CONCERT_INFO.venue}
          </p>
        </div>

        {/* Map / Floor Plan Illustration Container */}
        <div className="relative rounded-xl overflow-hidden border border-[#333] shadow-2xl bg-[#1c1b1b] group">
          {/* TODO: [사진 변경] 오시는 길 안내 지도 이미지 URL을 입력하세요. */}
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
            alt="Seoul Arts Center Precinct Map"
            className="w-full aspect-[16/9] object-cover filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle map overlay pin */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-4">
            <div>
              <span className="text-[10px] font-sans font-bold text-[#c5a880] uppercase tracking-wider">
                HALL VENUE
              </span>
              <p className="text-sm font-serif text-white font-medium">예술의전당 음악당 지하 1층 리사이틀홀</p>
            </div>
            <button
              id="copy-address-btn"
              onClick={handleCopyAddress}
              className="flex items-center gap-1 bg-black/60 hover:bg-black/80 border border-[#c5a880]/50 text-[#fedeb2] text-[11px] px-2.5 py-1.5 rounded-md transition-all active:scale-95"
            >
              {addressCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{addressCopied ? '복사완료' : '주소복사'}</span>
            </button>
          </div>
        </div>

        {/* Subway Direction Card matching screenshot */}
        <div className="mt-4 bg-[#ffffff] text-[#1c1b1b] rounded-lg p-3.5 shadow-md flex items-start gap-3 border border-[#e5e2e1]">
          <div className="p-2 bg-[#f4f0ef] rounded-md text-[#725b38]">
            <Navigation className="w-5 h-5 text-[#725b38]" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold text-[#1c1b1b] block">Subway</span>
            <p className="text-xs text-[#444844] mt-0.5 font-sans leading-relaxed">
              Line 3 Nambu Bus Terminal Station, Exit 5 (10 min walk)
            </p>
            <p className="text-[11px] text-[#757874] mt-0.5">
              3호선 남부터미널역 5번 출구에서 예술의전당 방면 도보 10분 또는 셔틀버스 이용
            </p>
          </div>
        </div>

        {/* FREE ADMISSION Badge */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#c5a880]/40 bg-[#1c1b1b] text-[#fedeb2] shadow-md">
            <Ticket className="w-4 h-4 text-[#c5a880]" />
            <span className="text-xs font-serif font-medium tracking-widest uppercase">
              FREE ADMISSION (전석 무료 초대)
            </span>
          </div>
        </div>

        {/* Extra Transit & Maps quick links */}
        <div className="mt-6 pt-6 border-t border-[#2a2a2d] grid grid-cols-3 gap-2 text-center">
          <button
            id="nav-naver-btn"
            onClick={() => openMap('naver')}
            className="py-2.5 px-2 bg-[#1c1b1b] hover:bg-[#28282b] border border-[#3a3a3d] hover:border-[#2DB400] text-xs text-[#ddd] rounded-lg transition-all flex flex-col items-center gap-1"
          >
            <span className="text-[#2DB400] font-bold text-xs">NAVER</span>
            <span className="text-[11px] text-[#aaa]">네이버지도</span>
          </button>
          <button
            id="nav-kakao-btn"
            onClick={() => openMap('kakao')}
            className="py-2.5 px-2 bg-[#1c1b1b] hover:bg-[#28282b] border border-[#3a3a3d] hover:border-[#FEE500] text-xs text-[#ddd] rounded-lg transition-all flex flex-col items-center gap-1"
          >
            <span className="text-[#FEE500] font-bold text-xs">KAKAO</span>
            <span className="text-[11px] text-[#aaa]">카카오맵</span>
          </button>
          <button
            id="nav-google-btn"
            onClick={() => openMap('google')}
            className="py-2.5 px-2 bg-[#1c1b1b] hover:bg-[#28282b] border border-[#3a3a3d] hover:border-[#4285F4] text-xs text-[#ddd] rounded-lg transition-all flex flex-col items-center gap-1"
          >
            <span className="text-[#4285F4] font-bold text-xs">GOOGLE</span>
            <span className="text-[11px] text-[#aaa]">구글지도</span>
          </button>
        </div>

        {/* Parking & Bus info details */}
        <div className="mt-4 p-3 bg-[#18181b] rounded-lg border border-[#2e2e32] text-[11px] text-[#888] space-y-1.5">
          <div className="flex items-center gap-2 text-[#bbb]">
            <Car className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>주차 안내: 음악당 지하주차장 이용 (공연 관람객 3시간 6,000원)</span>
          </div>
          <div className="flex items-center gap-2 text-[#bbb]">
            <Bus className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>버스 안내: 서초11, 서초22, 405, 5413번 '예술의전당' 하차</span>
          </div>
        </div>
      </div>
    </section>
  );
};
