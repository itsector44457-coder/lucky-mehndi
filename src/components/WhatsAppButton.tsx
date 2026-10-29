'use client';

export default function WhatsAppButton() {
  const phone = '916268570660'; // 91 = India country code
  const message = encodeURIComponent('Hello! I would like to enquire about mehndi booking.');
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 999,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(37,211,102,0.45)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 22px rgba(37,211,102,0.55)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(37,211,102,0.45)';
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.504L4 29l7.697-1.796A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10S21.523 25 16 25a10.94 10.94 0 01-5.527-1.492l-.393-.23-4.572 1.066 1.098-4.46-.252-.4A10.94 10.94 0 016 15c0-5.523 4.477-10 10-10z"
          fill="white"
        />
        <path
          d="M12.5 10.5c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.2 2.8 4.3 6.8 5.9 3.4 1.3 4 1.1 4.7 1 .7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.7-.5-.3-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-.9 1.2-1.1 1.4-.2.2-.4.2-.7.1-.3-.1-1.4-.5-2.7-1.6-1-.9-1.7-2-1.9-2.3-.2-.4 0-.6.1-.8.2-.2.4-.4.5-.6.1-.2.2-.4.3-.6.1-.2 0-.5-.1-.7-.2-.2-.8-2-1.1-2.7z"
          fill="white"
        />
      </svg>
    </a>
  );
}
