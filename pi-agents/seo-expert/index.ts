// SEO Expert Agent (Tier 3)
// Mejora estructura HTML y genera sitemap/robots.

export interface SeoExpertInput {
  htmlPath: string;
  brief: string;
}

export interface SeoExpertOutput {
  sitemapPath: string;
  robotsPath: string;
}

export async function runSeoExpert(input: SeoExpertInput): Promise<SeoExpertOutput> {
  // TODO: generar archivos SEO
  return {
    sitemapPath: 'output/landing/sitemap.xml',
    robotsPath: 'output/landing/robots.txt',
  };
}
