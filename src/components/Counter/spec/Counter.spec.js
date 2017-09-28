import {shallow} from 'vue-test-utils';
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

  it('should increment counter on event increment', () => {
    // given
    const wrapper = shallow(Counter);

    // when
    wrapper.vm.incrementTotal();
    wrapper.update();

    // then
    let paragraph = wrapper.find('p');
    expect(paragraph.text()).toEqual('1');
  });
});
