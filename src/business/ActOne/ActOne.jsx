import React from 'react'
import FormA from './FormA'
import ShellContainner from '../../containers/ShellContainner'

export default class ActOne extends React.Component {
  onPageEvent = (e) => {
    console.log(e);
  }

  state = {
    pages: [
      {
        text: "Text A",
        business: <FormA id={0} onEvent={this.onPageEvent} />
      }, {
        text: "Text B",
        business: <FormA id={1} onEvent={this.onPageEvent} />
      }
    ]
  }

  render() {
    return <ShellContainner pages={this.state.pages} />
  }
}
