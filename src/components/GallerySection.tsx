import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/concertData';
import { GalleryItem } from '../types';
import { X, ZoomIn, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-16 px-4 bg-[#232326] relative">
      <div className="max-w-md mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="font-serif-classic text-xl sm:text-2xl font-medium text-[#fcf8f7] tracking-wider">
            연주회 준비의 기록
          </h2>
          <p className="text-xs text-[#a8957c] mt-1 font-sans">
            지난 6개월간 함께 호흡하며 만들어온 선율의 순간들
          </p>
        </div>

        {/* Gallery Image Grid matching screenshot */}
        <div className="space-y-3">
          {/* Top Large Orchestra Rehearsal Photo */}
          <div
            onClick={() => setSelectedImage(GALLERY_ITEMS[0])}
            className="group relative aspect-[16/10] w-full rounded-lg overflow-hidden cursor-pointer shadow-lg border border-[#444] hover:border-[#c5a880] transition-all"
          >
            <img
              src={GALLERY_ITEMS[0].url}
              alt={GALLERY_ITEMS[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#c5a880]">
                  {GALLERY_ITEMS[0].category}
                </span>
                <p className="text-sm font-serif text-white font-medium">{GALLERY_ITEMS[0].title}</p>
              </div>
              <ZoomIn className="w-5 h-5 text-[#fedeb2] ml-auto mb-1" />
            </div>
          </div>

          {/* Bottom Row (2 Columns) */}
          <div className="grid grid-cols-2 gap-3">
            {/* Bottom Left: Guitar close up */}
            <div
              onClick={() => setSelectedImage(GALLERY_ITEMS[1])}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md border border-[#444] hover:border-[#c5a880] transition-all"
            >
              <img
                src={GALLERY_ITEMS[1].url}
                alt={GALLERY_ITEMS[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <p className="text-xs font-serif text-white">{GALLERY_ITEMS[1].title}</p>
                <ZoomIn className="w-4 h-4 text-[#fedeb2] ml-auto" />
              </div>
            </div>

            {/* Bottom Right: 2x2 Rehearsal Collage */}
            <div
              onClick={() => setSelectedImage(GALLERY_ITEMS[2])}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md border border-[#444] hover:border-[#c5a880] transition-all bg-[#1a1a1c]"
            >
              {/* 2x2 mini grid simulation within the frame */}
              <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full p-1 bg-[#161618]">
                <img
                  src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=300&q=80"
                  alt="Tuning guitar"
                  className="w-full h-full object-cover rounded-[2px]"
                />
                <img
                  src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=300&q=80"
                  alt="Sheet music"
                  className="w-full h-full object-cover rounded-[2px]"
                />
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80"
                  alt="Ensemble"
                  className="w-full h-full object-cover rounded-[2px]"
                />
                <img
                  src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=300&q=80"
                  alt="Conductor gesture"
                  className="w-full h-full object-cover rounded-[2px]"
                />
              </div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <div>
                  <Camera className="w-5 h-5 text-[#fedeb2] mx-auto mb-1" />
                  <p className="text-[11px] font-serif text-white font-medium">{GALLERY_ITEMS[2].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#1c1b1b] border border-[#c5a880]/50 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-lightbox-btn"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 text-white hover:text-[#fedeb2] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/11] w-full bg-black">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 bg-[#171719] border-t border-[#333]">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#c5a880]">
                {selectedImage.category}
              </span>
              <h3 className="font-serif-classic text-base text-[#fedeb2] mt-0.5">{selectedImage.title}</h3>
              <p className="text-xs text-[#ddd9d8] mt-1 leading-relaxed">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
