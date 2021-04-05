import { mount } from 'enzyme';
import { Searchbar } from '../../components/Searchbar';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('renders Searchbar component', () => {
    const SearchbarComponent = mount(
        <Provider store={store}>
            <Searchbar />
        </Provider>
    )
    test('make a snapshot of searchbar component', () => {
        expect(SearchbarComponent).toMatchSnapshot()
    })

    describe('check search term', () => {
        const searchIcon = SearchbarComponent.find('.Searchbar--Icon');
        const value = 'john'
        const searchInput = SearchbarComponent.find('#search')

        test('check that global term changes on key down', () => {
            searchInput.simulate('change', { target: { value: value } })
            const searchbarDiv = SearchbarComponent.find('.Searchbar')
            searchbarDiv.simulate('keydown', { key: 'Enter' })
            const term = store.getState().posts.term;
            expect(term).toEqual(value)
        })

        test('check that global term changes on icon click', () => {
            searchInput.simulate('change', { target: { value: value } })
            searchIcon.simulate('click');
            const term = store.getState().posts.term;
            expect(term).toEqual(value)
        })

        test('input changes back to null after search', () => {
            searchInput.simulate('change', { target: { value: value } })
            searchIcon.simulate('click');
            expect(searchInput.text()).toBe('')
        })
    })
})