import React, { Component } from 'react';

class Drawer extends Component {
    render(){
        return(
            <div className="drawerContainer">
                <div className="drawerHeader">
                    <h1>{this.props.name}</h1>
                </div>
                <div className="drawerContent">
                    <p>Hello from Drawer.</p>
                </div>
            </div>
        );
    }
}

export default Drawer;