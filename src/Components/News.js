import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loading from './Loading' ;

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      total: null,
      loading: false,
      pageSize:15
    };
  }

  async componentDidMount() {
    let Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=760eaffef38448f995a399fa3d68f886&page=1&pageSize=${this.state.pageSize}`;
    this.setState({loading: true})
    let info = await fetch(Url);
    let Articles_raw = await info.json();
    this.setState({
      articles: Articles_raw.articles,
      total: Articles_raw.totalResults,
      loading:false
    });
  }

  handleNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.total / this.state.pageSize)) {
    } else {
      this.setState({loading: true})
      let Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=760eaffef38448f995a399fa3d68f886&page=${this.state.page + 1
        }&pageSize=${this.state.pageSize}`;
      let info = await fetch(Url);
      let Articles_raw = await info.json();
      this.setState({
        articles: Articles_raw.articles,
        page: this.state.page + 1,
        loading: false
      });
    }
  };

  handlePrev = async () => {
    if (this.state.page - 1 < 1) {
    } else {
      this.setState({loading: true})
      let Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=760eaffef38448f995a399fa3d68f886&page=${this.state.page - 1
        }&pageSize=${this.state.pageSize}`;
      let info = await fetch(Url);
      let Articles_raw = await info.json();
      this.setState({
        articles: Articles_raw.articles,
        page: this.state.page - 1,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container">
        
          <h1 className="my-3 text-center text-light">Today's top Headlines</h1>
          
          <div className="container my-2 mx-4 d-flex justify-content-between">

          <button
            disabled={this.state.page - 1 < 1}
            type="button"
            onClick={this.handlePrev}
            clasName="translate-middle btn btn-sm btn-primary rounded-pill" style={{width: "2rem", height:"2rem"}}>
            &laquo; 
          </button>
             <button
            disabled={this.state.page + 1 > Math.ceil(this.state.total / this.state.pageSize)}
            type="button"
            onClick={this.handleNext}
            clasName="translate-middle btn btn-sm btn-primary rounded-pill" style={{width: "2rem", height:"2rem"}}>
             &raquo;</button>
          </div>

        
          {this.state.loading && <Loading />}
        <div className="container row my-3">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="my-2 col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container mx-4 d-flex justify-content-around">
          <button
            disabled={this.state.page - 1 < 1}
            type="button"
            onClick={this.handlePrev}
            className="btn btn-dark"
          >
            &laquo; Previous
          </button>

          {/* Page Numbers to scroll through */}
          <div
            className="btn-group me-2"
            role="group"
            aria-label="Second group"
          >
            <button type="button" className="btn btn-secondary disabled">
              {this.state.page}
            </button>
          </div>

          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.total / this.state.pageSize)}
            type="button"
            onClick={this.handleNext}
            className="btn btn-dark"
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
