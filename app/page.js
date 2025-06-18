// pages/index.js
"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, message } = formData;

    const text = `Hello, I would like to inquire about the "${service}" service.%0A
Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

    const phoneNumber = "916289429854"; // WhatsApp number without +
    const url = `https://wa.me/${phoneNumber}?text=${encodeURI(text)}`;

    window.open(url, "_blank");
  };

  const [visibleImages, setVisibleImages] = useState(9);
  const images = Array.from({ length: 22 }, (_, i) => `/img/1 (${i + 1}).jpeg`);
  const [selectedImage, setSelectedImage] = useState(null);

  const loadMore = () => {
    setVisibleImages(prev => Math.min(prev + 9, images.length));
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] text-[#3A2E26]">
      <Head>
        <title>MS Kritika Enterprises | Professional Home Care Services in Kolkata</title>
        <meta name="description" content="MS Kritika Enterprises provides housekeeping, nursing, and physiotherapy services in Kolkata. Quality care with professionalism." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">Quality Care Services</span>
            <span className="block text-[#FFD700]">MS Kritika Enterprises</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Professional housekeeping, nursing, and physiotherapy services in Kolkata
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#services" className="bg-[#8B6B4A] text-white px-6 py-3 rounded hover:bg-[#6D543A]">Our Services</Link>
            <a href="tel:+916289429854" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#3A2E26]">Call: 6289429854</a>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F9F7F5] p-6 rounded-lg shadow-sm flex items-center">
              <div className="bg-[#8B6B4A] p-3 rounded-full text-white mr-4">
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <a href="tel:+916289429854" className="text-[#5E4A3A] hover:underline">6289429854</a>
              </div>
            </div>
            <div className="bg-[#F9F7F5] p-6 rounded-lg shadow-sm flex items-center">
              <div className="bg-[#8B6B4A] p-3 rounded-full text-white mr-4">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-[#5E4A3A]">3/24 Rabindra Nagar (Landmark: 3 No Gali), Kolkata - 700060</p>
              </div>
            </div>
            <div className="bg-[#F9F7F5] p-6 rounded-lg shadow-sm flex items-center">
              <div className="bg-[#8B6B4A] p-3 rounded-full text-white mr-4">
                <FaClock size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Working Hours</h3>
                <p className="text-[#5E4A3A]">Mon-Sat: 8AM-2PM & 5PM-10PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#F9F7F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3A2E26]">Our Services</h2>
            <div className="w-20 h-1 bg-[#8B6B4A] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#5E4A3A]">
              Comprehensive care services tailored to your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative h-48">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#3A2E26]">{service.title}</h3>
                  <p className="text-[#5E4A3A] mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8B6B4A] font-medium">Learn More</span>
                    <FaArrowRight className="text-[#8B6B4A]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3A2E26]">About MS Kritika Enterprises</h2>
            <div className="w-20 h-1 bg-[#8B6B4A] mb-6"></div>
            <p className="mb-4 text-[#5E4A3A]">
              MS Kritika Enterprises has been providing quality care services in Kolkata since its establishment. We take pride in our professional approach and commitment to client satisfaction.
            </p>
            <p className="mb-6 text-[#5E4A3A]">
              Our team consists of trained professionals who are dedicated to delivering exceptional service in housekeeping, nursing care, and physiotherapy.
            </p>
            <Link href="#contact" className="inline-block bg-[#8B6B4A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6D543A] transition duration-300">
              Contact Us
            </Link>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/img/1 (22).jpeg"
              alt="About MS Kritika Enterprises"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-[#F9F7F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3A2E26]">Our Gallery</h2>
            <div className="w-20 h-1 bg-[#8B6B4A] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#5E4A3A]">
              A glimpse of our work and services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.slice(0, visibleImages).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
                />
              </motion.div>
            ))}
          </div>
          
          {visibleImages < images.length && (
            <div className="text-center mt-10">
              <button
                onClick={loadMore}
                className="bg-[#8B6B4A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6D543A] transition duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative w-full max-w-4xl h-auto max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Selected gallery image"
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full">
              <svg className="w-6 h-6 text-[#8B6B4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3A2E26]">Client Testimonials</h2>
            <div className="w-20 h-1 bg-[#8B6B4A] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#5E4A3A]">
              What our clients say about our services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F9F7F5] p-8 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#5E4A3A] italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="bg-[#8B6B4A] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3A2E26]">{testimonial.name}</h4>
                    <p className="text-sm text-[#8B6B4A]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


<div className='py-5'>
  <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0789333647185!2d88.2981353752984!3d22.501221479542636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027babd85b6143%3A0xffc8d7f9627d343e!2sMs%20Kritika%20Enterprises%20Aya%20Centre!5e0!3m2!1sen!2sin!4v1750249134844!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
</div>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#8B6B4A] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="w-20 h-1 bg-[#FFD700] mb-6"></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FFD700] p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-[#8B6B4A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p>3/24 Rabindra Nagar</p>
                    <p>(Landmark: 3 No Gali)</p>
                    <p>Kolkata - 700060</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FFD700] p-3 rounded-full mr-4">
                    <FaPhone className="text-[#8B6B4A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a href="tel:+916289429854" className="hover:underline">6289429854</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FFD700] p-3 rounded-full mr-4">
                    <FaEnvelope className="text-[#8B6B4A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:laxmandutta22@gmail.com" className="hover:underline">laxmandutta22@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FFD700] p-3 rounded-full mr-4">
                    <FaClock className="text-[#8B6B4A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                    <p>Monday to Saturday</p>
                    <p>8:00 AM - 2:00 PM & 5:00 PM - 10:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-lg text-neutral-700 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#3A2E26]">Send Us a Message</h3>
                 <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#5E4A3A]">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B6B4A]"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1 text-[#5E4A3A]">Phone</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B6B4A]"
          required
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1 text-[#5E4A3A]">Service Needed</label>
        <select
          id="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B6B4A]"
          required
        >
          <option value="">Select a service</option>
          <option value="House Keeping">House Keeping</option>
          <option value="Nursing Agency">Nursing Agency</option>
          <option value="Physiotherapy">Physiotherapy</option>
          <option value="Aya Centre">Aya Centre</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#5E4A3A]">Message</label>
        <textarea
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B6B4A]"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-[#8B6B4A] text-white px-6 py-3 rounded hover:bg-[#6D543A] transition duration-300 w-full"
      >
        Send via WhatsApp
      </button>
    </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     
    </div>
  );
}

// Data arrays
const services = [
  {
    title: "House Keeping Service",
    description: "Professional housekeeping services to maintain cleanliness and hygiene in your home or office.",
    image: "/img1.webp"
  },
  {
    title: "Aya Centre",
    description: "Trained and experienced aya services for newborn care, elderly care, and patient care at home.",
    image: "/img2.webp"
  },
  {
    title: "Nursing Agency",
    description: "Qualified nursing staff for home care, hospital care, and specialized medical needs.",
    image: "/img3.webp"
  },
  {
    title: "Physiotherapy",
    description: "Professional physiotherapy services for rehabilitation, pain management, and mobility improvement.",
    image: "/img4.webp"
  }
];

const testimonials = [
  {
    quote: "The housekeeping service from MS Kritika Enterprises has been exceptional. Their staff is punctual, professional, and thorough in their work.",
    name: "Mrs. Sen",
    role: "Residential Client"
  },
  {
    quote: "We've been using their nursing services for my elderly mother. The caregivers are compassionate and well-trained. Highly recommended!",
    name: "Mr. Banerjee",
    role: "Family Member"
  },
  {
    quote: "Their physiotherapy services helped me recover quickly from my knee surgery. The therapist was knowledgeable and caring.",
    name: "Mr. Ghosh",
    role: "Patient"
  }
];