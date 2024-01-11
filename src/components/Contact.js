// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0laon67', 'template_px2sug5', e.target, 'ABa_s6mR0bhc_pd95')
      .then((result) => {
          console.log(result.text);
          setMessage('Message sent successfully!');
          setFormData({ user_name: '', user_email: '', message: '' }); // Clear the form
      }, (error) => {
          console.log(error.text);
          setMessage('Failed to send message, please try again.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="md:pl-[25%] w-full h-screen bg-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Contact Me</h2>
          <p className="mb-6 text-gray-600">Feel free to reach out for collaboration or just a friendly hello!</p>
          {message && <p className="text-green-500">{message}</p>}
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Name" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={formData.user_name} 
              onChange={handleChange} />
        </div>
        <div>
            <input 
              type="email" 
              name="user_email" 
              placeholder="Your Email" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={formData.user_email} 
              onChange={handleChange} />
        </div>
        <div>
            <textarea 
              name="message" 
              placeholder="Your Message" 
              className="w-full p-2 border border-gray-300 rounded-md h-40" 
              value={formData.message} 
              onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
      </form>
      </div>
    </section>
  );
}

export default Contact;