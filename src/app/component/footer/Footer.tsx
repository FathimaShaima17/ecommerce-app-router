import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm mb-4">ABOUT</h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer transition">
                Contact Us
              </li>
              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition">
                BuyNest Stories
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Press
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Corporate Information
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm mb-4">
              GROUP COMPANIES
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer transition">
                Myntra
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Cleartrip
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Shopsy
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm mb-4">HELP</h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer transition">
                Payments
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Shipping
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Cancellation & Returns
              </li>
              <li className="hover:text-white cursor-pointer transition">
                FAQ
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm mb-4">
              CONSUMER POLICY
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer transition">
                Cancellation & Returns
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Terms Of Use
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Security
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Privacy
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Sitemap
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Grievance Redressal
              </li>
              <li className="hover:text-white cursor-pointer transition">
                EPR Compliance
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">
                Mail Us:
              </h4>
              <p className="text-xs leading-relaxed">
                BuyNest Internet Private Limited,
                <br />
                Buildings Abyss, Tulip &<br />
                eko Embassy Tech Town,
                <br />
                Kakkad Highway Road,
                <br />
                Vengara Town,
                <br />
                Malappuram, 676304,
                <br />
                Kerala, India
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Social:</h4>

              <div className="flex gap-3 text-white">
                <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-blue-500" />
                <FaTwitter className="w-5 h-5 cursor-pointer hover:text-sky-400" />
                <FaYoutube className="w-5 h-5 cursor-pointer hover:text-red-500" />
                <FaInstagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm mb-3">
              Registered Office Address:
            </h4>
            <p className="text-xs leading-relaxed">
              BuyNest Internet Private Limited,
              <br />
              Buildings Abyss, Tulip &<br />
              eko Embassy Tech Town,
              <br />
              Kakkad Highway Road,
              <br />
              Vengara Town,
              <br />
              Malappuram, 676304,
              <br />
              Kerala, India CIN : U65409820093531632
              <br />
              Telephone:{" "}
              <a
                href="tel:044-45614700"
                className="text-blue-400 hover:underline"
              >
                044-73425000
              </a>{" "}
              /
              <a
                href="tel:044-67415800"
                className="text-blue-400 hover:underline"
              >
                044-425397400
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap gap-6">
              <span className="hover:text-white cursor-pointer transition">
                🛒 Become a Seller
              </span>
              <span className="hover:text-white cursor-pointer transition">
                📢 Advertise
              </span>
              <span className="hover:text-white cursor-pointer transition">
                🎁 Gift Cards
              </span>
              <span className="hover:text-white cursor-pointer transition">
                ❓ Help Center
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span>© 2007-2027 BuyNest.com</span>
              <div className="flex gap-3">
                <FaCcVisa size={28} />
                <FaCcMastercard size={28} />
                <FaCcPaypal size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
