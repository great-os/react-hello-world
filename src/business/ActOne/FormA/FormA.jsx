import React, { Component, PropTypes } from 'react'

export default class FormA extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired
  }
  render() {
    return (
      <div>
        this is a content {this.props.id}
      </div>
    )
  }
}