import React, { Component } from 'react';

class ImgGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "paths" : [
        "tunasalad.jpg", 
        "beer.jpg", 
        "burger.jpg", 
        "seafood.jpg", 
        "pasta.jpg",
        "breakfast.jpg",
        "soup.jpg",
        "pan.jpg",
        "shrimp.jpg",
        "muscles.jpg",
        "burito.jpg",
        "lbeer.jpg",
        "cocktail.jpg",
        "burger2.jpg",
        "chili.jpg",
        "salmonsalad.jpg",
        "https://www.youtube.com/embed/fgE4rBylIIQ",
        "https://www.youtube.com/embed/kNswNkw5lNk",
        "https://www.youtube.com/embed/9ZUxJzTulGk",
        "https://www.youtube.com/embed/B-tCl34goJo"
      ]
    }
  }
  componentDidMount(){
    if(this.state.paths.length > 19) {
      var i = 0;
      for(var ref in this.refs) {
        this.refs[ref].src = this.state.paths[i];
        i++;
      }
      this.setState({
        "paths" : ["loaded"]
      });
    }
  }
  render() {
    return (
      <div className='img-grid' id='imgGrid'>
      	<h1>We are a team of creative individuals changing how the world sees food.</h1>
      	<div className='grid-container'>
          <div>
            <img ref="img0" alt="food steez"/>
          </div>
          <div>
            <img ref="img1" alt="food steez"/>
          </div>
          <div>
            <img ref="img2" alt="food steez"/>
          </div>
          <div>
            <img ref="img3" alt="food steez"/>
          </div>
          <div>
            <img ref="img4" alt="food steez"/>
          </div>
          <div>
            <img ref="img5" alt="food steez"/>
          </div>
          <div>
            <img ref="img6" alt="food steez"/>
          </div>
          <div>
            <img ref="img7" alt="food steez"/>
          </div>
      	</div>
        <h1>More from <img src="insta.png" alt='see our instagram' /></h1>
        <div className='grid-container'>
          <div>
            <img ref="img8" alt="food steez"/>
          </div>
          <div>
            <img ref="img9" alt="food steez"/>
          </div>
          <div>
            <img ref="img10" alt="food steez"/>
          </div>
          <div>
            <img ref="img11" alt="food steez"/>
          </div>
          <div>
            <img ref="img12" alt="food steez"/>
          </div>
          <div>
            <img ref="img13" alt="food steez"/>
          </div>
          <div>
            <img ref="img14" alt="food steez"/>
          </div>
          <div>
            <img ref="img15" alt="food steez"/>
          </div>
        </div>
        <h1>Our work has been viewed by hundreds of millions of people.</h1>
        <div className="vid-grid">
          <div className="video">            
            <iframe ref="frame0" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="video">           
            <iframe ref="frame1" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="video">
            <iframe ref="frame2" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="video">
            <iframe ref="frame3" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgGrid;