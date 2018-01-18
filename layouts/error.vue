<template>
  <div id="app">
    <navbar/>

    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>Something went wrong</h1>
    <div>Well, that's awkward. <nuxt-link to="/">Back to home</nuxt-link></div>

    <foot/>
  </div>
</template>

<script>
  import Foot from '@/components/foot';
  import Navbar from '@/components/navbar';

  export default {
    name: 'error',
    layout: 'default',
    props: [
      'error',
    ],
    components: {
      Foot,
      Navbar,
    },
    head() {
      return {
        title: 'Merp',
        titleTemplate: '%s – Tom Meagher',
      }
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
  a {
    color: color(black);
    text-decoration-skip: ink;
    &:hover { color: color(green); }
  }
</style>
