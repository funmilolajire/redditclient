import { mount } from 'enzyme';
import { Subreddit } from '../../components/Subreddit';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('renders Subreddit component', () => {
    const props = {
        children: "money"
    }
    const SubredditComponent = mount(
        <Provider store={store}>
            <Subreddit {...props} />
        </Provider>
    )

    test('make a snapshot of Subreddit Component', () => {
        expect(SubredditComponent).toMatchSnapshot()
    })

    test('check that global subreddit changes on click', () => {
        const listItem = SubredditComponent.find('#' + props.children)
        listItem.simulate('click')
        const subreddit = store.getState().posts.subreddit
        expect(subreddit).toBe(props.children)
    })

    // test('check that active class changes on click', () => {
    //     const listItem = SubredditComponent.find('#' + props.children)
    //     listItem.simulate('click')
    //     const subreddit = store.getState().posts.subreddit
    //     const classList = subreddit === props.children ? "Subreddit active" : "Subreddit";
    //     expect(listItem.hasClass(classList)).toBeTrue()
    // })
})