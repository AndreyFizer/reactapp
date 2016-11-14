import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {term: ''};
        
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(ev){
        console.log(ev.target.value);
        this.setState({term: ev.target.value})
    }
    
    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}


export default SearchBar;