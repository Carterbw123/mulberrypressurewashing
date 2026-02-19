import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo" aria-label="Mulberry Pressure Washing">
            <span className="logo-icon" aria-hidden="true">
              <img
                className="logo-img"
                src="/images/mpw-logo.png"
                alt=""
                decoding="async"
              />
            </span>
            <div>Mulberry Pressure Washing</div>
          </div>
          <p className="footer-tagline">
            Professional pressure and soft washing across Mulberry and nearby areas.
          </p>
          <div className="socials">
            <a href="tel:7703310490" aria-label="Call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.77 19.77 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.77 19.77 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.09a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57A2 2 0 0 1 22 16.92Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="mailto:themulberrypressurewashing@gmail.com"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m22 6-10 7L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div>
            <Link href="/services">Services</Link>
          </div>
          <div>
            <Link href="/gallery">Gallery</Link>
          </div>
          <div>
            <Link href="/quote">Get a Quote</Link>
          </div>
          <div>
            <Link href="/">Home</Link>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <div>
            <a href="tel:7703310490">(770) 331-0490</a>
          </div>
          <div>
            <a href="mailto:themulberrypressurewashing@gmail.com">
              themulberrypressurewashing@gmail.com
            </a>
          </div>
          <div>Mulberry, GA</div>
        </div>
      </div>

      <div className="footer-legal">
        <div>&copy; {year} Mulberry Pressure Washing.</div>
        <div className="footer-legal-links" aria-label="Legal links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span className="divider" aria-hidden="true">
            |
          </span>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

