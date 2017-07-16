<template lang='pug'>
input(
  type="file"
  multiple
  @change="_handleFilesChange"
  @dragover="_handleDragOver"
)
</template>

<script>
export default {
  name: 'files',
  props: {
    // onFilesChange is fired in _handleFilesChange function. It receive files as an argument.
    onFilesChange: {
      type: Function,
    },
  },
  data() {
    return {
      // files stores the files which are selected or drag'n'drop-ed.
      files: [],
    };
  },
  methods: {
    _handleFilesChange(event) {
      event.stopPropagation();
      event.preventDefault();

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
    _handleDragOver(event) {
      event.stopPropagation();
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
    },
  },
};
</script>

<style lang='scss'>

</style>
