import React, { Component } from 'react'
import loading from './ripple.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='position-absolute end-50 translate-middle' >
        <img src={loading} alt='loading' style={{height:'50px', width:'50px'}} className="mt-3 mb-3"/>
      </div>
    )
  }
}

export default Loading
