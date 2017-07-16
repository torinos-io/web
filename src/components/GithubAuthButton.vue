<template lang='pug'>
a.github-auth-button(:href="this.$store.state.auth.authUrl") GITHUB AUTH
</template>

<script>
export default {
  name: 'github-auth-button',
  beforeMount() {
    this.$store.dispatch('getAuthUrl');
  },
};
</script>

<style lang='scss'>
@import 'src/styles/base';

.github-auth-button {
  border: 1px solid $orange1;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  color: $orange1;
  text-decoration: none;

  &:focus {
    outline: none;
  }
}
</style>
