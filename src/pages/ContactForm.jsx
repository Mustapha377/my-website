import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Element } from 'react-scroll';
import { Mail, User, Send, MessageSquare, CircleCheckBig } from 'lucide-react';
import Comment from '../component/Comment';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

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

  // Cleanup when component unmounts
  return () => {
    html.classList.remove('overflow-hidden');
    body.classList.remove('overflow-hidden');
  };
}, [isSubmitted]);

  return (
    <Element name='contact'>
      <section id='contact' className="space-y-10">
        <h2 className="text-neutral-900 text-4xl mb-8 py-10 md:text-3xl 
        lg:text-4xl font-bold text-center">
          Contacts
        </h2>

        <div className='bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-100 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl transition-all duration-300 hover:shadow-[#6366f1]/10'>
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="flex flex-col justify-center items-center bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transition-all duration-300 hover:shadow-[#6366f1]/10"
          >
            <div className="flex flex-col justify-center items-center mb-8">
              <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#5d5d6b] to-[#ffffff]">
                Get in Touch
              </h2>
              <p className="text-gray-400 text-center">
                Feel free to contact me if you have any questions or concerns. I’m always available to help you.
              </p>
            </div>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl">
                <div className="relative group" data-aos="fade-up" data-aos-delay="100">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-amber-300 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-4 pl-12 bg-neutral-700 rounded-xl border border-neutral-50 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all duration-300"
                  />
                </div>

                <div className="relative group" data-aos="fade-up" data-aos-delay="200">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-amber-300 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-4 pl-12 bg-neutral-700 rounded-xl border border-neutral-50 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all duration-300"
                  />
                </div>

                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-amber-300 transition-colors" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full resize-none p-4 pl-12 bg-neutral-600 rounded-xl border border-b-amber-300 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all duration-300 h-[9.9rem]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full bg-gradient-to-r from-[#5d5d6b] to-[#2b292c] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 text-amber-300 group-hover:animate-shake" />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="bg-neutral-900/80 backdrop-blur-md shadow-xl p-6 rounded-xl space-y-4 text-white">
                <div className="flex flex-col items-center text-center">
                  <CircleCheckBig className="w-12 h-12 text-amber-300" />
                  <p className="text-lg font-medium py-4">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </p>
                  <button
                    className="bg-neutral-700 py-2 px-4 rounded-full shadow-md hover:border-amber-300 border-2 transition"
                    onClick={resetForm}
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
          <Comment />
        </div>
      </section>
    </Element>
  );
};

export default ContactForm;
