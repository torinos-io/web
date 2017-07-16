<template lang='pug'>
section.project
  template(v-if="this.$store.state.auth.accessToken")
    p Signed in
    button(@click="signOut") Sign out
  github-auth-button(v-else)
</template>

<script>
import GithubAuthButton from './GithubAuthButton';

export default {
  name: 'project',
  components: { GithubAuthButton },
  methods: {
    signOut() {
      this.$store.dispatch('clearAccessToken');
    },
  },
  beforeMount() {
    this.$store.dispatch('loadAccessToken');
  },
};
</script>

<style lang='scss'>
@import 'src/styles/base';

.project {
  width: 640px;
  margin: auto;

  &-lede {
    width: 600px;
    font-size: 18px;
    font-weight: 300;
    text-align: left;
    border-bottom: 1px solid $orange1;
    margin: auto;
    padding-bottom: 8px;

    &-bold {
      font-size: 32px;
      padding-left: 32px;
    }
  }
}
</style>
