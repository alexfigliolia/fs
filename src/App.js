import React, { Component } from 'react';
import Loader from './components/loader/Loader.js';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Footer from './components/footer/Footer.js';
import Menu from './components/menu/Menu.js';
import Socialize from './components/header/Socialize.js';
import Recipes from './components/recipes/Recipes.js';
import WhatWeDo from './components/whatWeDo/WhatWeDo.js';
import Clients from './components/clients/Clients.js';
import Contact from './components/contact/Contact.js';
import BWBurrito from './components/recipe/BWBurrito.js';
import PancakeTaco from './components/recipe/PancakeTaco.js';
import BNPancakes from './components/recipe/BNPancakes.js';
import TBBurrito from './components/recipe/TBBurrito.js';
import Oops from './components/recipe/Oops.js';
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
	
  handleHeaderScroll(){
  	if(document.body.scrollTop > 100) {
	    document.getElementById('header').classList.add('header-shrink');
  	} else {
	    document.getElementById('header').classList.remove('header-shrink');
  	}
  }

  componentDidMount() {
    history.pushState(this.state.page, null, '/');
    var self = this;
    setTimeout(function(){
      self.setState({
        "loaderClasses" : "loader loader-hide"
      });
    }, 500);
    window.addEventListener('popstate', function(e) {
      var p = e.state;
      self.handleBackButton(p);
    });
    if(window.innerWidth > 956){
      window.addEventListener('scroll', function(){
        self.handleHeaderScroll();
      });
    }
    window.addEventListener('resize', function(){
      if(window.innerWidth > 956){
        window.addEventListener('scroll', function(){
          self.handleHeaderScroll();
        });
      } else {
        window.removeEventListener('scroll', function(){
          self.handleHeaderScroll();
        });
      }
    });
  }

  componentWillUnmount() {
    if(window.innerWidth > 956){
      window.removeEventListener('scroll', function(){
        self.handleHeaderScroll();
      });
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

  handleBackButton(page){
    this.setState({
      "loaderClasses" : "loader"
    });
    var p = page;
    var l = document.getElementsByClassName('mmlink');
    var h = document.getElementsByClassName('hlink');
    history.pushState(p, null, p);
    for(var i = 0; i<4; i++) {
      l[i].classList.remove('onpage');
      h[i].classList.remove('onpage2');
    }
    for(var j = 0; j<4; j++) {
      if(l[j].dataset.page === p) {
        l[j].classList.add('onpage');
        h[j].classList.add('onpage2');
      }
    }
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

  handleNav(e){
    this.setState({
      "loaderClasses" : "loader"
    });
    var p = e.target.dataset.page;
    var l = document.getElementsByClassName('mmlink');
    var h = document.getElementsByClassName('hlink');
    history.pushState(p, null, p);
    for(var i = 0; i<4; i++) {
      l[i].classList.remove('onpage');
      h[i].classList.remove('onpage2');
    }
    if(e.target.tagName === "BUTTON"){
      l[1].classList.add('onpage');
      h[1].classList.add('onpage2');
    } else {
      e.target.classList.add('onpage2');
    }
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
    var l = document.getElementsByClassName('mmlink');
    for(var i = 0; i<4; i++) {
      l[i].classList.remove('onpage');
    }
    e.target.classList.add('onpage');
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

  homeButtonScroll(){
    var o = document.getElementById('header').clientHeight;
    var h = window.innerHeight - o;
    scrollIt(
      h,
      300,
      'easeOutQuad'
    );
  }
  recipeButtonScroll(){
    scrollIt(
      document.getElementById('rc'),
      300,
      'easeOutQuad'
    );
  }
  wButtonScroll(){
    scrollIt(
      document.getElementById('wwdb').clientHeight,
      300,
      'easeOutQuad'
    );
  }
  clientButtonScroll(){
    scrollIt(
      document.getElementById('cb'),
      300,
      'easeOutQuad'
    );
  }
  scrollToTop(){
    scrollIt(
      0,
      300,
      'easeOutQuad'
    );
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
                  nav={this.handleNav.bind(this)}
                  scroll={this.homeButtonScroll.bind(this)} /> 

              : (this.state.page === "Recipes") ? 
                <Recipes 
                  scroll={this.recipeButtonScroll.bind(this)}
                  nav={this.handleNav.bind(this)} />

              : (this.state.page === "BWBurrito") ? 
                <BWBurrito /> 

              : (this.state.page === "PancakeTaco") ? 
                <PancakeTaco /> 

              : (this.state.page === "BNPancakes") ? 
                <BNPancakes /> 

              : (this.state.page === "TBBurrito") ? 
                <TBBurrito /> 

              : (this.state.page === "WhatWeDo") ? 
                <WhatWeDo
                  scroll={this.wButtonScroll.bind(this)}  /> 

              : (this.state.page === "Clients") ? 
                <Clients
                  scroll={this.clientButtonScroll.bind(this)}  /> 

              : (this.state.page === "Contact") ? 
                <Contact />

              : <Oops />
            }
        </div>

        <div className="scroll-up">
          <button onClick={this.scrollToTop.bind(this)}></button>
        </div>

        <Footer 
          nav={this.handleNav.bind(this)} />

        <Menu 
          classes={this.state.menuClasses}
          nav={this.handleNavMobile.bind(this)} />

        <Socialize />

      </div>
    );
  }
}

export default App;

function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}
