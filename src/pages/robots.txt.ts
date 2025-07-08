export async function GET() {
  return new Response(`User-agent: *
Allow: /
Disallow: /api/
Disallow: /_astro/

Sitemap: https://hafizfarhad.com/sitemap-index.xml

# Cloudflare specific
User-agent: CCBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: GPTBot
Disallow: /`)
}
