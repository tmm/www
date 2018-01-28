<template>
  <ul class="t-list">
    <li
      v-for="post in posts"
      :key="post.slug"
      class="t-list-item"
    >
      <nuxt-link
        :to="post.url"
        class="t-list-item__link"
      >
        <span class="t-list-item__title">{{ post.title }}</span>
        <time
          :datetime="post.date"
          class="t-list-item__time"
        >
          {{post.date | formatDate}}
        </time>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'BlogList',
    props: {
      posts: { type: Array, required: true },
    },
    filters: {
      formatDate: (any) => {
        const date = new Date(any);
        const month = date.getMonth() + 1;
        return `${month < 10 ? 0 : ''}${month}/${date.getFullYear()}`
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/functions';
  @import '../assets/styles/mixins';

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
      color: color(gray, light);
      style: solid;
      width: 1px;
    }
  }
  .t-list-item__link {
    @include flex-row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: {
      bottom: .7rem;
      top: .7rem;
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
      weight: 500;
    }
  }
  .t-list-item__time {
    color: color(gray);
    font-size: .75rem;
  }
</style>
