import React from 'react'
import FormA from './FormA'
import ShellContainner from '../../containers/ShellContainner'

export default class ActOne extends React.Component {
  state = {
    pages: [
      {
        text: "Text A",
        business: <FormA id="0" />
      }, {
        text: "Text B",
        business: <FormA id="1" />
      }
    ]
  }

  render() {
    return <ShellContainner pages={this.state.pages} />
  }
}
