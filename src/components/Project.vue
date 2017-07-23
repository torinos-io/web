<template lang='pug'>
section.project
</template>

<script>
export default {
  name: 'project',
  beforeMount() {
    this.$store.dispatch('loadAccessToken');
  },
  mounted() {
    if (this.$store.state.auth.accessToken) {
      this.$store.dispatch('getCurrentUser', this.$store.state.auth.accessToken);
    }
  },
};
</script>

<style lang='scss'>
@import 'src/styles/base';

.project {
  width: 640px;
  margin: auto;

  &-button {
    border: 1px solid $orange1;
    border-radius: 4px;
    padding: 8px;
    font-size: 12px;
    font-family: inherit;
    color: $orange1;
    background-color: inherit;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }
}
</style>
