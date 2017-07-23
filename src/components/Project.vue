<template lang='pug'>
section.project
  github-auth-button.project-button.project-sign-in(v-if="!isSignedIn")
</template>

<script>
import GithubAuthButton from './GithubAuthButton';

export default {
  name: 'project',
  components: { GithubAuthButton },
  computed: {
    isSignedIn() {
      const accessToken = this.$store.state.auth.accessToken;
      return accessToken !== '' && accessToken != null;
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
