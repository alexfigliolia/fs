import React, { Component } from 'react';
import Loader from './components/loader/Loader.js';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Footer from './components/footer/Footer.js';
import Menu from './components/menu/Menu.js';
import Recipes from './components/recipes/Recipes.js';
import WhatWeDo from './components/whatWeDo/WhatWeDo.js';
import Clients from './components/clients/Clients.js';
import Contact from './components/contact/Contact.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "burgerClasses" : "hamburglar is-open",
      "burgerToggle" : true,
      "menuClasses" : "menu",
      "menuToggle" : true,
      "loaderClasses" : "loader",
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
    setTimeout(function(){
      this.setState({
        "loaderClasses" : "loader loader-hide"
      });
    }.bind(this), 500);
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
      "loaderClasses" : "loader"
    });
    setTimeout(function(){
      this.setState({
        "page" : p
      });
      document.body.scrollTop = 0;
    }.bind(this), 400);
    setTimeout(function(){
      this.setState({
        "loaderClasses" : "loader loader-hide"
      });
    }.bind(this), 1000);
  }

  handleNavMobile(e){
    var p = e.target.dataset.page;
    this.setState({
      "burgerToggle" : true,
      "burgerClasses" : "hamburglar is-open",
      "menuClasses" : "menu",
      "menuToggle" : true
    });
    setTimeout(function(){
      this.setState({
        "loaderClasses" : "loader"
      });
    }.bind(this), 700);
    setTimeout(function(){
      this.setState({
        "page" : p
      });
      document.body.scrollTop = 0;
    }.bind(this), 1100);
    setTimeout(function(){
      this.setState({
        "loaderClasses" : "loader loader-hide"
      });
    }.bind(this), 2000);
  }

  render() {
    return (
      <div className="App">

        <Loader 
          classes={this.state.loaderClasses} />

        <Header 
          burgerStuff={this.state.burgerClasses} 
          burger={this.toggleBurger.bind(this)}
          nav={this.handleNav.bind(this)} />

        <div id="pageBody">
            {
              (this.state.page === "Home") ? 
                <Home 
                  nav={this.handleNavMobile.bind(this)} /> 

              : (this.state.page === "Recipes") ? 
                <Recipes /> 

              : (this.state.page === "WhatWeDo") ? 
                <WhatWeDo /> 

              : (this.state.page === "Clients") ? 
                <Clients /> 

              : <Contact />
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
