import React, { Component, PropTypes } from 'react'

export default class FormA extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    onEvent: PropTypes.func.isRequired
  }

  componentDidMount() {
    console.log('mont')
  }

  componentWillUnmount() {
    console.log('unmont')
  }

  onEvent = (e) => {
    this.props.onEvent({
      type: 'click'
    })
  }

  render() {
    return (
      <div onClick={this.onEvent}>
        this is a content {this.props.id}
      </div>
    )
  }
}