export default function manifest() {
  return {
    name: 'Deepak Das Portfolio',
    short_name: 'Deepak Das',
    description: 'Full Stack Developer from Kerala, India specializing in Flutter, Django, AWS, Firebase and scalable web and mobile applications.',
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
