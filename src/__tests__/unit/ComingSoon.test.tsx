import { mount } from 'enzyme';
import { ComingSoon } from '../../components/ComingSoon';

describe('renders ComingSoon component', () => {
    const ComingSoonComponent = mount(<ComingSoon />);

    describe('Test coming soon text', () => {
        const getText: string = ComingSoonComponent.find('p').text()
        test('It contains coming soon text', () => {
            expect(getText).toEqual('Coming Soon')
        })
        test('Paragraph contains a string', () => {
            expect(getText).toBeString()
        })
    })
})