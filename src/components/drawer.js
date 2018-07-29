import React, { Component } from 'react';

import Content from './content';

class Drawer extends Component {
   constructor(props){
       super(props);
       this.state = { show: true };
       this.state.value = "-";

       this.handleClick = this.handleClick.bind(this);
   }

    handleClick(event){
        this.setState ({
            isClosed: !this.state.isClosed
        });
    }

    render(){
        return(
            <div className="drawerContainer">
                <div className="drawerHeader">
                    <h1>{this.props.name}</h1>
                    <button className="drawerState" value="+" onClick={this.handleClick}>{ this.state.isClosed ? ( this.state.value ) : '+' }</button>
                </div>
                <div className="drawerContent">
                    { this.state.isClosed && <Content /> }
                </div>
            </div>
        );
    }
}

export default Drawer;