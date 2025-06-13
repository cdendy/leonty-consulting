'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import StaggerButton from './StaggerButton';

interface FormData {
  name: string;
  org: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    org: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    // Basic form validation (can be expanded)
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields.');
      return;
    }

    // Simulate API call
    try {
      // Replace with your actual API endpoint and logic
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      console.log('Form data submitted:', formData);
      setStatus('Message sent successfully! We will be in touch soon.');
      setFormData({ name: '', org: '', email: '', phone: '', date: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-base font-semibold text-gray-600 mb-2 tracking-wide">Full Name *</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition" />
        </div>
        <div>
          <label htmlFor="org" className="block text-base font-semibold text-gray-600 mb-2 tracking-wide">Organization</label>
          <input type="text" name="org" id="org" value={formData.org} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-base font-semibold text-gray-600 mb-2 tracking-wide">Email Address *</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-base font-semibold text-gray-600 mb-2 tracking-wide">Phone Number</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition" />
        </div>
      </div>

      <div>
        <label htmlFor="date" className="block text-base font-semibold text-gray-600 mb-2 tracking-wide">Preferred Event Date (if applicable)</label>
        <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2 tracking-wide">Message / Inquiry *</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-2 border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition"></textarea>
      </div>

      <div>
        <StaggerButton
            type="submit"
            className="w-full md:w-auto font-bold py-3 px-10 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 tracking-wide text-lg"
            bgColorClass="bg-blue-500 hover:bg-blue-600"
            textColorClass="text-white"
          >
            Send Message
          </StaggerButton>
      </div>

      {status && (
        <p className={`mt-4 text-center text-sm ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </form>
  );
}
