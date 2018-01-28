<template>
  <nav class="navbar">
    <div class="navbar__left">
      <nuxt-link to="/" class="navbar__link logo" >Tom Meagher</nuxt-link>
    </div>
    <div class="navbar__right">
      <nuxt-link to="/blog/" class="navbar__link">Blog</nuxt-link>
      <a href="https://twitter.com/tomfme" class="navbar__link">Twitter</a>
      <a href="mailto:tom@meagher.co?Hi there!" class="navbar__link">Email</a>
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
      weight: 400;
    }
    margin-right: 1rem;
    text-decoration: none;
    &:last-child { margin-right: 0; }
    &.logo {
      color: color(green);
      font-weight: bold;
    }
  }
</style>
