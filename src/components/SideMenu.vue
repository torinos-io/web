<template lang='pug'>
  .side-menu
    ul.side-menu-list
      li.side-menu-list-item(v-for="link in links")
        router-link(:to="link.to") {{ link.text }}
</template>

<script>
export default {
  name: 'side-menu',
  data() {
    return {
      links: [
        { text: 'Something', to: '#' },
        { text: 'Like', to: '#' },
        { text: 'Navigation', to: '#' },
        { text: 'Menu', to: '#' },
        { text: 'Items', to: '#' },
      ],
    };
  },
};
</script>

<style lang='scss'>
@import 'src/styles/base';

.side-menu {
  &-list {
    display: flex;
    flex-direction: column;

    &-item {
      margin: 10px 0 8px 32px;

      a {
        color: $orange1;
        text-decoration: none;
      }
    }
  }
}
</style>
