import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../../style/style.css';
import '../../style/reset.css';



class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
        
    );
  }
}

export default App;