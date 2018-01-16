<template>
  <footer class="foot">
    © {{ getYear() }} {{ author.name }}, unless otherwise noted.
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Foot',
    computed: {
      ...mapGetters([
        'author',
      ]),
    },
    methods: {
      getYear: () => (new Date()).getFullYear(),
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/functions';
  @import '../assets/styles/mixins';

  .foot {
    font-size: .8rem;
    margin: {
      bottom: 4rem;
      top: 2rem;
    }
  }
</style>
