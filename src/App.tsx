import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { HeroPoster } from './components/HeroPoster';
import { InvitationSection } from './components/InvitationSection';
import { BottomNavBar } from './components/BottomNavBar';
import { ArtistsModal } from './components/ArtistsModal';
import { Artist } from './types';
import { CONCERT_INFO } from './data/concertData';

// Lazy loading below-the-fold components to improve initial page load speed
const HistorySection = lazy(() => import('./components/HistorySection').then(m => ({ default: m.HistorySection })));
const ConductorMessageSection = lazy(() => import('./components/ConductorMessageSection').then(m => ({ default: m.ConductorMessageSection })));
const PresidentMessageSection = lazy(() => import('./components/PresidentMessageSection').then(m => ({ default: m.PresidentMessageSection })));
const ProgramTimeline = lazy(() => import('./components/ProgramTimeline').then(m => ({ default: m.ProgramTimeline })));
const PartPhotosSection = lazy(() => import('./components/PartPhotosSection').then(m => ({ default: m.PartPhotosSection })));
const ContributorSection = lazy(() => import('./components/ContributorSection').then(m => ({ default: m.ContributorSection })));
const MemberCommentsSection = lazy(() => import('./components/MemberCommentsSection').then(m => ({ default: m.MemberCommentsSection })));
const GallerySection = lazy(() => import('./components/GallerySection').then(m => ({ default: m.GallerySection })));
const LocationSection = lazy(() => import('./components/LocationSection').then(m => ({ default: m.LocationSection })));
const PamphletDownload = lazy(() => import('./components/PamphletDownload').then(m => ({ default: m.PamphletDownload })));

export default function App() {
  const [activeTab, setActiveTab] = useState<'program' | 'artists' | 'location' | 'gallery'>('program');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isArtistsModalOpen, setIsArtistsModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Scroll listener to update active bottom nav tab dynamically (optimized with requestAnimationFrame)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 200;

          const heroEl = document.getElementById('hero');
          const programEl = document.getElementById('program');
          const galleryEl = document.getElementById('gallery');
          const locationEl = document.getElementById('location');

          if (locationEl && scrollPos >= locationEl.offsetTop) {
            setActiveTab('location');
          } else if (galleryEl && scrollPos >= galleryEl.offsetTop) {
            setActiveTab('gallery');
          } else if (programEl && scrollPos >= programEl.offsetTop) {
            setActiveTab('program');
          } else {
            setActiveTab('program');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: 'program' | 'artists' | 'location' | 'gallery') => {
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

        <Suspense fallback={<div className="h-32 flex items-center justify-center text-[#c5a880]/50 text-sm">로딩 중...</div>}>
          {/* 동아리 연혁 (Club History) */}
          <HistorySection />

          {/* 지휘자 인사말 (Conductor's Message) */}
          <ConductorMessageSection />

          {/* 회장단 인사말 (President's Message) */}
          <PresidentMessageSection />

          {/* Program Timeline (Chamber Ensembles & Full Orchestra) */}
          <ProgramTimeline onSelectArtist={handleOpenArtistDetail} />

          {/* 파트별 사진 (Part Photos Section) */}
          <PartPhotosSection />

          {/* 도움을 주신 분들 (Contributors) */}
          <ContributorSection />

          {/* 나도 한마디 (Member Comments) */}
          <MemberCommentsSection />

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
        </Suspense>

        {/* Footer info */}
        <footer className="py-8 px-6 text-center border-t border-[#222] bg-[#0c0c0d] text-[#666] text-xs pb-24">
          <p className="font-serif text-[#999]">{CONCERT_INFO.orchestraName}</p>
          <p className="mt-1 text-[11px] text-[#555]">
            {CONCERT_INFO.title} · 백주년기념관 콘서트홀
          </p>
          <p className="mt-6 text-[10px] text-[#333]">
            Product by 최혁준 <span className="text-[#0c0c0d] selection:bg-[#c5a880] selection:text-white">사랑해요 미냥뇽</span>
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
