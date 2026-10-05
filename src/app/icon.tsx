import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
        <div style={{
            width: 50, height: 50, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
            background: '#0047FF', // Azul Cobalto
          }}
        >
          <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, fontFamily: 'sans-serif' }}>N</div>
          <div style={{
              position: 'absolute', bottom: -2, right: -2, width: 14, height: 14, backgroundColor: '#D4FF00', borderRadius: '50%', border: '3px solid #FFFFFF',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
