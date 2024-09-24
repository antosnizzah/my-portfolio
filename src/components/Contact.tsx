import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status message
    setStatus('');

    emailjs
      .send(
        'service_h7ni7tr', // Replace with your EmailJS service ID
        'template_eruvams', // Replace with your EmailJS template ID
        { name: formData.name, email: formData.email, message: formData.message }, 
        'Sa9WTo-pAtKQnUx5M' // Replace with your EmailJS public key (User ID)
      )
      .then(
        () => {
          setStatus('Message Sent! ✅');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setStatus('Failed to send message ❌');
          console.error('Error:', error);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 flex justify-center items-center">
      <div className="max-w-3xl w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Contact Me
        </h2>

        <form onSubmit={sendEmail} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:border-blue-500 focus:ring-blue-500 transition duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:border-blue-500 focus:ring-blue-500 transition duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:border-blue-500 focus:ring-blue-500 transition duration-200 ease-in-out h-40"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none transition duration-300 ease-in-out hover:scale-105 transform"
          >
            Send Message
          </button>

          {/* Status message */}
          {status && (
            <p className={`text-center mt-4 ${status.includes('✅') ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
