import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection(
    'blog',
    ({ data }) => !data.draft
  );

  return rss({
    title: 'Meu Blog',
    description: 'Ideias, histórias e conhecimento.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/artigos/${post.id}/`
    }))
  });
}