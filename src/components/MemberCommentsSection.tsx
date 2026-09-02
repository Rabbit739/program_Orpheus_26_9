import React from 'react';
import { MessageSquareQuote } from 'lucide-react';

interface MemberComment {
  id: string;
  name: string;
  message: string;
}

const COMMENTS_DATA: MemberComment[] = [
  {
    id: '1',
    name: '정민영(55)',
    message: '다들 즐거웠습니다.',
  },
  {
    id: '2',
    name: '단원 이름(기수)',
    message: '여기에 단원들의 한마디가 들어갑니다.',
  },
  // TODO: 실제 단원들의 코멘트 데이터를 여기에 추가하세요.
];

export const MemberCommentsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-[#111113] relative border-t border-[#222]">
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        
        <div className="flex items-center justify-center gap-2 mb-10">
          <MessageSquareQuote className="w-6 h-6 text-[#c5a880]" />
          <h2 className="font-serif-classic text-xl font-bold text-[#fcf8f7] tracking-wider">
            나도 한마디
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {COMMENTS_DATA.map((comment) => (
            <div 
              key={comment.id} 
              className="bg-[#1c1b1b] rounded-lg p-5 border border-[#333] shadow-lg text-left relative overflow-hidden group hover:border-[#c5a880]/50 transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a880]/20 group-hover:bg-[#c5a880] transition-colors" />
              <div className="pl-3">
                <span className="text-[#e97a3a] text-sm font-bold block mb-2">{comment.name}</span>
                <p className="text-[13px] text-[#d4cfce] font-sans leading-relaxed whitespace-pre-line break-keep">
                  {comment.message}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
