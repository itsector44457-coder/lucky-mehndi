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

export default function FestivalMehndiPage() {
  return (
    <div style={{ backgroundColor: '#F5F0E8' }}>

      {/* ═══════════════════════════════════
          HERO — split layout
          Left: copy | Right: arch image
      ═══════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', minHeight: '480px' }}>

          {/* LEFT copy */}
          <div style={{ paddingBottom: '40px' }}>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#6B2D2D', marginBottom: '20px'
            }}>
              For traditions, togetherness &amp; a little joy
            </p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
              fontSize: 'clamp(48px, 5.5vw, 72px)', lineHeight: 1.05,
              color: '#1a1a1a', marginBottom: '24px'
            }}>
              Some moments deserve a little mehndi.
            </h1>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
              lineHeight: 1.8, color: '#5a4f45', maxWidth: '340px', marginBottom: '36px'
            }}>
              The rustle of a festive outfit. The clink of bangles. Your favourite people, all together.
              Celebrate it all with graceful mehndi, thoughtfully made for your occasion.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <Link href="/booking" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 22px', backgroundColor: '#6B2D2D', color: '#F5F0E8',
                fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none'
              }}>
                Plan your festive appointment <Arrow light />
              </Link>
              <Link href="/gallery" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 22px', border: '1px solid #1a1a1a', color: '#1a1a1a',
                fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none'
              }}>
                View designs <Arrow />
              </Link>
            </div>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px',
              color: '#9a8f85', letterSpacing: '0.01em'
            }}>
              Individual studio appointments · At-home groups from 5 guests
            </p>
          </div>

          {/* RIGHT image with arch top */}
          <div style={{ position: 'relative' }}>
            {/* Arch-top image */}
            <div style={{
              overflow: 'hidden',
              borderRadius: '200px 200px 0 0',
              aspectRatio: '4/5',
              backgroundColor: '#e8ddd0',
              position: 'relative'
            }}>
              <MehndiImage
                src="/images/festiveHome.png"
                alt="Woman showing mehndi at festival"
                gradient="linear-gradient(160deg, #d4b896 0%, #c09060 40%, #a07040 70%, #7a5020 100%)"
              />
            </div>
            {/* Caption below image */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginTop: '12px', padding: '0 4px'
            }}>
              <p style={{
                fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px',
                letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65'
              }}>
                The Festive Edit
              </p>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                fontWeight: 300, fontSize: '15px', color: '#7a6f65'
              }}>
                Light hands. Full hearts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          OCCASIONS GRID — 3×2 with images
      ═══════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px' }}>
        <p style={{
          fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D', marginBottom: '14px'
        }}>
          A design for every celebration
        </p>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
          fontSize: 'clamp(34px, 4vw, 52px)', color: '#1a1a1a', marginBottom: '12px'
        }}>
          Your occasion. Its own beautiful language.
        </h2>
        <p style={{
          fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
          lineHeight: 1.8, color: '#5a4f45', maxWidth: '440px', marginBottom: '48px'
        }}>
          Choose an inspiration, not a rule. Every design can be adapted to your style, outfit and the time you have.
        </p>

        <div className="lm-grid-occasions">
          {[
            {
              src: '/images/karva.png',
              tag: 'TRADITIONS, HELD CLOSE',
              title: 'Karwa Chauth',
              desc: 'Rich mandalas, timeless paisleys and intricate fingertips for a cherished evening ritual.',
              cta: 'Enquire for Karwa Chauth',
              g: 'linear-gradient(145deg, #c9a060 0%, #8a5820 100%)',
            },
            {
              src: '/images/teej.png',
              tag: 'MONSOON JOY',
              title: 'Teej',
              desc: 'Playful vines, peacocks and Rajasthani motifs to pair with your green bangles.',
              cta: 'Enquire for Teej',
              g: 'linear-gradient(145deg, #d4b070 0%, #9a7030 100%)',
            },
            {
              src: '/images/Eid.png',
              tag: 'ELEGANCE IN EVERY LINE',
              title: 'Eid',
              desc: 'Airy Arabic florals, flowing trails and fine finger details for your Eid celebration.',
              cta: 'Enquire for Eid',
              g: 'linear-gradient(145deg, #c8a878 0%, #907040 100%)',
            },
            {
              src: '/images/diwali.png',
              tag: 'A LITTLE EXTRA RADIANCE',
              title: 'Diwali',
              desc: 'Delicate lotus, minimal mandalas and festive accents that glow alongside your diyas.',
              cta: 'Enquire for Diwali',
              g: 'linear-gradient(145deg, #d0a860 0%, #906020 100%)',
            },
            {
              src: '/images/WeddingFunction.png',
              tag: 'ALL YOUR FAVOURITE PEOPLE',
              title: 'Wedding functions',
              desc: 'Coordinated guest designs for sangeet, haldi and mehndi nights — from subtle to celebratory.',
              cta: 'Enquire for Wedding functions',
              g: 'linear-gradient(145deg, #c8a070 0%, #886030 100%)',
            },
            {
              src: '/images/SmaalFunction.png',
              tag: 'SMALL MOMENTS COUNT, TOO',
              title: 'Just because',
              desc: 'Birthdays, anniversaries or an afternoon with friends. You never need a reason for a little art.',
              cta: 'Enquire for Just because',
              g: 'linear-gradient(145deg, #d4b080 0%, #987040 100%)',
            },
          ].map((item, i) => (
            <div key={i}>
              {/* Image */}
              <div style={{
                position: 'relative', overflow: 'hidden',
                aspectRatio: '4/3', backgroundColor: '#e8ddd0', marginBottom: '14px'
              }}>
                <MehndiImage src={item.src} alt={item.title} gradient={item.g} />
              </div>
              {/* Tag */}
              <p style={{
                fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px',
                letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D', marginBottom: '6px'
              }}>
                {item.tag}
              </p>
              {/* Title */}
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
                fontSize: '26px', color: '#1a1a1a', marginBottom: '8px'
              }}>
                {item.title}
              </h3>
              {/* Desc */}
              <p style={{
                fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px',
                lineHeight: 1.75, color: '#5a4f45', marginBottom: '14px'
              }}>
                {item.desc}
              </p>
              {/* CTA link */}
              <Link href="/booking" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px',
                color: '#1a1a1a', textDecoration: 'none',
                borderBottom: '1px solid #d8cfc4', paddingBottom: '2px'
              }}>
                {item.cta} <Arrow />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════
          PACKAGES
      ═══════════════════════════════════ */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px',
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '14px'
          }}>
            From one beautiful pair of hands to a whole gathering
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 50px)', color: '#1a1a1a', marginBottom: '48px'
          }}>
            A little festive, or a little more.
          </h2>

          <div className="lm-grid-pricing">
            {[
              {
                tag: 'FESTIVE PETITE', price: 'From ₹600', sub: 'A light touch of celebration.',
                items: ['Both palms, up to wrists', 'Arabic or minimal designs', '20–30 minutes per person', 'Studio visit or home groups of 5+'],
                featured: false,
              },
              {
                tag: 'FESTIVE CELEBRATION', badge: 'MOST LOVED', price: 'From ₹1,100', sub: 'For a beautifully fuller finish.',
                items: ['Both sides of hands, up to wrists', 'Floral, mandala or traditional motifs', '40–60 minutes per person', 'Studio visit or home groups of 5+'],
                featured: true,
              },
              {
                tag: 'WEDDING GUESTS', price: 'From ₹350 / hand', sub: 'Bring everyone into the celebration.',
                items: ['One palm or back of hand per design', 'Minimum 10 guests', '5–10 minutes per hand', 'Extra artists quoted to fit your event'],
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
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.18em', color: '#7a6f65', marginBottom: '14px' }}>
                  {pkg.tag}
                </p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '40px', color: '#1a1a1a', marginBottom: '8px' }}>
                  {pkg.price}
                </p>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#5a4f45', marginBottom: '20px' }}>
                  {pkg.sub}
                </p>
                <div style={{ height: '1px', backgroundColor: '#d8cfc4', marginBottom: '20px' }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
            Illustrative starting prices. Travel, extra coverage and additional artists are quoted separately. Festival dates fill quickly; enquire 1–2 weeks ahead, or earlier for larger gatherings.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          RITUAL SECTION — image left, steps right
      ═══════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px' }}>
        <div className="lm-grid-2" style={{ alignItems: 'center' }}>

          {/* Left: image */}
          <div style={{
            position: 'relative', overflow: 'hidden',
            aspectRatio: '4/5', backgroundColor: '#e8ddd0'
          }}>
            <MehndiImage
              src="/images/Planning.png"
              alt="Artist applying mehndi"
              gradient="linear-gradient(145deg, #d4b896 0%, #b08860 50%, #8a6035 100%)"
            />
          </div>

          {/* Right: text */}
          <div>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px',
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '16px'
            }}>
              Less planning. More celebrating.
            </p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 48px)', color: '#1a1a1a', marginBottom: '32px'
            }}>
              Make room for a lovely little ritual.
            </h2>

            {[
              {
                title: 'Book a little ahead',
                desc: 'Choose a date 1–2 days before your celebration for a richer stain. Tell us your guest count and available time.',
              },
              {
                title: 'Come as you are, with clean hands',
                desc: 'Avoid hand cream or oils before your appointment. Finish any manicure or waxing a day in advance.',
              },
              {
                title: 'Give the colour its time',
                desc: 'Leave the paste on for 6–8 hours if comfortable. Scrape off gently; avoid water initially and let the stain deepen.',
              },
            ].map((step) => (
              <div key={step.title} style={{ marginBottom: '24px' }}>
                <p style={{
                  fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '13px',
                  color: '#1a1a1a', marginBottom: '5px'
                }}>
                  {step.title}
                </p>
                <p style={{
                  fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
                  lineHeight: 1.75, color: '#5a4f45'
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FAQ
      ═══════════════════════════════════ */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', gap: '64px' }} className="lm-grid-faq">

          {/* Left */}
          <div>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px',
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '16px'
            }}>
              Good to know
            </p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
              fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#1a1a1a', marginBottom: '12px'
            }}>
              Before the festivities begin.
            </h2>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
              lineHeight: 1.8, color: '#5a4f45'
            }}>
              Something else on your mind? We&apos;re happy to talk through the details.
            </p>
          </div>

          {/* Right: FAQ items */}
          <div>
            {[
              {
                q: 'Can I book just for myself?',
                a: 'Yes. Individual appointments are available by appointment at our Guna studio. For at-home festive visits, we ask for a minimum of 5 guests.',
              },
              {
                q: 'Can everyone choose a different design?',
                a: 'Of course. Share the mix of Petite and Celebration designs in your enquiry. For larger groups, we can curate a design menu to keep the event flowing.',
              },
              {
                q: 'Do you use natural henna?',
                a: 'Always. We use freshly prepared natural brown henna, never black henna. Let us know about allergies or sensitive skin so we can discuss ingredients and a patch test.',
              },
              {
                q: 'What if my festival date is very close?',
                a: 'Send us your preferred date and a flexible time window. We will personally check availability; an enquiry does not reserve an appointment.',
              },
            ].map((faq, i) => (
              <div key={i} style={{ padding: '22px 0', borderBottom: '1px solid #d8cfc4' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
                    fontSize: '20px', color: '#1a1a1a', marginBottom: '8px'
                  }}>
                    {faq.q}
                  </p>
                  <span style={{ color: '#7a6f65', fontSize: '20px', flexShrink: 0, lineHeight: 1 }}>–</span>
                </div>
                <p style={{
                  fontFamily: 'Jost, sans-serif', fontWeight: 300,
                  fontSize: '13px', lineHeight: 1.8, color: '#5a4f45'
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
