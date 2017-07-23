<template lang='pug'>
section.project
  template(v-if="this.$store.state.auth.accessToken")
    p Signed in
    button(@click="signOut") Sign out
  //- github-auth-button(v-else)
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
.project {
  width: 640px;
  margin: auto;
}
</style>
