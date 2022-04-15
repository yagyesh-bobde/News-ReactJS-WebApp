import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title , description} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/newsitem" className="btn btn-info">Link to the Article</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
