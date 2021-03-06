import React from 'react'

export default function Footer(props) {
    return (
        <div className="footer" >
            <h1 className="footer-Teammates"> <a href='https://github.com/zeamend/school-money-web-app' >Team Gemini:</a></h1>
            {props.teammates.map((footer) => (

                <h1 key={footer.id} className='footer-Teammates'>{footer.Name}<img class="person" src={footer.url}></img></h1>

            )
            )}

            <p><a href='https://exchangerate.host/#/' >Exchange Rate API</a>&nbsp;&nbsp;
            <a href='https://www.weatherapi.com/' >Weather API</a>&nbsp;&nbsp;
            <a href='https://avatars.dicebear.com/docs/http-api'>Avatar API</a></p>

            {props.company.map((logo) => (

                <h6 key="copyright">{logo.Company} {logo.Year}</h6>
            )
            )}

        </div>
    )
}