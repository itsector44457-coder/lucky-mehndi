import Link from 'next/link';
import MehndiImage from '@/components/MehndiImage';

const galleryItems = [
  {
    src: '/images/gallery101.png',
    tag: 'BRIDAL · RAJASTHANI',
    title: 'The heirloom palms',
    desc: 'Full palms · Traditional coverage',
    aspect: '4/5',
    g: 'linear-gradient(155deg, #c9a070 0%, #8a5820 100%)',
  },
  {
    src: '/images/gallery102.png',
    tag: 'BRIDAL · BESPOKE',
    title: 'Small details, big meaning',
    desc: 'Peacock motifs · Fine-line artistry',
    aspect: '3/4',
    g: 'linear-gradient(155deg, #d4b080 0%, #9a6830 100%)',
  },
  {
    src: '/images/gallery103.png',
    tag: 'FESTIVE · KARWA CHAUTH',
    title: 'For the evening moon',
    desc: 'Traditional palms · Festive coverage',
    aspect: '4/5',
    g: 'linear-gradient(155deg, #c8a060 0%, #885820 100%)',
  },
  {
    src: '/images/gallery104.png',
    tag: 'FESTIVE · ARABIC',
    title: 'An Eid kind of elegance',
    desc: 'Floral trails · Clean negative space',
    aspect: '5/6',
    g: 'linear-gradient(155deg, #d0a870 0%, #906030 100%)',
  },
  {
    src: '/images/gallery105.png',
    tag: 'FESTIVE · TEEJ',
    title: 'Bangles & monsoon stories',
    desc: 'Mandala centre · Rajasthani florals',
    aspect: '3/4',
    g: 'linear-gradient(155deg, #c4a068 0%, #8a5828 100%)',
  },
  {
    src: '/images/gallery106.png',
    tag: 'BRIDAL · FEET',
    title: 'Every step, a little art',
    desc: 'Anklet coverage · Botanicals, feet',
    aspect: '4/5',
    g: 'linear-gradient(155deg, #d4b488 0%, #9a7040 100%)',
  },
  {
    src: '/images/gallery107.png',
    tag: 'FESTIVE · DIWALI',
    title: 'By the light of a diya',
    desc: 'Mehndi florals · Basolni fingers',
    aspect: '3/4',
    g: 'linear-gradient(155deg, #c8a060 0%, #886020 100%)',
  },
  {
    src: '/images/gallery108.png',
    tag: 'BRIDAL · BEHIND-THE-ART',
    title: 'A ritual in the making',
    desc: 'Bridal henna · Drawn by hand',
    aspect: '4/5',
    g: 'linear-gradient(155deg, #d0b070 0%, #907030 100%)',
  },
  {
    src: '/images/gallery109.png',
    tag: 'FESTIVE · WEDDING GUESTS',
    title: 'Joy, lightly drawn',
    desc: 'Arabic coverage · Light coverage',
    aspect: '3/4',
    g: 'linear-gradient(155deg, #c4a870 0%, #8a6830 100%)',
  },
];

const filterTabs = [
  { label: 'All designs / 09', active: true },
  { label: 'Bridal / 04', active: false },
  { label: 'Festivals / 05', active: false },
  { label: 'Arabic & minimal', active: false },
];

export default function GalleryPage() {
  return (
    <div style={{ backgroundColor: '#F5F0E8' }}>

      {/* ── HEADER ── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 40px 32px' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '14px' }}>
          The Rooh Portfolio
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(32px, 5vw, 56px)', color: '#1a1a1a', marginBottom: '14px', lineHeight: 1.1 }}>
          A thousand details. A feeling that stays.
        </h1>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', maxWidth: '380px', marginBottom: '28px' }}>
          A curated collection of bridal heirlooms and everyday celebrations. Find the motifs, the mood and the little details that feel like you.
        </p>

        {/* Filter tabs */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingBottom: '24px', borderBottom: '1px solid #e0d8cc' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {filterTabs.map((tab) => (
              <button key={tab.label} style={{
                padding: '7px 16px',
                backgroundColor: tab.active ? '#6B2D2D' : 'transparent',
                color: tab.active ? '#F5F0E8' : '#5a4f45',
                border: tab.active ? '1px solid #6B2D2D' : '1px solid #d8cfc4',
                fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px',
                cursor: 'pointer', letterSpacing: '0.01em'
              }}>
                {tab.label}
              </button>
            ))}
          </div>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9a8f85' }}>
            Curated by the Atelier
          </p>
        </div>
      </section>

      {/* ── MASONRY GRID ── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px 48px' }}>
        {/*
          CSS columns masonry — browser distributes cards into 3 cols naturally
          Each card has break-inside: avoid so it won't split across columns
        */}
        <div style={{
          columns: '3',
          columnGap: '20px',
        }}>
          {galleryItems.map((item, i) => (
            <div key={i} style={{
              breakInside: 'avoid',
              marginBottom: '20px',
              cursor: 'pointer',
            }}>
              {/* Image */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: item.aspect,
                backgroundColor: '#e0d4c4',
                display: 'block',
                width: '100%',
              }}>
                <MehndiImage src={item.src} alt={item.title} gradient={item.g} />
              </div>

              {/* Text below image */}
              <div style={{ padding: '10px 0 4px' }}>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6B2D2D', marginBottom: '5px' }}>
                  {item.tag}
                </p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '22px', color: '#1a1a1a', marginBottom: '3px', lineHeight: 1.2 }}>
                  {item.title}
                </p>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '11px', color: '#9a8f85', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Italic quote */}
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '18px', color: '#9a8f85', textAlign: 'center', marginTop: '40px' }}>
          Each hand is different. So is every design.
        </p>
      </section>

      {/* ── LET'S MAKE IT YOUR OWN ── */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '64px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6f65', marginBottom: '14px' }}>
            Inspired by something you saw?
          </p>

          <div className="lm-gallery-cta">
            {/* Left */}
            <div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 46px)', color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.1 }}>
                Let&apos;s make it your own.
              </h2>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: '#5a4f45', marginBottom: '28px', maxWidth: '340px' }}>
                Save your favourite design names and mention them in your enquiry.
                We&apos;ll adapt the coverage and details to your celebration — never simply copy a pattern.
              </p>
              <Link href="/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 20px', backgroundColor: '#6B2D2D', color: '#F5F0E8', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '13px', textDecoration: 'none' }}>
                Talk about your design
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="#F5F0E8" strokeWidth="1.5" />
                </svg>
              </Link>
            </div>

            {/* Right: style list */}
            <div>
              {[
                { style: 'Traditional', desc: 'Dense jaal, peacocks, paisleys and one setting.' },
                { style: 'Arabic', desc: 'Flowering floral trails and graceful open space.' },
                { style: 'Minimal', desc: 'Small mandalas, fine fingers and lighter coverage.' },
              ].map((item, i, arr) => (
                <div key={item.style} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: '24px', padding: '18px 0', borderBottom: i < arr.length - 1 ? '1px solid #d8cfc4' : 'none', alignItems: 'start' }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '22px', color: '#1a1a1a' }}>
                    {item.style}
                  </p>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: 1.75, color: '#5a4f45', paddingTop: '4px' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
