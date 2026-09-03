import React from 'react';
import { MessageSquareQuote } from 'lucide-react';

interface MemberComment {
  id: string;
  name: string;
  message: string;
}

const COMMENTS_DATA: MemberComment[] = [
  { id: '1', name: '양윤지(57)', message: '민영언니 너무 수고많았어요! 그리고 무엇보다 나의 2026년 여름을 행복하게 만들어 준 세컨드 너무 고마워~' },
  { id: '2', name: '서정주(57)', message: '좋은 단원, 좋은 간부, 좋은 시간' },
  { id: '3', name: '위준서(58)', message: '포스 화이팅🤫 siuuu~' },
  { id: '4', name: '김예림(58)', message: '연주회 즐 겁 다 ><' },
  { id: '5', name: '이준한(59)', message: '고생 많으셨습니다! 오르페 덕분에 즐거운 여름이었습니다.' },
  { id: '6', name: '정원지(57)', message: '라스트댄스 신나게 추고 갑니다! 지휘자님, 스탭분들, 단원들 모두 감사합니다!' },
  { id: '7', name: '최혁준(51)', message: '바쁜 삶속에서 행복한 시간을 보낼수 있어 좋았습니다. 지휘자, 세컨드, 51기 중주, 밥조 함께한 모든 합주 단원 분들 덕분에 즐거운 추억 많이 만들었습니다. 감사합니다.' },
  { id: '8', name: '이서영(59)', message: '이번 연주회 덕분에 여름을 불태우고 갑니다. 단원들 모두 고생 많으셨고 잊지 못할 추억 만들어준 써드 고맙고 사랑해요🤍' },
  { id: '9', name: '최민정(57)', message: '기억에 오래 남을 여름이었습니다. 덕분에 많이 웃으며 지냈어요! 다들 고생많으셨습니다. 세컨드 최고<3' },
  { id: '10', name: '김도형(57)', message: '다들 행복하세요~~' },
  { id: '11', name: '이해찬(56)', message: '다들 고생 많았어요~' },
  { id: '12', name: '이재호(59)', message: '덕분에 두 달 내내 정말 재밌었습니다. 써드 하길 잘했다는 생각이 드네요. 다들 수고하셨습니다! 써드 최고!' },
  { id: '13', name: '이규연(56)', message: '가장 기억에 남을 즐거운 방학이었습니다. 써드 파트원들 너무 고생많았습니다~' },
  { id: '14', name: '공경배(52)', message: '모두들 고생 많았고 행복하세요' },
  { id: '15', name: '박성하(58)', message: '모두 방학동안 고생하셨어요. 군대 전 라스트댄스...라기에는 퍼스트에 누군가가 있네요... 나도 금방 따라갈게!!! 그리고 세컨드 최고!!!!!!!!' },
  { id: '16', name: '고한슬(59)', message: '덕분에 대학교 첫 여름방학 즐겁게 보냈습니다!! 퍼스트 체고~' },
  { id: '17', name: '윤채원(59)', message: '다들 수고 많으셨습니다! 같이 멋진 연주를 만들어갈 수 있어서 좋았어요!' },
  { id: '18', name: '황수아(59)', message: '너무너무 재밌었어요!!! 마지막 4학년 이 연주회 덕분에 잊지 못할 것 같아요! 특히 써드 스릉흔드💗💗💗💗' },
  { id: '19', name: '문소영(58)', message: '더 잘해볼걸 하는 아쉬움이 남지만 오히려 그 덕분에 여운이 길 것 같습니다. 포스 감사합니다!' },
  { id: '20', name: '김규아(59)', message: '여름의 시작과 끝을 오르페우스와 함께할 수 있어 즐거웠습니다. 모두 수고 많으셨어요!! 특히 세컨드 최고 👍' },
  { id: '21', name: '이은우(58)', message: '다시 돌아가도 하고 싶은 연주회였습니다. 소중한 시간을 선물해주셔서 감사합니다!' },
  { id: '22', name: '김영훈(57)', message: '퍼스트 화이팅! 중주 화이팅!' },
  { id: '23', name: '윤도현(55)', message: '좋은 사람들과 연주회 함께할 수 있어서 행복합니다' },
  { id: '24', name: '윤소희(59)', message: '포스 최고 포스 화이팅 🫶' },
  { id: '25', name: '임지민(57)', message: '소중한 시간이었습니다! 퍼스트 사랑해~' },
  { id: '26', name: '박은수(59)', message: '마지막 학기 좋은 추억 쌓아갑니다. 다들 건강하시고 행복하세요!' },
  { id: '27', name: '안호성(59)', message: '제 첫 연주회를 정말 즐겁고 뜻깊은 연주회로 만들어주셔서 감사합니다. 퍼스트 사랑해요' },
  { id: '28', name: '최우성(59)', message: '좋은 분들과 함께 방학동안 연주회를 준비하며 보람차고 소중한 추억들을 쌓을 수 있어 좋았습니다 다들 수고 많으셨습니다!!' },
  { id: '29', name: '윤준환(58)', message: '어느덧 두 번째 연주회, 퍼스트와 함께 너무 행복했습니다!' },
  { id: '30', name: '김동하(58)', message: '덕분에 특별한 여름을 보낼 수 있었습니다! 그리고 우리 써드 너무너무 수고했어여!!!' },
  { id: '31', name: '윤주희(57)', message: '두고두고 추억할 소중한 시간을 선사해준 지휘자 정민영, 최고로 고맙습니다^3^ 퍼스트 사랑합니다!' },
  { id: '32', name: '오창완(59)', message: '첫 연주회! 좋은 추억 만들어서 좋았습니다~' },
  { id: '33', name: '김동헌(59)', message: '연주회 덕분에 알차고 즐거운 방학 보낼 수 있었습니다. 첫 연주회를 즐거운 추억으로 남길 수 있어 행복했습니다!!' },
  { id: '34', name: '김성주(59)', message: '방학동안 연주회 준비하느라 다들 고생 많았습니다. 첫 연주회인 만큼 더 의미 있고 즐거운 추억으로 남을 것 같아요. 화이팅!!' },
  { id: '35', name: '문경후(58)', message: '스스로 좋은 소리를 내고 다같이 좋은 음악을 만들어봅시다. 생애 첫 중주도 두 번째 합주도 모두 화이팅' },
  { id: '36', name: '태유준(59)', message: '다들 고생하셨습니다' },
  { id: '37', name: '이영민(58)', message: '기타의 매력에 다시 빠지게 되는 연주회였습니다. 지휘자님, 써드 팀원 덕분에 재밌게 할 수 있었어요. 감사합니다.' },
  { id: '38', name: '정예은(59)', message: '방학 동안 너무 즐거웠어요! 잊지 못할 첫 연주회가 될 것 같습니다. 포스 화이팅!! 🫶🏼' },
  { id: '39', name: '송지민(51)', message: 'ㅇㅅㅇ;; 퍼스트 고생했고 늙크크 중주 고?생 많았다 그래서 다음 연주회 지휘자는 누구죠 중주하고 싶은디' },
  { id: '40', name: '김효림(57)', message: '즐거웠 다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' },
  { id: '41', name: '노윤지(59)', message: '써드 사랑해!!' },
  { id: '42', name: '정재호(55)', message: '여러 번 연주회를 해보았지만 연주회를 준비하며 느끼는 감정은 매번 새롭네요. 좋은 지휘자, 선배, 후배들 덕분에 화사한 시간 보냈습니다. 오르페우스 만세!' },
  { id: '43', name: '이서진(57)', message: '퍼스트 사랑합니다 지휘자 사랑합니다' },
  { id: '44', name: '김율희(59)', message: '모두 고생 많으셨습니다! 즐거웠어요🫶🏻' }
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
