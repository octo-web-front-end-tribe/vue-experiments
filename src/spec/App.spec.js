import {shallow} from 'vue-test-utils';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import App from '../App';

describe('App.vue', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(App);

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });
});
