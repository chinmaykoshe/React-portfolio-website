// src/components/Message.jsx
import React, { useState } from 'react';

function Message() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // ✅ Use Vite’s import.meta.env
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      setSubmitStatus('API URL not configured. Check .env file.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Formspree special fields
          _subject: `new msg from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('Message sent! I’ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 pb-20 px-4 flex justify-center items-center bg-gradient-to-b from-transparent/0 to-black/20">
      <div className="w-full max-w-lg mx-auto text-center fade-up">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 bg-gradient-to-r from-[#00ffd9] to-cyan-300 bg-clip-text text-transparent">
          Send a message
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          Have a project, idea, or opportunity? Drop a quick message and get in touch.
        </p>

        <div className="relative p-6 sm:p-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-[#00ffd9]/10 opacity-40" />

          <div className="relative space-y-4 sm:space-y-5 text-left">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wide text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="border border-white/15 rounded-lg px-3 py-2.5 bg-black/25 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00ffd9] focus:ring-2 focus:ring-[#00ffd9]/40 transition-all"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wide text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="yourmail@gmail.com"
                  className="border border-white/15 rounded-lg px-3 py-2.5 bg-black/25 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00ffd9] focus:ring-2 focus:ring-[#00ffd9]/40 transition-all"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wide text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="border border-white/15 rounded-lg px-3 py-2.5 bg-black/25 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00ffd9] focus:ring-2 focus:ring-[#00ffd9]/40 transition-all min-h-[120px] resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center w-full rounded-lg bg-gradient-to-r from-[#00ffd9] to-cyan-400 text-black font-semibold text-sm sm:text-base px-4 py-2.5 hover:shadow-[0_0_25px_rgba(0,255,217,0.6)] hover:scale-[1.01] transition-transform duration-200 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {submitStatus && (
              <p className="mt-4 text-sm text-center text-gray-300">
                {submitStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Message;
