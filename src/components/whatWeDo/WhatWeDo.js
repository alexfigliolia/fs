import React, { Component } from 'react';

class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "paths" : [
        "view.jpeg",
        "lbeer-large.jpg",
        "pan-large.jpg",
        "shrimp-large.jpg",
        "shrimp-large.jpg",
        "beer-large.jpg"
      ]
    }
  }
  componentDidMount(){
    if(this.state.paths.length > 5) {
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
      <div className="what-we-do" id='whatWeDo'>
        <div className="wwd-banner" id='wwdb'>
          <img ref="img0" alt='Food Steez' />
          <h1>What we do</h1>
          <div className='but-contain'>
            <button onClick={this.props.scroll}></button>
          </div>
        </div>
        <div className="info-grid">
          <div className="grid-item">
            <h2>//WHAT IS FOOD STEEZ?</h2>
            <p>Food Steez is a social media influencer. Parallel to that, we are a digital agency with production capabilities. Our content is produced in-house. We have experience in multiple facets of production. From recipe content to documentary, lifestyle and commercial work, we've done it all.</p>
          </div>
          <div className="grid-item grid-img gm1">
            <img ref="img1" alt="Food Steez" />
          </div>
          <div className="grid-item grid-img gm2">
            <img ref="img2" alt="Food Steez" />
          </div>
          <div className="grid-item">
            <h2>//WHY DIGITAL CONTENT?</h2>
            <p>There's been speculation over digital advertising. If you're still on the edge, know this - your competitor is doing it. And they're already one step ahead of the game.</p>
            <p>Traditional advertising is dying - television, radio and billboards don't cut it anymore. The shift to digital advertising has caused brands and agencies to rethink their marketing strategies.</p>
            <p>Utilizing high quality digital content online is the new standard to increase brand exposure, customer engagement, customer experiences, inbound web traffic and brand loyalty.</p>
          </div>
          <div className="grid-item grid-img gm3">
            <img ref="img3" alt="Food Steez" />
          </div>
          <div className="grid-item">
            <h2>//WHY WORK WITH US?</h2>
            <p>Working with Food Steez means you're working with the best of the best. We pride ourselves on being a boutique agency whose quality of work surpasses the quality of our larger competitors.</p>
            <p>On the Food Steez Facebook Page we generated 126,281,470 video views in 2016. We grew our following from a mere 25,596 followers to 550,460 followers in under 12 months. We understand what it takes not only to represent a quality brand, but to increase engagement as well.</p>
          </div>
          <div className="grid-item grid-img gm4">
            <img ref="img4" alt="Food Steez" />
          </div>
          <div className="grid-item grid-img gm5">
            <img ref="img5" alt="Food Steez" />
          </div>
          <div className="grid-item">
            <h2>//LEARN MORE</h2>
            <p>Large or small, we're here to execute stellar projects for our clients. Our services range from sponsored posts, to professional photography, commercial video productions and social media management. We have multiple case studies showcasing the success our clients have had working with Food Steez. We're happy to send additional information upon request.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;