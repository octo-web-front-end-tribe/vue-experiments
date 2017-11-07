import {shallow, mount} from 'vue-test-utils';
import axios from 'axios';

import ButtonCounter from '../ButtonCounter';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('ButtonCounter.vue', () => {

  beforeEach(() => {
    axios.get.mockClear();
    axios.get.mockReturnValue(Promise.resolve({}));
  });

  it('should match snapshot', () => {
    // when
    const wrapper = shallow(ButtonCounter);

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should initialize counter to 0', () => {
    // when
    const wrapper = shallow(ButtonCounter);

    // then
    const button = wrapper.find('.test');
    expect(button.text()).toEqual('0');
  });

  it('should set counter to API value on component creation', async () => {
    // given
    const response = {
      data: 11,
    };
    axios.get.mockReturnValue(Promise.resolve(response));

    // when
    const wrapper = shallow(ButtonCounter);
    await wrapper.vm.$nextTick();

    // then
    expect(axios.get).toHaveBeenCalledWith('http://www.mocky.io/v2/5a01affc300000da45fac0cf');
    const button = wrapper.find('.test');
    expect(button.text()).toEqual('11');
  });

  it('should increment counter on click', () => {
    // given
    const wrapper = shallow(ButtonCounter);
    const button = wrapper.find('.test');

    // when
    button.trigger('click');

    // then
    expect(button.text()).toEqual('1');
  });

  it('should emit an event increment on click', () => {
    // given
    const wrapper = shallow(ButtonCounter);
    const button = wrapper.find('.test');
    const spy = jest.fn();
    wrapper.vm.$on('increment', spy);

    // when
    button.trigger('click');

    // then
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('mounted', () => {
    it('should log mounted from ButtonCounter in console', async () => {
      // given
      global.console = {
        log: jest.fn(),
      };

      // when
      const wrapper = mount(ButtonCounter);

      // then
      expect(global.console.log).toHaveBeenCalledTimes(1);
      expect(global.console.log).toHaveBeenCalledWith('mounted from ButtonCounter!');
    });
  });
});
