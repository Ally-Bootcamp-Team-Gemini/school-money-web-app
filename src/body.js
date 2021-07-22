import React, { useState } from 'react'



export default function Body(props) {

    const [count, setCount] = useState(0);
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

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="exchange_base">Base Currency:&nbsp;&nbsp;</label>
                    <select name="exchange_base" id="exchange_base">
                        {optionList}
                    </select>
                </div>

                <div>
                    <label htmlFor="base_value">Base Currency Amount:&nbsp;&nbsp;</label>
                    <input name="base_value" id="base_value"></input>
                </div>

                <div>
                    <label htmlFor="exchange_to">Exchange Currency:&nbsp;&nbsp;</label>
                    <select name="exchange_to" id="exchange_to">
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