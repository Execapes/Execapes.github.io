'use strict';

// Supply the data schema consumed by this theme's InsightSearch.js.
const { stripHTML } = require('hexo-util');

hexo.extend.generator.register('sakura-search-index', function (locals) {
  function taxonomy(items) {
    return items ? items.toArray().map(item => ({
      name: item.name,
      slug: item.slug,
      permalink: item.permalink
    })) : [];
  }

  function entries(items) {
    return items.toArray()
      .filter(item => item.published !== false && item.indexing !== false)
      .map(item => ({
        title: item.title || '',
        path: item.path,
        text: stripHTML(item.content || '').replace(/\s+/g, ' ').trim(),
        tags: taxonomy(item.tags),
        categories: taxonomy(item.categories)
      }));
  }

  return {
    path: 'content.json',
    data: JSON.stringify({ posts: entries(locals.posts), pages: entries(locals.pages) })
  };
});
