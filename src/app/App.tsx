import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Sidebar } from '../components/Sidebar';
import { ScrollToTop } from '../components/ScrollToTop';
import '../scss/main.scss';

export const App = () => (
    <div className="App">
        <Header />
        <main>
            <Sidebar />
            <Main />
        </main>
        <ScrollToTop />
    </div>
)