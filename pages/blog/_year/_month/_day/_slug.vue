<template>
  <section class="post">
    <template v-if="activePost">
      <article class="post__article">
        <header class="post__header">
          <h1 class="post__title">{{activePost.title}}</h1>
          <time
            :datetime="activePost.date"
            class="post__date"
          >
            {{activePost.date | formatDate}}
          </time>
        </header>

        <div
          v-html="body"
        >
        </div>
      </article>

      <vue-disqus
        v-bind="disqus"
      />
    </template>

    <div v-else>
      <h1 class="error__header">Page not found</h1>
      <div>Well, that's awkward. <nuxt-link to="/">Back to home</nuxt-link></div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Markdown from 'markdown-it';
  import MarkdownFootnote from 'markdown-it-footnote';
  import MarkdownPrism from 'markdown-it-prism';
  import Prism from 'prismjs';
  import VueDisqus from 'vue-disqus/VueDisqus.vue';

  const helloName = (name = "World") => {
    return `Hello, ${name}!`
  };
  helloName();

  export default {
    components: {
      'vue-disqus': VueDisqus,
    },
    fetch({ store, params }) {
      const slug = Object.values(params).join('-');
      store.dispatch('loadPost', slug);
    },
    computed: {
      ...mapGetters([
        'activePost',
      ]),
      marked() {
        const marked = new Markdown ({
          html: true,
          linkify: true,
          breaks: true,
          typographer:  true,
          quotes: '“”‘’',
          highlight: (code, lang) =>
            Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup),
        });

        const plugins = [
          MarkdownFootnote,
          MarkdownPrism,
        ];
        plugins.forEach(plugin => marked.use(plugin));

        return marked;
      },
      body() {
        return this.marked.render(this.activePost.body);
      },
      disqus() {
        /* eslint-disable camelcase */
        const disqus = {
          url: process.env.disqus.url,
          shortname: process.env.disqus.shortname,
        };
        return {
          ...disqus,
          identifier: this.activePost.url,
          title: this.activePost.title,
          url: `${(disqus.url || '').replace(/\/$/, '')}${this.$route.path}`
        }
        /* eslint-enable camelcase */
      },
    },
    filters: {
      formatDate: (dateString) => {
        const date = new Date(dateString);
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ];
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
      },
    },
    head() {
      if (!this.activePost) {
        return {
          title: 'Not Found',
          titleTemplate: '%s ~ Tom Meagher',
        };
      }
      const description = this.activePost.description || '';
      const keywords = this.activePost.keywords ? this.activePost.keywords : [];
      const meta = [
        { hid: 'description', name: 'description', content: description },
        { hid: 'keywords', name: 'keywords', content: keywords.join(', ') },
      ];
      const twitter = {
        card: 'summary',
        title: this.activePost.title,
        description: description,
        url: this.$route.path,
      };
      const twitterMeta = Object
        .keys(twitter)
        .map(key => ({ hid: `twitter:${key}`, name: `twitter:${key}`, content: twitter[key] }));
      const og = {
        type: 'article',
        title: this.activePost.title,
        description: description,
        url: this.$route.path,
      };
      const ogMeta = Object
        .keys(og)
        .map(key => ({ hid: `og:${key}`, name: `og:${key}`, content: og[key] }));

      return {
        title: this.activePost.title,
        titleTemplate: '%s ~ Tom Meagher',
        meta: [].concat(meta, twitterMeta, ogMeta),
      };
    },
  };
</script>

<style lang="scss">
  @import '../../../../../assets/styles/variables';
  @import '../../../../../assets/styles/functions';
  @import '../../../../../assets/styles/mixins';
  @import '../../../../../assets/styles/code';

  .post__article {
    margin-bottom: 5rem;
  }
  .post__header {
    margin-bottom: 2rem;
  }
  .post__title {
    font: {
      size: 1rem;
      weight: bold;
    }
    margin: {
      bottom: .25rem;
      top: 0;
    }
  }
  .post__date {
    font-size: .8rem;
  }
  .post {
    blockquote {
      border-left: {
        color: color(green);
        style: solid;
        width: 2px;
      }
      font-style: italic;
      margin: {
        bottom: 1.5rem;
        left: 0;
        top: 1.5rem;
      }
      padding-left: 1.25rem;
    }
    ol,
    ul {
      line-height: 1.5;
    }
    img,
    video {
      display: block;
      margin: {
        bottom: 1.5rem;
        left: auto;
        right: auto;
        top: 1.5rem;
      }
      max-width: 100%;
    }
    sup {
      font-style: normal;
      margin-right: 1rem;
      position: relative;
      vertical-align: baseline;
      a {
        background-image: none !important;
        border-bottom: 0;
        color: color(black, serif);
        font: {
          family: $sans;
          size: .8rem;
        }
        position: absolute;
      }
    }
    hr {
      @include flex-row;
      @include flex-center;
      border: 0;
      height: 0;
      margin: {
        bottom: 2.75rem;
        top: 2.15rem;
      }
      overflow: visible;
      text-align: center;

      &:before {
        content: '...';
        color: rgba(0,0,0,.68);
        font: {
          size: 1.67rem;
          weight: 400;
        }
        letter-spacing: 1rem;
        margin-left: 1rem;
        position: relative;
        top: 0;
      }
    }
    table {
      border: {
        color: color(gray, light);
        style: solid;
        width: 1px;
      }
      border-collapse: collapse;
      border-spacing: 0;
      margin: {
        bottom: 1.5rem;
        top: 1.5rem;
      }
      max-width: 100%;
      min-height: .01%;
      overflow-x: auto;
      width: 100%;

      th,
      td {
        padding: {
          bottom: 0.6rem;
          left: 1rem;
          right: 1rem;
          top: 0.6rem;
        }
      }
      th {
        border-left: {
          color: color(gray, light);
          style: solid;
          width: 1px;
        }
        font-weight: 600;
        text-align: left;
      }
      td {
        border: {
          color: color(gray, light);
          style: solid;
          width: 1px;
        }
        border-bottom: 0;
        border-right: 0;
        text-align: left;
      }
    }
    ul,
    ol { padding-left: 1rem; }
    .footnotes-sep {
      border: {
        color: color(black);
        style: solid;
        width: 1px;
      }
      margin: {
        bottom: 3rem;
        top: 3rem;
      }
      max-width: 1.5rem;
      &:before { display: none; };
    }
  }
  .error__header {
    font: {
      size: 1rem;
      weight: bold;
    }
  }
</style>
