import {shallow} from 'vue-test-utils';
import Hello from '../Hello';

describe('Hello.vue', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(Hello);

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('h1', () => {
    it('should contain default message', () => {
      // when
      const wrapper = shallow(Hello);

      // then
      const title = wrapper.find('h1');
      expect(title.text()).toContain('Welcome');
    });

    it('should update h1 title when message data is changed', () => {
      // given
      const wrapper = shallow(Hello);

      // when
      wrapper.setData({message: 'world'});

      // then
      const title = wrapper.find('h1');
      expect(title.text()).toContain('world');
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
