import Vue from 'vue';
import router from '@/router';
import SideMenu from '@/components/SideMenu';

describe('SideMenu.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SideMenu);
    new Constructor({ router }).$mount();
  });
});
