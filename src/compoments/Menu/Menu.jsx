import React, { Component, PropTypes } from 'react'
import './Menu.css'

export default class Menu extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  onMenuClick = () => {
    this.props.onClick({
      type: "MENU_CLICK",
      index: this.props.id
    })
  }

  render() {
    return (
      <div className={'uf-containner-menu' + (this.props.selected ? ' selected' : '')}
        onClick={this.onMenuClick}>
        {this.props.text}
      </div>
    )
  }
}
