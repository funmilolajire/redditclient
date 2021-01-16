import React from 'react';
import { mount } from 'enzyme';
import { SubReddit, SubReddits } from '../../components/SubReddits/SubReddits.component';

test('renders SubReddits component', () => {
    const SubRedditsComponent = mount(<SubReddits />)
    const SubRedditComponent = mount(<SubReddit />)
})