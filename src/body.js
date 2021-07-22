import React, { Component } from 'react'

export default class Body extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            isLoaded: false,
            symbols: [],
            convertingAmount: '50',
            fromSymbol: 'USD',
            toSymbol: 'INR',
            convertedAmount: null
         }
    }

    componentWillMount(){
        this.getSupportedSymbols();
        this.getConversionRate();
    }

    getSupportedSymbols(){
        const url = 'https://api.exchangerate.host/symbols';

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    symbols: result.symbols
                });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
    }

    getConversionRate(){
        const {fromSymbol, toSymbol, convertingAmount} = this.state;
        const url = 'https://api.exchangerate.host/latest?' + '&base=' + fromSymbol + '&symbols=' + toSymbol + '&amount=' + convertingAmount;
        
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    convertedAmount: result.rates
                });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
    }

    render() {
        return (
            <div>finally something</div>
        )
    }
        
}