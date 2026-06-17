import { blogPosts } from '../data/blog-posts';

export default function sitemap() {
  const baseUrl = 'https://www.deepakdas.online';

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date('2026-06-17'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-06-17'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2026-06-17'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-06-17'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date('2026-06-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/flutter-chat-app`,
      lastModified: new Date('2026-06-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/webrtc-audio-streaming`,
      lastModified: new Date('2026-06-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/ecommerce-admin-panel`,
      lastModified: new Date('2026-06-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
