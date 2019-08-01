import React from 'react'
import Post from './Post'
import Comment from './Comment'

import Routes from '../Routes'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>

        <Post title="Teste"/>
        <Post title="Teste"/>
        <Post title="Teste"/>

        <div className="container">

          <Comment/>

        </div> 
        <Routes/>
      </div>
      
    )
  }
}