import { mount } from 'enzyme';
import { Sidebar } from '../../components/Sidebar';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('renders Sidebar component', () => {
    const SidebarComponent = mount(
        <Provider store={store}>
            <Sidebar />
        </Provider>
    )

    test('make a snapshot of Sidebar Component', () => {
        expect(SidebarComponent).toMatchSnapshot()
    })
})