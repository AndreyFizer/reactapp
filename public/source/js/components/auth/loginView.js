import React from 'react';

export default class LoginView extends React.Component {
    
    onBtnClick(ev){
        ev.stopPropagation();
        
        alert("Weeee, it's amazing");
    };
    
    render(){
        return (
            <div>
                <form>
                    <input type="text"/>
                    <input type="button" className="waves-effect waves-light btn" value="BATOn" onClick={this.onBtnClick}/>
                </form>
            </div>
        );
    }
}
