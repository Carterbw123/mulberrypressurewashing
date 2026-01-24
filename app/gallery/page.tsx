import Link from "next/link";
import { LightboxGallery, type GalleryImage } from "../../components/LightboxGallery";
import { ScrollReveal } from "../../components/ScrollReveal";

const images: GalleryImage[] = [
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
          <h2 className="fade-up">Before &amp; After Gallery</h2>
          <p className="section-subtitle fade-up">
            Tap an image to zoom. (We can expand this with more jobs/photos anytime.)
          </p>

          <LightboxGallery images={images} />

          <div style={{ marginTop: "1.25rem" }}>
            <Link href="/quote" className="btn btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

