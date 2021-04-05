import { mount } from 'enzyme';
import { Subreddits } from '../../components/Subreddits';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { getSubredditsList } from '../../store/slices/subredditsSlice';

describe('renders Subreddits component', () => {
    store.dispatch(getSubredditsList)
    const subreddits = store.getState().subreddits.value;

    const SubredditsComponent = mount(
        <Provider store={store}>
            <Subreddits />
        </Provider>
    )
    test('make a snapshot of Subreddits Component', () => {
        expect(SubredditsComponent).toMatchSnapshot()
    });

})