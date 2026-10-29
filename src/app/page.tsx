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
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
      <rect x="5" y="0.3" width="6.6" height="6.6" transform="rotate(45 5 0.3)" stroke="#6B2D2D" strokeWidth="1" fill="none" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#F5F0E8' }}>

      {/* ── HERO ── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 40px 0' }}>
        <div className="lm-grid-2">
          {/* Left */}
          <div style={{ paddingBottom: '40px' }}>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D', marginBottom: '20px' }}>
              Guna Rooted. Heartfully Handcrafted.
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 1.05, color: '#1a1a1a', marginBottom: '24px' }}>
              Stories, written<br />in mehndi.
            </h1>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', maxWidth: '300px', marginBottom: '36px' }}>
              For the bride you&apos;re becoming. For the traditions you love.
              Bespoke bridal and festive mehndi, made personal by Lucky.
            </p>
            <div className="lm-btn-row" style={{ marginBottom: '32px' }}>
              <Link href="/bridal-mehndi" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 22px', backgroundColor: '#6B2D2D', color: '#F5F0E8', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none' }}>
                Explore bridal mehndi <Arrow light />
              </Link>
              <Link href="/festival-mehndi" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 22px', border: '1px solid #1a1a1a', color: '#1a1a1a', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none' }}>
                Find your festive design <Arrow />
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '36px', height: '1px', backgroundColor: '#6B2D2D' }} />
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '15px', color: '#7a6f65' }}>
                A little colour. A lifelong memory.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', backgroundColor: '#e8ddd0' }}>
            <MehndiImage src="/images/aboutreal1.png" alt="Bride with beautiful mehndi" gradient="linear-gradient(160deg, #c9a882 0%, #b8906a 40%, #9a7450 70%, #7a5835 100%)" />
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', backgroundColor: 'rgba(245,240,232,0.96)' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '28px', color: '#6B2D2D', lineHeight: 1 }}>01</span>
              <div>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65' }}>The Bridal Edit</p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '14px', color: '#1a1a1a' }}>For your forever kind of day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="lm-ticker" style={{ marginTop: '0' }}>
        {['Pure, natural henna', 'Bespoke, never rushed', 'Bridal & festive artistry', 'Guna · MP · Beyond'].map((t) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Diamond />
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#5a4f45' }}>{t}</span>
          </div>
        ))}
      </div>

      {/* ── TWO WAYS ── */}
      <section className="lm-section" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D', marginBottom: '14px' }}>For every beautiful beginning</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(30px, 4vw, 52px)', color: '#1a1a1a', marginBottom: '12px' }}>Two ways to wear a little Lucky.</h2>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', maxWidth: '420px', marginBottom: '40px' }}>
          An intimate bridal ritual or a room full of celebration. We bring the same care to every hand.
        </p>
        <div className="lm-grid-2">
          {[
            { src: '/images/look1.png', href: '/bridal-mehndi', num: '01 / THE WEDDING COLLECTION', title: 'Bridal mehndi', desc: 'Your love story, woven into peacocks, florals and the smallest meaningful details.', cta: 'Discover bridal artistry', g: 'linear-gradient(145deg, #c4a07a 0%, #8a6035 100%)' },
            { src: '/images/look2.png', href: '/festival-mehndi', num: '02 / THE FESTIVE COLLECTION', title: 'Festivals & celebrations', desc: 'From Karwa Chauth to Eid, delicate designs for the moments that bring us together.', cta: 'Explore festive mehndi', g: 'linear-gradient(145deg, #d4b89a 0%, #9a7050 100%)' },
          ].map((item) => (
            <div key={item.title}>
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', backgroundColor: '#e8ddd0', marginBottom: '20px' }}>
                <MehndiImage src={item.src} alt={item.title} gradient={item.g} />
              </div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D', marginBottom: '8px' }}>{item.num}</p>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '30px', color: '#1a1a1a', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', marginBottom: '20px' }}>{item.desc}</p>
              <Link href={item.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', border: '1px solid #1a1a1a', color: '#1a1a1a', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none' }}>
                {item.cta} <Arrow />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="lm-section" style={{ backgroundColor: '#EDE7D9' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '10px' }}>A closer look</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 52px)', color: '#1a1a1a' }}>The art is in the details.</h2>
            </div>
            <Link href="/gallery" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', border: '1px solid #1a1a1a', color: '#1a1a1a', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none', flexShrink: 0 }}>
              View the gallery <Arrow />
            </Link>
          </div>
          <div className="lm-grid-3">
            {[
              { src: '/images/closerlook1.png', title: 'Peacocks & promises', tag: 'BRIDAL · RAJASTHANI', g: 'linear-gradient(145deg, #c9a882 0%, #a07850 100%)' },
              { src: '/images/closerlook2.png', title: 'A softer kind of statement', tag: 'FESTIVE · ARABIC FLORALS', tagColor: '#6B2D2D', g: 'linear-gradient(145deg, #d4b896 0%, #b08865 100%)' },
              { src: '/images/closerlook3.png', title: 'From fingertips to footsteps', tag: 'BRIDAL · TRADITIONAL', g: 'linear-gradient(145deg, #bfa07a 0%, #8a6040 100%)' },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', marginBottom: '14px' }}>
                  <MehndiImage src={item.src} alt={item.title} gradient={item.g} />
                </div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '18px', color: '#1a1a1a', marginBottom: '4px' }}>{item.title}</p>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: item.tagColor ?? '#7a6f65' }}>{item.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="lm-section" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '14px' }}>Unrushed, from the very beginning</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 48px)', color: '#1a1a1a', marginBottom: '48px' }}>Your moment. Our thoughtful little process.</h2>
        <div className="lm-grid-3">
          {[
            { n: '01', t: 'Share your celebration', d: 'Tell us your date, occasion and the designs you keep coming back to.' },
            { n: '02', t: 'Make it yours', d: 'We discuss your motifs, coverage and a package that feels just right.' },
            { n: '03', t: 'Sit back. Be celebrated.', d: 'We arrive with fresh henna, a calm presence and time just for you.' },
          ].map((s) => (
            <div key={s.n}>
              <div style={{ height: '1px', backgroundColor: '#d8cfc4', marginBottom: '20px' }} />
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '28px', color: '#c4b5a8', marginBottom: '12px' }}>{s.n}</p>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '20px', color: '#1a1a1a', marginBottom: '10px' }}>{s.t}</h3>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="lm-section" style={{ backgroundColor: '#F5F0E8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ height: '1px', backgroundColor: '#d8cfc4', marginBottom: '48px' }} />
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '14px' }}>A thoughtful starting point</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 48px)', color: '#1a1a1a', marginBottom: '12px' }}>Choose your kind of celebration.</h2>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', maxWidth: '480px', marginBottom: '48px' }}>
            Transparent starting prices, with room for your own story. Your final quote is shared after a personal consultation.
          </p>
          <div className="lm-grid-pricing">
            {[
              { tag: 'BRIDAL CLASSIC', price: 'From ₹7,500', sub: 'The beauty of timeless tradition.', items: ['Hands to mid-forearm, both sides', 'Feet to mid-calf · 3–4 hours', 'Traditional motifs · 3–4 hours', 'Design consultation & aftercare'], featured: false },
              { tag: 'BRIDAL SIGNATURE', badge: 'MOST LOVED', price: 'From ₹12,500', sub: 'An heirloom, drawn just for you.', items: ['Hands to elbows, both sides', 'Feet to mid-calf · 5–6 hours', 'Personalised storytelling · 5–6 hours', 'Priority consultation & aftercare'], featured: true },
              { tag: 'FESTIVE PETITE', price: 'From ₹600', sub: 'A little joy for every occasion.', items: ['Both palms · wrists included', 'Arabic or minimal motifs · 20–30 min', 'At-home visits from 5 guests'], featured: false },
            ].map((pkg) => (
              <div key={pkg.tag} style={{ padding: '32px', position: 'relative', border: pkg.featured ? '2px solid #6B2D2D' : '1px solid #d8cfc4', backgroundColor: '#F5F0E8' }}>
                {pkg.badge && <div style={{ position: 'absolute', top: '-12px', right: '20px', padding: '4px 12px', backgroundColor: '#6B2D2D', color: '#F5F0E8', fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.15em' }}>{pkg.badge}</div>}
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', color: '#7a6f65', marginBottom: '14px' }}>{pkg.tag}</p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '38px', color: '#1a1a1a', marginBottom: '8px' }}>{pkg.price}</p>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#5a4f45', marginBottom: '20px' }}>{pkg.sub}</p>
                <div style={{ height: '1px', backgroundColor: '#d8cfc4', marginBottom: '20px' }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pkg.items.map((it) => (
                    <li key={it} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <Diamond />
                      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#5a4f45', lineHeight: 1.6 }}>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 16px', border: '1px solid #1a1a1a', color: '#1a1a1a', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', textDecoration: 'none' }}>
                  Enquire about this package <Arrow />
                </Link>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px', color: '#9a8f85', marginTop: '20px' }}>
            Sample starting prices. Travel and extra coverage are quoted separately. Guest minimum from ₹350 per hand, minimum 10 guests.
          </p>
        </div>
      </section>

      {/* ── ARTIST ── */}
      <section className="lm-section" style={{ backgroundColor: '#EDE7D9' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="lm-grid-2">
            <div style={{ overflow: 'hidden', width: '320px', maxWidth: '100%', aspectRatio: '3/4', borderRadius: '160px 160px 0 0', backgroundColor: '#d8cfc4', margin: '0 auto', position: 'relative' }}>
              <MehndiImage src="/images/clinetphoto1.jpeg" alt="Lucky - Mehndi Artist" gradient="linear-gradient(160deg, #d4b896 0%, #b89060 50%, #8a6035 100%)" />
            </div>
            <div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D', marginBottom: '16px' }}>The hands behind Lucky</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 50px)', color: '#1a1a1a', marginBottom: '20px' }}>Rooted in tradition.<br />Drawn from the heart.</h2>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', marginBottom: '20px' }}>
                I&apos;m Lucky, a Guna-based mehndi artist with a love for fine lines and the stories they hold.
                Lucky means soul — and that&apos;s what I hope you feel in every design, every conversation and every little detail.
              </p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '22px', color: '#1a1a1a', marginBottom: '28px' }}>With love, Lucky</p>
              <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', border: '1px solid #1a1a1a', color: '#1a1a1a', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none' }}>
                Meet your artist <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="lm-section" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '32px' }}>Little notes. Lasting memories.</p>
        <blockquote style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(20px, 3vw, 32px)', lineHeight: 1.5, color: '#1a1a1a', marginBottom: '20px' }}>
          &ldquo;She tucked our story into every tiny detail. My mehndi felt like the most personal part of the wedding.&rdquo;
        </blockquote>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65' }}>Meera · A Guna Bridal Story</p>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px', color: '#b0a598', marginTop: '8px' }}>All illustrative client story.</p>
      </section>

    </div>
  );
}
