import React, { Component, PropTypes } from 'react'
import Menu from '../Menu'

export default class Menus extends Component {
  static propTypes = {
    menus: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }

  onMenuClick = (e) => {
    this.props.onClick(e);
  }

  render() {
    return (
      <div>
        {this.props.menus.map((menu, index) => (
          <Menu text={menu.text}
            key={index}
            id={index}
            onClick={this.onMenuClick}
            selected={this.props.selectedIndex === index} />
        ))}
      </div>
    )
  }
}
