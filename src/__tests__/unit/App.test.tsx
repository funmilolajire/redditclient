import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { App } from '../../app/App';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Sidebar } from '../../components/Sidebar';
import { ScrollToTop } from '../../components/ScrollToTop';
// import { ComingSoon } from '../../components/ComingSoon';

window.scrollTo = jest.fn()

describe('renders App Component', () => {
  const AppComponent = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe('make snapshot of App component', () => {
    test('matches the snapshot', () => {
      expect(AppComponent).toMatchSnapshot();
    })
  })


  describe('Contains Children Components', () => {
    test('contains all components', () => {
      // const getComponents = AppComponent.containsAllMatchingElements([<Header />, <ComingSoon />])
      const getComponents = AppComponent.containsAllMatchingElements([<Header />, <Main />, <Sidebar />, <ScrollToTop />]);
      expect(getComponents).toBeTrue();
    })
  })

});
