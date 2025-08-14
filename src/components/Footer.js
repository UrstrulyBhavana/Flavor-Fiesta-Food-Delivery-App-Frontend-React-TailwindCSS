import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-[#0b0d1c] text-white mt-14 w-full overflow-x-hidden"
    >
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] px-6 py-6 sm:px-12 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-t-lg">
        <p className="text-lg font-semibold text-gray-900 text-center sm:text-left">
          Still hungry? Order now and enjoy fast delivery! 🍽️
        </p>
        <Link
          to="/"
          className="bg-black text-white px-5 py-2 rounded-lg shadow hover:bg-gray-800 transition"
          aria-label="Start ordering now"
        >
          Start Ordering
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 py-12">
          <div className="flex flex-col items-start">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/936/506/non_2x/chef-girl-smiling-happy-and-cooking-with-love-in-her-kitchen-vector.jpg"
              alt="Flavour Fiesta Logo"
              className="w-20 h-20 rounded-full mb-4 border-2 border-yellow-400"
              loading="lazy"
            />
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              <span className="text-yellow-400 font-semibold">Flavour Fiesta</span> — where every bite is a celebration! 🎉 We bring the best of local cuisines to your doorstep with{" "}
              <span className="text-yellow-400">love</span>,{" "}
              <span className="text-yellow-400">speed</span>, and{" "}
              <span className="text-yellow-400">satisfaction</span>.
            </p>
          </div>

          <div className="flex flex-col sm:items-center">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Company</h3>
            <div className="flex flex-col space-y-2 items-start">
              <Link to="/" className="inline-block w-fit hover:text-yellow-300">
                Home
              </Link>
              <Link to="/about" className="inline-block w-fit hover:text-yellow-300">
                About Us
              </Link>
              <Link to="/contact" className="inline-block w-fit hover:text-yellow-300">
                Contact Us
              </Link>
              <Link to="/faq" className="inline-block w-fit hover:text-yellow-300">
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:items-end">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Stay Connected
            </h3>
            <p className="mb-2">
              <a href="tel:+919876543210" className="hover:text-yellow-300">
                📞 +91-9876543210
              </a>
            </p>
            <p className="mb-4">
              <a
                href="mailto:contact@flavourfiesta.com"
                className="hover:text-yellow-300"
              >
                📧 contact@flavourfiesta.com
              </a>
            </p>
            <div className="flex space-x-4 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-yellow-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-yellow-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-yellow-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
          © 2025 <span className="text-yellow-400 font-semibold">Flavor Fiesta</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
