import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="pp">
      <header className="pp__header">
        <h1 className="pp__title">Privacy Policy</h1>
        <p className="pp__subtitle">Mulberry Pressure Washing</p>
      </header>

      <section className="pp__section">
        <p>
          Mulberry Pressure Washing (“we,” “us,” or “our”) is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, and protect your personal information when you visit our website,
          submit a form, or communicate with us by phone, text, or email.
        </p>

        <p>
          By using our website or providing your information, you consent to the
          practices described in this Privacy Policy.
        </p>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to
          us, including but not limited to:
        </p>
        <ul className="pp__list">
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Property address</li>
          <li>Information related to service requests or estimates</li>
        </ul>

        <p>This information is collected when you:</p>
        <ul className="pp__list">
          <li>Fill out a contact or quote form</li>
          <li>Request services or estimates</li>
          <li>
            Communicate with us via phone, text message, email, or social media
          </li>
        </ul>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="pp__list">
          <li>Provide estimates and services you request</li>
          <li>
            Communicate with you about scheduling, services, and customer
            support
          </li>
          <li>Respond to inquiries and follow up on requests</li>
          <li>Improve our services and customer experience</li>
        </ul>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Text Messaging &amp; SMS Communications</h2>
        <p>
          If you provide your phone number, you consent to receive text messages
          (SMS) from Mulberry Pressure Washing related to:
        </p>
        <ul className="pp__list">
          <li>Estimates</li>
          <li>Scheduling</li>
          <li>Service updates</li>
          <li>Customer support and follow-ups</li>
        </ul>

        <p className="pp__note">
          Message frequency may vary. Message and data rates may apply.
        </p>
        <p>
          You may opt out of text messages at any time by replying{" "}
          <strong>STOP</strong>.
        </p>
        <p>
          For help, reply <strong>HELP</strong> or contact us directly.
        </p>
        <p>SMS consent is not shared with third parties for marketing purposes.</p>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Sharing of Information</h2>
        <p>We do not sell, rent, or trade your personal information to third parties.</p>
        <p>
          Your information may be stored securely or shared only with service
          providers necessary to operate our business (such as CRM or
          communication platforms), solely for business-related purposes and not
          for third-party marketing.
        </p>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Data Security</h2>
        <p>
          We take reasonable steps to protect your personal information from
          unauthorized access, disclosure, or misuse. While no method of
          transmission over the internet is 100% secure, we strive to use
          commercially acceptable means to protect your data.
        </p>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Your Rights &amp; Choices</h2>
        <p>You may:</p>
        <ul className="pp__list">
          <li>Request access to the personal information we have about you</li>
          <li>Request corrections or deletion of your personal information</li>
          <li>Opt out of communications at any time</li>
        </ul>
        <p>To make a request, please contact us using the information below.</p>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. We encourage
          you to review this policy periodically.
        </p>
      </section>

      <section className="pp__section">
        <h2 className="pp__heading">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how your
          information is handled, you may contact us at:
        </p>

        <div className="pp__contact" aria-label="Contact information">
          <strong className="pp__contactTitle">Mulberry Pressure Washing</strong>

          <div className="pp__contactRow">
            <span aria-hidden="true">📞</span>{" "}
            <a className="pp__link" href="tel:7703310490">
              770-331-0490
            </a>
            <span className="pp__divider" aria-hidden="true">
              |
            </span>
            <a className="pp__link" href="tel:6783501503">
              678-350-1503
            </a>
          </div>

          <div className="pp__contactRow">
            <span aria-hidden="true">📧</span>{" "}
            <a
              className="pp__link"
              href="mailto:themulberrypressurewashing@gmail.com"
            >
              themulberrypressurewashing@gmail.com
            </a>
          </div>
        </div>

        <footer className="pp__footer">
          <p>
            Last updated: <em>{/* Add effective date here if needed */}</em>
          </p>
        </footer>
      </section>
    </main>
  );
}