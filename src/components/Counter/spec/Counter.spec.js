import {mount, shallow} from 'vue-test-utils';
import ButtonCounter from '@/components/ButtonCounter/ButtonCounter';
import Stub from './stub';

import Counter from '../Counter';

describe('Counter.vue', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(Counter);

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should initialize counter to 0', () => {
    // when
    const wrapper = shallow(Counter);

    // then
    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toEqual('0');
  });

  it('should increment counter on event increment from either buttons', async () => {
    // given
    const wrapper = shallow(Counter);
    const buttonCounters = wrapper.findAll(ButtonCounter);

    // when
    buttonCounters.at(0).vm.$emit('increment');
    buttonCounters.at(1).vm.$emit('increment');
    await wrapper.vm.$nextTick();

    // then
    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toEqual('2');
  });

  describe('mounted', () => {
    it('should log total data in console', async () => {
      // given
      global.console = {
        log: jest.fn(),
      };

      // when
      const wrapper = mount(Counter, { stubs: { ButtonCounter: Stub } });

      // then
      expect(global.console.log).toHaveBeenCalledTimes(1);
      expect(global.console.log).toHaveBeenCalledWith('Total at initialization : 0');
    });
  });
});
