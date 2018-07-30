import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import style from './styles/style.css';

import Drawer from './components/drawer';

export default class App extends Component {
    render(){
        return(
            <div>
                <Drawer name="Accordian Title" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);