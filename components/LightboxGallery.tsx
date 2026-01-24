"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
};

export function LightboxGallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => setOpenIndex(index), []);
  const close = useCallback(() => setOpenIndex(null), []);

  const active = useMemo(() => {
    if (openIndex === null) return null;
    return images[openIndex] ?? null;
  }, [images, openIndex]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div
            key={img.src}
            className="gallery-item fade-up"
            onClick={() => open(idx)}
            role="button"
            tabIndex={0}
            aria-label="Open image"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") open(idx);
            }}
          >
            <Image src={img.src} alt={img.alt} width={900} height={900} />
          </div>
        ))}
      </div>

      <div
        className={`lightbox${active ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        role="dialog"
        aria-label="Expanded gallery image"
        aria-modal="true"
      >
        <button className="lightbox-close" aria-label="Close" onClick={close}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {active ? (
          <Image src={active.src} alt={active.alt} width={1400} height={1400} />
        ) : null}
      </div>
    </>
  );
}

