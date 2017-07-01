<template lang="pug">
  #app
    side-menu
    main
      router-view
</template>

<script>
import SideMenu from '@/components/SideMenu';

export default {
  name: 'app',
  components: {
    SideMenu,
  },
};
</script>

<style lang="scss">
// https://necolas.github.io/normalize.css
@import '~normalize.css';
@import 'src/styles/base';

body {
  font-family: Monaco;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $grey1;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;

  span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
}
</style>
