import { ScrollReveal } from "../../components/ScrollReveal";

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

            {/* FormSubmit configuration:
                Note: the first live submission triggers a one-time activation email from FormSubmit. */}
            <form
              className="fade-up"
              aria-label="Quote request form"
              action="https://formsubmit.co/mawiziji@mailgolem.com"
              method="POST"
            >
              <input type="text" name="_honey" className="visually-hidden" aria-hidden="true" tabIndex={-1} />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Quote Request - Mulberry Pressure Washing"
              />
              <input type="hidden" name="_template" value="table" />

              <div className="form-row form-row-2">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="form-row form-row-2">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Street, city"
                  />
                </div>
              </div>

              <div className="form-row form-row-2">
                <div>
                  <label htmlFor="service">What do you need cleaned?</label>
                  <select id="service" name="service" required>
                    <option>House Wash</option>
                    <option>Window Cleaning</option>
                    <option>Solar Panel Cleaning</option>
                    <option>Driveway</option>
                    <option>Gutters</option>
                    <option>Fence/Deck</option>
                    <option>Whole Property</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline">Timeline</label>
                  <select id="timeline" name="timeline" required>
                    <option>ASAP</option>
                    <option>This Week</option>
                    <option>Next 2 Weeks</option>
                    <option>This Month</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="details">Additional details</label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Size, surfaces, photos link, etc."
                />
              </div>

              <button className="btn btn-primary" type="submit">
                Send Quote
              </button>
            </form>
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

