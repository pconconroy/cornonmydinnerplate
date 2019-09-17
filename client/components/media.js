import React, {Component} from 'react'
import {Button, Grid, Image} from 'semantic-ui-react'
import Pictures from './pictures'
import axios from 'axios'

class Media extends Component {
  constructor() {
    super()
    this.images = [
      'https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?cs=srgb&dl=beautiful-beauty-black-and-white-157661.jpg&fm=jpg',
      'https://jooinn.com/images/portrait-119.jpg',
      'http://www.overhereplease.com/wp-content/uploads/2018/05/Portrait_of_britain-1005x1024.jpg',
      'https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?cs=srgb&dl=beautiful-beauty-black-and-white-157661.jpg&fm=jpg',
      'https://jooinn.com/images/portrait-119.jpg',
      'http://www.overhereplease.com/wp-content/uploads/2018/05/Portrait_of_britain-1005x1024.jpg',
      'https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?cs=srgb&dl=beautiful-beauty-black-and-white-157661.jpg&fm=jpg',
      'https://jooinn.com/images/portrait-119.jpg',
      'http://www.overhereplease.com/wp-content/uploads/2018/05/Portrait_of_britain-1005x1024.jpg',
      'https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?cs=srgb&dl=beautiful-beauty-black-and-white-157661.jpg&fm=jpg',
      'https://jooinn.com/images/portrait-119.jpg',
      'http://www.overhereplease.com/wp-content/uploads/2018/05/Portrait_of_britain-1005x1024.jpg',
      'https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?cs=srgb&dl=beautiful-beauty-black-and-white-157661.jpg&fm=jpg',
      'https://jooinn.com/images/portrait-119.jpg',
      'http://www.overhereplease.com/wp-content/uploads/2018/05/Portrait_of_britain-1005x1024.jpg',
      'https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?cs=srgb&dl=beautiful-beauty-black-and-white-157661.jpg&fm=jpg',
      'https://jooinn.com/images/portrait-119.jpg',
      'http://www.overhereplease.com/wp-content/uploads/2018/05/Portrait_of_britain-1005x1024.jpg'
    ]
    this.state = {
      pageToShow: 'pictures',
      isPicturePage: true,
      isVideoPage: false,
      changeKey: 0
    }
  }

  handlePageChange = async evt => {
    let newKey = this.state.changeKey
    newKey++
    console.log('HDJNSJ', this.state)
    if (evt.target.name === 'pictures') {
      await this.setState({
        pageToShow: 'pictures',
        isPicturePage: true,
        isVideoPage: false,
        changeKey: newKey
      })
      window.location.reload()
    } else if (evt.target.name === 'videos') {
      this.setState({
        pageToShow: 'videos',
        isPicturePage: false,
        isVideoPage: true,
        changeKey: newKey
      })
    }
  }
  gridMaker = () => {
    let gridString = '<Grid>'

    for (let i = 0; i < this.images.length; i++) {
      let columns = 0
      if ((columns / 2) % 2 === 0) {
        gridString += '<Grid.Row columns={3}>'
      }
      if ((columns / 2) % 2 !== 0) {
        gridString += '</Grid.Row>'
      }
      gridString += '<Grid.Column><Image src={image[i]} /></Grid.Column>'
    }
    gridString += '</Grid>'
    let grid = document.createElement('div')
    grid.innerHtml = gridString
    console.log(gridString)
  }
  rerender = () => {
    let newTax = this.state.changeTax
    newTax++
    return newTax
  }
  render() {
    return (
      <div className="media-page">
        <h1 id="about-title">Media</h1>
        <h1 id="about-sep">____________________</h1>
        <h1 id="about-text">
          {/* <Button
            id="page-select"
            name="pictures"
            inverted
            color="olive"
            active={this.state.isPicturePage}
            onClick={this.handlePageChange}
          >
            Pictures
          </Button> */}
          {/* <Button
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
        {this.state.pageToShow === 'pictures' ? (
          <Pictures key={this.state.changeKey} />
        ) : (
          <div>
            <iframe
              width="200"
              height="100"
              src="https://www.youtube.com/embed/J8UEi3xaWhM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    )
  }
}

export default Media
