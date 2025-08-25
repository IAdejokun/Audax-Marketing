import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-sm text-gray-700 border-t pt-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
        {/* Column 1: Logo + Contact */}
        <div>
          <img src="/logo.png" alt="Audax Logo" className="h-10 mb-4" />
          <p className="mb-2">+1 302-208-7592</p>
          <p>
            254 Chapman Rd, Ste 208 #21498,
            <br />
            Newark, Delaware 19702 US
          </p>
        </div>

        {/* Column 2: Explore */}
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">SEO</a>
            </li>
            <li>
              <a href="#">Email Marketing</a>
            </li>
            <li>
              <a href="#">Social Media</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Blog */}
        <div>
          <h4 className="font-semibold mb-2">Blog</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Latest Posts</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        {/* Social Icons */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-pink-500" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-blue-600" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          Copyright 2025. All Rights Reserved
        </p>

        {/* Terms link */}
        <a href="#" className="text-xs text-gray-500 underline">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}
