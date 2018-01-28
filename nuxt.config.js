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
    ],
    link: [
      { rel: 'icon', href: '/favicons/favicon.ico' },
      { rel: 'icon', sizes: '512x512', href: '/favicons/icon-512.png' },
      { rel: 'icon', sizes: '192x192', href: '/favicons/icon-192.png' },
      { rel: 'icon', sizes: '144x144', href: '/favicons/icon-144.png' },
      { rel: 'icon', sizes: '96x96', href: '/favicons/icon-96.png' },
      { rel: 'icon', sizes: '72x72', href: '/favicons/icon-72.png' },
      { rel: 'apple-touch-icon', sizes: '512x512', href: '/favicons/icon-512.png' },
      { rel: 'apple-touch-icon', sizes: '192x192', href: '/favicons/icon-192.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/icon-144.png' },
      { rel: 'apple-touch-icon', sizes: '96x96', href: '/favicons/icon-96.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/icon-72.png' },
    ],
  },
  loading: { color: '#00c266' },
  plugins: [
    { src: '@/plugins/ga.js', ssr: false },
  ],
  router: { mode: 'history' },
};
