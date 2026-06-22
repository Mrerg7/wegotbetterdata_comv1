import { defineCollection, z } from 'astro:content';

const siteCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
  }),
});

export const collections = {
  site: siteCollection,
};
