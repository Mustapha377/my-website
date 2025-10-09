import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Element } from 'react-scroll';
import { Mail, User, Send, MessageSquare, CheckCircle2, } from 'lucide-react';
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdSms } from "react-icons/md";
import SocialMediaHandles from '../component/SocialMediaHandles';

const ContactForm = () => {
  const email = "mustaAmeerh@gmail.com";
  const phone = "+2349037849695";
  const message = "Hello! Mr.Ameer"
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

    try {
      setLoading(true);
      setErrorMessage('');

      // FIXED: Use relative path for Vercel serverless function
      const response = await axios.post('/api/emailSend', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 15000, // 15 second timeout for cold starts
      });

      if (response.data.success) {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(true);
      } else {
        throw new Error(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      
      // Better error handling
      if (error.code === 'ECONNABORTED') {
        setErrorMessage('Request timeout. Please check your connection and try again.');
      } else if (error.response) {
        setErrorMessage(error.response.data.message || 'Failed to send message. Please try again.');
      } else if (error.request) {
        setErrorMessage('Cannot reach server. Please check your connection.');
      } else {
        setErrorMessage('Failed to send message. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
    setErrorMessage('');
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
                          placeholder="Ameer Ado"
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
                          placeholder="Ameer@example.com"
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

            {/* SocialMediaHandles Component */}
            <div className="mt-8">
              <SocialMediaHandles />
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* mail button*/}
            <button
             onClick={() => 
              window.open(`mailto:${email}?subject=contact&body=${encodeURIComponent(message)}`, "_blank")
             }
             >
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center animate-slideUp" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SiGmail className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Gmail</h4>
              <p className="text-neutral-600 text-sm">MustaAmeerh@gmail.com</p>
            </div>
             </button>
           
           {/* whatsapp button*/}
           <button
           onClick={() =>
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
           }>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center animate-slideUp" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="w-6 h-6 text-amber-600"/>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">whatsapp</h4>
              <p className="text-neutral-600 text-sm">+2349037849695</p>
            </div>
           </button>

           {/* SMS button */}
           <button
            onClick={() => 
              window.open(`sms:${phone}?body=${encodeURIComponent(message)}`, "_blank")
            }>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center animate-slideUp" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdSms className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">SMS</h4>
              <p className="text-neutral-600 text-sm">09037849695</p>
            </div>
           </button>
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