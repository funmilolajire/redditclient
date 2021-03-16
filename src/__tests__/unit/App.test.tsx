import { mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { App } from '../../app/App';
import { Header } from '../../components/Header';
import { Subreddits } from '../../components/Subreddits';
import { Posts } from '../../components/Posts';
// import { ComingSoon } from '../../components/ComingSoon';

describe('renders App Component', () => {
  const AppComponent = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  describe('Contains Child Components', () => {
    test('contains all components', () => {
      // const getComponents = AppComponent.containsAllMatchingElements([<Header />, <ComingSoon />])
      const getComponents = AppComponent.containsAllMatchingElements([<Header />, <Subreddits />, <Posts />]);
      expect(getComponents).toBeTrue();
    })
  })

  //  describe('make snapshot of App component', () => {
  //     test('matches the snapshot', () => {
  //       let tree = renderer.create(AppComponent).toJSON()
  //       expect(tree).toMatchSnapshot();
  //     })
  //   })

});
