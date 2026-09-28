import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const siteCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
  }),
});

const insightsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['valuation', 'trends', 'case-study', 'seo']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  site: siteCollection,
  insights: insightsCollection,
};
