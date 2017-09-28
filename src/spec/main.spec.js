import Vue from 'vue'
import main from '../main'

jest.mock('vue', () => class Vue {
  static config = {};

  constructor(params) {
    return params;
  }
});

jest.mock('../router/index', () => 'fake router');
jest.mock('../App', () => 'App component');

describe('Vue main', () => {
  it('should be initialized with productionTip to false', () => {
    expect(Vue.config.productionTip).toEqual(false);
  });

  it('should be instantiated with proper params', () => {
    expect(main.components).toEqual({App: 'App component'});
    expect(main.el).toEqual('#app');
    expect(main.router).toEqual('fake router');
    expect(main.template).toEqual('<App/>');
  });
});
