import { shallow } from 'avoriaz'
import Hello from '../Hello'

describe('Bar.vue', () => {
  it('should match snapshot', () => {
    // given

    // when
    const wrapper = shallow(Hello);

    // then
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a div with hello class', () => {
    // given

    // when
    const wrapper = shallow(Hello);

    // then
    expect(wrapper.find('.hello').length).toBe(1);
  });
});
