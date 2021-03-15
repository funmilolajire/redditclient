import { Header } from '../components/Header';
// import { ComingSoon } from '../components/ComingSoon';
import { Posts } from '../components/Posts';
import { Subreddits } from '../components/Subreddits';
import '../scss/main.scss';
export const App = () => {
    return (
        <div className="App">
            <Header />
            {/* <ComingSoon /> */}
            <main>
                <Subreddits />
                <Posts />
            </main>
        </div>
    )
}