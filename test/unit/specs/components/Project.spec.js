import Vue from 'vue';
import Project from '@/components/Project';

describe('Project.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Project);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.project h2.project-lede').textContent).to.equal(
      '4/8 libs ready to swift 4.0!',
    );
  });
});
