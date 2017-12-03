import React, {Component} from 'react'
import Header from './Header'
import PostList from './PostList'
import $ from 'jquery'

class App extends Component {
  state = {
    posts: undefined,
    title: undefined,
    img: undefined,
    caption: undefined
  }

  componentDidMount() {
    this.loadPostsFromServer()
  }

  loadPostsFromServer = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done((response) => {
      this.setState({ posts: response.posts })
    })
  }

  submitNewPost = () => {
    const newPost = {
      title: this.state.title,
      img: this.state.img, 
      caption: this.state.caption
    }
    $.ajax({ 
      url: '/api/posts',
      method: 'POST',
      data: newPost
    }).done((response) => {
      this.loadPostsFromServer()
    })
  }

  updateTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  updateImg = (e) => {
    this.setState({ img: e.target.value })
  }

  updateCaption = (e) => {
    this.setState({ caption: e.target.value })
  }

  render () {
    return (
      <div> 
      <form>
        <input type='text' placeholder='Title' onChange={this.updateTitle} />
        <input type='text' placeholder='Image' onChange={this.updateImg} />
        <input type='text' placeholder='Caption' onChange={this.updateCaption} />
        <button onClick={this.submitNewPost}>SUBMIT</button>
      </form>
      <Header />
      {
        this.state.posts
        ? <PostList posts={this.state.posts} />
        : 'No Posts Yet'
      }
    </div>  
    )
  }
}

export default App
