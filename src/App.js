import './App.css';
import Header from './header.js'
import Footer from './footer.js'
import Body from './body.js'
import React, { useState } from 'react'


function App() {

  const [count, setCounter] = useState(0);

  const incrementCounter = () => {
     setCounter(count+1);
  } 

  return (
    <div className="App">
      <Header count={count} />
      <Body incrementCounter={incrementCounter}/>
      <Footer />
    </div>
  );
}

export default App;
