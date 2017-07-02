<template lang='pug'>
  .side-menu
    ul.side-menu-list
      router-link.side-menu-list-item(
        v-for="(link, index) in links"
        :to="link.to"
        tag="li"
        key="index"
      ) {{ link.text }}
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
