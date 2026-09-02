import React from 'react';

type HistoryItem = {
  year?: string;
  month?: string;
  content: string;
};

const HISTORY_DATA: HistoryItem[] = [
  { year: '1969년', month: '9월', content: '창립' },
  { year: '1973년', month: '2월', content: '제1회 신입생 환영 연주회 (이후 매년 개최)' },
  { month: '5월', content: '제1회 정기 연주회' },
  { month: '9월', content: '정진덕 초청 연주회' },
  { month: '10월', content: '허병훈 초청 연주회' },
  { content: '제2회 정기 연주회 (이후 매년 개최)' },
  { year: '1974년', month: '5월', content: '기타 세미나 초대' },
  { month: '9월', content: '백양수 초청 연주회' },
  { year: '1976년', month: '6월', content: '제1회 신입생 발표회 (이후 매년 개최)' },
  { year: '1979년', month: '3월', content: 'S. Behrend 교수 초청 Workshop' },
  { month: '5월', content: '창립 10주년 기념 한국 기타 창작곡집 발간' },
  { month: '6월', content: '창립 10주년 기념 연주회' },
  { month: '7월', content: 'Faculty Recital' },
  { month: '10월', content: 'Imamura 초청 Baroque Lute 연주회' },
  { year: '1980년', month: '11월', content: '한국 기타 창작의 밤' },
  { year: '1983년', month: '9월', content: '제1회 동문 연주회' },
  { month: '11월', content: 'Suzuki Ichiro 초청 연주회' },
  { year: '1984년', month: '5월', content: '제2회 동문 연주회' },
  { year: '1985년', month: '3월', content: 'Peter Coey 초청 연주회' },
  { month: '5월', content: '제3회 동문 연주회' },
  { content: 'Bach 탄생 300주년 기념 Sharon Isbin 초청 연주회' },
  { month: '9월', content: 'Palmucci 초청 연주회' },
  { year: '1987년', month: '5월', content: '제4회 동문 연주회' },
  { year: '1988년', month: '10월', content: '제5회 동문 연주회' },
  { month: '11월', content: 'Daryle Buckley 초청 연주회' },
  { year: '1989년', month: '8월', content: '창립 20주년 기념 한일 친선 기타 연주회' },
  { year: '1990년', month: '5월', content: 'Iwon Tanzil 초청 Workshop' },
  { year: '1994년', month: '1월', content: '제1회 Solo 연주회' },
  { content: '창립 25주년 기념 연주회' },
  { year: '1995년', month: '8월', content: '서정실 초청 연주회' },
  { year: '1996년', month: '9월', content: 'Lama Costanzo 초청 Workshop' },
  { year: '1999년', month: '9월', content: '창립 30주년 기념 연주회' },
  { year: '2003년', month: '6월', content: '이성준 초청 연주회' },
  { year: '2006년', month: '6월', content: '제6회 동문 연주회' },
  { year: '2008년', month: '11월', content: '제7회 동문 연주회' },
  { year: '2009년', month: '5월', content: '창립 40주년 기념 제2회 서정실 초청 연주회' },
  { month: '11월', content: '창립 40주년 기념 연주회' },
  { year: '2010년', month: '8월', content: '제4회 전국대학생클래식기타합주대회 준우승' },
  { year: '2011년', month: '5월', content: '제8회 동문 연주회' },
  { month: '8월', content: '제5회 전국대학생클래식기타합주대회 동상' },
  { month: '11월', content: '제3회 서정실 초청 연주회' },
  { year: '2013년', month: '11월', content: '제1회 올페인의 밤 개최' },
  { year: '2014년', month: '8월', content: '제8회 전국대학생클래식기타합주대회 장려상' },
  { month: '10월', content: '창립 45주년 기념 연주회' },
  { year: '2018년', month: '9월', content: '서정실 1주기 추모 연주회 참여' },
  { year: '2019년', month: '9월', content: '창립 50주년 기념 연주회' },
  { year: '2024년', month: '5월', content: '황민웅 초청 연주회' },
  { month: '10월', content: '창립 55주년 기념 연주회' },
  { year: '2025년', month: '9월', content: '제52회 정기 연주회' },
  { year: '2026년', month: '3월', content: '제52회 신입생 환영 연주회' },
  { month: '8월', content: '제2회 UCGF 합주부문 금상, 인기상' },
  { month: '9월', content: '제53회 정기 연주회' }
];

export const HistorySection: React.FC = () => {
  return (
    <section id="history" className="py-16 px-4 sm:px-6 bg-[#0a0a0b] relative border-t border-[#222]">
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="font-serif-classic text-2xl sm:text-3xl font-bold text-[#fcf8f7] tracking-wider mb-10 text-center">
          동아리 연혁
        </h2>

        <div className="grid grid-cols-[3rem_2rem_1fr] sm:grid-cols-[4rem_3rem_1fr] gap-x-3 sm:gap-x-6 gap-y-1.5 text-left items-baseline w-full">
          {HISTORY_DATA.map((item, idx) => {
            const isNewYear = !!item.year;
            return (
              <React.Fragment key={idx}>
                {/* Year Column */}
                <div className={`font-serif-classic text-[#c5a880] font-medium text-[13px] sm:text-[15px] whitespace-nowrap ${isNewYear && idx !== 0 ? 'mt-6' : ''}`}>
                  {item.year || ''}
                </div>
                {/* Month Column */}
                <div className={`text-[13px] sm:text-[14px] text-[#a8957c] font-sans whitespace-nowrap ${isNewYear && idx !== 0 ? 'mt-6' : ''}`}>
                  {item.month || ''}
                </div>
                {/* Content Column */}
                <div className={`text-[13px] sm:text-[14px] text-[#d4cfce] font-sans leading-relaxed break-keep ${isNewYear && idx !== 0 ? 'mt-6' : ''}`}>
                  {item.content}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
