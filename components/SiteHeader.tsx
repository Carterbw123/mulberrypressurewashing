"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const PHONE_TEL = "tel:7703310490";
const PHONE_LABEL = "Call/Text: (770) 331-0490";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { href: "/services", label: "Services" },
      { href: "/gallery", label: "Gallery" },
      { href: "/quote", label: "Quote" },
    ],
    []
  );

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <Link className="logo" href="/" aria-label="Mulberry Pressure Washing">
            <span className="logo-icon" aria-hidden="true">
              <img
                className="logo-img"
                src="/images/mpw-logo.png"
                alt=""
                decoding="async"
              />
            </span>
            <div>
              <div>Mulberry Pressure Washing</div>
            </div>
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-phone">
            <a className="btn btn-primary" href={PHONE_TEL}>
              {PHONE_LABEL}
            </a>
          </div>

          <button
            className="hamburger"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen ? "true" : "false"}
            onClick={() => setIsOpen((v) => !v)}
            type="button"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>

        <div
          className={`mobile-menu${isOpen ? " open" : ""}`}
          role="dialog"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={PHONE_TEL} onClick={() => setIsOpen(false)}>
            {PHONE_LABEL}
          </a>
        </div>
      </div>
    </header>
  );
}

