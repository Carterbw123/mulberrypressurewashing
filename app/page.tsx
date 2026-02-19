import Link from "next/link";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  LightboxGallery,
  type GalleryImage,
} from "../components/LightboxGallery";
// import ContactForm from "../components/ContactForm";
const homeGalleryImages: GalleryImage[] = [
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
];

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="fade-up">
              Professional Pressure Washing in Mulberry, GA
            </h1>
            <p className="lead fade-up">
              Safe soft washing + pressure washing for homes, driveways & more.
            </p>

            <div className="cta-row">
              <a href="tel:7703310490" className="btn btn-primary">
                Call Now
              </a>
              <Link href="/quote" className="btn btn-outline">
                Get Free Quote
              </Link>
            </div>

            <p className="fade-up">
              Prefer to text? <strong>(770) 331-0490</strong>
            </p>
          </div>
        </div>
      </section>

      <div className="trust" role="region" aria-label="Service guarantees">
        <div className="container trust-grid">
          <div className="trust-item fade-up">
            <span className="trust-badge" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2 4 5v6c0 5 3.4 9.74 8 11 4.6-1.26 8-6 8-11V5l-8-3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Fully Insured
          </div>
          <div className="trust-item fade-up">
            <span className="trust-badge" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="m5 13 4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            100% Satisfaction Guarantee
          </div>
          <div className="trust-item fade-up">
            <span className="trust-badge" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2a7 7 0 0 1 7 7c0 6-7 13-7 13S5 15 5 9a7 7 0 0 1 7-7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Safe Soft-Wash Methods
          </div>
        </div>
      </div>

      {/* <ContactForm /> */}
      <section className="section-light">
        <div className="container">
          <div className="page-header">
            <h2 className="fade-up">Our Services</h2>
            <p className="section-subtitle fade-up">
              Gentle on materials, tough on grime.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card fade-up">
              <div className="icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m3 9 9-6 9 6v10a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>House Washing</h3>
              <p>
                Soft wash siding cleaning safe for vinyl, brick, stucco, and
                more.
              </p>
            </div>

            <div className="card fade-up">
              <div className="icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m3 9 9-6 9 6v10a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Window Cleaning</h3>
              <p>
                Clean windows to let in the natural light and see the beauty of
                your home.
              </p>
            </div>

            <div className="card fade-up">
              <div className="icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m3 9 9-6 9 6v10a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Solar Panel Cleaning</h3>
              <p>
                Clean solar panels to maximize energy production and reduce
                energy bills.
              </p>
            </div>

            <div className="card fade-up">
              <div className="icon icon--sky" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 17h18M3 12h18M3 7h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Driveway Cleaning</h3>
              <p>
                Remove stains, mildew, and years of buildup from concrete and
                pavers.
              </p>
            </div>

            <div className="card fade-up">
              <div className="icon icon--green" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2v6m0 8v6m-6-6h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 14s2 3 5 3 5-3 5-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Gutter Cleaning</h3>
              <p>
                Clear clogs and flush downspouts for proper, reliable drainage.
              </p>
            </div>
          </div>

          <div className="mt-lg">
            <Link href="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="container">
          <div className="page-header">
            <h2 className="fade-up">Before &amp; After Gallery</h2>
            <p className="section-subtitle fade-up">
              See the difference our wash process makes.
            </p>
          </div>
          <LightboxGallery images={homeGalleryImages} />
          <div className="mt-lg">
            <Link href="/gallery" className="btn btn-primary">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container contact-grid">
          <div>
            <h2 className="fade-up">Request a Free Quote</h2>
            <p className="section-subtitle fade-up">
              Prefer a dedicated page? Use our quick form.
            </p>
            <Link href="/quote" className="btn btn-primary">
              Get a Free Quote
            </Link>
          </div>
          <div className="fade-up">
            <h3>Contact Info</h3>
            <p>
              <strong>Call/Text:</strong> (770) 331-0490
            </p>
            <p>
              <strong>Email:</strong> themulberrypressurewashing@gmail.com
            </p>
            <p>Serving: Mulberry, Dacula, Braselton, Auburn, Buford</p>
          </div>
        </div>
      </section>
    </>
  );
}
