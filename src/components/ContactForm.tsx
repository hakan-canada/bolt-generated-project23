import React from 'react';
import { Mail } from 'lucide-react';

export function ContactForm() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
        <Mail className="mr-2" />
        Contact Us
      </h2>
      <form name="contact" method="POST" data-netlify="true" className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            required
            className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            required
            name="message"
            rows={4}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
