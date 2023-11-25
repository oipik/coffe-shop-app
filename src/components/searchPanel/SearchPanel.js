import { useState } from 'react';

import './searchPanel.scss';

const SearchPanel = ({onUpdateSearch}) => {
    const [term, setTerm] = useState('');

    function onUpdateSearchText(e) {
        const term = e.target.value;
        setTerm(term);
        onUpdateSearch(term);
    }

    return (
        <div className="search">
            <span className="search__text">Looking for</span>
            <input
                className="search__input"
                type="text"
                placeholder="start typing here..."
                value={term}
                onChange={onUpdateSearchText}
            />
        </div>
    )
}

export default SearchPanel;