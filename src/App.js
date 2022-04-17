import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress : 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
      <BrowserRouter>
      {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      /> */}
      <NavBar />
        <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="home" pageSize={10} country={'us'} category={'general'} />}/>
            <Route exact path="/entertainment"   element={<News setProgress={this.setProgress} pageSize={5} country={'us'} key="entertainment" category={'entertainment'}/>}/>
            <Route exact path="/health"  element={<News setProgress={this.setProgress} key="health" pageSize={5} country={'us'} category={'health'}/>}/>
            <Route exact path="/science"  element={<News setProgress={this.setProgress} pageSize={5} country={'us'} key="science" category={'science'}/>}/>
            <Route exact path="/sports"  element={<News setProgress={this.setProgress} pageSize={5} country={'us'} key="sports" category={'sports'}/>}/>
            <Route exact path="/technology"  element={<News setProgress={this.setProgress} pageSize={5} country={'us'} key="technology" category={'technology'}/>}/>
            <Route exact path="/business"  element={<News setProgress={this.setProgress} pageSize={5} country={'us'} key="business" category={'business'}/>}/>
            <Route exact path="/general"  element={<News setProgress={this.setProgress} pageSize={5} country={'us'} key="general" category={'general'}/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}



