import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact" id='contact'>
        <div>
          <div className="text">
            <h1>//CONTACT US</h1>
            <h2>WHAT'S COOKIN' GOOD LOOKIN'?</h2>
            <p>Wanna link? To inquire about advertising and all of our digital media services please fill out the form to the right. Or, if you just like what we do we're always fishing for compliments!</p>
          </div>
          <div className="form">
            <form>
              <input placeholder="Name" />
              <input placeholder="Email" />
              <textarea placeholder="Comments"></textarea>
              <button>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
