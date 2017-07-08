<template lang='pug'>
section.project
  h2.project-lede
    span.project-lede-bold 4/8 libs
    |  ready to swift 4.0!
  files
</template>

<script>
import Files from './Files';

export default {
  name: 'project',
  components: { Files },
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
