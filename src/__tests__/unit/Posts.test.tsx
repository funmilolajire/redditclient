import { mount } from 'enzyme';
import { Posts } from '../../components/Posts';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

window.scrollTo = jest.fn()

describe('renders Posts component', () => {
    const PostsComponent = mount(
        <Provider store={store}>
            <Posts />
        </Provider>
    )
    afterEach(() => {
        jest.resetAllMocks();
    });
    afterAll(() => {
        jest.clearAllMocks();
    });

    test('make snapshot of Posts component', () => {
        expect(PostsComponent).toMatchSnapshot();
    })
})