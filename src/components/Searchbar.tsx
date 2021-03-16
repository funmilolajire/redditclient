import { useAppDispatch, useAppSelector } from '../store/hooks';
import { termChange } from '../store/slices/termSlice'

export const Searchbar = () => {
    const term = useAppSelector((state: { term: { value: string } }): string => state.term.value);
    const dispatch = useAppDispatch();

    const handleTermChange = ({ target }: { target: { value: string } }) => dispatch(termChange(target.value))

    return (
        <div className="Searchbar">
            <div className="Searchbar--Container">
                {typeof term === 'string' && <input onChange={handleTermChange} value={term} type="text" name="search" id="search" placeholder="search" autoComplete="off" />}
                <div className="Searchbar--Icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}