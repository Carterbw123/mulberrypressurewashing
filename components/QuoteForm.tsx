"use client";

import React, { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mnjbzwvp";

export function QuoteForm() {
  const [status, setStatus] = useState<{
    submitting: boolean;
    submitted: boolean;
    error: string | null;
  }>({ submitting: false, submitted: false, error: null });

  const [services, setServices] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const formData = new FormData(form);
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: Array<{ message: string }>;
      };

      if (response.ok && (data.ok ?? true)) {
        setStatus({ submitting: false, submitted: true, error: null });
        form.reset();
        setServices([]);
      } else {
        const msg =
          Array.isArray(data.errors) && data.errors.length > 0
            ? data.errors.map((err) => err.message).join(", ")
            : "Something went wrong. Please try again.";
        setStatus({ submitting: false, submitted: false, error: msg });
      }
    } catch {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form
      className="fade-up"
      aria-label="Quote request form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="_gotcha"
        className="visually-hidden"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />
      <input
        type="hidden"
        name="_subject"
        value="New Quote Request - Mulberry Pressure Washing"
      />

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
            name="_replyto"
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
          <select
            id="service"
            name="service"
            multiple
            size={7}
            required
            aria-describedby="service-hint"
            value={services}
            onChange={(e) => {
              const next = Array.from(e.currentTarget.selectedOptions).map(
                (opt) => opt.value,
              );
              setServices(next);
            }}
          >
            <option value="House Wash">House Wash</option>
            <option value="Window Cleaning">Window Cleaning</option>
            <option value="Solar Panel Cleaning">Solar Panel Cleaning</option>
            <option value="Driveway">Driveway</option>
            <option value="Gutters">Gutters</option>
            <option value="Fence/Deck">Fence/Deck</option>
            <option value="Whole Property">Whole Property</option>
          </select>
          <p className="form-hint" id="service-hint">
            Select all that apply (hold ⌘ on Mac or Ctrl on Windows to choose
            multiple).
          </p>
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

      <button
        className="btn btn-primary"
        type="submit"
        disabled={status.submitting}
      >
        {status.submitting ? "Sending…" : "Send Quote"}
      </button>

      {status.submitted && (
        <p className="form-status" role="status">
          Thank you! We&apos;ll get back to you soon.
        </p>
      )}
      {status.error && (
        <p className="form-status form-status--error" role="alert">
          {status.error}
        </p>
      )}
    </form>
  );
}
