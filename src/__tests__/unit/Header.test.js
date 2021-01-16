import React from 'react';
import { mount } from 'enzyme';
import { Header } from '../../components/Header/Header.component';

describe('renders Header component', () => {
    const HeaderComponent = mount(<Header />)

    describe('Header Content', () => {
        const getText = HeaderComponent.find('h1').text()
        const getLogo = HeaderComponent.find('img')
        test('Contains Site Title', () => {
            expect(getText).toEqual('RedditClient');
        })
        test('Site Title is string', () => {
            expect(getText).toBeString();
        })
        test('Contains Site Logo', () => {
            expect(getLogo).toHaveLength(1)
        })
    })
})