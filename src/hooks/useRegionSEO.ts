import { useEffect } from 'react';
import { useRegion } from '@/context/RegionContext';

function setMetaContent(selector: string, content: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute('content', content);
}

export function useRegionSEO() {
  const region = useRegion();

  useEffect(() => {
    const title = `COMRADE | Software Development Company in ${region.countryName}`;
    const description = `COMRADE delivers enterprise software, ERP, web and mobile app development, CRM solutions, penetration testing, and digital marketing to businesses in ${region.countryName}. Serving clients since 1990 from our ${region.cityLine} office.`;

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        'href',
        `https://autoexperts6000-ui.github.io/comrade/${region.key}/`,
      );
    }
  }, [region]);
}
