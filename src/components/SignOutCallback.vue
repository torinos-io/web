<template lang='pug'>
section.auth-callback
  h3 Redirecting ...
</template>

<script>
import router from '@/router';

export default {
  name: 'auth-callback',
  mounted() {
    this.$store.dispatch('clearAccessToken');

    // Delay to redirect.
    setTimeout(() => {
      router.push({ name: 'root' });
    }, 1000);
  },
};
</script>

<style lang='scss'>

</style>
