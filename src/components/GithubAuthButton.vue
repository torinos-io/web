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

</style>
