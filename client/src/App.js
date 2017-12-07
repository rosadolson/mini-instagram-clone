import React, {Component} from 'react'
import PostList from './PostList'
import $ from 'jquery'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    display: 'flex',
    justifyContent: 'center'
  },
  form: {
   backgroundColor: '#ecf0f1',
   padding: '3%',
   display: 'flex',
   flexDirection: 'column'
  }
}

class App extends Component {
  state = {
    posts: undefined,
    title: undefined,
    img: undefined,
    caption: undefined,
    userName: undefined
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
      caption: this.state.caption,
      userName: this.state.userName
    }
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: newPost
    }).done(response => {
      console.log(response)
      this.loadPostsFromServer()
    })
  }

  onTitleChange = (e) => this.setState({ title: e.target.value })

  onImageChange = (e) => this.setState({ img: e.target.value })

  onCaptionChange = (e) => this.setState({ caption: e.target.value })

  onUserNameChange = (e) => this.setState({ userName: e.target.value })

  deletePost = (post) => {
    $.ajax({
      url: `/api/posts/${post._id}`,
      method: 'DELETE'
    }).done(response => {
      this.loadPostsFromServer()
    })
  }

  render () {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Instagram Solution</h1>
        <div>
          <form style={styles.form}>
            <label>Title:</label>
            <input type='text' onChange={this.onTitleChange} />
            <label>Image URL:</label>
            <input type='text' onChange={this.onImageChange} />
            <label>Caption:</label>
            <input type='text' onChange={this.onCaptionChange} />
            <label>Username:</label>
            <input type='text' onChange={this.onUserNameChange} />
          </form>
          <button onClick={this.submitNewPost}>SUBMIT</button>
        </div>
        {
          this.state.posts
          ? <PostList 
            posts={this.state.posts} 
            deletePost={this.deletePost} 
            />
          : 'No Posts'
        }
      </div>
    )
  }
}

export default App
