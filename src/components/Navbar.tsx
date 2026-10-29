'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Bridal Mehndi', href: '/bridal-mehndi' },
  { label: 'Festival Mehndi', href: '/festival-mehndi' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Booking', href: '/booking' },
  { label: 'About / Contact', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: '#F5F0E8', borderBottom: '1px solid #e8e0d0', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
          <svg width="30" height="30" viewBox="0 0 44 44" fill="none">
            <circle cx="13" cy="13" r="5" stroke="#6B2D2D" strokeWidth="1.2" fill="none" />
            <circle cx="31" cy="13" r="5" stroke="#6B2D2D" strokeWidth="1.2" fill="none" />
            <circle cx="22" cy="30" r="5" stroke="#6B2D2D" strokeWidth="1.2" fill="none" />
            <line x1="13" y1="18" x2="22" y2="25" stroke="#6B2D2D" strokeWidth="0.8" />
            <line x1="31" y1="18" x2="22" y2="25" stroke="#6B2D2D" strokeWidth="0.8" />
            <line x1="13" y1="8" x2="31" y2="8" stroke="#6B2D2D" strokeWidth="0.8" />
          </svg>
          <div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '22px', color: '#1a1a1a', lineHeight: 1 }}>lucky</p>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '8px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a6f65', marginTop: '2px' }}>mehndi atelier</p>
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav className="lm-nav-links" style={{ alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{
                fontFamily: 'Jost, sans-serif', fontWeight: active ? 400 : 300,
                fontSize: '13px', letterSpacing: '0.02em',
                color: active ? '#1a1a1a' : '#5a4f45', textDecoration: 'none',
                paddingBottom: '4px', borderBottom: active ? '1px solid #6B2D2D' : '1px solid transparent',
              }}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link href="/booking" className="lm-nav-cta" style={{
          alignItems: 'center', gap: '8px',
          padding: '11px 20px', backgroundColor: '#6B2D2D', color: '#F5F0E8',
          fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
          letterSpacing: '0.02em', textDecoration: 'none', flexShrink: 0
        }}>
          Reserve your date
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H4M11 1V8" stroke="#F5F0E8" strokeWidth="1.5" />
          </svg>
        </Link>

        {/* Hamburger */}
        <button
          className="lm-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', flexDirection: 'column', gap: '5px' }}
        >
          <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1a1a1a', transition: 'all 0.25s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1a1a1a', transition: 'all 0.25s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1a1a1a', transition: 'all 0.25s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          backgroundColor: '#F5F0E8', borderTop: '1px solid #e8e0d0',
          padding: '20px 20px 28px'
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                fontFamily: 'Jost, sans-serif', fontWeight: pathname === link.href ? 400 : 300,
                fontSize: '15px', color: '#1a1a1a', textDecoration: 'none',
                borderBottom: '1px solid #f0e8dc'
              }}>
              {link.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setOpen(false)} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginTop: '20px', padding: '12px 22px',
            backgroundColor: '#6B2D2D', color: '#F5F0E8',
            fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none'
          }}>
            Reserve your date ↗
          </Link>
        </div>
      )}
    </header>
  );
}
