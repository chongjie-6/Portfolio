import { Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <div
      className="max-w-4xl mx-auto items-center text-center justify-center mt-5 flex flex-col space-y-10 relative"
      id="contact"
    >
      <h2 className="text-6xl">Contact Me</h2>
      <p className="text-xl max-w-2xl mx-auto leading-relaxed ">
        Want to work together? I&apos;d love to hear from you. Leave an email
        and I&apos;ll get back to you as soon as possible!
      </p>

      <div className="space-y-6 w-full text-start bg-gray-800 p-8 rounded-md">
        <div>
          <label className="text-sm font-bold text-gray-300">Subject</label>
          <input
            type="text"
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What's this about?"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-300">Message</label>
          <textarea
            name="message"
            onChange={(e) => setBody(e.target.value)}
            placeholder="Tell me about your project or just say hello!"
            rows={6}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 resize-none"
          />
        </div>

        <Link
          href={`mailto:chongjiechen@outlook.com?subject=${subject}&body=${body.replaceAll(
            "\n",
            "%0D%0A"
          )}`}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
        >
          <Mail size={20} />
          <span>Send Message</span>
        </Link>
      </div>
    </div>
  );
}
