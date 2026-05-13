import type { MetadataRoute } from "next";
import { APP_DOMAIN, SITE_URLS } from "@/global";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${APP_DOMAIN}`;
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}${SITE_URLS.home}`,
      lastModified: now
    },
    {
      url: `${baseUrl}${SITE_URLS.about}`,
      lastModified: now
    },
    {
      url: `${baseUrl}${SITE_URLS.contact}`,
      lastModified: now
    },
    {
      url: `${baseUrl}${SITE_URLS.reviews}`,
      lastModified: now
    },
    {
      url: `${baseUrl}${SITE_URLS.privacy}`,
      lastModified: now
    },
    {
      url: `${baseUrl}${SITE_URLS.terms}`,
      lastModified: now
    }
  ];

  return staticRoutes;
}