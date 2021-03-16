import { mount } from 'enzyme';
import { Searchbar } from '../../components/Searchbar';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

test('renders Searchbar component', () => {
    const SearchbarComponent = mount(
        <Provider store={store}>
            <Searchbar />
        </Provider>
    )
})