import {shallow} from 'vue-test-utils';
import ButtonCounter from '@/components/ButtonCounter/ButtonCounter';

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
    let paragraph = wrapper.find('p');
    expect(paragraph.text()).toEqual('0');
  });

  it('should increment counter on event increment from either buttons', () => {
    // given
    const wrapper = shallow(Counter);
    let buttonCounters = wrapper.findAll(ButtonCounter);

    // when
    buttonCounters.at(0).vm.$emit('increment');
    buttonCounters.at(1).vm.$emit('increment');
    wrapper.update();

    // then
    let paragraph = wrapper.find('p');
    expect(paragraph.text()).toEqual('2');
  });
});
