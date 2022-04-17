import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  
  capitalizeFirstletter = (str) => {
    return  str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      total: 0,
      loading: false,
    };
    document.title = `${this.capitalizeFirstletter(this.props.category)}-NewsMonkey`
  }
  updateNews = async() => {
    this.props.setProgress(30)
    const Url = `https://newsapi.org/v2/top-headlines?q=${''}&country=${this.props.country}&category=${this.props.category}&apiKey=760eaffef38448f995a399fa3d68f886&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let info = await fetch(Url);
    this.props.setProgress(50)
    let Articles_raw = await info.json();
    this.props.setProgress(70)
    this.setState({
      articles: Articles_raw.articles,
      total: Articles_raw.totalResults,
      loading: false
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews()
  }

  // handleNext = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.total / this.props.pageSize)) {
  //   } else {
  //   this.setState(
  //     {
  //       page: this.state.page +1
  //     }
  //   )
  //   this.updateNews()
  // }};

  // handlePrev = async () => {
  //   if (this.state.page - 1 < 1) {
  //   } else {
  //     this.setState(
  //       {
  //         page: this.state.page -1
  //       }
  //     )
  //     this.updateNews()
  //   }};

  fetchMoreData = async() => {
    this.setState({
      page: this.state.page +1
    })
    let Url = `https://newsapi.org/v2/top-headlines?q=${''}&country=${this.props.country}&category=${this.props.category}&apiKey=760eaffef38448f995a399fa3d68f886&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let info = await fetch(Url);
    let parsedData = await info.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      total: parsedData.totalResults,
    });
  }

  render() {
    return (
      <div className="container">
         {this.state.loading && <Loading />}

        <h1 className="my-3 text-center text-dark"> Top {this.props.category==='general'?'':this.capitalizeFirstletter(this.props.category)} Headlines - NewsMonkey</h1>

{/* Next page and previous page arrow buttons at the top of the page */}
        {/* <div className="container my-2 mx-4 d-flex justify-content-between">

          <button
            disabled={this.state.page - 1 < 1}
            type="button"
            onClick={this.handlePrev}
            clasName="translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: "2rem", height: "2rem" }}>
            &laquo;
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.total / this.props.pageSize)}
            type="button"
            onClick={this.handleNext}
            clasName="translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: "2rem", height: "2rem" }}>
            &raquo;</button>
        </div> */}


       
        <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.total}
              loader={<Loading/>}
            >
        <div className="container row my-3">
         {this.state.articles.map((element) => {
            return (

              <div className="my-2 col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  time={new Date(element.publishedAt).toDateString()}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
          </InfiniteScroll>
        {/* <div className="container mx-4 d-flex justify-content-around">
          <button
            disabled={this.state.page - 1 < 1}
            type="button"
            onClick={this.handlePrev}
            className="btn btn-dark"
          >
            &laquo; Previous
          </button> */}


          {/* Page Numbers to scroll through
          <div
            className="btn-groupmb-2"
            role="group"
            aria-label="Second group"
            style={{ marginEnd: '1.5rem', marginStart: '1.5rem' }}
          >
            <button type="button" className="btn btn-secondary disabled">
              {this.state.page}
            </button>
          </div>

          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.total / this.props.pageSize)}
            type="button"
            onClick={this.handleNext}
            className="btn btn-dark"
          >
            Next &raquo;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;


News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number
};