import React, { Component } from 'react';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Footer from './components/footer/Footer.js';
import Menu from './components/menu/Menu.js';
import Recipes from './components/recipes/Recipes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "burgerClasses" : "hamburglar is-open",
      "burgerToggle" : true,
      "menuClasses" : "menu",
      "menuToggle" : true,
      "page" : "Home"
    }
  }
	
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

   toggleBurger(){
    if(this.state.burgerToggle === true) {
      this.setState({
          "burgerToggle" : false,
          "burgerClasses" : "hamburglar is-closed",
          "menuToggle" : false,
          "menuClasses" : "menu menu-show"
      });
    } else {
      this.setState({
          "burgerToggle" : true,
          "burgerClasses" : "hamburglar is-open",
          "menuClasses" : "menu",
          "menuToggle" : true
      });
    }
  }

  handleNav(e){
    var p = e.target.dataset.page;
    this.setState({
      "page" : p
    });
    document.body.scrollTop = 0;
  }

  handleNavMobile(e){
    var p = e.target.dataset.page;
    this.setState({
      "burgerToggle" : true,
      "burgerClasses" : "hamburglar is-open",
      "menuClasses" : "menu",
      "menuToggle" : true,
      "page" : p
    });
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <div className="App">

        <Header 
          burgerStuff={this.state.burgerClasses} 
          burger={this.toggleBurger.bind(this)}
          nav={this.handleNav.bind(this)} />

        <div id="pageBody">
            {
              (this.state.page === "Home") ? 
                <Home /> 

              : (this.state.page === "Recipes") ? 
                <Recipes /> 

              : <Home />
            }
        </div>

        <Footer 
          nav={this.handleNav.bind(this)} />

        <Menu 
          classes={this.state.menuClasses}
          nav={this.handleNavMobile.bind(this)} />

      </div>
    );
  }
}

export default App;
