import React from 'react';
import { mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import store from '../../store/store';
import { App } from '../../components/App/App.component';
import { Header } from '../../components/Header/Header.component';
import { ComingSoon } from '../../components/ComingSoon/ComingSoon.component';

describe('renders App Component', () => {
  const AppComponent = mount(
    // <Provider store={store}>
    <App />
    // </Provider>
  );

  describe('Contains Child Components', () => {
    test('contains all components', () => {
      const getComponents = AppComponent.containsAllMatchingElements([<Header />, <ComingSoon />])
      expect(getComponents).toBeTrue();
    })
  })
});
