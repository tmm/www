<template>
  <section>
    <header class="t-favorites">
      <h1>Favorites</h1>
    </header>

    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'favorites',
    head() {
      return {
        title: 'Favorites',
        titleTemplate: '%s – Tom Meagher',
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';
  @import '../../assets/styles/functions';
  @import '../../assets/styles/mixins';

  .t-favorites {
  }
</style>
