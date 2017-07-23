<template lang='pug'>
section.project
  button.project-button.project-sign-out(
    @click="signOut"
    v-if="this.$store.state.auth.accessToken"
  ) Sign out
  github-auth-button.project-button.project-sign-in(v-else)
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
    color: $orange1;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }
}
</style>
