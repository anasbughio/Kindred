"use client"; // Required for interactivity (useState) in Next.js App Router

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-20 px-6 lg:px-8 py-6 text-white text-xs uppercase tracking-[0.2em] font-semibold">
      
      {/* Top Bar Layout (Desktop & Mobile) */}
      <div className="flex justify-between items-start">
        
        {/* Mobile: Hamburger Button (Left) */}
        <button
          className="lg:hidden pt-2 z-50 relative hover:opacity-70 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            // Close (X) Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Desktop: Left Links */}
        <ul className="hidden lg:flex gap-8 pt-2">
          <li><Link href="/ss26" className="hover:opacity-70 transition">SS26</Link></li>
          <li><Link href="/shop" className="hover:opacity-70 transition">Shop</Link></li>
          <li><Link href="/journal" className="hover:opacity-70 transition">Journal</Link></li>
          <li><Link href="/bridal" className="hover:opacity-70 transition">Bridal</Link></li>
          <li><Link href="/our-world" className="hover:opacity-70 transition">Our World</Link></li>
        </ul>

        {/* Center Logo (Always Visible) */}
        <div className="flex flex-col items-center justify-center text-center z-50 relative pointer-events-none">
          <h1 className="font-serif text-2xl lg:text-3xl tracking-[0.3em] mb-1">
            K I N D R E D
          </h1>
          <span className="text-[8px] lg:text-[9px] tracking-[0.4em] opacity-80">
            Of Ireland
          </span>
        </div>

        {/* Desktop: Right Links */}
        <ul className="hidden lg:flex gap-8 pt-2">
          <li><Link href="/search" className="hover:opacity-70 transition">Search</Link></li>
          <li><Link href="/saved" className="hover:opacity-70 transition">Saved (0)</Link></li>
          <li><Link href="/account" className="hover:opacity-70 transition">Account</Link></li>
          <li><Link href="/bag" className="hover:opacity-70 transition">Bag (0)</Link></li>
        </ul>

        {/* Mobile: Bag Icon (Right) */}
        <div className="lg:hidden pt-2 z-50 relative">
           <Link href="/bag" className="hover:opacity-70 transition">Bag</Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#36392c] z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 text-center text-sm">
          <li><Link href="/ss26" onClick={() => setIsMobileMenuOpen(false)}>SS26</Link></li>
          <li><Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link></li>
          <li><Link href="/journal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link></li>
          <li><Link href="/bridal" onClick={() => setIsMobileMenuOpen(false)}>Bridal</Link></li>
          <li><Link href="/our-world" onClick={() => setIsMobileMenuOpen(false)}>Our World</Link></li>
          
          {/* Divider */}
          <li className="my-2 border-t border-white/20 w-16 mx-auto"></li>
          
          <li><Link href="/search"  onClick={() => setIsMobileMenuOpen(false)}>Search</Link></li>
          <li><Link href="/saved" onClick={() => setIsMobileMenuOpen(false)}>Saved (0)</Link></li>
          <li><Link href="/account" onClick={() => setIsMobileMenuOpen(false)}>Account</Link></li>
        </ul>
      </div>

    </nav>
  );
}