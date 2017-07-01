<template lang="pug">
  .hello
    h1 {{ msg }}
    h2 Essential Links
    ul
      li(v-for="essential in essentials")
        a(
          href="essential.link"
          target="_blank"
          rel="noopener noreferrer"
        ) {{ essential.text }}
    h2 Ecosystem
    ul
      li(v-for="ecosystem in ecosystems")
        a(
          href="ecosystem.link"
          target="_blank"
          rel="noopener noreferrer"
        ) {{ ecosystem.text }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      essentials: [
        { link: 'https://vuejs.org', text: 'Core Docs' },
        { link: 'https://forum.vuejs.org', text: 'Forum' },
        { link: 'https://gitter.im/vuejs/vue', text: 'Gitter Chat' },
        { link: 'https://twitter.com/vuejs', text: 'Twitter' },
        { link: 'http://vuejs-templates.github.io/webpack/', text: 'Docs for This Template' },
      ],
      ecosystems: [
        { link: 'http://router.vuejs.org/', text: 'vue-router' },
        { link: 'http://vuex.vuejs.org/', text: 'vuex' },
        { link: 'http://vue-loader.vuejs.org/', text: 'vue-loader' },
        { link: 'https://github.com/vuejs/awesome-vue', text: 'awesome-vue' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 10px;

    a {
      color: #35495E;
    }
  }
}
</style>
