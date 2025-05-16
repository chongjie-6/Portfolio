import Link from "next/link";
import { useState } from "react";

export function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <div
      className="max-w-7xl mx-auto items-center text-center justify-center mt-5 flex flex-col space-y-10 px-5"
      id="contact"
    >
      <h2 className="text-6xl">Contact Me</h2>
      <p className="text-xl max-w-xl">
        Want to work together? Leave an email and I&apos;ll get back to you as
        soon as possible!
      </p>
      <div className="space-y-2 w-full flex flex-col items-center max-w-xl">
        <input
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="w-full bg-gray-600 py-2 px-3"
        ></input>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          placeholder="Message"
          className="w-full bg-gray-600 py-2 px-3 field-sizing-content min-h-40 max-h-40 resize-none whitespace-break-spaces"
        ></textarea>
        <Link
          className="px-2 italic border-b-2 ml-auto cursor-pointer hover:text-blue-500 transition-all duration-300"
          href={`mailto:chongjiechen@outlook.com?subject=${subject}&body=${body.replaceAll("\n","%0D%0A")}`}
        >
          Submit
        </Link>
      </div>
    </div>
  );
}
