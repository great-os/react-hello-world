import React, { Component, PropTypes } from 'react'
import './ShellContainner.css'
import Menus from '../../compoments/Menus'

export default class ShellContainner extends Component {
  static propTypes = {
    pages: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      pages: this.props.pages,
      pageCount: props.pages.length,
      selectedIndex: 0
    }
  }

  createMenus = (pages) => (
    pages.map(page => {
      return { text: page.text }
    })
  )

  createPage = (index) => (
    this.state.pages[index].business
  )

  onMenuChange = (e) => {
    switch (e.type) {
      case "MENU_CLICK":
        this.setState({ selectedIndex: e.index })
        break;
      default:
        break;
    }
  }

  onPageChange = (e) => {

  }

  render() {
    return (
      <div className="uf-shell-containner">
        <div className="menu-group">
          <Menus menus={this.createMenus(this.state.pages)}
            selectedIndex={this.state.selectedIndex}
            onClick={this.onMenuChange} />
        </div>
        <div className="content">
          {this.createPage(this.state.selectedIndex)}
        </div>
      </div>
    )
  }
}
