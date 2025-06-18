"use client";

import React, { useEffect, useState } from 'react';

// Icon component for Call
const CallIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
  </svg>
);

// Icon component for WhatsApp
const WhatsAppIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 448 512">
    <path d="M380.9 97.1C339.7 55.8 284.2 32 224.8 32 103.7 32 7.5 135.3 8 256c0 45.4 12 89.7 35 128.5L0 480l100.3-42.4c37.5 20.4 79.7 31.2 122.8 31.2h.1c121.1 0 217.3-103.3 216.8-224.1.1-59.4-23.1-115-65.1-147.6zm-156.1 340c-37.8 0-74.9-10.1-107.1-29.2l-7.6-4.5-63.6 26.9 24.1-65.8-5-8.1c-21.2-34.3-32.3-73.8-32.3-114.3C33.3 153.2 121.5 64 224.8 64c50.3 0 97.6 19.6 133.2 55.1 35.6 35.6 55.2 82.9 55.1 133.3 0 102.3-88.2 191.4-191.3 191.4zm101.6-138.2c-5.6-2.8-33-16.3-38.1-18.2-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18.2-17.6 21.9-6.5 4.2-12.1 1.4c-5.6-2.8-23.5-8.7-44.7-27.8-16.5-14.7-27.5-32.9-30.7-38.4-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.5 5.6-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.8s-12.5-30-17.1-41c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.8 1.4-15 6.9c-5.1 5.6-19.7 19.3-19.7 47.1s20.2 54.6 23 58.3c2.8 3.7 39.6 60.5 95.8 84.8 13.4 5.8 23.8 9.3 31.9 11.9 13.4 4.3 25.6 3.7 35.2 2.3 10.7-1.6 33-13.5 37.6-26.6 4.6-13.2 4.6-24.5 3.2-26.9-1.3-2.2-5-3.5-10.6-6.3z" />
  </svg>
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:+919123322412';
  };

  const handleWhatsApp = () => {
    const phoneNumber = '919123322412';
    const message = 'Hi, I would like to inquire about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
      {/* Scroll to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 flex items-center justify-center bg-neutral-500 text-white rounded-full shadow-lg transition-opacity duration-300 text-xl p-2"
          aria-label="Scroll to top"
          type="button"
        >
          ↑
        </button>
      )}

      {/* WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200"
        aria-label="WhatsApp"
        type="button"
      >
        <WhatsAppIcon />
      </button>

      {/* Call */}
      <button
        onClick={handleCall}
        className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
        aria-label="Call"
        type="button"
      >
        <CallIcon />
      </button>
    </div>
  );
};

export default ScrollToTopButton;