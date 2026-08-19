import React, { useState, useEffect } from 'react';
import { Heart, Send, MessageSquareHeart, Sparkles } from 'lucide-react';
import { INITIAL_GUESTBOOK } from '../data/concertData';
import { GuestbookEntry } from '../types';
import confetti from 'canvas-confetti';

export const GuestbookSection: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(() => {
    const saved = localStorage.getItem('orpheus_guestbook');
    return saved ? JSON.parse(saved) : INITIAL_GUESTBOOK;
  });

  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [target, setTarget] = useState('전체 합주단');
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    localStorage.setItem('orpheus_guestbook', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: `gb-${Date.now()}`,
      author: author.trim(),
      message: message.trim(),
      target,
      likes: 1,
      timestamp: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setEntries([newEntry, ...entries]);
    setAuthor('');
    setMessage('');

    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.85 },
        colors: ['#c5a880', '#fedeb2', '#ff85a1'],
      });
    } catch {
      // Ignored
    }
  };

  const handleLike = (id: string) => {
    if (likedIds[id]) return;
    setLikedIds({ ...likedIds, [id]: true });
    setEntries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, likes: item.likes + 1 } : item))
    );
  };

  return (
    <section id="guestbook" className="py-16 px-4 bg-[#111113] relative text-[#fcf8f7]">
      <div className="max-w-md mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#1c1b1b] border border-[#c5a880]/40 text-[#fedeb2] mb-3">
            <MessageSquareHeart className="w-5 h-5 text-[#c5a880]" />
          </div>
          <h2 className="font-serif-classic text-xl sm:text-2xl font-medium text-[#fcf8f7] tracking-wider">
            축하 및 응원 방명록
          </h2>
          <p className="text-xs text-[#a8957c] mt-1 font-sans">
            무대를 준비한 연주자분들께 따뜻한 응원의 한마디를 남겨주세요
          </p>
        </div>

        {/* Guestbook Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1c1b1b] border border-[#333] rounded-xl p-5 mb-8 shadow-xl space-y-3.5"
        >
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="text-[11px] text-[#aaa] block mb-1">작성자 성함</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="예: 관객 김서연"
                required
                className="w-full bg-[#121214] border border-[#444] focus:border-[#c5a880] rounded px-3 py-2 text-xs text-white outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] text-[#aaa] block mb-1">응원 대상</label>
              <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full bg-[#121214] border border-[#444] text-xs text-white rounded px-2.5 py-2 outline-none"
              >
                <option value="전체 합주단">전체 합주단</option>
                <option value="1st Guitar Team (Duo)">1st Guitar Team (Duo)</option>
                <option value="2nd Guitar Team (Trio)">2nd Guitar Team (Trio)</option>
                <option value="지휘자 김지훈">지휘자 김지훈</option>
                <option value="악장 및 수석">악장 및 수석 단원</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[11px] text-[#aaa] block mb-1">응원 메시지</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="따뜻한 축하와 격려의 글을 남겨주세요..."
              rows={3}
              required
              className="w-full bg-[#121214] border border-[#444] focus:border-[#c5a880] rounded px-3 py-2 text-xs text-white outline-none resize-none leading-relaxed"
            />
          </div>

          <button
            type="submit"
            id="submit-guestbook-btn"
            className="w-full py-2.5 bg-[#725b38] hover:bg-[#876e4b] active:scale-[0.99] text-[#fcf8f7] font-medium text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span>응원 메시지 남기기</span>
          </button>
        </form>

        {/* Message List */}
        <div className="space-y-3">
          {entries.map((item) => (
            <div
              key={item.id}
              className="bg-[#18181a] border border-[#2e2e32] rounded-xl p-4 shadow-sm hover:border-[#444] transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xs font-bold text-[#fedeb2]">{item.author}</span>
                  {item.target && (
                    <span className="px-2 py-0.5 bg-[#2a241e] border border-[#c5a880]/30 text-[#c5a880] text-[10px] rounded-full">
                      To. {item.target}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-[#666]">{item.timestamp}</span>
              </div>

              <p className="text-xs text-[#ddd9d8] leading-relaxed font-sans">{item.message}</p>

              <div className="mt-3 pt-2.5 border-t border-[#252528] flex justify-end">
                <button
                  id={`like-entry-${item.id}`}
                  onClick={() => handleLike(item.id)}
                  className={`flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                    likedIds[item.id]
                      ? 'bg-rose-950/40 border-rose-800/50 text-rose-300'
                      : 'border-[#38383c] hover:border-[#c5a880]/50 text-[#888] hover:text-[#fedeb2]'
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${likedIds[item.id] ? 'fill-rose-500 text-rose-500' : ''}`}
                  />
                  <span>{item.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
