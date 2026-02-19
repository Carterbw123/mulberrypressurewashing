import Link from "next/link";
import {
  LightboxGallery,
  type GalleryImage,
} from "../../components/LightboxGallery";
import { ScrollReveal } from "../../components/ScrollReveal";

const images: GalleryImage[] = [
  {
    src: "/images/BlackGreyBrownBeautyHairBeforeAfterCollageInstagramPost10.png",
    alt: "Before & After photo 10",
  },
  {
    src: "/images/BlackGreyBrownBeautyHairBeforeAfterCollageInstagramPost92.png",
    alt: "Before & After photo 92",
  },
  {
    src: "/images/BlackGreyBrownBeautyHairBeforeAfterCollageInstagramPost82.png",
    alt: "Before & After photo 82",
  },
  {
    src: "/images/BlackGreyBrownBeautyHairBeforeAfterCollageInstagramPost72.png",
    alt: "Before & After photo 72",
  },
  {
    src: "/images/BlackGreyBrownBeautyHairBeforeAfterCollageInstagramPost9.png",
    alt: "Before",
  },
  {
    src: "/images/BlackGreyBrownBeautyHairBeforeAfterCollageInstagramPost8.png",
    alt: "After",
  },
  {
    src: "/images/BlackGreyBrownBeautyHairBeforeAfterCollageInstagramPost7.png",
    alt: "Before",
  },
  {
    src: "/images/BlackGreyBrownBeautyHairBeforeAfterCollageInstagramPost6.png",
    alt: "After",
  },
];

export default function GalleryPage() {
  return (
    <>
      <ScrollReveal />

      <section className="section-muted">
        <div className="container">
          <div className="page-header">
            <h2 className="fade-up">Before &amp; After Gallery</h2>
            <p className="section-subtitle fade-up">
              See the difference our wash process makes.
            </p>
          </div>

          <LightboxGallery images={images} />

          <div className="mt-lg">
            <Link href="/quote" className="btn btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
