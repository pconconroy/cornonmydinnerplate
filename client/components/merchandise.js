import React, {Component} from 'react'
import {fetchProducts} from '../store/products'
import {connect} from 'react-redux'

class Merchandise extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    return (
      <div>
        <p>this is the merchandise page</p>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(null, mapDispatch)(Merchandise)
