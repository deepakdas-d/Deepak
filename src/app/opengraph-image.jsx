import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Deepak Das | Full Stack Developer | Flutter, Django & AWS';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #171717)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
          padding: '80px',
        }}
      >
        {/* Left Side Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flex: 1,
            paddingRight: '40px',
          }}
        >
          <div
            style={{
              color: '#ea580c',
              fontSize: '28px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '10px',
            }}
          >
            Portfolio
          </div>
          <h1
            style={{
              fontSize: '80px',
              fontWeight: 800,
              margin: '0',
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            Deepak Das
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#a3a3a3',
              marginTop: '20px',
              marginBottom: '50px',
              fontWeight: 400,
            }}
          >
            Full Stack Developer based in Kerala, India
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            {['Flutter', 'Django', 'AWS', 'Firebase'].map((tech) => (
              <div
                key={tech}
                style={{
                  background: 'rgba(234, 88, 12, 0.1)',
                  border: '2px solid rgba(234, 88, 12, 0.5)',
                  color: '#ea580c',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  display: 'flex',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div
          style={{
            display: 'flex',
            width: '400px',
            height: '400px',
            borderRadius: '200px',
            overflow: 'hidden',
            border: '8px solid #ea580c',
            boxShadow: '0 0 40px rgba(234, 88, 12, 0.3)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.deepakdas.online/images/deepak.jpeg"
            alt="Deepak Das"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
