import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../../style/style.css';
import '../../style/reset.css';
import { BrowserRouter } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>

    );
  }
}

export default App;