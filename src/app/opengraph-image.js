import { ImageResponse } from 'next/og';

// ตั้งค่าขนาดรูป (มาตรฐาน Open Graph)
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      // ดีไซน์รูปด้วย CSS (Flexbox)
      <div
        style={{
          background: 'linear-gradient(to bottom right, #EEF2FF, #F3E8FF)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            padding: '20px 40px',
            borderRadius: '50px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            marginBottom: '40px',
          }}
        >
          <span style={{ fontSize: 60, fontWeight: 'bold', color: '#111' }}>
            MyBrand
          </span>
        </div>
        <div style={{ fontSize: 40, color: '#4B5563', textAlign: 'center', maxWidth: '800px' }}>
          Scalable Software. Cloud & AI Solutions.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}