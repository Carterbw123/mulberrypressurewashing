import React from "react";

const LAST_UPDATED = "February 2026";

export default function TermsOfService() {
  return (
    <article className="pp">
      <header className="pp__header">
        <h1 className="pp__title">Terms of Service</h1>
        <p className="pp__subtitle">Mulberry Pressure Washing</p>
      </header>

      <section className="pp__section">
        <p className="pp__note">
          <strong>Last Updated:</strong> {LAST_UPDATED}
        </p>

        <p>
          Welcome to the website of Mulberry Pressure Washing (“Company,” “we,”
          “us,” or “our”). By accessing this website, submitting a form,
          requesting a quote, scheduling services, or communicating with us by
          phone, email, or text message, you agree to be bound by these Terms of
          Service.
        </p>

        <p>
          If you do not agree to these Terms, please do not use this website or
          our services.
        </p>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Use of Website</h2>
        <p>
          This website is provided for informational purposes and to allow users
          to request services. You agree not to use this website for any
          unlawful purpose or in any way that could damage, disable,
          overburden, or impair the website.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any portion of
          the website at any time without notice.
        </p>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Service Requests &amp; Estimates</h2>
        <p>
          All service requests, quotes, and estimates provided through this
          website, by phone, or by text message are non-binding until confirmed
          by Mulberry Pressure Washing.
        </p>
        <p>Final pricing may vary based on factors including, but not limited to:</p>
        <ul className="pp__list">
          <li>Property condition</li>
          <li>Scope of work</li>
          <li>Accessibility</li>
          <li>Safety considerations</li>
          <li>Additional services requested</li>
        </ul>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Scheduling, Access &amp; Cancellations</h2>
        <p>
          By scheduling a service, you confirm that you are the property owner
          or are authorized to request services on the property.
        </p>
        <p>
          You agree to provide reasonable access to the service area on the
          scheduled service date. Failure to provide access may result in
          rescheduling or cancellation fees.
        </p>
        <p>
          Weather conditions, safety concerns, or unforeseen circumstances may
          require service rescheduling.
        </p>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Payments</h2>
        <p>
          Payment terms are communicated at the time of booking or service
          completion unless otherwise agreed to in writing.
        </p>
        <p>
          Failure to submit payment when due may result in additional fees or
          collection efforts as permitted by law.
        </p>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">SMS Text Messaging Terms (A2P Compliance)</h2>
        <p>
          By providing your mobile phone number and opting in through our
          website, online forms, or direct communication, you expressly consent
          to receive transactional and service-related SMS text messages from
          Mulberry Pressure Washing.
        </p>

        <h3 className="pp__subheading">Description of SMS Use Cases</h3>
        <p>Text messages may include, but are not limited to:</p>
        <ul className="pp__list">
          <li>Appointment confirmations and reminders</li>
          <li>Estimate notifications</li>
          <li>Service updates</li>
          <li>Follow-up communications related to requested services</li>
        </ul>

        <h3 className="pp__subheading">Message Frequency</h3>
        <p>Message frequency varies based on customer interaction and service activity.</p>

        <h3 className="pp__subheading">Message &amp; Data Rates</h3>
        <p>
          Message and data rates may apply depending on your mobile carrier and
          mobile plan.
        </p>

        <h3 className="pp__subheading">Opt-Out Instructions</h3>
        <p>
          You may opt out of SMS communications at any time by replying{" "}
          <strong>STOP</strong>. For assistance, reply <strong>HELP</strong> or
          contact us directly.
        </p>

        <h3 className="pp__subheading">Customer Support Contact</h3>
        <div className="pp__contact" aria-label="Customer support contact">
          <strong className="pp__contactTitle">Mulberry Pressure Washing</strong>

          <div className="pp__contactRow">
            <span className="pp__label">Phone:</span>
            <a className="pp__link" href="tel:7703310490">
              770-331-0490
            </a>
          </div>

          <div className="pp__contactRow">
            <span className="pp__label">Email:</span>
            <a className="pp__link" href="mailto:themulberrypressurewashing@gmail.com">
              themulberrypressurewashing@gmail.com
            </a>
          </div>
        </div>

        <h3 className="pp__subheading">Carrier Liability Disclaimer</h3>
        <p>Mobile carriers are not liable for delayed, failed, or undelivered messages.</p>

        <h3 className="pp__subheading">Age Restriction (18+)</h3>
        <p>You must be at least eighteen (18) years of age to opt in to receive SMS text messages.</p>
      </section>
    </article>
  );
}

