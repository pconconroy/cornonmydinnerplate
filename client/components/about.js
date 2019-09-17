import React, {Component} from 'react'
import {Container, Image, Text} from 'semantic-ui-react'

class About extends Component {
  render() {
    return (
      // <div className="about-page">
      //   {/* <h1 id="about-title"> Corn on My Dinner plate</h1>
      //   <h1 id="about-sep">____________________</h1> */}
      //   <h1 id="about-text">

      //     Corn on My dinner plate is a band hailing from Chicago, Illinois.
      //     durger skorpiter durger skorpiter durger skorpiter durger skorpiter
      //     durger skorpiter durger skorpiter durger skorpiter. Durger flurger
      //     durger flurger maif maif maif maif maif Matt English.
      //   </h1>
      // </div>
      <div className="about-page">
        <h1 id="about-title">About</h1>
        <h1 id="about-sep">____________________</h1>
        <h1 id="about-text">
          Waiting for info
          {/* <Button
          id="page-select"
          name="pictures"
          inverted
          color="olive"
          active={this.state.isPicturePage}
          onClick={this.handlePageChange}
        >
          Pictures
        </Button>
        <Button
          id="page-select"
          name="videos"
          inverted
          color="olive"
          active={this.state.isVideoPage}
          onClick={this.handlePageChange}
        >
          Videos
        </Button> */}
        </h1>
        {/* {this.state.pageToShow === 'pictures' ? (
        <div>
          <h1>These are the pictures</h1>
          {this.gridMaker()}
        </div>
      ) : (
        <div>
          <iframe
            width="200"
            height="100"
            src="https://www.youtube.com/embed/J8UEi3xaWhM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      )} */}
      </div>
    )
  }
}

export default About
