import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { ALL_GALLERY_IMAGES } from '../data/galleryImages';

export const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? ALL_GALLERY_IMAGES.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === ALL_GALLERY_IMAGES.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-16 px-4 bg-[#232326] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="font-serif-classic text-xl sm:text-2xl font-medium text-[#fcf8f7] tracking-wider">
            연주회 준비의 기록
          </h2>
          <p className="text-xs text-[#a8957c] mt-1 font-sans">
            지난 2개월간 함께 호흡을하며 만들어온 순간들
          </p>
        </div>

        {/* Masonry Layout for Infinite Scroll Effect */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {ALL_GALLERY_IMAGES.map((url, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className="group relative w-full rounded-lg overflow-hidden cursor-pointer shadow-md border border-[#444] hover:border-[#c5a880] transition-all break-inside-avoid"
            >
              <img
                src={url}
                alt={`연습 사진 ${idx + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <ZoomIn className="w-6 h-6 text-[#fedeb2]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-0 sm:p-4 animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full h-full sm:max-h-[90vh] flex flex-col justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 text-[#c5a880] flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 text-[#c5a880] flex items-center justify-center transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <img
                key={selectedIndex}
                src={ALL_GALLERY_IMAGES[selectedIndex]}
                alt={`확대된 연습 사진 ${selectedIndex + 1}`}
                className="max-w-full max-h-full sm:max-h-[85vh] object-contain transition-opacity duration-300 animate-fade-in"
              />

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 text-[#c5a880] flex items-center justify-center transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
