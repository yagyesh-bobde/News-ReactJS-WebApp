import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div>
          This is news
        <Newsitem title="title" description="desc" />
      </div>
    )
  }
}

export default News
