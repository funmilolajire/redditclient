import { mount } from 'enzyme';
import { ScrollToTop } from '../../components/ScrollToTop';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

window.scrollTo = jest.fn()

describe('renders ScrollToTop component', () => {
    const ScrollToTopComponent = mount(
        <Provider store={store}>
            <ScrollToTop />
        </Provider>
    )
    afterEach(() => {
        jest.resetAllMocks();
    });
    afterAll(() => {
        jest.clearAllMocks();
    });

    test('make a snapshot of ScrollToTop Component', () => {
        expect(ScrollToTopComponent).toMatchSnapshot()
    })
    test('page scrolls to top on click', () => {
        const button = ScrollToTopComponent.find('.ScrollToTopButton').first()
        button.simulate('click')
        expect(window.pageYOffset).toBe(0)
    })
})