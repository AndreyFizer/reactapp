import React from 'react';

export default class LoginView extends React.Component {
    
    onBtnClick(ev){
        ev.stopPropagation();
        
        alert("Weeee, it's amazing");
    };
    
    render(){
        return (
            <div className="col s4 container">
                <div className="row z-depth-3">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="loginEmail">Email</label>
                                <input id="loginEmail" type="email" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="loginPass">Password</label>
                                <input id="loginPass" type="password" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <input type="button" className="waves-effect waves-light btn" value="registration"/>
                            <input type="button" className="waves-effect waves-light btn" value="login" onClick={this.onBtnClick}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
