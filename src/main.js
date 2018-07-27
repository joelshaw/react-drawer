import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import style from './styles/style.css';

import Drawer from './components/drawer';

export default class Main extends Component {
    render(){
        return(
            <div>
                <Drawer name="Drawer Title" />
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);