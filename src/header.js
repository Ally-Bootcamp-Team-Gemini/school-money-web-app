import React, { Component } from 'react'
import logo from './exchange-logo2.png'
import axios from 'axios'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            temp: 0,
            description: "",
            city: "",
            country: "",
            apiBaseEndpoint: "http://api.weatherapi.com/v1/",
            apiKey: "3396a43da2ca4b448d1145317212307"
        })

        // this.getIpAddress = this.getIpAddress.bind(this)
        // this.getCurrentWeather = this.getCurrentWeather.bind(this)
    }

    componentDidMount() {
        this.getIpAddress()
    }

    getIpAddress() {
        console.log("Getting user IP")

        const fullUrl = this.state.apiBaseEndpoint + "ip.json?key=" + this.state.apiKey + "&q=auto:ip"
        axios.get(fullUrl)
            .then(res => {
                this.setState({
                    city: res.data.city,
                    country: res.data.country_name
                })
                this.getCurrentWeather(res.data.ip)
            })
            .catch()
    }

    getCurrentWeather(userIp) {
        console.log("Getting user's current weather")

        const fullUrl = this.state.apiBaseEndpoint + "current.json?key=" + this.state.apiKey + "&q=" + userIp
        axios.get(fullUrl)
            .then(res => {
                this.setState({
                    temp: res.data.current.temp_f,
                    description: res.data.current.condition.text
                })
            })
            .catch()
    }

    render() {
        return (
            <div className="header">
                <img className="App-logo" src={logo} alt="logo" />
                <h1 style={{ paddingLeft: "10px" }}>Money Exchange</h1>
                <div className="weatherReport">
                    <h2>{this.state.temp}&deg; F</h2>
                    <h3>{this.state.description}</h3>
                </div>
                <div className="weatherReport">
                    <h4>{this.state.city}, {this.state.country}</h4>
                </div>
                <div className="counter" style={{ marginLeft: "auto" }}>Exchange Count: {this.props.count}</div>
            </div>
        )
    }
}