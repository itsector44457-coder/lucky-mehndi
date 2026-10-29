import Link from 'next/link';
import MehndiImage from '@/components/MehndiImage';

function Arrow({ light = false }: { light?: boolean }) {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M1 11L11 1M11 1H4M11 1V8" stroke={light ? '#F5F0E8' : '#1a1a1a'} strokeWidth="1.5" />
    </svg>
  );
}

function Diamond() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
      <rect x="5" y="0.3" width="6.6" height="6.6" transform="rotate(45 5 0.3)" stroke="#6B2D2D" strokeWidth="1" fill="none" />
    </svg>
  );
}

export default function BridalMehndiPage() {
  return (
    <div style={{ backgroundColor: '#F5F0E8' }}>

      {/* ═══════════ HERO ═══════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 40px 40px' }}>
        <div className="lm-grid-2">

          {/* Image */}
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', backgroundColor: '#e8ddd0' }}>
            <MehndiImage
              src="/images/BridalHome.webp"
              alt="Bridal mehndi on hands with bangles"
              gradient="linear-gradient(155deg, #c4a07a 0%, #a07848 50%, #7a5030 100%)"
            />
            <div style={{
              position: 'absolute', bottom: '20px', left: '20px',
              padding: '10px 14px', backgroundColor: 'rgba(245,240,232,0.96)'
            }}>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D' }}>
                The Bridal Collection / Lucky
              </p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D', marginBottom: '16px' }}>
              For the beginning of your forever
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(44px, 5vw, 68px)', lineHeight: 1.05, color: '#1a1a1a', marginBottom: '20px' }}>
              Your love story,<br />in every line.
            </h1>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', marginBottom: '32px', maxWidth: '420px' }}>
              A hidden initial. A place you first met. A peacock for the traditions you carry.
              Bridal mehndi at Lucky is more than an intricate design — it is something entirely, beautifully yours.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <Link href="/booking" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 22px', backgroundColor: '#6B2D2D', color: '#F5F0E8',
                fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none'
              }}>
                Request your bridal date <Arrow light />
              </Link>
              <Link href="/gallery" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 22px', border: '1px solid #1a1a1a', color: '#1a1a1a',
                fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none'
              }}>
                See bridal designs <Arrow />
              </Link>
            </div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: 1.8, color: '#7a6f65' }}>
              Guna · MP · Destination weddings on request<br />
              We recommend enquiring 2–3 months before your wedding.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ TICKER ═══════════ */}
      <div style={{
        borderTop: '1px solid #e0d8cc', borderBottom: '1px solid #e0d8cc',
        backgroundColor: '#EDE7D9', padding: '14px 40px',
        display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '12px'
      }}>
        {['One bride. Our undivided attention.', 'Fresh, natural henna. Always.', 'A design that belongs only to you.', 'Guna · MP · Beyond'].map((t) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Diamond />
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#5a4f45' }}>{t}</span>
          </div>
        ))}
      </div>

      {/* ═══════════ PACKAGES ═══════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '14px' }}>
          Considered coverage. Beautiful detail.
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(32px, 4vw, 50px)', color: '#1a1a1a', marginBottom: '12px' }}>
          Find your bridal ritual.
        </h2>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', maxWidth: '480px', marginBottom: '48px' }}>
          Every bridal package includes a design consultation, freshly prepared natural henna and a personalised aftercare guide.
        </p>

        <div className="lm-grid-pricing">
          {[
            {
              tag: 'BRIDAL CLASSIC', price: 'From ₹7,500', sub: 'Timeless, intricate and effortlessly you.',
              items: ['Hands to mid-forearm, both sides', 'Feet to ankles · 3–4 hours', 'Traditional florals, paisleys & mandalas', 'One design consultation'],
              featured: false,
            },
            {
              tag: 'BRIDAL SIGNATURE', badge: 'MOST LOVED', price: 'From ₹12,500', sub: 'A bespoke heirloom for your big day.',
              items: ['Hands to elbows, both sides', 'Feet to mid-calf · 5–6 hours', 'Personal motifs, initials & story details', 'Priority consultation & design planning'],
              featured: true,
            },
            {
              tag: 'WEDDING GUESTS', price: 'From ₹350 / hand', sub: 'More hands, more memories.',
              items: ['One palm or back of hand per design', 'Minimum 10 guests · 5–10 min per hand', 'Sangeet, mehndi night & family gatherings', 'Artist team quoted for larger groups'],
              featured: false,
            },
          ].map((pkg) => (
            <div key={pkg.tag} style={{
              padding: '32px', position: 'relative',
              border: pkg.featured ? '2px solid #6B2D2D' : '1px solid #d8cfc4',
              backgroundColor: '#F5F0E8'
            }}>
              {pkg.badge && (
                <div style={{
                  position: 'absolute', top: '-12px', right: '20px',
                  padding: '4px 12px', backgroundColor: '#6B2D2D', color: '#F5F0E8',
                  fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.15em'
                }}>
                  {pkg.badge}
                </div>
              )}
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', color: '#7a6f65', marginBottom: '14px' }}>{pkg.tag}</p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '38px', color: '#1a1a1a', marginBottom: '8px' }}>{pkg.price}</p>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#5a4f45', marginBottom: '20px' }}>{pkg.sub}</p>
              <div style={{ height: '1px', backgroundColor: '#d8cfc4', marginBottom: '20px' }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {pkg.items.map((it) => (
                  <li key={it} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Diamond />
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#5a4f45', lineHeight: 1.6 }}>{it}</span>
                  </li>
                ))}
              </ul>
              <Link href="/booking" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '10px 16px', border: '1px solid #1a1a1a', color: '#1a1a1a',
                fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', textDecoration: 'none'
              }}>
                Enquire about this package <Arrow />
              </Link>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px', color: '#9a8f85', marginTop: '20px' }}>
          Starting prices are illustrative. Travel, extra coverage and additional artists are quoted separately.
        </p>
      </section>

      {/* ═══════════ LITTLE THINGS ═══════════ */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px', alignItems: 'start' }} className="lm-grid-2">
          {/* Left text */}
          <div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '14px' }}>
              Not just a pattern. A keepsake.
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#1a1a1a', marginBottom: '16px' }}>
              The little things that make it yours.
            </h2>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', marginBottom: '28px' }}>
              From heritage-inspired Rajasthani jaalis to open, contemporary florals, we find a rhythm that feels like you.
            </p>
            {[
              { label: 'Your story', desc: 'Initials, a meaningful date or a favourite memory.' },
              { label: 'Your style', desc: 'Peacocks, lotus, mandalas or delicate negative space.' },
              { label: 'Your celebration', desc: 'Coordinate bridal, family and mehndi-night designs.' },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: '16px' }}>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '13px', color: '#6B2D2D', marginBottom: '4px' }}>{item.label}</p>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#5a4f45' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right images */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', backgroundColor: '#d8cfc4', marginBottom: '10px' }}>
                <MehndiImage src="/images/BridalKeepsafe1.png" alt="Bridal mehndi detail" gradient="linear-gradient(145deg, #c9a882 0%, #9a7040 100%)" />
              </div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65' }}>
                01 / A Story in Miniature
              </p>
            </div>
            <div style={{ marginTop: '48px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', backgroundColor: '#d8cfc4', marginBottom: '10px' }}>
                <MehndiImage src="/images/BridalKeepsafe2.png" alt="Bridal feet mehndi" gradient="linear-gradient(145deg, #bfa07a 0%, #8a6035 100%)" />
              </div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65' }}>
                02 / Every Last Detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ AFTERCARE STEPS ═══════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '14px' }}>
          A calm, beautiful experience
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 48px)', color: '#1a1a1a', marginBottom: '12px' }}>
          Before the colour becomes a memory.
        </h2>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', maxWidth: '480px', marginBottom: '56px' }}>
          Book your bridal mehndi 36–48 hours before the main ceremony, allowing the natural stain time to deepen.
        </p>

        <div className="lm-grid-4" style={{ marginBottom: '32px' }}>
          {[
            { n: '01', t: 'Before we meet', d: 'Share outfit colours, inspiration and meaningful motifs during your consultation. Complete waxing and manicures at least a day before.' },
            { n: '02', t: 'On your mehndi day', d: 'Arrive with clean, dry skin, without lotions or oils. Wear comfortable sleeves and keep 3–6 unhurried hours free.' },
            { n: '03', t: 'Let it settle', d: "Keep the paste on for 6–8 hours if comfortable. Follow the artist's aftercare guidance and avoid rubbing or picking." },
            { n: '04', t: 'Watch it bloom', d: 'Gently scrape off the dry paste. Avoid water for 12–24 hours where possible; your stain deepens over the next 48 hours.' },
          ].map((s) => (
            <div key={s.n}>
              <div style={{ height: '1px', backgroundColor: '#d8cfc4', marginBottom: '20px' }} />
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '26px', color: '#c4b5a8', marginBottom: '12px' }}>{s.n}</p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '18px', color: '#1a1a1a', marginBottom: '10px' }}>{s.t}</p>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: 1.8, color: '#5a4f45' }}>{s.d}</p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#EDE7D9', padding: '18px 22px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <Diamond />
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: 1.8, color: '#5a4f45' }}>
            Only natural brown henna — never &quot;black henna&quot;. Please tell us about allergies or sensitive skin; we can arrange a patch test in advance. Stain depth varies naturally from person to person.
          </p>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gap: '64px' }} className="lm-grid-faq">
          <div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '14px' }}>
              Good to know
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(28px, 3vw, 40px)', color: '#1a1a1a', marginBottom: '12px' }}>
              A few things you may be wondering.
            </h2>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45' }}>
              Something else on your mind? We&apos;re happy to talk through the details.
            </p>
          </div>
          <div>
            {[
              { q: 'How far in advance should I book?', a: 'Enquire 2–3 months ahead, especially for peak wedding dates. We will check availability before discussing your design and sharing a final quote.' },
              { q: 'Can you travel to my home or wedding venue?', a: 'Yes. We offer appointments in Guna and nearby areas, with destination weddings considered on request. Travel and stay, if needed, are quoted separately.' },
              { q: 'Can family and guests have their mehndi done too?', a: 'Absolutely. Wedding guest designs start at ₹350 per hand for a minimum of 10 guests. Share your guest count and time window so we can plan the right artist team.' },
              { q: 'Is my date confirmed when I submit an enquiry?', a: 'Not yet. Your enquiry is a request only. We confirm the date personally once availability, design details and the agreed advance are in place.' },
            ].map((faq, i) => (
              <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid #d8cfc4' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '10px' }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '20px', color: '#1a1a1a' }}>{faq.q}</p>
                  <span style={{ color: '#7a6f65', fontSize: '20px', flexShrink: 0, lineHeight: 1 }}>–</span>
                </div>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
