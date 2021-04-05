import { mount } from 'enzyme';
import { Post } from '../../components/Post';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { handleLoadingChange } from '../../store/slices/postsSlice';


describe('renders Post component', () => {
    store.dispatch(handleLoadingChange(false))
    const props = {
        post: {
            "comments": 10,
            "downvotes": 0,
            "postAltIframe": "",
            "postAltVideo": "",
            "postIframe": "",
            "postImage": "https://b.thumbs.redditmedia.com/5ECi_D2EZxcveWeDzFK8bdMu2pXXeu_oO-cxk0AEtYs.jpg",
            "postThumbnail": "",
            "postVideo": "",
            "permalink": "/r/wallstreetbets/comments/mi3t1v/weekend_discussion_thread_for_the_weekend_of/",
            "postBody": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Your weekend discussion thread. Please keep the shitposting to a maximum!&lt;/p&gt;\n\n&lt;p&gt;Follow &lt;a href=\"https://twitter.com/Official_WSB\"&gt;@Official_WSB&lt;/a&gt; on Twitter, all other accounts are impersonators.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
            "postTitle": "Weekend Discussion Thread for the Weekend of April 01, 2021",
            "subreddit": "r/wallstreetbets",
            "time": 1617307633.0,
            "upvotes": 10,
            "user": "OPINION_IS_UNPOPULAR",
        }
    }
    const PostComponent = mount(
        <Provider store={store}>
            <Post {...props} />
        </Provider>
    )

    test('make snapshot of Post component', () => {
        expect(PostComponent).toMatchSnapshot()
    })

    // test('modal opens on comment click', () => {
    //     const comment = PostComponent.find('.Post .Post--Container .Post--Content--Wrapper .Post--Content .Post--Comments').first();
    //     comment.simulate('click');
    //     const showModal = store.getState().moreInformation.showModal;
    //     expect(showModal).toBeTrue();
    // })

    test('changes current subreddit to clicked subreddit', () => {
        const subredditChange = PostComponent.find('.Post--Container .subreddit');
        subredditChange.simulate('click')
        const subreddit = store.getState().posts.subreddit
        expect(subreddit).toBe(subredditChange.text());
    })
})