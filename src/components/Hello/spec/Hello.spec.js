import {shallow} from 'avoriaz';
import Hello from '../Hello';

describe('Bar.vue', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(Hello);

    // then
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('h1', () => {
    it('should contain one h1 element', () => {
      // when
      const wrapper = shallow(Hello);

      // then
      let title = wrapper.find('h1');
      expect(title.length).toBe(1);
    });

    it('should contain default message', () => {
      // when
      const wrapper = shallow(Hello);

      // then
      const title = wrapper.find('h1');
      expect(title[0].text()).toContain('Welcome'); // default
    });

    it('should update when msg data is changed', () => {
      // when
      const wrapper = shallow(Hello);

      // then
      const title = wrapper.find('h1');
      wrapper.setData({msg: 'kikoo'});
      expect(title[0].text()).toContain('kikoo');
    });

    it('should contain name in props', () => {
      // when
      const wrapper = shallow(Hello, {propsData: {name: 'fake name'}});

      // then
      const title = wrapper.find('h1');
      expect(title.length).toBe(1);

      expect(title[0].text()).toContain('Welcome'); // default
      expect(title[0].text()).toContain('fake name');
    });
  });
});
