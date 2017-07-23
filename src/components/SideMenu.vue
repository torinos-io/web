<template lang='pug'>
.side-menu
  ul.side-menu-list
    template(v-for="(link, index) in links")
      a.side-menu-list-item(
        :href="link.to"
        key="index"
        v-if="link.external"
        v-show="link.show"
      ) {{ link.text }}
      router-link.side-menu-list-item(
        :to="link.to"
        key="index"
        v-else
        v-show="link.show"
      ) {{ link.text }}
</template>

<script>
export default {
  name: 'side-menu',
  computed: {
    isSignedIn() {
      const accessToken = this.$store.state.auth.accessToken;
      return accessToken !== '' && accessToken != null;
    },
    links() {
      return [
        { text: 'Something', to: '#', show: true },
        { text: 'Like', to: '#', show: true },
        { text: 'Navigation', to: '#', show: true },
        { text: 'Menu', to: '#', show: true },
        { text: 'Sign in', to: this.authUrl(), external: true, show: !this.isSignedIn },
        { text: 'Sign out', to: { name: 'signout' }, show: this.isSignedIn },
      ];
    },
  },
  methods: {
    authUrl() {
      if (this.isSignedIn) {
        return null;
      }
      return this.$store.state.auth.authUrl;
    },
  },
  beforeMount() {
    this.$store.dispatch('loadAccessToken');
  },
  mounted() {
    if (!this.isSignedIn) {
      this.$store.dispatch('getAuthUrl');
    }
  },
  updated() {
    if (!this.isSignedIn) {
      this.$store.dispatch('getAuthUrl');
    }
  },
};
</script>

<style lang='scss'>
@import 'src/styles/base';

.side-menu {
  display: inline-block;
  position: fixed;

  &-list {
    display: flex;
    flex-direction: column;

    &-item {
      margin: 10px 0 8px 32px;
      list-style: none;
      color: $orange1;
      cursor: pointer;
    }
  }
}
</style>
