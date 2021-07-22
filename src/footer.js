import React from 'react'

export default function Footer(props){
    return (
        <div className="footer" >
            <h1 className="footer-Teammates"> <a href ='https://github.com/zeamend/school-money-web-app' >Team Gemini:</a></h1>
        {props.teammates.map((footer) => (

        <h1 className = 'footer-Teammates'>{footer}</h1>
)
)}
        
        <p><a href ='https://exchangeratesapi.io/' >Exchange Rate API</a></p>

        {props.company.map((logo) => (

            <h6>{logo.Company} {logo.Year}</h6>
            )
            )}

        </div>
    )
}