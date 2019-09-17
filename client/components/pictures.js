import React, {Component} from 'react'
import axios from 'axios'
import loadjs from 'loadjs'
class Pictures extends Component {
  componentDidlMount() {
    axios.get('https://cdn.curator.io/4.0/js/curator.min.js')
  }
  render() {
    axios.get('https://cdn.curator.io/4.0/js/curator.min.js')
    return (
      <div>
        <div key={this.props.key} id="curator-feed-corn">
          <a
            href="https://curator.io"
            target="_blank"
            className="crt-logo crt-tag"
          >
            Powered by Curator.io
          </a>
        </div>
      </div>
    )
  }
}

export default Pictures
