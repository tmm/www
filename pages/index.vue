<template>
  <section>
    <header class="t-header">
      <h1 class="t-header__intro">
        I'm Tom Meagher (MAH-hur):<br>a programmer, writer, and walk enthusiast.
      </h1>
    </header>

    <blog-list
      :posts="posts.slice(0,6)"
    />

    <ul class="t-list">
      <li
        v-for="link in links"
        :key="link.name"
        class="t-list-item"
      >
        <a
          :href="link.href"
          class="t-list-item__link"
        >
          <span class="t-list-item__title">{{ link.name }}</span>
          <time class="t-list-item__description">{{ link.username }}</time>
        </a>
      </li>
    </ul>
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
        'links',
        'posts',
      ]),
    },
    head() {
      return {
        title: 'Tom Meagher, Programmer',
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/functions';
  @import '../assets/styles/mixins';

  .t-header {
    line-height: 1.35;
    margin-bottom: 2rem;
    &:after {
      background-color: color(black);
      content: '';
      display: block;
      height: 1px;
      margin-top: 1.5rem;
      width: 1rem;
    }
  }
  .t-header__intro {
    font: {
      size: 1.5rem;
      weight: 700;
    }
    margin: 0;
  }
  .t-list {
    list-style-type: none;
    margin: {
      bottom: 2rem;
      top: 0;
    }
    padding: 0;
  }
  .t-list-item {
    @include flex-row;
    border-bottom: {
      color: color(black);
      style: solid;
      width: 1px;
    }
  }
  .t-list-item__link {
    @include flex-row;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;
    padding: {
      bottom: .2rem;
      top: .85rem;
    }
    text-decoration: none;
    transition: {
      property: padding-left;
      duration: .25s;
    }
    width: 100%;
    &:hover { padding-left: .5rem }
  }
  .t-list-item__title {
    font: {
      size: .9rem;
      weight: 600;
    }
  }
  .t-list-item__description {
    color: color(gray);
    font-size: .85rem;
  }
</style>
