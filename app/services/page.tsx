import Link from "next/link";
import { ScrollReveal } from "../../components/ScrollReveal";

type Service = {
  title: string;
  description: string;
  icon?: "home" | "list" | "plus";
  iconStyle?: React.CSSProperties;
};

const services: Service[] = [
  {
    title: "House Washing",
    description: "Soft wash siding cleaning safe for vinyl, brick, stucco, and more.",
    icon: "home",
  },
  {
    title: "Window Cleaning",
    description: "Clean windows to let in natural light and see the beauty of your home.",
    icon: "home",
  },
  {
    title: "Solar Panel Cleaning",
    description: "Maximize energy production and help reduce energy bills.",
    icon: "home",
  },
  {
    title: "Driveway Cleaning",
    description: "Remove stains, mildew, and years of buildup from concrete and pavers.",
    icon: "list",
    iconStyle: { background: "#f0f9ff", borderColor: "#bae6fd", color: "#0284c7" },
  },
  {
    title: "Gutter Cleaning",
    description: "Clear clogs and flush downspouts for proper, reliable drainage.",
    icon: "plus",
    iconStyle: { background: "#f0fdf4", borderColor: "#bbf7d0", color: "#16a34a" },
  },
  {
    title: "Fence / Deck Cleaning",
    description: "Restore curb appeal by removing algae, grime, and discoloration.",
    icon: "list",
  },
  {
    title: "Whole Property Wash",
    description: "A full refresh for siding, driveways, walkways, and more—bundled and efficient.",
    icon: "home",
  },
];

function ServiceIcon({ variant }: { variant: NonNullable<Service["icon"]> }) {
  if (variant === "list") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 17h18M3 12h18M3 7h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "plus") {
    return (
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
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="m3 9 9-6 9 6v10a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ScrollReveal />

      <section className="section-light">
        <div className="container">
          <h2 className="fade-up">Services</h2>
          <p className="section-subtitle fade-up">
            Gentle on materials, tough on grime.
          </p>

          <div className="grid grid-3">
            {services.map((s) => (
              <div key={s.title} className="card fade-up">
                <div className="icon" style={s.iconStyle} aria-hidden="true">
                  <ServiceIcon variant={s.icon ?? "home"} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.75rem" }}>
            <Link href="/quote" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:7703310490" className="btn btn-outline">
              Call/Text
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

