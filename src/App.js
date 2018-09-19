import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h1>Hello World</h1>
const test = <h1>Hello World test</h1>;
const Image = () =>  <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Trulli" width="500" height="333"></img>
const Image2 = (props) => {
  let{src,title} = props;
  src = src || "https://www.w3schools.com/html/pic_trulli.jpg" ;
  title = title || "this is a test";
  return(
    <img src={src} alt={title} width="500" height="300" />
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - from hsbc</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Image2 src="https://www.w3schools.com/html/pic_trulli.jpg" title="more title"/>
          <Image2 src="https://www.w3schools.com/html/img_girl.jpg"/>
          <Image2 src="https://www.w3schools.com/html/img_chania.jpg"/>

          

        </p>
        <p><Hello /></p>

      </div>
    );
  }
}

export default App;
