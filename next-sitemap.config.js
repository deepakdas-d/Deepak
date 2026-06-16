/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.deepakdas.online',
  generateRobotsTxt: false, // We created a custom robots.txt
  sitemapSize: 7000,
  exclude: ['/private/*'],
};
