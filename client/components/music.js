import React, {Component} from 'react'
import {Tab} from 'semantic-ui-react'
import About from './about'
import ReactLoading from 'react-loading'

class Music extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }
  render() {
    return (
      <div className="about-page">
        <h1 id="about-title">Music</h1>
        <h1 id="about-sep">____________________</h1>
        <h1 id="about-text">
          {/* <ReactLoading type="balls" color="white" /> */}
          <iframe
            src="https://open.spotify.com/embed/artist/1VRGL3j1znVg4TWuV8lLZk"
            width="700"
            height="450"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            onLoad={() => {
              console.log('we herwer')
            }}
          />
        </h1>
      </div>
    )
  }
}

export default Music
