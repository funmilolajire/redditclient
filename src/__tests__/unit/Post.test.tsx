import { mount } from 'enzyme';
import { Post } from '../../components/Post';

test('renders Post component', () => {
    const PostComponent = mount(<Post />);
})