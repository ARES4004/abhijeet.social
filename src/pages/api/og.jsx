import { ImageResponse } from 'next/og'

export const config = { runtime: 'edge' }

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#FAFAF7',
          color: '#0B0B0F',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#6b6b73',
          }}
        >
          <span>AK · NT — MMXXVI</span>
          <span>NEW DELHI</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'serif',
          }}
        >
          <div
            style={{
              fontSize: 180,
              lineHeight: 0.95,
              letterSpacing: '-0.035em',
            }}
          >
            Abhijeet
          </div>
          <div
            style={{
              fontSize: 180,
              lineHeight: 0.95,
              letterSpacing: '-0.035em',
              fontStyle: 'italic',
            }}
          >
            Kumar.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 28,
            color: '#1a1a22',
          }}
        >
          <span style={{ maxWidth: 700 }}>
            Cofounder &amp; CEO, Ninana Technologies.
          </span>
          <span style={{ color: '#3B5BFF', fontWeight: 500 }}>
            abhijeet.social
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
