import Vue from 'vue';
import Project from '@/components/Project';

describe('Project.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Project);
    new Constructor().$mount();
  });
});
