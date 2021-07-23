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

  const randomSeed = Math.floor(Math.random() * 100000)
  const Teammates = [
    { Name: 'Elena', id: "1", url: "https://avatars.dicebear.com/api/female/elena"+ randomSeed +".svg" },
    { Name: 'Satchel', id: "2", url: "https://avatars.dicebear.com/api/male/satchel"+ randomSeed +".svg"},
    { Name: 'Zach', id: "3", url: "https://avatars.dicebear.com/api/male/Zachary"+ randomSeed +".svg"},
    { Name: 'Manish', id: "4", url: "https://avatars.dicebear.com/api/male/manish"+ randomSeed +".svg" },
    { Name: 'Callen', id: "5", url: "https://avatars.dicebear.com/api/male/Callen"+ randomSeed +".svg" },
    { Name: 'Will', id: "6", url: "https://avatars.dicebear.com/api/male/Will"+ randomSeed +".svg" }
  ];

<img class="person" src="https://avatars.dicebear.com/api/male/example.svg" />

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
