import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      size: 3,
      total: null,
    };
  }

  async componentDidMount() {
    let Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=760eaffef38448f995a399fa3d68f886&page=1&pageSize=${this.state.size}`;
    let info = await fetch(Url);
    let Articles_raw = await info.json();
    this.setState({
      articles: Articles_raw.articles,
      loading: true,
      total: Articles_raw.totalResults,
    });
    this.setState({ loading: false });
  }

  handleNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.total / this.state.size)) {
    } else {
      let Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=760eaffef38448f995a399fa3d68f886&page=${this.state.page + 1
        }&pageSize=${this.state.size}`;
      let info = await fetch(Url);
      let Articles_raw = await info.json();
      this.setState({
        articles: Articles_raw.articles,
        page: this.state.page + 1,
        loading: true,
      });
      this.setState({ loading: false });
    }
  };

  handlePrev = async () => {
    if (this.state.page - 1 < 1) {
    } else {
    let Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=760eaffef38448f995a399fa3d68f886&page=${this.state.page - 1
      }&pageSize=${this.state.size}`;
    let info = await fetch(Url);
    let Articles_raw = await info.json();
    this.setState({
      articles: Articles_raw.articles,
      page: this.state.page - 1,
      loading: true,
    });
    this.setState({ loading: false });
  }
  };

  render() {
    return (
      <div className="container">
        <div className="container row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="my-3 col-md-4" key={element.url}>
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
            type="button"
            onClick={this.handlePrev}
            className="btn btn-secondary "
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
            type="button"
            onClick={this.handleNext}
            className="btn btn-secondary"
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
