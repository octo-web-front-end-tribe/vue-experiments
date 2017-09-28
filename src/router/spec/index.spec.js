import Vue from 'vue'
import Router from 'vue-router'
import router from '../index'

jest.mock('vue', () => ({
  use: jest.fn()
}));

jest.mock('vue-router', () => class VueRouter {
  constructor(routes) {
    return routes;
  }
});

jest.mock('@/components/Hello/Hello', () => 'Hello component');

jest.mock('@/components/Counter/Counter', () => 'Counter component');

describe('router', () => {
  it('Vue should use router', () => {
    expect(Vue.use).toHaveBeenCalledWith(Router);
  });

  it('should declare Hello route', () => {
    expect(router.routes[0].component).toEqual('Hello component');
    expect(router.routes[0].name).toEqual('Hello');
    expect(router.routes[0].path).toEqual('/');
    expect(router.routes[0].props).toEqual({'name': 'RG'});
  });

  it('should declare Counter route', () => {
    expect(router.routes[1].component).toEqual('Counter component');
    expect(router.routes[1].name).toEqual('Counter');
    expect(router.routes[1].path).toEqual('/counter');
  });
});
