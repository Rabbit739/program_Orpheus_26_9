import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroPoster } from './components/HeroPoster';
import { InvitationSection } from './components/InvitationSection';
import { ProgramTimeline } from './components/ProgramTimeline';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { PamphletDownload } from './components/PamphletDownload';
import { GuestbookSection } from './components/GuestbookSection';
import { BottomNavBar } from './components/BottomNavBar';
import { ArtistsModal } from './components/ArtistsModal';
import { Artist } from './types';
import { CONCERT_INFO } from './data/concertData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'program' | 'artists' | 'location' | 'guestbook' | 'gallery'>('program');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isArtistsModalOpen, setIsArtistsModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Scroll listener to update active bottom nav tab dynamically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      const heroEl = document.getElementById('hero');
      const programEl = document.getElementById('program');
      const galleryEl = document.getElementById('gallery');
      const locationEl = document.getElementById('location');
      const guestbookEl = document.getElementById('guestbook');

      if (guestbookEl && scrollPos >= guestbookEl.offsetTop) {
        setActiveTab('guestbook');
      } else if (locationEl && scrollPos >= locationEl.offsetTop) {
        setActiveTab('location');
      } else if (galleryEl && scrollPos >= galleryEl.offsetTop) {
        setActiveTab('gallery');
      } else if (programEl && scrollPos >= programEl.offsetTop) {
        setActiveTab('program');
      } else {
        setActiveTab('program');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: 'program' | 'artists' | 'location' | 'guestbook' | 'gallery') => {
    setActiveTab(tab);

    if (tab === 'artists') {
      setSelectedArtist(null);
      setIsArtistsModalOpen(true);
      return;
    }

    const targetEl = document.getElementById(tab);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenArtistDetail = (artist: Artist) => {
    setSelectedArtist(artist);
    setIsArtistsModalOpen(true);
  };

  const handleScrollToProgram = () => {
    const el = document.getElementById('invitation') || document.getElementById('program');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0e10] text-[#f4f0ef] pb-24 flex flex-col items-center">
      {/* Container wrapper maintaining mobile-first card elegance with max-w-lg */}
      <div className="w-full max-w-lg min-h-screen bg-[#111113] shadow-2xl relative border-x border-[#222]/80">
        {/* Top Header */}
        <Header
          onSelectTab={handleSelectTab}
          activeTab={activeTab}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
        />

        {/* Hero Poster Framed Card */}
        <HeroPoster onScrollToProgram={handleScrollToProgram} />

        {/* 초대의 글 (Invitation Note) */}
        <InvitationSection />

        {/* Program Timeline (Chamber Ensembles & Full Orchestra) */}
        <ProgramTimeline onSelectArtist={handleOpenArtistDetail} />

        {/* 연주회 준비의 기록 (Gallery Rehearsal Photos) */}
        <GallerySection />

        {/* Location & Directions */}
        <LocationSection />

        {/* 공연 팜플렛 소장하기 (PDF Program Book) */}
        <PamphletDownload
          isOpenModal={isPdfModalOpen}
          onCloseModal={() => setIsPdfModalOpen(false)}
          onOpenModal={() => setIsPdfModalOpen(true)}
        />

        {/* Guestbook & Fan Cheering Section */}
        <GuestbookSection />

        {/* Footer info */}
        <footer className="py-8 px-6 text-center border-t border-[#222] bg-[#0c0c0d] text-[#666] text-xs">
          <p className="font-serif text-[#999]">{CONCERT_INFO.orchestraName}</p>
          <p className="mt-1 text-[11px] text-[#555]">
            {CONCERT_INFO.title} · 예술의전당 리사이틀홀
          </p>
          <p className="mt-2 text-[10px] text-[#444]">
            문의: {CONCERT_INFO.inquiry}
          </p>
        </footer>

        {/* Floating Sticky Bottom Navigation Bar */}
        <BottomNavBar
          activeTab={activeTab === 'gallery' ? 'program' : activeTab}
          onSelectTab={handleSelectTab}
        />

        {/* Artists Roster & Profile Modal */}
        <ArtistsModal
          selectedArtist={selectedArtist}
          isOpen={isArtistsModalOpen}
          onClose={() => {
            setIsArtistsModalOpen(false);
            setSelectedArtist(null);
          }}
        />
      </div>
    </div>
  );
}
