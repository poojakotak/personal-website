// src/components/Contact.js
import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = React.useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0laon67', 'template_px2sug5', form.current, 'ABa_s6mR0bhc_pd95')
      .then((result) => {
          console.log(result.text);
          // Handle success (e.g., display a success message)
      }, (error) => {
          console.log(error.text);
          // Handle errors (e.g., display an error message)
      });
  };

  return (
    <section id="contact" className="md:pl-[25%] w-full h-screen bg-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Contact Me</h2>
          <p className="mb-6 text-gray-600">Feel free to reach out for collaboration or just a friendly hello!</p>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
            <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
            <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
            <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded-md h-40"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
      </form>
      </div>
    </section>
  );
}

export default Contact;