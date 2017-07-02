import Vue from 'vue';
import router from '@/router';
import SideMenu from '@/components/SideMenu';

describe('SideMenu.vue', () => {
  it('has the correct default data for links', () => {
    expect(SideMenu.data).to.be.a('function');
    const defaultData = SideMenu.data();
    expect(defaultData.links.length).to.equal(5);
  });

  it('renders the 5 items', () => {
    const Constructor = Vue.extend(SideMenu);
    const vm = new Constructor({ router }).$mount();
    expect(vm.$el.querySelectorAll('.side-menu-list-item').length).to.equal(5);
  });
});
