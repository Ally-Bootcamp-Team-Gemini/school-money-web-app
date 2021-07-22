import React from 'react'
import logo from './exchange-logo2.png'

export default function Header(props) {
    return (
        <div className="header">
            <img className="App-logo" src={logo} alt="logo" />
            <h1 style={{paddingLeft:"10px"}}>Money Exchange</h1>
            <div style={{marginLeft:"auto"}}>Exchange Count: {props.count}</div>
        </div>
    )
}