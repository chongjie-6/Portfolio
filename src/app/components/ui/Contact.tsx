"use client";
import Link from "next/link";
import { useState } from "react";

export function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const email = "chongjiechen@outlook.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: silently ignore
    }
  };

  const canSend = subject.trim().length > 0 || body.trim().length > 0;

  return (
    <section className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto" id="contact">
      {/* Section label */}
      <div className="flex items-center gap-6 mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-stone-500">
          03 — Contact
        </span>
        <div className="flex-1 border-t border-stone-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: heading */}
        <div className="space-y-6">
          <h2
            className="text-4xl md:text-5xl font-normal leading-tight text-stone-900"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Let&apos;s work
            <br />
            <em>together.</em>
          </h2>
          <p className="text-sm leading-relaxed max-w-xs text-stone-600">
            Have a project in mind? I&apos;d love to hear about it. Drop me a
            line and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="pt-4 space-y-2">
            <p className="font-mono text-xs tracking-widest uppercase text-stone-500">
              Email
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="text-sm text-stone-800 hover:text-stone-500 transition-colors duration-200"
              >
                {email}
              </a>
              {/* Copy to clipboard button */}
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                title={copied ? "Copied!" : "Copy email"}
                className="text-stone-400 hover:text-stone-800 transition-colors duration-150"
              >
                {copied ? (
                  /* checkmark */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  /* copy icon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
            {copied && (
              <p className="font-mono text-xs text-stone-500 animate-fade-in">
                Copied to clipboard
              </p>
            )}
          </div>
        </div>

        {/* Right: form */}
        <div className="space-y-10">
          <div>
            <label
              htmlFor="contact-subject"
              className="font-mono text-xs tracking-widest uppercase text-stone-600 block mb-2"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              placeholder="What's this about?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              onFocus={() => setFocused("subject")}
              onBlur={() => setFocused(null)}
              className={`w-full bg-transparent border-0 border-b py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition-colors duration-200 ${
                focused === "subject" ? "border-stone-900" : "border-stone-300"
              }`}
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="font-mono text-xs tracking-widest uppercase text-stone-600 block mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell me about your project…"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`w-full bg-transparent border-0 border-b py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition-colors duration-200 resize-none ${
                focused === "message" ? "border-stone-900" : "border-stone-300"
              }`}
            />
          </div>

          <Link
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            aria-disabled={!canSend}
            className={`group inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
              canSend
                ? "text-stone-900 hover:text-stone-500"
                : "text-stone-400 pointer-events-none"
            }`}
          >
            <span
              className={`h-px bg-current inline-block transition-all duration-300 ${
                canSend ? "w-8 group-hover:w-12" : "w-8"
              }`}
            />
            Send Message
          </Link>

          {!canSend && (
            <p className="font-mono text-xs text-stone-400 -mt-6">
              Fill in at least one field to send.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}