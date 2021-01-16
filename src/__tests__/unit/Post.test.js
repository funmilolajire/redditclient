import React from 'react';
import { mount } from 'enzyme';
import { Post } from '../../components/Post/Post.component';

test('renders Post component', () => {
    const PostComponent = mount(<Post />)
})