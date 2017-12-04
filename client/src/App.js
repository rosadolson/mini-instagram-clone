import React, {Component} from 'react'
import Header from './Header'
import PostList from './PostList'
import $ from 'jquery'
import NewPostForm from './NewPostForm'

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

  submitNewPost = (e) => {
    e.preventDefault()
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
      <NewPostForm 
        updateTitle={this.updateTitle}
        updateImg={this.updateImg}
        updateCaption={this.updateCaption}
        submitNewPost={this.submitNewPost}
      />
      <Header />
      {
        this.state.posts
        ? <PostList
        posts={this.state.posts}
        />
        : 'No Posts Yet'
      }
    </div>  
    )
  }
}

export default App
