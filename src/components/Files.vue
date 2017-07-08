<template lang='pug'>
input(
  type="file"
  multiple
  @change="_onFilesChange"
)
</template>

<script>
export default {
  name: 'files',
  props: {
    onFilesChange: {
      type: Function,
    },
  },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    _onFilesChange: function onFilesChange(event) {
      this.files = [];
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) {
        return;
      }

      for (let i = 0; i < files.length; i++) {
        this.files.push(files[i]);
      }

      if (this.onFilesChange) {
        this.onFilesChange(this.files);
      }
    },
  },
};
</script>

<style lang='scss'>

</style>
