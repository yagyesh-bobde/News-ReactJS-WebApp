import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {

  render() {
    return (
      <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route exact path="/" element={<News key="home" pageSize={5} country={'us'} category={'general'} />}/>
            <Route exact path="/entertainment"   element={<News pageSize={5} country={'us'} key="entertainment" category={'entertainment'}/>}/>
            <Route exact path="/health"  element={<News key="health" pageSize={5} country={'us'} category={'health'}/>}/>
            <Route exact path="/science"  element={<News pageSize={5} country={'us'} key="science" category={'science'}/>}/>
            <Route exact path="/sports"  element={<News pageSize={5} country={'us'} key="sports" category={'sports'}/>}/>
            <Route exact path="/technology"  element={<News pageSize={5} country={'us'} key="technology" category={'technology'}/>}/>
            <Route exact path="/business"  element={<News pageSize={5} country={'us'} key="business" category={'business'}/>}/>
            <Route exact path="/general"  element={<News pageSize={5} country={'us'} key="general" category={'general'}/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}



