module.exports = {
  build: {
    vendor: [
      'markdown-it',
      'markdown-it-footnote',
      'markdown-it-prism',
      'prismjs',
      'vue-disqus/VueDisqus.vue',
    ],
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
      // Parse markdown front matter
      config.module.rules.push({
        test: /\.md$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'json-loader' },
          { loader: 'front-matter-loader' },
        ],
      });
    },
  },
  env: {
    disqus: {
      shortname: 'meagher',
      url: 'https://meagher.co',
    },
  },
  generate: {
    routes() {
      const fs = require('fs');
      const POSTS_DIR = './blog';
      const files = fs.readdirSync(POSTS_DIR);
      const getPostUrl = (fileName) => {
        // Regex https://regexr.com/3j04b
        const slugRegex = /^(\d+)-(\d+)-(\d+)-(.*)(?:\.md)$/g;
        const postPath = slugRegex
          .exec(fileName)
          .slice(1, 5)
          .join('/');
        return `/blog/${postPath}/`;
      };
      return files.map(fileName => getPostUrl(fileName));
    },
  },
  head: {
    title: 'Tom Meagher',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This is my site. There are many like it, but this one is mine.',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/icon-512.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/icon-512.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/icon-192.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/icon-192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '144x144',
        href: '/icon-144.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '144x144',
        href: '/icon-144.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/icon-96.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/icon-96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '72x72',
        href: '/icon-72.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '72x72',
        href: '/icon-72.png',
      },
      {
        rel: 'icon',
        type: 'image.png',
        sizes: '48x48',
        href: '/icon-48.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image.png',
        sizes: '48x48',
        href: '/icon-48.png',
      },
    ],
  },
  loading: { color: '#00c266' },
  plugins: [
    { src: '@/plugins/ga.js', ssr: false },
  ],
  router: { mode: 'history' },
};
