<template lang='pug'>
a.github-auth-button(:href="this.$store.state.auth.authUrl") GITHUB AUTH
</template>

<script>
export default {
  name: 'github-auth-button',
  beforeMount() {
    this.$store.dispatch('loadAuthUrl');
  },
};
</script>

<style lang='scss'>
.github-auth-button {
  border: none;
  border-radius: 4px;
  width: 100px;
  height: 24px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
</style>
