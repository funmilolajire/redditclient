import { mount } from 'enzyme';
import { Subreddits } from '../../components/Subreddits';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

test('renders Subreddits component', () => {
    const SubredditsComponent = mount(
        <Provider store={store}>
            <Subreddits />
        </Provider>
    )
})