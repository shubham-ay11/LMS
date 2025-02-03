import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-gray-800 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold">Stay Connected</h2>
        <div className="flex justify-center gap-4 mt-4">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a> */}
          <a href="https://www.instagram.com/stockuppofficial?utm_source=qr&igsh=MTBteHI3cWp6aWxtbQ==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/8851729915" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <FaWhatsapp size={24} />
          </a>
        </div>
        <div className="mt-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li><a href="/Courses" className="hover:underline">Courses</a></li>
            <li><a href="/Blog" className="hover:underline">Blogs</a></li>
            <li><a href="/PrivacyPolicy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/Terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/disclaimers" className="hover:underline">Disclaimer</a></li>
          </ul>
        </div>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Stock Upp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
