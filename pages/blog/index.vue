<template>
  <section>
    <header class="t-blog">
      <h1 class="t-blog__header">Archive</h1>
    </header>

    <blog-list
      :posts="posts"
    />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import BlogList from '@/components/blog-list'

  export default {
    name: 'Blog',
    components: {
      BlogList,
    },
    computed: {
      ...mapGetters([
        'posts',
      ]),
    },
    head() {
      return {
        title: 'Blog',
        titleTemplate: '%s ~ Tom Meagher',
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';
  @import '../../assets/styles/functions';
  @import '../../assets/styles/mixins';

  .t-blog__header {
    font: {
      size: 1rem;
      weight: bold;
    }
    margin: {
      bottom: 1.5rem;
      top: 0;
    }
  }
</style>
