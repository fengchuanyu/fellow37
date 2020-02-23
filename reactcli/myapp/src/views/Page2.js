import React, { Component } from 'react'

export default class Page2 extends Component {
  render() {
    return (
      <div>
        <h1>页面二</h1>
        <h1>{this.props.match.params.username}</h1>
      </div>
    )
  }
}
