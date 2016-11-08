import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from 'components/searchBar'

const App = function () {
    return (
        <div>
            <SearchBar/>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#wrapper')
);
