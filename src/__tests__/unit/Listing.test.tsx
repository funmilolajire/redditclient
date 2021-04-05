import { mount } from 'enzyme';
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { Listing } from '../../components/Listing';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('renders Listing component', () => {
    const props = {
        listItem: "money"
    }
    const ListingComponent = mount(
        <Provider store={store}>
            <Listing {...props} />
        </Provider>
    )

    test('make a snapshot of Listing Component', () => {
        expect(ListingComponent).toMatchSnapshot()
    })

    test('check that global listing changes on click', () => {
        const listItem = ListingComponent.find('#' + props.listItem)
        listItem.simulate('click')
        const listing = store.getState().posts.listing
        expect(listing).toBe(props.listItem)
    })

    test('check that active class changes on click', () => {
        const { container } = render(
            <Provider store={store}>
                <Listing {...props} />
            </Provider>
        )
        const listItem = getByTestId(container, props.listItem)
        fireEvent.click(listItem)
        const listing = store.getState().posts.listing
        const classList = listing === props.listItem ? "Listing active" : "Listing";
        expect(Object.values(listItem.classList).join(" ")).toEqual(classList)
    })
})