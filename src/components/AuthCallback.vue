<template lang='pug'>
section.auth-callback
  h3 Redirecting ...
</template>

<script>
export default {
  name: 'auth-callback',
  mounted() {
    if (this.$route.query && this.$route.query.code) {
      const code = this.$route.query.code;

      this.$store.dispatch('sendAuthorizationCode', code);
    }
  },
};
</script>

<style lang='scss'>

</style>
