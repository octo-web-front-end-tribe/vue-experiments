import {shallow} from 'vue-test-utils';
import ButtonCounter from '../ButtonCounter';

describe('ButtonCounter.vue', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(ButtonCounter);

    // then
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should initialize counter to 0', () => {
    // when
    const wrapper = shallow(ButtonCounter);

    // then
    let button = wrapper.find('.test');
    expect(button.text()).toEqual('0');
  });

  it('should increment counter on click', () => {
    // given
    const wrapper = shallow(ButtonCounter);
    let button = wrapper.find('.test');

    // when
    button.trigger('click');

    // then
    expect(button.text()).toEqual('1');
  });

  it('should emit an event increment on click', () => {
    // given
    const wrapper = shallow(ButtonCounter);
    let button = wrapper.find('.test');
    let spy = jest.fn();
    wrapper.vm.$on('increment', spy);

    // when
    button.trigger('click');

    // then
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
