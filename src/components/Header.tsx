import React, { useState } from 'react';
import { Menu, X, Calendar, Share2, Music, MapPin, Users, BookOpen, MessageSquareHeart } from 'lucide-react';
import { CONCERT_INFO } from '../data/concertData';

interface HeaderProps {
  onSelectTab: (tab: 'program' | 'artists' | 'location' | 'guestbook' | 'gallery') => void;
  activeTab: string;
  onOpenPdfModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectTab, activeTab, onOpenPdfModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: CONCERT_INFO.title,
          text: `${CONCERT_INFO.title} - ${CONCERT_INFO.date} @ ${CONCERT_INFO.venue}`,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddToCalendar = () => {
    // 2026-09-02 17:00 KST
    const startTime = '20260902T080000Z';
    const endTime = '20260902T103000Z';
    const title = encodeURIComponent(CONCERT_INFO.title);
    const details = encodeURIComponent(`${CONCERT_INFO.subtitle}\n${CONCERT_INFO.invitationText}\n\n장소: ${CONCERT_INFO.venue}\n입장료: ${CONCERT_INFO.admission}`);
    const location = encodeURIComponent(CONCERT_INFO.address);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const navItems = [
    { id: 'program', label: 'Program (프로그램)', icon: BookOpen },
    { id: 'artists', label: 'Artists (연주자 소개)', icon: Users },
    { id: 'gallery', label: 'Gallery (준비의 기록)', icon: Music },
    { id: 'location', label: 'Location (오시는 길)', icon: MapPin },
    { id: 'guestbook', label: 'Guestbook (축하 방명록)', icon: MessageSquareHeart },
  ];

  return (
    <>
      <header id="main-header" className="sticky top-0 z-40 w-full bg-[#111113]/95 backdrop-blur-md border-b border-[#c5a880]/20 text-[#fcf8f7] transition-all">
        <div className="max-w-md mx-auto px-5 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-8 h-8 rounded-full border border-[#c5a880]/50 flex items-center justify-center bg-[#1c1b1b] group-hover:border-[#fedeb2] transition-colors">
              <span className="text-xs font-serif text-[#c5a880] group-hover:text-[#fedeb2]">𝄞</span>
            </div>
            <span className="font-serif-classic text-xl font-medium tracking-wide text-[#fcf8f7] group-hover:text-[#fedeb2] transition-colors">
              Orpheus Guitar
            </span>
          </a>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              id="share-btn"
              onClick={handleShare}
              title="공연 공유하기"
              className="p-2 text-[#c5a880] hover:text-[#fedeb2] hover:bg-white/5 rounded-full transition-colors active:scale-95"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              id="menu-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#fcf8f7] hover:text-[#c5a880] hover:bg-white/5 rounded-full transition-colors active:scale-95"
              aria-label="메뉴 열기"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-[#c5a880]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Share toast */}
        {copied && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 bg-[#2c2c2c] text-[#fedeb2] text-xs rounded-full border border-[#c5a880]/40 shadow-xl flex items-center gap-1.5 animate-fade-in">
            <span>✓ 링크가 클립보드에 복사되었습니다.</span>
          </div>
        )}
      </header>

      {/* Slide Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-xs h-full bg-[#171719] border-l border-[#c5a880]/20 flex flex-col justify-between p-6 shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#313030]">
                <div>
                  <h3 className="font-serif-classic text-lg text-[#fedeb2]">Orpheus Guitar</h3>
                  <p className="text-xs text-[#c5a880] mt-0.5">제 34회 정기연주회</p>
                </div>
                <button
                  id="close-drawer-btn"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-[#999] hover:text-white rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`drawer-nav-${item.id}`}
                      onClick={() => {
                        onSelectTab(item.id as any);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                        isActive
                          ? 'bg-[#c5a880]/20 text-[#fedeb2] border border-[#c5a880]/40 font-semibold'
                          : 'text-[#ddd9d8] hover:bg-white/5 hover:text-[#fedeb2]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#fedeb2]' : 'text-[#c5a880]'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-[#313030] flex flex-col gap-3">
                <button
                  id="drawer-calendar-btn"
                  onClick={handleAddToCalendar}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#281800] border border-[#c5a880]/40 text-xs text-[#fedeb2] hover:bg-[#3d2703] transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#c5a880]" />
                  <span>캘린더에 일정 추가 (Google)</span>
                </button>

                <button
                  id="drawer-pamphlet-btn"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenPdfModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#2c2c2c] border border-[#555] text-xs text-[#fff] hover:bg-[#3a3939] transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#c5a880]" />
                  <span>프로그램북 PDF 소장</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#313030] text-center">
              <p className="text-[11px] text-[#757874] leading-relaxed">
                2026. 9. 2 (SAT) 17:00<br />
                예술의전당 리사이틀홀
              </p>
              <p className="text-[10px] text-[#555] mt-2">© Orpheus Classical Guitar Ensemble</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
