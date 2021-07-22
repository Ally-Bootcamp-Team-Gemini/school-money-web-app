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
            convertedAmount: null,
            baseCurrency: '',
            setBaseCurrency: '',
            exchangeCurrency: '',
            amountToExchange: 0, 
            optionListHtml: []
        }
        this.createOptionList = this.createOptionList.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
        this.baseCurChanged = this.baseCurChanged.bind(this);
        this.exCurChanged = this.exCurChanged.bind(this);
        this.baseValChanged = this.baseValChanged.bind(this);

        
        
    }

    // TODO: Bring USD to top of base list
    //This map function will iterate through the list of currency objects
    createOptionList(){
        /*Temporary mock data to populate drop downs*/
        const mock_cur_list = {
            "AED": "United Arab Emirates Dirham",
            "AFN": "Afghan Afghani",
            "ALL": "Albanian Lek",
            "AMD": "Armenian Dram",
        }
        const objectList = Object.keys(mock_cur_list).map(function (key) {
            return (
                //create an option tag for each currency in list
                <option key={key} value={key}>{key}: {mock_cur_list[key]}</option>
            )
        })
        console.log(objectList);
        this.setState({
            optionListHtml: objectList
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.incrementCounter();
    }

    baseCurChanged(event) {
        this.setState({
            baseCurrency:event.target.value
        });
    }

    exCurChanged(event) {
        this.setState({
            exchangeCurrency:event.target.value
        });
    }

    baseValChanged(event) {
        this.setState({
            amountToExchange:event.target.value
        });
    }
    

    componentWillMount(){
        this.getSupportedSymbols();
        this.getConversionRate();
        this.createOptionList();
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
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="exchange_base">Base Currency:&nbsp;&nbsp;</label>
                        <select name="exchange_base" id="exchange_base" onChange={this.baseCurChanged}>
                            {this.state.optionListHtml}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="base_value">Base Currency Amount:&nbsp;&nbsp;</label>
                        <input name="base_value" id="base_value" onChange={this.exCurChanged}></input>
                    </div>

                    <div>
                        <label htmlFor="exchange_to">Exchange Currency:&nbsp;&nbsp;</label>
                        <select name="exchange_to" id="exchange_to" onChange={this.baseValChanged}>
                            {this.state.optionListHtml}
                        </select>
                    </div>

                    <div>
                        <input type="submit" value="EXCHANGE" name="submit_exchange" id="submit_exchange"></input>
                    </div>
                </form>
            </div>
        )
    }
        
}