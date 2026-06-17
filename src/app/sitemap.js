export default function sitemap() {
  const baseUrl = 'https://www.deepakdas.online';
  
  const routes = [
    '',
    '/about',
    '/projects',
    '/resume',
    '/projects/flutter-chat-app',
    '/projects/webrtc-audio-streaming',
    '/projects/ecommerce-admin-panel',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
