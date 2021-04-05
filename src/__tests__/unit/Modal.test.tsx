import { mount } from 'enzyme';
import { Modal } from '../../components/Modal';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { handleLoadingChange } from '../../store/slices/moreInformationSlice';

describe('renders Modal component', () => {
    store.dispatch(handleLoadingChange(false))
    const portal = global.document.createElement('div')
    portal.setAttribute('id', 'portal')
    const body = global.document.querySelector('body')
    body?.appendChild(portal)
    let ModalComponent = mount(
        <Provider store={store}>
            <Modal />
        </Provider>
    )

    test('make a snapshot of Modal Component', () => {
        expect(ModalComponent).toMatchSnapshot()
    })

    test('Modal closes on click', () => {
        const closeModal = ModalComponent.find('.Modal--Close')
        closeModal.simulate('click');
        const modalState = store.getState().moreInformation.showModal;
        expect(modalState).toBeFalse();
    })
})