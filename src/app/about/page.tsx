'use client';

import Link from 'next/link';
import MehndiImage from '@/components/MehndiImage';
import { useState } from 'react';

function Arrow({ light = false }: { light?: boolean }) {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M1 11L11 1M11 1H4M11 1V8" stroke={light ? '#F5F0E8' : '#1a1a1a'} strokeWidth="1.5" />
    </svg>
  );
}

export default function AboutPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', agree: false });
  const [done, setDone] = useState(false);
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px',
    border: '1px solid #d8cfc4', backgroundColor: '#fff',
    fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
    color: '#1a1a1a', outline: 'none',
  };

  return (
    <div style={{ backgroundColor: '#F5F0E8' }}>

      {/* ═══════════════════════════════════════
          SECTION 1 — HERO: arch image + copy
      ═══════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 40px 80px' }}>
        <div className="lm-grid-2" style={{ alignItems: 'center', gap: '64px' }}>

          {/* Left: arch image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              overflow: 'hidden',
              borderRadius: '180px 180px 0 0',
              aspectRatio: '3/4',
              backgroundColor: '#e0d4c4',
              position: 'relative',
              maxWidth: '420px',
              margin: '0 auto',
            }}>
              <MehndiImage
                src="/images/clinetphoto1.jpeg"
                alt="Lucky — Artist & Founder"
                gradient="linear-gradient(160deg, #d4b896 0%, #b89060 50%, #8a6035 100%)"
              />
            </div>
            {/* Caption below image */}
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px',
              letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9a8f85',
              marginTop: '10px', textAlign: 'center'
            }}>
              Lucky · Artist &amp; Founder
            </p>
          </div>

          {/* Right: copy */}
          <div>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px',
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D',
              marginBottom: '20px'
            }}>
              A little soul in every line
            </p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
              fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.08,
              color: '#1a1a1a', marginBottom: '24px'
            }}>
              Hello, I&apos;m Lucky.<br />Welcome to Lucky Mehndi.
            </h1>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
              lineHeight: 1.85, color: '#5a4f45', marginBottom: '18px', maxWidth: '440px'
            }}>
              Some of my earliest memories are of women gathered around a bowl of henna —
              sharing stories, laughing over cups of chai, waiting for the colour to bloom.
              It wasn&apos;t just the design I fell in love with. It was the feeling.
            </p>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
              lineHeight: 1.85, color: '#5a4f45', marginBottom: '28px', maxWidth: '440px'
            }}>
              Lucky Mehndi grew from that feeling. From my studio in Guna, I create bridal and
              festive mehndi that honours our traditions while leaving room for your individuality.
              Fine lines, thoughtful details, and a little piece of your story.
            </p>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
              fontWeight: 400, fontSize: '26px', color: '#1a1a1a', marginBottom: '32px'
            }}>
              With love, Lucky
            </p>
            <Link href="/booking" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 22px', backgroundColor: '#6B2D2D', color: '#F5F0E8',
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
              textDecoration: 'none'
            }}>
              Create something with me <Arrow light />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — VALUES: 3 numbered cols
      ═══════════════════════════════════════ */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '72px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px',
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65',
            marginBottom: '16px'
          }}>
            What stays at the heart of Lucky
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
            fontSize: 'clamp(28px, 4vw, 50px)', color: '#1a1a1a',
            marginBottom: '48px', lineHeight: 1.1
          }}>
            Old-world artistry. A deeply personal touch.
          </h2>

          <div className="lm-grid-3">
            {[
              {
                n: '01',
                title: 'Nature, never shortcuts',
                desc: 'Freshly prepared natural brown henna, careful ingredient conversations and no black henna. Beautiful colour should begin with care.',
              },
              {
                n: '02',
                title: 'Your story, thoughtfully told',
                desc: 'We listen before we draw. A favourite flower, a family tradition or a hidden initial can become the detail you remember most.',
              },
              {
                n: '03',
                title: 'An unhurried kind of luxury',
                desc: 'Clear conversations, considered time slots and a calm presence. The experience matters just as much as the finished design.',
              },
            ].map((v) => (
              <div key={v.n} style={{ paddingTop: '24px', borderTop: '1px solid #d8cfc4' }}>
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif', fontWeight: 300,
                  fontSize: '28px', color: '#c4b5a8', marginBottom: '16px'
                }}>
                  {v.n}
                </p>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
                  fontSize: '24px', color: '#1a1a1a', marginBottom: '12px'
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: 'Jost, sans-serif', fontWeight: 300,
                  fontSize: '12px', lineHeight: 1.8, color: '#5a4f45'
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — HENNA: text left + image right
      ═══════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px' }}>
        <div className="lm-grid-2" style={{ alignItems: 'center', gap: '64px' }}>

          {/* Left: text */}
          <div>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px',
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65',
              marginBottom: '16px'
            }}>
              From leaf to lasting memory
            </p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
              fontSize: 'clamp(30px, 4vw, 50px)', color: '#1a1a1a',
              marginBottom: '20px', lineHeight: 1.1
            }}>
              Made slowly. Meant to be felt.
            </h2>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
              lineHeight: 1.85, color: '#5a4f45', marginBottom: '28px', maxWidth: '380px'
            }}>
              Natural henna has its own rhythm. Freshly mixed paste, a patiently drawn line,
              a stain that deepens over time. We work with that rhythm, not against it —
              choosing care over hurry, and meaning over more.
            </p>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
              fontWeight: 400, fontSize: '20px', color: '#6B2D2D', lineHeight: 1.4
            }}>
              &ldquo;The most beautiful designs still leave space for you.&rdquo;
            </p>
          </div>

          {/* Right: image */}
          <div style={{
            position: 'relative', overflow: 'hidden',
            aspectRatio: '16/10', backgroundColor: '#e0d4c4'
          }}>
            <MehndiImage
              src="/images/jadibuti.png"
              alt="Natural henna preparation"
              gradient="linear-gradient(145deg, #d4b896 0%, #b89060 50%, #8a6035 100%)"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — LOCATIONS
      ═══════════════════════════════════════ */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '72px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Top: heading + right note */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px',
            paddingBottom: '40px', borderBottom: '1px solid #d8cfc4',
            marginBottom: '40px'
          }}>
            <div>
              <p style={{
                fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px',
                letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65',
                marginBottom: '14px'
              }}>
                Rooted in Guna. Happy to travel.
              </p>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
                fontSize: 'clamp(28px, 4vw, 52px)', color: '#1a1a1a', lineHeight: 1.1
              }}>
                Where we bring the art.
              </h2>
            </div>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
              lineHeight: 1.8, color: '#5a4f45', maxWidth: '260px', paddingTop: '8px'
            }}>
              Share your venue and date when you enquire. All travel and stay costs are discussed before you confirm.
            </p>
          </div>

          {/* 3 cities */}
          <div className="lm-grid-3">
            {[
              {
                city: 'Guna',
                tag: 'STUDIO & AT-HOME APPOINTMENTS',
                desc: 'Our home base. Individual studio visits by appointment, bridal venue visits and festive groups of 5 or more.',
              },
              {
                city: 'Madhya Pradesh',
                tag: 'PLANNED ARTIST VISITS',
                desc: 'Bridal and group appointments across Bhopal, Indore, Gwalior and surrounding areas, subject to schedule and travel.',
              },
              {
                city: 'Beyond',
                tag: 'DESTINATION CELEBRATIONS',
                desc: "Travelling for your wedding? Tell us where. Destination bookings are considered with travel and stay quoted separately.",
              },
            ].map((loc, i) => (
              <div key={i} style={{ paddingTop: '24px', borderTop: '1px solid #d8cfc4' }}>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
                  fontSize: '32px', color: '#1a1a1a', marginBottom: '8px'
                }}>
                  {loc.city}
                </h3>
                <p style={{
                  fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px',
                  letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6B2D2D',
                  marginBottom: '12px'
                }}>
                  {loc.tag}
                </p>
                <p style={{
                  fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px',
                  lineHeight: 1.8, color: '#5a4f45'
                }}>
                  {loc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 — CONTACT: left + form card
      ═══════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px' }}>
        <div className="lm-grid-2" style={{ alignItems: 'start', gap: '64px' }}>

          {/* Left: contact details */}
          <div>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px',
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D',
              marginBottom: '20px'
            }}>
              A conversation is a lovely place to start
            </p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
              fontSize: 'clamp(32px, 4.5vw, 58px)', color: '#1a1a1a',
              marginBottom: '20px', lineHeight: 1.08
            }}>
              Tell us what you&apos;re dreaming of.
            </h2>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
              lineHeight: 1.8, color: '#5a4f45', marginBottom: '36px', maxWidth: '340px'
            }}>
              A question, a collaboration, a celebration in the making — we&apos;d love to hear from you.
            </p>

            {/* Contact rows */}
            {[
              { label: 'Email the Atelier', value: 'hello@luckymehndi.example', href: 'mailto:hello@luckymehndi.example' },
              { label: 'WhatsApp', value: '+91 6268570660', href: 'https://wa.me/916268570660' },
              { label: 'Studio', value: 'Guna, Madhya Pradesh' },
              { label: 'Hours', value: 'Monday–Saturday · 10 am–6 pm IST' },
              { label: 'Follow the details', value: 'Instagram · @lucky.mehndi', href: 'https://instagram.com' },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: '20px' }}>
                <p style={{
                  fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px',
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B2D2D',
                  marginBottom: '4px'
                }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '14px',
                    color: '#1a1a1a', textDecoration: 'none'
                  }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '14px', color: '#1a1a1a' }}>
                    {item.value}
                  </p>
                )}
              </div>
            ))}

            <p style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px',
              lineHeight: 1.75, color: '#9a8f85', marginTop: '28px', maxWidth: '320px'
            }}>
              Studio visits are by appointment only; the exact address is shared after confirmation.
            </p>

            <Link href="/booking" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '24px', padding: '10px 18px',
              border: '1px solid #1a1a1a', color: '#1a1a1a',
              fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
              textDecoration: 'none'
            }}>
              Ready to book? Start here <Arrow />
            </Link>
          </div>

          {/* Right: form card */}
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #e8e0d4',
            padding: '36px',
          }}>
            {done ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '28px', color: '#1a1a1a', marginBottom: '12px' }}>
                  Thank you, {form.name}.
                </p>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', color: '#5a4f45', lineHeight: 1.8 }}>
                  We&apos;ll send you a personal reply within 1–2 working days.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontWeight: 400,
                  fontSize: '28px', color: '#1a1a1a', marginBottom: '10px'
                }}>
                  Leave a little note.
                </h3>
                <p style={{
                  fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px',
                  lineHeight: 1.75, color: '#7a6f65', marginBottom: '28px'
                }}>
                  For appointment requests, please use our Booking page.<br />
                  For everything else, you&apos;re in the right place.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '11px', color: '#5a4f45', display: 'block', marginBottom: '5px' }}>
                        Your name *
                      </label>
                      <input required name="name" value={form.name} onChange={handle} placeholder="Full name" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '11px', color: '#5a4f45', display: 'block', marginBottom: '5px' }}>
                        Email address *
                      </label>
                      <input required type="email" name="email" value={form.email} onChange={handle} placeholder="you@example.com" style={inputStyle} />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '11px', color: '#5a4f45', display: 'block', marginBottom: '5px' }}>
                      What&apos;s on your mind? *
                    </label>
                    <select required name="subject" value={form.subject} onChange={handle}
                      style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}>
                      <option value="" disabled>Choose a subject</option>
                      <option value="bridal">Bridal mehndi enquiry</option>
                      <option value="festive">Festive / occasion booking</option>
                      <option value="collab">Collaboration</option>
                      <option value="general">General question</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '11px', color: '#5a4f45', display: 'block', marginBottom: '5px' }}>
                      Your message *
                    </label>
                    <textarea required name="message" value={form.message} onChange={handle} rows={4}
                      placeholder="Tell us a little about your question, idea or celebration..."
                      style={{ ...inputStyle, resize: 'none' }}
                    />
                  </div>

                  {/* Checkbox */}
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      required
                      checked={form.agree}
                      onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                      style={{ marginTop: '2px', accentColor: '#6B2D2D', flexShrink: 0 }}
                    />
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', color: '#5a4f45', lineHeight: 1.6 }}>
                      I agree to be contacted by Lucky Mehndi about this enquiry. *
                    </span>
                  </label>

                  {/* Submit */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <button type="submit" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '13px 24px', backgroundColor: '#6B2D2D', color: '#F5F0E8',
                      fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px',
                      border: 'none', cursor: 'pointer'
                    }}>
                      Send your note
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H4M11 1V8" stroke="#F5F0E8" strokeWidth="1.5" />
                      </svg>
                    </button>
                    <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px', color: '#9a8f85', lineHeight: 1.5 }}>
                      A personal reply within<br />1–2 working days.
                    </p>
                  </div>

                  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '10px', color: '#b0a598' }}>
                    Static design preview. This form does not send a message.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
