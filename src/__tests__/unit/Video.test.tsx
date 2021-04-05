import { render } from '@testing-library/react';
import { VideoPlayer } from '../../components/Video';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('renders Video component', () => {
    const props = {
        videoSrc: 'car.mp4'
    }
    const VideoComponent = render(
        <Provider store={store}>
            <VideoPlayer {...props} />
        </Provider>
    )

    test('make a snapshot of Video Component', () => {
        expect(VideoComponent).toMatchSnapshot()
    })
})