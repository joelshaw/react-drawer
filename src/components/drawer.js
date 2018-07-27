import React, { Component } from 'react';

// import Content from './components/content';

class Drawer extends Component {
    render(){   
        return(
            <div className="drawerContainer" aria-expanded="true">
                <div className="drawerHeader">
                    <h1>{this.props.name}</h1>
                    <button className="drawerState"></button>
                </div>
                <div className="drawerContent">
                    <p>content</p>
                </div>
            </div>
        );
    }
}

export default Drawer;