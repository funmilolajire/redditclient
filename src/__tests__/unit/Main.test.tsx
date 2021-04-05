import { mount } from 'enzyme';
import { Main } from '../../components/Main';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

window.scrollTo = jest.fn()

describe('renders Main component', () => {
    const MainComponent = mount(
        <Provider store={store}>
            <Main />
        </Provider>
    )
    afterEach(() => {
        jest.resetAllMocks();
    });
    afterAll(() => {
        jest.clearAllMocks();
    });

    test('make a snapshot of Main Component', () => {
        expect(MainComponent).toMatchSnapshot()
    })
})