import { ScrollReveal } from "../../components/ScrollReveal";
import { QuoteForm } from "../../components/QuoteForm";

export default function QuotePage() {
  return (
    <>
      <ScrollReveal />

      <section className="section-light">
        <div className="container contact-grid">
          <div>
            <div className="page-header">
              <h2 className="fade-up">Request a Free Quote</h2>
              <p className="section-subtitle fade-up">
                Fill out the form and we&apos;ll get back to you quickly.
              </p>
            </div>

            <QuoteForm />
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
            <ul className="contact-benefits">
              <li>Fully insured</li>
              <li>Safe soft wash methods</li>
              <li>Transparent pricing, free quotes</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

