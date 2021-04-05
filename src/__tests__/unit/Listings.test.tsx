import { mount } from 'enzyme';
import { Listings } from '../../components/Listings';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { getSubredditsList } from '../../store/slices/subredditsSlice';

describe('renders Listings component', () => {
    store.dispatch(getSubredditsList)

    const ListingsComponent = mount(
        <Provider store={store}>
            <Listings />
        </Provider>
    )
    test('make a snapshot of Listings Component', () => {
        expect(ListingsComponent).toMatchSnapshot()
    });

})