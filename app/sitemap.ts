import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


  return [
    {
      url: "https://precedent.dev",
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `https://precedent.dev/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
