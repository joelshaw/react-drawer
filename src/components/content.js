import React, { Component } from 'react';

class Content extends Component {
    render(){
        return(
            <div className="drawerContainer">
                <div className="drawerHeader">
                    <h1>{this.props.name}</h1>
                </div>
                <div className="drawerContent">
                </div>
            </div>
        );
    }
}

export default Content;