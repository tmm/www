<template>
  <div id="app">
    <navbar/>
    <nuxt/>
    <foot/>
  </div>
</template>

<script>
  import Foot from '@/components/foot';
  import Navbar from '@/components/navbar';

  export default {
    name: 'default',
    components: {
      Foot,
      Navbar,
    },
  };
</script>

<style lang="scss">
  @import '../assets/styles/variables';
  @import '../assets/styles/functions';
  @import '../assets/styles/mixins';
  @import '../assets/styles/fonts';

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font: {
      family: $sans;
      size: $root-font-size;
    }
    height: 100vh;
    text-rendering: optimizeLegibility;
    width: 100vw;
  }
  body {
    margin: 0;
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: {
      bottom: 1.35rem;
      top: 0;
    }
  }
  a {
    color: color(black);
    text-decoration-skip: ink;
    &:hover { color: color(green); }
  }
  #app {
    margin: {
      bottom: 1rem;
      left: auto;
      right: auto;
      top: 1.25rem;
    }
    max-width: $root-container-width;
    padding: {
      left: 1rem;
      right: 1rem;
    }
  }
</style>
