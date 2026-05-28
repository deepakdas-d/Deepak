export default function sitemap() {
    const baseUrl = 'https://www.deepakdas.online';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
