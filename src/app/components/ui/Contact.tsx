import Link from "next/link";
import { useState } from "react";

export function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

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
            <a
              href="mailto:chongjiechen@outlook.com"
              className="text-sm text-stone-800 hover:text-stone-500 transition-colors duration-200"
            >
              chongjiechen@outlook.com
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="space-y-10">
          <div>
            <label className="font-mono text-xs tracking-widest uppercase text-stone-500 block mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="What's this about?"
              onChange={(e) => setSubject(e.target.value)}
              onFocus={() => setFocused("subject")}
              onBlur={() => setFocused(null)}
              className={`w-full bg-transparent border-0 border-b py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition-colors duration-200 ${
                focused === "subject" ? "border-stone-900" : "border-stone-300"
              }`}
            />
          </div>

          <div>
            <label className="font-mono text-xs tracking-widest uppercase text-stone-500 block mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project…"
              onChange={(e) => setBody(e.target.value)}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`w-full bg-transparent border-0 border-b py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition-colors duration-200 resize-none ${
                focused === "message" ? "border-stone-900" : "border-stone-300"
              }`}
            />
          </div>

          <Link
            href={`mailto:chongjiechen@outlook.com?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`}
            className="group inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-stone-900 hover:text-stone-500 transition-colors duration-200"
          >
            <span className="w-8 h-px bg-stone-900 inline-block group-hover:w-12 transition-all duration-300" />
            Send Message
          </Link>
        </div>
      </div>
    </section>
  );
}