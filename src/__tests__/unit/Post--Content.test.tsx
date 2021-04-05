import { mount } from 'enzyme';
import { PostContent } from '../../components/Post--Content';
import { Provider } from 'react-redux';
import { store } from '../../store/store';


describe('renders Post--Content component', () => {
    let props = {
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
        },
    }
    let PostContentComponent = mount(
        <Provider store={store}>
            <PostContent {...props} />
        </Provider>
    )

    test('make snapshot of Post--Content component', () => {
        expect(PostContentComponent).toMatchSnapshot()
    })

    test('check that singular form is used when number is 1', () => {
        props = {
            post: {
                ...props.post,
                upvotes: 1,
                downvotes: 1,
                comments: 1
            }
        }
        PostContentComponent = mount(
            <Provider store={store}>
                <PostContent {...props} />
            </Provider>
        )
        const commentLabel = PostContentComponent.find('.Post--Comments .label').text()
        expect(commentLabel).toBe('comment')

        const upvoteLabel = PostContentComponent.find('.Post--Upvotes .label').text()
        expect(upvoteLabel).toBe('upvote')

        const downvoteLabel = PostContentComponent.find('.Post--Downvotes .label').text()
        expect(downvoteLabel).toBe('downvote')
    })
})