"use client";

import React from "react";
import Link from "next/link";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-black text-red-600 tracking-tighter">
                NOTFLIX
              </h2>

              <h4 className="text-gray-500">Headline</h4>
            </div>
            <div className="flex gap-4">
              <SocialIcon icon={FaXTwitter} href="#" />
              <SocialIcon icon={FaInstagram} href="#" />
              <SocialIcon icon={FaFacebook} href="#" />
            </div>
          </div>

          <div
            className="mbox-footer-stuff"
            id="mbox-footer-stuff"
            data-id="mbox-footer-stuff"
          />

          <div className="flex gap-12 text-sm text-gray-400">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <span className="font-bold text-gray-200">Company</span>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press</FooterLink>
            </div>
            <div className="flex flex-col gap-3 text-center md:text-left">
              <span className="font-bold text-gray-200">Support</span>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-900 mb-8"></div>

        {/* Bottom Section: Disclaimer & Copy */}
        <div className="text-center">
          <p className="text-xs text-gray-600 uppercase tracking-widest font-mono mb-2">
            these movie data is just a mock data and it does not represent where
            the actual movie stands.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Not-Flix, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({
  icon: Icon,
  href,
}: {
  icon: React.ElementType;
  href: string;
}) => (
  <Link
    href={href}
    replace
    className="bg-gray-800 p-2 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer group flex items-center justify-center"
  >
    <Icon size={20} className="text-gray-400 group-hover:text-black" />
  </Link>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} replace className="hover:text-red-500 transition-colors">
    {children}
  </Link>
);

export default Footer;
