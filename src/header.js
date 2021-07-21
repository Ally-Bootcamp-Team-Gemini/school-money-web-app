import React from 'react'
import logo from './exchange-logo2.png'

export default function Header(props) {
    return (
        <div class="header">
            <img className="App-logo" src={logo} alt="logo" />
            <h1>Money Exchange</h1>
            <div style={{"margin-left":"auto"}}>Exchange Count: {props.count}</div>
        </div>
    )
}