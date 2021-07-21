import React from 'react'

export default function Body(props) {
    /*Temporary mock data to populate drop downs*/
    const mock_cur_list = [
        { "AED": "United Arab Emirates Dirham" },
        { "AFN": "Afghan Afghani" },
        { "ALL": "Albanian Lek" },
        { "AMD": "Armenian Dram" },
    ]


    /*This map function will iterate through the list of currency objects*/
    const optionList = mock_cur_list.map(function (obj) {
        /*this var gets each key of mock_cur_list and holds it*/
        const key = Object.keys(obj)[0]
        return (
            /*create an option tag for each currency in list*/
            <option value={key}>{key}: {obj[key]}</option>
        )
    })

    return (
        <div>
            <select name="exchange_base" id="exchange_base">
                {optionList}
            </select>
            <select name="exchange_to" id="exchange_to">
                {optionList}
            </select>
        </div>
    )
}