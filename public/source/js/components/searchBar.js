import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: ''
        };
    }
    
    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={ev => this.setState({term: ev.target.value})}/>
                <p>Current value: {this.state.term}</p>
            </div>
        )
    }
};


export default SearchBar;