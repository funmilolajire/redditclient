import { mount, shallow } from 'enzyme';
import { Header } from '../../components/Header';

describe('renders Header component', () => {
    const HeaderComponent = mount(<Header />)

    describe('make snapshot of Header component', () => {
        test('matches the snapshot', () => {
            const component = shallow(<Header />);
            expect(component).toMatchSnapshot();
        })
    })
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