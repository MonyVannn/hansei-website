"use client";

import { useActionState } from "react";
import {
  type FooterContactState,
  submitFooterContact,
} from "@/app/actions/contact";
import { FiArrowUpRight } from "react-icons/fi";

const inputClass =
  "w-full border-b border-zinc-300 bg-transparent px-0 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-zinc-500 focus:border-zinc-900";

const labelClass =
  "mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-zinc-500";

const initialState: FooterContactState = {
  success: false,
  message: "",
  errors: {},
};

export function FooterContactForm() {
  const [state, formAction, pending] = useActionState(
    submitFooterContact,
    initialState,
  );
  const errors = state?.errors ?? {};

  return (
    <form action={formAction} className="space-y-7">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="footer-name">
            Your name*
          </label>
          <input
            id="footer-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Jane Doe"
          />
          {errors.name ? (
            <p className="mt-2 text-sm text-red-600">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="footer-email">
            Your email*
          </label>
          <input
            id="footer-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="name@company.com"
          />
          {errors.email ? (
            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="footer-phone">
            Phone number
          </label>
          <input
            id="footer-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+1 000 000 0000"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="footer-company">
            Company name
          </label>
          <input
            id="footer-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Company name"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="footer-message">
          Message*
        </label>
        <textarea
          id="footer-message"
          name="message"
          required
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Tell us what you are building and what success looks like."
        />
        {errors.message ? (
          <p className="mt-2 text-sm text-red-600">{errors.message}</p>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-6 pt-5">
        <p aria-live="polite" className="text-sm text-zinc-600">
          {state?.message ?? ""}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{pending ? "Sending" : "Let's talk"}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 transition-colors group-hover:border-zinc-900">
            <FiArrowUpRight className="text-base" />
          </span>
        </button>
      </div>
    </form>
  );
}
