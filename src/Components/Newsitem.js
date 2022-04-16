import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageurl, newsUrl, author, time,source } = this.props
        return (
            <div className='container'>
                <div className="card mt-3" style={{ width: "18rem" }}>
                    <span 
                    className="position-absolute translate-middle badge rounded-pill bg-danger"
                    style={{left: '93%', zIndex: 1}}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageurl ? imageurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CF_n_EGfexCyNj7fvlVfPCkUOGSVz7eplg&usqp=CAU"} className="card-img-top" style={{ height: '200px' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title.slice(0, 30) : "Title is missing"}...</h5>
                        <p className="card-text">{description ? description.slice(0, 80) : "description is missing"}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author.slice(0, 20) : "Unknown"}, published at {time} </small></p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary btn-sm">Link to the Article</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
