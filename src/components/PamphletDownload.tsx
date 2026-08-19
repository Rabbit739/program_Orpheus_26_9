import React, { useState } from 'react';
import { BookOpen, Download, FileText, CheckCircle, ExternalLink, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONCERT_INFO, PROGRAM_PARTS } from '../data/concertData';

interface PamphletDownloadProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

export const PamphletDownload: React.FC<PamphletDownloadProps> = ({
  isOpenModal,
  onCloseModal,
  onOpenModal,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDownload = () => {
    setDownloading(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#c5a880', '#fedeb2', '#725b38', '#ffffff'],
      });
    } catch {
      // Ignored
    }

    setTimeout(() => {
      setDownloading(false);
      setDownloadComplete(true);

      // Create dummy text/html blob file for authentic file download trigger
      const element = document.createElement('a');
      const fileContent = `[제 34회 오르페우스 클래식 기타 정기연주회 디지털 프로그램북]\n일시: ${CONCERT_INFO.date}\n장소: ${CONCERT_INFO.venue}\n\n- PART I: Chamber Ensembles (Duo & Trio)\n- PART II: Full Orchestra (Concierto de Aranjuez, Koyunbaba)\n\n감사합니다.`;
      const file = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = 'Orpheus_Guitar_34th_Concert_Program.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      setTimeout(() => setDownloadComplete(false), 3500);
    }, 1200);
  };

  return (
    <section id="pamphlet" className="py-12 px-4 bg-[#0e0e10] relative">
      <div className="max-w-md mx-auto relative z-10">
        {/* White Pamphlet Card matching screenshot */}
        <div className="bg-[#ffffff] text-[#1c1b1b] rounded-2xl p-6 sm:p-8 text-center shadow-2xl border border-[#e5e2e1]">
          {/* Circular Badge Icon */}
          <div className="w-12 h-12 rounded-full bg-[#f7f3f2] border border-[#e5e2e1] flex items-center justify-center mx-auto mb-4 text-[#725b38]">
            <BookOpen className="w-6 h-6 text-[#725b38]" />
          </div>

          {/* Heading */}
          <h3 className="font-serif-classic text-lg sm:text-xl font-bold text-[#1c1b1b] mb-2">
            공연 팜플렛 소장하기 (PDF)
          </h3>

          {/* Subtitle / Description */}
          <p className="text-xs text-[#5e5f5d] leading-relaxed max-w-xs mx-auto mb-6 font-sans">
            고화질 인쇄용/모바일용 전체 프로그램북을 다운로드하여 확인하실 수 있습니다.
          </p>

          {/* Download & View Buttons */}
          <div className="space-y-2.5">
            <button
              id="pamphlet-download-btn"
              onClick={handleDownload}
              disabled={downloading}
              className="w-full py-3.5 px-5 bg-[#5e4b30] hover:bg-[#6e5839] active:scale-[0.99] text-[#ffffff] font-medium text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#fedeb2]" />
              <span className="font-serif font-semibold">
                {downloading ? '다운로드 생성 중...' : downloadComplete ? '다운로드 완료!' : '팜플렛 PDF 다운로드'}
              </span>
              <span className="px-1.5 py-0.5 bg-[#423420] text-[#fedeb2] text-[10px] font-sans rounded">
                PDF · 5.2MB
              </span>
            </button>

            <button
              id="pamphlet-preview-btn"
              onClick={onOpenModal}
              className="w-full py-2.5 px-4 bg-[#f1edec] hover:bg-[#e5e2e1] text-[#2c2c2c] text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#725b38]" />
              <span>화면에서 디지털 프로그램북 넘겨보기</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Digital Program Book Flip Viewer Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative max-w-md w-full bg-[#fcf8f7] text-[#1c1b1b] rounded-2xl overflow-hidden shadow-2xl border border-[#c5a880]/60 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-5 py-4 bg-[#211f1e] text-[#fcf8f7] flex items-center justify-between border-b border-[#3e3c3a]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#fedeb2]" />
                <span className="font-serif-classic text-sm font-semibold text-[#fedeb2]">
                  디지털 프로그램북 (Page {currentPage}/3)
                </span>
              </div>
              <button
                id="close-pamphlet-modal-btn"
                onClick={onCloseModal}
                className="text-[#999] hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Page Content */}
            <div className="p-6 overflow-y-auto flex-1 paper-texture">
              {currentPage === 1 && (
                <div className="text-center space-y-4 py-4">
                  <span className="text-xs font-serif text-[#725b38] uppercase tracking-widest">
                    Orpheus Classical Guitar
                  </span>
                  <h2 className="font-serif-classic text-2xl font-bold text-[#1c1b1b]">
                    제 34회 정기연주회
                  </h2>
                  <div className="w-16 h-16 rounded-full mx-auto border border-[#c5a880] p-1">
                    <img
                      src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=300&q=80"
                      alt="Guitar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="text-xs text-[#5e5e5e] italic">
                    "깊어가는 가을 밤, 나무의 울림으로 쓰여진 34번째 편지"
                  </p>
                  <div className="pt-4 text-xs text-[#666] border-t border-[#ddd]">
                    <p>2026. 9. 2 (토) 17:00</p>
                    <p>예술의전당 리사이틀홀</p>
                  </div>
                </div>
              )}

              {currentPage === 2 && (
                <div className="space-y-4">
                  <h3 className="font-serif-classic text-base font-bold text-[#725b38] border-b border-[#ddd] pb-2">
                    PART I – Chamber Ensembles
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-[#1c1b1b]">F. Sor - L'Encouragement Op.34</p>
                      <p className="text-[11px] text-[#666]">1st Guitar Team (김민수, 이지은)</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#1c1b1b]">M. Giuliani - Variazioni Concertanti Op.130</p>
                      <p className="text-[11px] text-[#666]">1st Guitar Team (김민수, 이지은)</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#1c1b1b]">A. Vivaldi - Lute Concerto in D Major</p>
                      <p className="text-[11px] text-[#666]">2nd Guitar Team (박지현, 최태영, 정수아)</p>
                    </div>
                  </div>
                  <div className="pt-2 text-center text-[11px] font-semibold text-[#888]">
                    ☕ INTERMISSION (15 MIN)
                  </div>
                </div>
              )}

              {currentPage === 3 && (
                <div className="space-y-4">
                  <h3 className="font-serif-classic text-base font-bold text-[#725b38] border-b border-[#ddd] pb-2">
                    PART II – Full Orchestra
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-[#1c1b1b]">J. Rodrigo - Concierto de Aranjuez</p>
                      <p className="text-[11px] text-[#666]">지휘: 김지훈 / 전악장 합주</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#1c1b1b]">C. Domeniconi - Koyunbaba</p>
                      <p className="text-[11px] text-[#666]">오케스트라 특별 편곡</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#ddd] text-center text-[11px] text-[#555]">
                    <p className="font-serif font-bold text-[#222]">오르페우스 클래식 기타 오케스트라</p>
                    <p className="mt-1">주최·주관: 오르페우스 / 후원: 한국클래식기타협회</p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 bg-[#f1edec] border-t border-[#ddd] flex items-center justify-between">
              <div className="flex gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 bg-white border border-[#ccc] rounded text-xs text-[#333] disabled:opacity-40"
                >
                  이전
                </button>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
                  disabled={currentPage === 3}
                  className="px-3 py-1.5 bg-white border border-[#ccc] rounded text-xs text-[#333] disabled:opacity-40"
                >
                  다음
                </button>
              </div>

              <button
                onClick={handleDownload}
                className="px-3.5 py-1.5 bg-[#5e4b30] text-white rounded text-xs font-medium flex items-center gap-1 hover:bg-[#725b38]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF 저장</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
