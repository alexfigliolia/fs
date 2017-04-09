import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="banner" id='banner'>
        <div className='vid'>
            <iframe frameBorder="0" height="120%" width="100%" src="https://www.youtube.com/embed/v6ocnVmXTsI?autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1"></iframe>
        </div>
        <div className='center'>
          <h1>WELCOME</h1>
        </div>
      </div>
    );
  }
}

export default Banner;