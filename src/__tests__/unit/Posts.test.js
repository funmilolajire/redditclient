import React from 'react';
import { mount } from 'enzyme';
import { Posts } from '../../components/Posts/Posts.component';

test('renders Posts component', () => {
    const PostsComponent = mount(<Posts />)
})