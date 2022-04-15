import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title , description, imageurl, newsUrl} = this.props
        return (
            <div className='container'>
                <div className="card mt-3" style={{width: "18rem"}}>
                    <img src={imageurl} className="card-img-top" style={{height: '200px'}} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title?title.slice(0,30):"Title is missing"}...</h5>
                            <p className="card-text">{description?description.slice(0,80):"description is missing"}...</p>
                            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-dark btn-sm">Link to the Article</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
