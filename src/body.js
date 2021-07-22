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
            convertedAmount: 0,
            baseCurrency: 'USD',
            exchangeCurrency: 'USD',
            amountToExchange: 0, 
            optionListHtml: [],
            submitted: false
        }
        this.createOptionList = this.createOptionList.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
        this.baseCurChanged = this.baseCurChanged.bind(this);
        this.exCurChanged = this.exCurChanged.bind(this);
        this.baseValChanged = this.baseValChanged.bind(this);

        
        
    }

    // TODO: Bring USD to top of base list
    //This map function will iterate through the list of currency objects
    createOptionList(symbols){
        const objectList = Object.keys(symbols).map(function (key) {
            if (key==='USD') {
                return (<option selected key={key} value={key}>{key}: {symbols[key]['description']}</option>);
            } else {
                return (
                    //create an option tag for each currency in list
                    <option key={key} value={key}>{key}: {symbols[key]['description']}</option>
                )
            }
        })
        console.log(objectList);
        this.setState({
            optionListHtml: objectList
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.getConversionAmount();
    }

    baseCurChanged(event) {
        this.setState({
            baseCurrency:event.target.value,
            submitted: false
        });
    }

    exCurChanged(event) {
        this.setState({
            exchangeCurrency:event.target.value,
            submitted: false
        });
    }

    baseValChanged(event) {
        this.setState({
            amountToExchange:event.target.value,
            submitted: false
        });
    }
    

    componentWillMount(){
        this.getSupportedSymbols();
    }

    getSupportedSymbols(){
        const url = 'https://api.exchangerate.host/symbols';

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                this.createOptionList(result.symbols);
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

    getConversionAmount(){
        const {baseCurrency, exchangeCurrency, amountToExchange} = this.state;
        const url = 'https://api.exchangerate.host/latest?' + '&base=' + baseCurrency + '&symbols=' + exchangeCurrency + '&amount=' + amountToExchange;
        
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                if (result.rates[this.state.exchangeCurrency] !== null) {
                    this.props.incrementCounter();
                    this.setState({
                        isLoaded: true,
                        convertedAmount: result.rates[this.state.exchangeCurrency].toFixed(2),
                        submitted: true
                    });
                }
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
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="exchange_base">Base Currency:&nbsp;&nbsp;</label>
                        <select name="exchange_base" id="exchange_base" onChange={this.baseCurChanged}>
                            {this.state.optionListHtml}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="base_value">Base Currency Amount:&nbsp;&nbsp;</label>
                        <input name="base_value" type="number" step="0.01" id="base_value" onChange={this.baseValChanged}></input>
                    </div>

                    <div>
                        <label htmlFor="exchange_to">Exchange Currency:&nbsp;&nbsp;</label>
                        <select name="exchange_to" id="exchange_to" onChange={this.exCurChanged}>
                            {this.state.optionListHtml}
                        </select>
                    </div>

                    <div>
                        <input type="submit" value="EXCHANGE" name="submit_exchange" id="submit_exchange"></input>
                    </div>
                </form>

                {this.state.submitted &&
                    (<div className="result">
                        <div className="result_container">
                            <p>{this.state.amountToExchange} {this.state.baseCurrency} is </p>
                            <p className="resultHulk">{this.state.convertedAmount} {this.state.exchangeCurrency} </p>
                        </div>
                    </div>)
                }
            </div>
        )
    }
        
}