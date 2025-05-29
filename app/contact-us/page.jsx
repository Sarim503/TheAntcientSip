"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you! Fill out the form below or reach us through our channels.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={4}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4 border-t">
          <div className="text-gray-700 flex gap-2 items-center">
            <Phone className="w-5 h-5" /> <span>+92 312 3456789</span>
          </div>
          <div className="text-gray-700 flex gap-2 items-center">
            <Mail className="w-5 h-5" /> <span>contact@yourdomain.com</span>
          </div>
          <div className="text-gray-700 flex gap-2 items-center">
            <MapPin className="w-5 h-5" /> <span>Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
