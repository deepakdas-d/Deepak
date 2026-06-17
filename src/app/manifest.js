export default function manifest() {
  return {
    name: 'Deepak Das — Developer Portfolio',
    short_name: 'Deepak Das',
    description: 'Flutter & Full Stack Developer from Palakkad, Kerala. Specializing in Flutter, React, Node.js, Python, DevOps and scalable web and mobile applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
  }
}
