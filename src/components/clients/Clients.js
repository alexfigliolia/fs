import React, { Component } from 'react';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "paths" : [
        "pan.jpg",
        "clients/pb.png",
        "clients/hardrock.png",
        "clients/coachella.png",
        "clients/thrillest.png",
        "clients/miyabi.jpg",
        "clients/WaldorfLogo.png",
        "clients/deserttrip.png",
        "clients/igloo.png",
        "clients/ww.jpg",
        "clients/staub.jpg",
        "clients/hearst.png",
        "clients/wolfgang.png",
        "clients/zwilling.png",
        "clients/hellmanns.png",
        "clients/lecreuset.png",
        "clients/gv.png",
        "clients/chang.jpg",
        "clients/sweetfin.png",
        "clients/strandhouse.jpg",
        "clients/oscars.png",
        "clients/wusthof.jpg",
        "clients/estrella.png",
        "clients/elited.jpg",
        "clients/tatsu.jpg",
        "clients/pono.png",
        "clients/bestia.png",
        "clients/kandc.png",
        "clients/terrine.png",
        "clients/adelaida.jpg",
        "clients/pokeworks.png",
        "clients/redo.png",
        "clients/plancheck.png",
        "clients/sambar.png",
        "clients/mainland.png",
        "clients/oitf.jpg",
        "clients/rawberri.png",
        "clients/aetus.png"
      ]
    }
  }
  componentDidMount(){
    if(this.state.paths.length > 37) {
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
      <div className="clients" id='clients'>
        <div>
          <div className='bnr'>
            <img ref='first' alt='food steez' />
            <h1>//Clients</h1>
          </div>
          <div className='scroll'>
            <button id='cb' onClick={this.props.scroll}></button>
          </div>
          <div className='client-grid'>
            <div>
              <img ref="img0" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img1" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img2" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img3" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img4" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img5" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img6" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img7" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img8" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img9" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img10" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img11" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img12" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img13" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img14" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img15" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img16" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img17" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img18" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img19" alt="Food Steez client" />
            </div>
             <div>
              <img ref="img20" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img21" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img22" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img23" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img24" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img25" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img26" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img27" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img28" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img29" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img30" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img31" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img32" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img33" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img34" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img35" alt="Food Steez client" />
            </div>
            <div>
              <img ref="img36" alt="Food Steez client" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;