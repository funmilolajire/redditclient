import { mount } from 'enzyme';
import { ModalComment } from '../../components/Modal--Comment';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('renders ModalComment component', () => {
    let props = {
        comment: {
            permalink: '/r/Showerthoughts/comments/mdx3ge/our_buttholes_are_watertight_we_can_go_swimming/gscm02h/',
            time: 1616827642.0,
            author: 'foul_dwimmerlaik',
            comment: 'Gotta protect against ass-eating amoebas',
            upvotes: 10,
            downvotes: 10,
            num_replies: 10
        }
    }
    let ModalCommentComponent = mount(
        <Provider store={store}>
            <ModalComment {...props} />
        </Provider>
    )

    test('make a snapshot of ModalComment Component', () => {
        expect(ModalCommentComponent).toMatchSnapshot()
    })

    test('check that singular form is used when number is 1', () => {
        props = {
            comment: {
                ...props.comment,
                upvotes: 1,
                downvotes: 1,
                num_replies: 1
            }
        }
        ModalCommentComponent = mount(
            <Provider store={store}>
                <ModalComment {...props} />
            </Provider>
        )
        const replyLabel = ModalCommentComponent.find('.Comment--Replies .label').text()
        expect(replyLabel).toBe('reply')

        const upvoteLabel = ModalCommentComponent.find('.Comment--Upvotes .label').text()
        expect(upvoteLabel).toBe('upvote')

        const downvoteLabel = ModalCommentComponent.find('.Comment--Downvotes .label').text()
        expect(downvoteLabel).toBe('downvote')
    })
})