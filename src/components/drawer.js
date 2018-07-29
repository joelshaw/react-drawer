import React, { Component } from 'react';

import Content from './content';

class Drawer extends Component {
   constructor(props){
       super(props);
       this.state = {
           active: false,
       };
       this.state.value = "+";

       this.handleClick = this.handleClick.bind(this);
   }

    handleClick(event){
        this.setState (drawerFunction => ({
            isToggleOn: !drawerFunction.isToggleOn
        }));
    }
    drawer(props){
        const isToggleOn = props.isToggleOn;
        if(isToggleOn){
            console.log('yes');
        }
        console.log('no');
    }
    render(){   
        return(
            <div className="drawerContainer">
                <div className="drawerHeader">
                    <h1>{this.props.name}</h1>
                    {this.state.isToggleOn ? 'NO' : 'YES'}
                    <button className="drawerState" value="+" onClick={this.handleClick}>{this.state.value}</button>
                </div>
                <div className="drawerContent">
                    <Content />
                </div>
            </div>
        );
    }
}

export default Drawer;