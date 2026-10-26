import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  url: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  // Touch swipe support
  let touchStartX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) onNext();
    else if (diff < -50) onPrev();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"
      onClick={onClose}
    >
      {/* Top bar controls */}
      <div
        className="absolute top-4 right-4 z-50 flex items-center gap-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs uppercase tracking-widest text-[#E8D08A] font-sans">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="p-2 rounded-full bg-white/10 hover:bg-[#C9A24B]/30 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrow Left */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Imagem anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#C9A24B] text-white transition-colors backdrop-blur-sm shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main image container */}
      <div
        className="max-w-5xl max-h-[85vh] relative flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={currentImg.url}
          alt={currentImg.alt}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[82vh] object-contain rounded-2xl border border-[#C9A24B]/40 shadow-2xl transition-transform duration-300"
        />
      </div>

      {/* Navigation Arrow Right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Próxima imagem"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#C9A24B] text-white transition-colors backdrop-blur-sm shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
