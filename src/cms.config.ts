import type { CmsConfig } from "@pandotic/universal-cms/config";

export const cmsConfig: CmsConfig = {
  siteName: "thankbetter",
  siteUrl: "",
  siteDescription: "",
  siteTagline: "",

  primaryEntity: {
    name: "entities",
    singular: "Entity",
    plural: "Entities",
    slugPrefix: "/directory",
  },

  modules: {
    contentPages: true,
    landingPages: true,
    mediaLibrary: true,
    listicles: true,
    brandGuide: true,
    videos: true,
    reviews: true,
    ratings: true,
    affiliates: true,
    clickAnalytics: true,
    merchants: true,
    seo: true,
    redirects: true,
    linkChecker: true,
    internalLinks: true,
    imagesSeo: true,
    forms: true,
    ctaManager: true,
    resourcesPage: true,
    errorLog: true,
    activityLog: true,
    bulkImport: true,
    apiUsage: true,
  } as CmsConfig["modules"],

  roles: ["admin", "editor"],

  adminNav: [
    {
      group: "Content",
      items: [
        { label: "Pages", href: "/admin/content-pages", module: "contentPages" },
        { label: "Media", href: "/admin/media", module: "mediaLibrary" },
      ],
    },
  ],

  analytics: {
    availableProviders: ["ga4"],
  },

  storage: {
    mediaBucket: "media",
    maxFileSizeMb: 10,
    allowedMimeTypes: ["image/*", "application/pdf"],
  },
};
