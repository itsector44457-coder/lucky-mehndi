'use client';

import { useState } from 'react';

interface MehndiImageProps {
  src?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  gradient?: string;
}

/**
 * Shows real image if it loads successfully,
 * falls back to gradient placeholder on any error.
 */
export default function MehndiImage({
  src,
  alt,
  className = '',
  style = {},
  gradient,
}: MehndiImageProps) {
  const [failed, setFailed] = useState(false);

  const defaultGradient =
    gradient ?? 'linear-gradient(135deg, #d4b896 0%, #c4a07a 30%, #b8906a 60%, #a07855 100%)';

  if (!src || failed) {
    return (
      <div
        className={`w-full h-full flex items-center justify-center ${className}`}
        style={{ background: defaultGradient, ...style }}
      >
        <svg width="100" height="100" viewBox="0 0 120 120" fill="none" className="opacity-20">
          <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="0.8" fill="none" />
          <circle cx="60" cy="60" r="38" stroke="white" strokeWidth="0.8" fill="none" />
          <circle cx="60" cy="60" r="25" stroke="white" strokeWidth="0.8" fill="none" />
          <circle cx="60" cy="60" r="12" stroke="white" strokeWidth="0.8" fill="none" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx={60 + 32 * Math.cos((angle * Math.PI) / 180)}
              cy={60 + 32 * Math.sin((angle * Math.PI) / 180)}
              rx="6"
              ry="12"
              transform={`rotate(${angle + 90}, ${60 + 32 * Math.cos((angle * Math.PI) / 180)}, ${60 + 32 * Math.sin((angle * Math.PI) / 180)})`}
              stroke="white"
              strokeWidth="0.8"
              fill="none"
            />
          ))}
          <circle cx="60" cy="60" r="4" fill="white" opacity="0.4" />
        </svg>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover ${className}`}
      style={style}
    />
  );
}
