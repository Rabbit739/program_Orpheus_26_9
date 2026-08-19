import React from 'react';
import { BookOpen, Users, MapPin, MessageSquareHeart } from 'lucide-react';

interface BottomNavBarProps {
  activeTab: string;
  onSelectTab: (tab: 'program' | 'artists' | 'location' | 'guestbook') => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 'program', label: 'Program', icon: BookOpen },
    { id: 'artists', label: 'Artists', icon: Users },
    { id: 'location', label: 'Location', icon: MapPin },
    { id: 'guestbook', label: 'Guestbook', icon: MessageSquareHeart },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-[360px]">
      <div className="bg-[#fcf8f7]/95 backdrop-blur-md border border-[#c5a880]/40 rounded-2xl p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`bottom-nav-${tab.id}`}
              onClick={() => onSelectTab(tab.id as any)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-[#e5e2e1] text-[#1c1b1b] shadow-sm font-semibold scale-105'
                  : 'text-[#656464] hover:text-[#1c1b1b] hover:bg-black/5'
              }`}
            >
              <Icon
                className={`w-4 h-4 mb-0.5 transition-colors ${
                  isActive ? 'text-[#725b38]' : 'text-[#757874]'
                }`}
              />
              <span className="text-[10px] tracking-tight whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
