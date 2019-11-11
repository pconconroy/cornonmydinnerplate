import axios from 'axios'
const GET_PRODUCTS = 'GET_PRODUCTS'

const defaultProducts = {}

const getProducts = products => ({type: GET_PRODUCTS, products})

export const fetchProducts = () => async dispatch => {
  try {
    const headers = {
      Authorization: 'Basic cG9xOGFyZWctdnlkeS05ZWdqOnpqMjQtbTc5NzdsMTczdTVo',
      crossDomain: true
    }
    const {data} = await axios.get(
      'https://api.printful.com/store/products?status=all',
      headers
    )
  } catch (err) {
    console.error(err)
  }
}

export const myReducer = (state = defaultProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products

    default:
      return state
  }
}
