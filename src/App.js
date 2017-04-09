import React, { Component } from 'react';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Footer from './components/footer/Footer.js';
import './App.css';

class App extends Component {
	
  handleScroll(){
  	if(document.body.scrollTop > 100) {
	    document.getElementById('header').classList.add('header-shrink');
  	} else {
	    document.getElementById('header').classList.remove('header-shrink');
  	}
    if(document.body.scrollTop > document.getElementById('introText').scrollTop + 550) {
      document.getElementById('introText').classList.add('intro-text-show');
    } else {
      document.getElementById('introText').classList.remove('intro-text-show');
    }
  }

  componentDidMount() {
    if(window.innerWidth > 956){
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if(window.innerWidth > 956){
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
