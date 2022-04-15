import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles : [],
            loading : false
        }
    }

    async componentDidMount () {
      let Url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=760eaffef38448f995a399fa3d68f886"
      let info = await fetch(Url) 
      let Articles_raw = await info.json()
      this.setState({articles : Articles_raw.articles})
    }
  render() {
    return (
      <div className="container row my-3">
          {this.state.articles.map((element)=>{
            return <div className="my-3 col-md-4" key={element.url}>
              <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} />
           </div>
          })}
      </div>
    );
  }
}

export default News;
