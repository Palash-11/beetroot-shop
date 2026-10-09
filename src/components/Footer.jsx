import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center text-xs">
      <div className="space-x-3 mb-2">
        <a href="#policies" className="hover:underline">Policies</a>
        <span>|</span>
        <a href="#whatsapp" className="hover:underline text-green-400">WhatsApp Support</a>
      </div>
      <p>© 2026 Pure Beetroot Powder. All rights reserved.</p>
    </footer>
  );
}