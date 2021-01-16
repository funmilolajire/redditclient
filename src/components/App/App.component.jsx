import { Header } from '../Header/Header.component';
import { ComingSoon } from '../ComingSoon/ComingSoon.component';

export const App = () => {
    return (
        <div className="container max-h-screen overflow-hidden App">
            <Header />
            <ComingSoon />
        </div>
    )
}