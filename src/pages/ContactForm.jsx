import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Element } from 'react-scroll';
import { Mail, User, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import Comment from '../component/Comment';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const BASE_URL = import.meta.env.DEV
      ? "http://localhost:5000"
      : "https://your-live-backend.com";

    try {
      setLoading(true);
      await axios.post(`${BASE_URL}/send`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
      setErrorMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isSubmitted) {
      html.classList.add('overflow-hidden');
      body.classList.add('overflow-hidden');
    } else {
      html.classList.remove('overflow-hidden');
      body.classList.remove('overflow-hidden');
    }

    return () => {
      html.classList.remove('overflow-hidden');
      body.classList.remove('overflow-hidden');
    };
  }, [isSubmitted]);

  return (
    <Element name='contact'>
      <section 
        id='contact' 
        className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-white to-neutral-100"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </div>

          {/* Contact Form Container */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400 text-sm animate-shake">
                        {errorMessage}
                      </div>
                    )}

                    {/* Name Input */}
                    <div className="relative group animate-slideUp" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                      <label className="block text-neutral-400 text-sm font-medium mb-2 ml-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <User 
                          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                            focusedField === 'name' ? 'text-amber-400' : 'text-neutral-500'
                          }`}
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="John Doe"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:bg-neutral-700 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative group animate-slideUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                      <label className="block text-neutral-400 text-sm font-medium mb-2 ml-1">
                        Your Email
                      </label>
                      <div className="relative">
                        <Mail 
                          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                            focusedField === 'email' ? 'text-amber-400' : 'text-neutral-500'
                          }`}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="john@example.com"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:bg-neutral-700 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="relative group animate-slideUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                      <label className="block text-neutral-400 text-sm font-medium mb-2 ml-1">
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageSquare 
                          className={`absolute left-4 top-6 w-5 h-5 transition-colors ${
                            focusedField === 'message' ? 'text-amber-400' : 'text-neutral-500'
                          }`}
                        />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Tell me about your project..."
                          required
                          rows="6"
                          className="w-full pl-12 pr-4 py-4 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:bg-neutral-700 transition-all duration-300 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="animate-slideUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                      <button
                        type="submit"
                        disabled={loading}
                        className="group w-full bg-gradient-to-r from-amber-400 to-amber-600 text-neutral-900 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-400/50 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-3 border-neutral-900 border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Success Message */
                  <div className="text-center py-12 animate-scaleIn">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6 animate-bounce">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-neutral-400 text-lg mb-8 max-w-md mx-auto">
                      Thank you for reaching out! I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={resetForm}
                      className="px-8 py-3 bg-amber-400 text-neutral-900 rounded-lg font-semibold hover:bg-amber-500 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Comment Component */}
            <div className="mt-8">
              <Comment />
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center animate-slideUp" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Email</h4>
              <p className="text-neutral-600 text-sm">your@email.com</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center animate-slideUp" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.4389.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">GitHub</h4>
              <p className="text-neutral-600 text-sm">@yourusername</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center animate-slideUp" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">LinkedIn</h4>
              <p className="text-neutral-600 text-sm">@yourprofile</p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </Element>
  );
};

export default ContactForm;