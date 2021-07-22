import './App.css';
import Header from './header.js'
import Footer from './footer.js'
import Body from './body.js'
import React, { useState } from 'react'


function App() {

  const [count, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(count + 1);
  }
  const Teammates = [
    { Name: 'Elena', id: "1" },
    { Name: 'Satchel', id: "2" },
    { Name: 'Zach', id: "3" },
    { Name: 'Manish', id: "4" },
    { Name: 'Callen', id: "5" },
    { Name: 'Will', id: "6" }
  ];

  const logo = [{
    Company: '@Money Exchange',
    Year: 2021,
  }];

  return (
    <div className="App">
      <Header count={count} />
      <Body incrementCounter={incrementCounter} />
      <Footer teammates={Teammates} company={logo} />
    </div>
  );
}

export default App;
