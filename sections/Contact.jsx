"use client";

import {useState} from "react";
import toast from 'react-hot-toast';


export default function Contact() { 
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(form.message);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      toast.success("Email sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-neutral-200 px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LEFT CONTENT */}
        <div className="space-y-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl w-[20rem] lg:w-full font-bold leading-tight text-neutral-100">
            Let’s build something meaningful together.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 text-neutral-400 text-sm leading-relaxed">
            <span className="uppercase tracking-widest text-neutral-500">
              (Contact)
            </span>

            <p className="font-medium">
              Have a project in mind, a question, or just want to say hello?
              I’m always open to discussing new ideas, collaborations, or
              opportunities.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Name */}
          <div>
            <label className="block text-sm text-neutral-400 mb-2">
              Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={handleChange}
              name="name"
              placeholder="Your name"
              required
              className="w-full bg-transparent border-b border-neutral-700 py-3 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-300 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-neutral-400 mb-2">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange}
              name="email"
              placeholder="you@example.com"
              required
              className="w-full bg-transparent border-b border-neutral-700 py-3 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-300 transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-neutral-400 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              value={form.message}
              onChange={handleChange}
              name="message"
              placeholder="Tell me about your idea..."
              required
              className="w-full bg-transparent border-b border-neutral-700 py-3 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-300 transition-colors resize-none"
            />
             
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 text-sm text-neutral-200 border border-neutral-700 px-6 py-3 rounded-full hover:border-neutral-300 transition-colors"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>

      </div>
    </section>
  );
}
