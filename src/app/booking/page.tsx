'use client';

import { useState } from 'react';

function Diamond() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
      <rect x="5" y="0.3" width="6.6" height="6.6" transform="rotate(45 5 0.3)" stroke="#6B2D2D" strokeWidth="1" fill="none" />
    </svg>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 14px',
  border: '1px solid #d8cfc4', backgroundColor: 'transparent',
  fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#1a1a1a',
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px',
  letterSpacing: '0.18em', textTransform: 'uppercase' as const,
  color: '#7a6f65', display: 'block', marginBottom: '6px',
};

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', occasion: '',
    date: '', location: '', guests: '', message: '',
  });
  const [done, setDone] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div style={{ backgroundColor: '#F5F0E8' }}>

      {/* Header */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 40px 48px' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D', marginBottom: '14px' }}>
          Begin here
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(40px, 5vw, 64px)', color: '#1a1a1a', marginBottom: '12px' }}>
          Reserve your date.
        </h1>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', maxWidth: '440px' }}>
          Tell us about your occasion and we&apos;ll come back to you within 1–2 working days to discuss your design and confirm availability.
        </p>
      </section>

      {/* Form + Sidebar */}
      <div className="lm-grid-form" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 80px' }}>

        {/* ── FORM ── */}
        <div>
          {done ? (
            <div style={{ padding: '48px', border: '1px solid #d8cfc4', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '36px', color: '#1a1a1a', marginBottom: '12px' }}>
                Thank you, {form.name}.
              </p>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#5a4f45', lineHeight: 1.8 }}>
                Your enquiry has been received. We&apos;ll be in touch within 1–2 working days.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Row 1: Name + Email */}
              <div className="lm-grid-2">
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input required name="name" value={form.name} onChange={handle} placeholder="Priya Sharma" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input required type="email" name="email" value={form.email} onChange={handle} placeholder="priya@example.com" style={inputStyle} />
                </div>
              </div>

              {/* Row 2: Phone + Occasion */}
              <div className="lm-grid-2">
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Occasion *</label>
                  <select required name="occasion" value={form.occasion} onChange={handle}
                    style={{ ...inputStyle, backgroundColor: '#F5F0E8', cursor: 'pointer' }}>
                    <option value="" disabled>Select occasion</option>
                    <option value="bridal">Bridal Mehndi</option>
                    <option value="sangeet">Sangeet / Mehndi Night</option>
                    <option value="karwa">Karwa Chauth</option>
                    <option value="eid">Eid</option>
                    <option value="diwali">Diwali / Navratri</option>
                    <option value="godh">Baby Shower / Godh Bharai</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Date + Location */}
              <div className="lm-grid-2">
                <div>
                  <label style={labelStyle}>Date</label>
                  <input type="date" name="date" value={form.date} onChange={handle}
                    style={{ ...inputStyle, backgroundColor: 'transparent' }} />
                </div>
                <div>
                  <label style={labelStyle}>Location</label>
                  <select name="location" value={form.location} onChange={handle}
                    style={{ ...inputStyle, backgroundColor: '#F5F0E8', cursor: 'pointer' }}>
                    <option value="">Select city</option>
                    <option value="guna">Guna (MP)</option>
                    <option value="bhopal">Bhopal</option>
                    <option value="indore">Indore</option>
                    <option value="destination">Destination Wedding</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label style={labelStyle}>Number of Guests (if applicable)</label>
                <input name="guests" value={form.guests} onChange={handle} placeholder="e.g. 20" style={inputStyle} />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Tell us about your vision</label>
                <textarea
                  name="message" value={form.message} onChange={handle} rows={5}
                  placeholder="Design inspirations, motifs you love, anything that tells us your story..."
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              {/* Submit */}
              <div>
                <button type="submit" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', backgroundColor: '#6B2D2D', color: '#F5F0E8',
                  fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
                  border: 'none', cursor: 'pointer',
                }}>
                  Send your enquiry
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="#F5F0E8" strokeWidth="1.5" />
                  </svg>
                </button>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px', color: '#9a8f85', marginTop: '12px' }}>
                  Enquiry only — no payment is taken online. Your date is held only after we confirm availability.
                </p>
              </div>

            </form>
          )}
        </div>

        {/* ── SIDEBAR ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

          {/* What happens next */}
          <div style={{ padding: '24px', border: '1px solid #d8cfc4' }}>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '16px' }}>
              What happens next
            </p>
            {[
              { n: '01', t: 'We review your enquiry and check our calendar.' },
              { n: '02', t: 'We reply within 1–2 working days with availability.' },
              { n: '03', t: 'We schedule a short consultation to discuss your design.' },
              { n: '04', t: 'Your date is confirmed once the advance is received.' },
            ].map((s) => (
              <div key={s.n} style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '18px', color: '#c4b5a8', flexShrink: 0, lineHeight: 1 }}>{s.n}</span>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#5a4f45', lineHeight: 1.7 }}>{s.t}</p>
              </div>
            ))}
          </div>

          {/* Good to know */}
          <div style={{ padding: '24px', border: '1px solid #d8cfc4' }}>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '16px' }}>
              Good to know
            </p>
            {[
              'Bridal bookings: enquire 2–3 months in advance',
              'Travel quoted separately for all locations',
              'Group minimums from 10 guests',
              'No online payment — advance confirmed personally',
            ].map((note) => (
              <div key={note} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                <Diamond />
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#5a4f45', lineHeight: 1.7 }}>{note}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '10px' }}>
              Say Hello Directly
            </p>
            <a href="https://wa.me/916268570660" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#1a1a1a', textDecoration: 'none', display: 'block', marginBottom: '6px' }}>
              WhatsApp: +91 6268570660
            </a>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#5a4f45', lineHeight: 1.7 }}>
              Guna, Madhya Pradesh<br />By appointment only
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
