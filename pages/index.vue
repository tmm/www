<template>
  <section class="t-home">
    <header class="t-header">
      <p class="t-header__intro"><span>Hello & Welcome.</span> I'm Tom Meagher (MAH-hur): a programmer, blogger, and walk enthusiast.</p>
    </header>
    <p class="t-para">
      Currently, I work at <a href="https://kit.com" target="_blank">kit.com</a>, primarily building for the Web. Most of my projects—including this site—are public on
      <a href="https://github.com/tmm" target="_blank">GitHub</a>.
    </p>
    <p class="t-para">
      I'm always happy to help or point you in the right direction. The best ways to contact me are <a href="https://twitter.com/tofme" target="_blank">Twitter</a> and <a href="mailto:tom@meagher.co?Hi there!">email</a>.
    </p>
    <p class="t-para">
      If you're still looking for more Tom-things, I suggest browsing the <nuxt-link to="/blog/">Archive</nuxt-link>, visiting <a href="https://notational.co" target="_blank">Notational</a>, or taking a look at my <nuxt-link to="/blog/2017/10/08/core-values/">Core Values</nuxt-link>.
    </p>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import BlogList from '@/components/blog-list'

  export default {
    name: 'Index',
    components: {
      BlogList,
    },
    computed: {
      ...mapGetters([
        'author',
        'posts',
      ]),
    },
    head() {
      const meta = [
        {
          hid: 'description',
          name: 'description',
          content: 'I\'m Tom Meagher (MAH-hur): a programmer, blogger, and walk enthusiast.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'tom, tomfme, meagher, code, design, startups, technology, tech, design',
        },
      ];
      return {
        title: 'Code, etc.',
        titleTemplate: '%s ~ Tom Meagher',
        meta,
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/functions';
  @import '../assets/styles/mixins';

  .t-home {
    margin-bottom: 4rem;
  }
  .t-header {
    margin-bottom: 2rem;
  }
  .t-header__intro {
    font: {
      size: 1.15rem;
      weight: 400;
    }
    margin: 0;
    span { font-weight: bold; }
  }
  .t-para {
    font-size: .95rem;
  }
</style>
