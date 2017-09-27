import {shallow} from 'vue-test-utils';
import Hello from '../Hello';

describe('Hello.vue', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(Hello);

    // then
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('h1', () => {
    it('should contain default message', () => {
      // when
      const wrapper = shallow(Hello);

      // then
      const title = wrapper.find('h1');
      expect(title.text()).toContain('Welcome'); // default
    });

    it('should update when msg data is changed', () => {
      // when
      const wrapper = shallow(Hello);

      // then
      const title = wrapper.find('h1');
      wrapper.setData({msg: 'kikoo'});
      expect(title.text()).toContain('kikoo');
    });

    it('should contain name in props', () => {
      // given
      const props = {name: 'fake name'};

      // when
      const wrapper = shallow(Hello, {propsData: props});

      // then
      const title = wrapper.find('h1');
      expect(title.text()).toContain('fake name');
    });
  });
});
