import React, { useState } from 'react'



export default function Body(props) {

    const [baseCurrency, setBaseCurrency] = useState("");
    const [exchangeCurrency, setExchangeCurrency] = useState("");
    const [amountToExchange, setAmountToExchange] = useState(0);

    /*Temporary mock data to populate drop downs*/
    const mock_cur_list = {
        "AED": "United Arab Emirates Dirham",
        "AFN": "Afghan Afghani",
        "ALL": "Albanian Lek",
        "AMD": "Armenian Dram",
    }

    // TODO: Bring USD to top of base list
    //This map function will iterate through the list of currency objects
    const optionList = Object.keys(mock_cur_list).map(function (key) {
        return (
            //create an option tag for each currency in list
            <option key={key} value={key}>{key}: {mock_cur_list[key]}</option>
        )
    })

    const onSubmit = function (event) {
        event.preventDefault();
        props.incrementCounter();
    }

    const baseCurChanged = function (event) {
        setBaseCurrency(event.target.value)
    }

    const exCurChanged = function (event) {
        setExchangeCurrency(event.target.value)
    }

    const baseValChanged = function (event) {
        setAmountToExchange(event.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="exchange_base">Base Currency:&nbsp;&nbsp;</label>
                    <select name="exchange_base" id="exchange_base" onChange={baseCurChanged}>
                        {optionList}
                    </select>
                </div>

                <div>
                    <label htmlFor="base_value">Base Currency Amount:&nbsp;&nbsp;</label>
                    <input name="base_value" id="base_value" onChange={exCurChanged}></input>
                </div>

                <div>
                    <label htmlFor="exchange_to">Exchange Currency:&nbsp;&nbsp;</label>
                    <select name="exchange_to" id="exchange_to" onChange={baseValChanged}>
                        {optionList}
                    </select>
                </div>

                <div>
                    <input type="submit" value="EXCHANGE" name="submit_exchange" id="submit_exchange"></input>
                </div>
            </form>
        </div>
    )
}