// components/Footer.tsx
import { Facebook, Instagram, Youtube, Linkedin, X, Twitter, } from "lucide-react";
import Image from "next/image";
import logo from "../../public/images/logo.webp"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        {/* Logo */}
        <div className="flex justify-start mb-10">
          <Image src={logo} alt="Hardware Dynamic" width={160} height={60} />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">
          {/* Address */}
          <div>
            <h3 className="font-semibold text-black mb-3">Experience Centre</h3>
            <p>No 91, Kothari Nagar 2nd Main Road</p>
            <p> Ramapuram Chennai,</p>
            <p>Tamil Nadu 600089.</p>

            <h3 className="font-semibold text-black my-3">Manufacturing Unit</h3>
            <p>582b, Iyyapan Nagar Main Road,</p>
            <p>Ariyathidal Kumbakonam,</p>
            <p>Thanjavur Tamil Nadu 612401.</p>

            <div className="mt-4">
              <h4 className="font-semibold text-black">Customer Support</h4>
              <p>Email: <a href="mailto:business@printongo.com" className="hover:underline">hardwaredynamic1@gmail.com</a></p>
              <p>Call: <a href="tel:+919993549992" className=" hover:underline">+91 9993549992</a></p>
              {/* <p>Hours: Mon - Sun | 10:00 AM – 8:00 PM</p> */}
            </div>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="font-semibold text-black mb-3">Our Company</h3>
            <ul className="space-y-2">
              <li><Link href="/furniture" className="hover:text-red-600">Furniture Solutions</Link></li>
              <li><Link href="#" className="hover:text-red-600">Our Story</Link></li>
              <li><Link href="#" className="hover:text-red-600">Store Location</Link></li>
              <li><Link href="#" className="hover:text-red-600">Our Clients</Link></li>
              <li><Link href="#" className="hover:text-red-600">FAQ</Link></li>
              <li><Link href="#" className="hover:text-red-600">Testimonials</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-black mb-3">Help</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-600">Download Templates</Link></li>
              <li><Link href="#" className="hover:text-red-600 font-medium">Track Orders</Link></li>
              <li><Link href="#" className="hover:text-red-600">All Products</Link></li>
              <li><Link href="#" className="hover:text-red-600">Cart</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-black mb-3">Our Policies</h3>
            <ul className="space-y-2">
              <li><Link href="/terms-and-conditions" className="hover:text-red-600">Terms and Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-red-600">Privacy & Security Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-red-600">Shipping Policy</Link></li>
              <li><Link href="/refund-returns-policy" className="hover:text-red-600">Refund and Returns Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>
            Copyright © 2025 <span className="text-gray-700 font-semibold">Hardware dynamic</span>. All rights
            reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61576923626924"
              aria-label="Facebook"
              className="bg-gray-200 border border-gray-400 rounded-full p-3 flex items-center justify-center hover:bg-gray-300 hover:text-red-600 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/hardware_dynamic_/"
              aria-label="Instagram"
              className="bg-gray-200 border border-gray-400 rounded-full p-3 flex items-center justify-center hover:bg-gray-300 hover:text-pink-600 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@hardwaredynamic"
              aria-label="YouTube"
              className="bg-gray-200 border border-gray-400 rounded-full p-3 flex items-center justify-center hover:bg-gray-300 hover:text-red-600 transition"
            >
              <Youtube size={18} />
            </a>
            <a
              target="_blank"
              href="https://x.com/Hardwaredynamic"
              aria-label="LinkedIn"
              className="bg-gray-200 border border-gray-400 rounded-full p-3 flex items-center justify-center hover:bg-gray-300 hover:text-red-600 transition"
            >
              <Twitter size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
