import React, { Component } from 'react';

class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      "path" : "https://www.youtube.com/embed/v6ocnVmXTsI?autoplay=1&controls=0&rel=0&showinfo=0&loop=1&autohide=1&wmode=transparent&hd=1"
    }
  }
  componentDidMount(){
    if(this.state.path !== "loaded") {
      this.refs.frame.src = this.state.path;
      this.setState({
        "path" : "loaded"
      })
    }
  }
  render() {
    return (
      <div className="banner" id='banner'>
        <div className='vid'>
            <iframe ref="frame" frameBorder="0" height="120%" width="100%"></iframe>
        </div>
        <div className='center'>
          <h1>A digital Agency</h1>
          <h2>Changing the way the world sees food</h2>
          <button onClick={this.props.scroll}></button>
        </div>
      </div>
    );
  }
}

export default Banner;