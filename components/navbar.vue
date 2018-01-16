<template>
  <nav class="navbar">
    <div class="navbar__left">
      <nuxt-link to="/" class="navbar__link" >Tom Meagher, Programmer</nuxt-link>
    </div>
    <div class="navbar__right">
      <nuxt-link to="/blog/" class="navbar__link">Blog</nuxt-link>
      <nuxt-link to="/favorites/" class="navbar__link">Favorites</nuxt-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/functions';
  @import '../assets/styles/mixins';

  .navbar {
    @include flex-row;
    align-items: center;
    border-bottom: {
      color: color(black);
      style: solid;
      width: 1px;
    }
    justify-content: space-between;
    margin-bottom: 2rem;
    padding-bottom: .35rem;
  }
  .navbar__left,
  .navbar__right {
    @include flex-row;
  }
  .navbar__link {
    font: {
      size: .9rem;
      weight: 500;
    }
    margin-right: 1rem;
    text-decoration: none;
    &:last-child { margin-right: 0; }
  }
</style>
