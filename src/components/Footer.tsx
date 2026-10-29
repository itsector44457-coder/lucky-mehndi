import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      {/* CTA Banner */}
      <div className="lm-cta-banner">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', maxWidth: '560px' }}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" style={{ flexShrink: 0, marginTop: '4px' }}>
            <circle cx="13" cy="13" r="6" stroke="#F5F0E8" strokeWidth="0.8" fill="none" opacity="0.6" />
            <circle cx="31" cy="13" r="6" stroke="#F5F0E8" strokeWidth="0.8" fill="none" opacity="0.6" />
            <circle cx="22" cy="30" r="6" stroke="#F5F0E8" strokeWidth="0.8" fill="none" opacity="0.6" />
          </svg>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(24px, 3vw, 38px)', color: '#F5F0E8', marginBottom: '8px', lineHeight: 1.2 }}>
              Every celebration begins with a little colour.
            </h2>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#e8d5c4' }}>
              Tell us your occasion, your date and the details that make it yours.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
          <Link href="/booking" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 22px', border: '1px solid #F5F0E8', color: '#F5F0E8',
            fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
            textDecoration: 'none', whiteSpace: 'nowrap'
          }}>
            Request an appointment
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="#F5F0E8" strokeWidth="1.5" />
            </svg>
          </Link>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px', color: '#e8d5c4' }}>
            A personal reply within 1–2 working days.
          </p>
        </div>
      </div>

      {/* Footer links */}
      <div style={{ backgroundColor: '#2a1f1f', padding: '56px 40px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="lm-grid-footer" style={{ paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <svg width="22" height="22" viewBox="0 0 44 44" fill="none">
                  <circle cx="13" cy="13" r="5" stroke="#F5F0E8" strokeWidth="1.2" fill="none" />
                  <circle cx="31" cy="13" r="5" stroke="#F5F0E8" strokeWidth="1.2" fill="none" />
                  <circle cx="22" cy="30" r="5" stroke="#F5F0E8" strokeWidth="1.2" fill="none" />
                </svg>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '22px', color: '#F5F0E8' }}>lucky</span>
              </div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: 1.8, color: '#c4b5a8', marginBottom: '20px' }}>
                Mehndi with meaning. Thoughtfully drawn for your once-in-a-lifetime moments and the traditions you return to.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <a href="https://instagram.com" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#c4b5a8', textDecoration: 'none' }}>Instagram ↗</a>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#7a6f65' }}>@lucky.mehndi</span>
              </div>
            </div>

            {/* Explore */}
            <div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '18px' }}>Explore</p>
              {[['Home', '/'], ['Bridal Mehndi', '/bridal-mehndi'], ['Festival Mehndi', '/festival-mehndi'], ['Gallery', '/gallery']].map(([l, h]) => (
                <Link key={h} href={h} style={{ display: 'block', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#c4b5a8', textDecoration: 'none', marginBottom: '12px' }}>{l}</Link>
              ))}
            </div>

            {/* Memory */}
            <div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '18px' }}>Let&apos;s Make a Memory</p>
              {[['Booking', '/booking'], ['About / Contact', '/about'], ['Guna · MP', '/about'], ['Destination weddings on request', '/about']].map(([l, h], i) => (
                <Link key={i} href={h} style={{ display: 'block', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#c4b5a8', textDecoration: 'none', marginBottom: '12px' }}>{l}</Link>
              ))}
            </div>

            {/* Say Hello */}
            <div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '18px' }}>Say Hello</p>
              <a href="mailto:hello@luckymehndi.com" style={{ display: 'block', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#c4b5a8', textDecoration: 'none', marginBottom: '12px' }}>hello@luckymehndi.example</a>
              <a href="https://wa.me/916268570660" style={{ display: 'block', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#c4b5a8', textDecoration: 'none', marginBottom: '12px' }}>WhatsApp: +91 6268570660</a>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#c4b5a8', marginBottom: '6px' }}>Guna, Madhya Pradesh</p>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#c4b5a8' }}>By appointment only</p>
            </div>
          </div>

          <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px', color: '#6a5a52' }}>© 2026 Lucky Mehndi Atelier. A conceptual studio website.</p>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px', color: '#6a5a52' }}>Sample packages · Appointment requests only · No online payment</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
