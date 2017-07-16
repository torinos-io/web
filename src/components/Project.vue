<template lang='pug'>
section.project
</template>

<script>
export default {
  name: 'project',
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
