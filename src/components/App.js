import React from 'react'
import Post from './Post'
import Comment from './Comment'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>

        <Post title="Teste"/>
        <Post title="Teste"/>
        <Post title="Teste"/>

        <div className="container">

          <Comment text='Teste de comentário'/>

        </div> 
        
      </div>
      
    )
  }
}