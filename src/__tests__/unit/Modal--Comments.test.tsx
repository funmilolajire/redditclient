import { mount } from 'enzyme';
import { ModalComments } from '../../components/Modal--Comments';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('renders ModalComments component', () => {
    const comment1 = {
        permalink: '/r/Showerthoughts/comments/mdx3ge/our_buttholes_are_watertight_we_can_go_swimming/gscm02h/',
        time: 1616827642.0,
        author: 'foul_dwimmerlaik',
        comment: 'Gotta protect against ass-eating amoebas',
        upvotes: 10,
        downvotes: 10,
        num_replies: 10,
        id: 1
    }
    const comment2 = {
        permalink: '/r/Showerthoughts/comments/mdx3ge/our_buttholes_are_watertight_we_can_go_swimming/gscm02h/',
        time: 1616827642.0,
        author: 'foul_dwimmerlaik',
        comment: 'Gotta protect against ass-eating amoebas',
        upvotes: 10,
        downvotes: 10,
        num_replies: 10,
        id: 2
    }
    let props = {
        comments: [comment1, comment2]
    }
    let ModalCommentsComponent = mount(
        <Provider store={store}>
            <ModalComments {...props} />
        </Provider>
    )

    test('make a snapshot of ModalComments Component', () => {
        expect(ModalCommentsComponent).toMatchSnapshot()
    })
    test('displays no comments when comments length is 0', () => {
        props = {
            comments: []
        }
        ModalCommentsComponent = mount(
            <Provider store={store}>
                <ModalComments {...props} />
            </Provider>
        )
        const noComments = ModalCommentsComponent.find('.no--comments').text()
        expect(noComments).toBe('No comments yet')
    })
})