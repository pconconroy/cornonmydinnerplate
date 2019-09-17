import React, {Component} from 'react'
import {Button, Input, Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {sendFunc} from '../store/email'

class Booking extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      subject: '',
      details: ''
    }
  }
  handleEmail = evt => {
    evt.preventDefault()
    console.log('heefkdsjf', this.state)
    const emailObj = this.state
    this.props.sendEmail(emailObj)
  }
  handleSubmit = evt => {}
  handleChange = evt => {
    this.setState({[evt.target.name]: evt.target.value})
  }
  render() {
    return (
      <div className="about-page">
        <h1 id="about-title">Booking</h1>
        <h1 id="about-sep">____________________</h1>

        <div className="booking">
          <Form>
            <Form.Field>
              <label>Name</label>
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Name or Company"
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Name or Company"
              />
            </Form.Field>

            <Form.Field>
              <label>Subject</label>
              <input
                id="subject"
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange}
                placeholder="Subject"
              />
            </Form.Field>
            <Form.Field>
              <label>Details</label>
              <textarea
                id="details"
                name="details"
                value={this.state.details}
                onChange={this.handleChange}
                placeholder="Details"
              />
            </Form.Field>

            <br />
            <Button inverted color="olive" onClick={this.handleEmail}>
              send booking request
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}
const mapDispatch = dispatch => {
  return {
    sendEmail: emailObj => dispatch(sendFunc(emailObj))
  }
}
export default connect(null, mapDispatch)(Booking)
