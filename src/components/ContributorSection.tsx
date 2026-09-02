import React from 'react';

export const ContributorSection: React.FC = () => {
  const guest = ["황호연(객원)"];
  const staff = ["양동훈(스탭장)", "심호인", "강태경", "김다민", "김준석", "박가온", "오유진", "이준희", "정지원", "권혜민", "노연주", "박서연", "황관우"];
  const contributors = ["한재경", "유영근", "정해인", "강기연", "이상욱", "남윤우", "윤준수", "김태성", "김준형", "남동현"];

  return (
    <section className="py-12 px-4 sm:px-6 bg-[#0a0a0b] relative border-t border-[#222]">
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <h2 className="text-xl sm:text-2xl font-serif text-white font-semibold mb-8 flex flex-col items-center gap-2">
          Contributors
          <span className="w-8 h-[1px] bg-[#c5a880]"></span>
        </h2>
        
        <div className="flex flex-col gap-6 text-[#9a918c] font-sans text-sm sm:text-[15px] leading-loose break-keep">
          <div>
            {guest.map((name) => (
              <span key={name} className="inline-block mx-2 whitespace-nowrap">
                <span className="text-[#fedeb2] font-medium">{name}</span>
              </span>
            ))}
          </div>

          <div>
            {staff.map((name) => (
              <span key={name} className="inline-block mx-2 whitespace-nowrap">
                {name === "양동훈(스탭장)" ? (
                  <span className="text-[#c5a880] font-bold">{name}</span>
                ) : (
                  name
                )}
              </span>
            ))}
          </div>
          
          <div>
            {contributors.map((name) => (
              <span key={name} className="inline-block mx-2 whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
