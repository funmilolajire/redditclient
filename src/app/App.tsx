import { Header } from '../components/Header';
// import { ComingSoon } from '../components/ComingSoon';
import { Posts } from '../components/Posts';
import { Subreddits } from '../components/Subreddits';
import '../scss/main.scss';

import { useEffect } from 'react';
import { getSubreddits } from '../api/reddit';

export const App = () => {
    // const getPosts = async () => {
    //     console.log(await getSubreddits())
    // }

    // useEffect(() => {
    //     getPosts();
    // }, [])

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