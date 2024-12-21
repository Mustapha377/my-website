import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Element } from 'react-scroll';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_pifsebv', // Replace with your EmailJS Service ID
        'Ameer001', // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'w5biroO94EwHFNlak' // Replace with your EmailJS User ID
      );

      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
      setErrorMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

    const resetForm = () => {
      setFormData({name: "", email: "", message: "",});
       setIsSubmitted(false);
    };

  return (
    <Element name='contact'>
    <section  className='section-container form-con'>
      <h2>Contact Me</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {!isSubmitted ? (
        <form className="cf" onSubmit={handleSubmit}>
          <div className="half left cf" >
            <label htmlFor="name">Name:</label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
  
            <label htmlFor="email">Email:</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="half right cf">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className='submit-btn' type="submit">Send</button>
        </form>
      ) : (
        <div className="prompt-overlay">
         <div className="prompt-message">
          <p >Thank you for your message! We'll get back to you soon.</p>
          <button className="prompt-btn" onClick={resetForm}>Send Another Message</button>
         </div>
        </div>
      )}
    </section>  
    </Element>
  );
};

export default ContactForm;
