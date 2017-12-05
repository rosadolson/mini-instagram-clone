import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const PostList = ({ posts, deletePost }) => {
  return (
    <div style={styles.container}>
      {
        posts.map(( post, index) => {
          return (
            <Post 
            key={index}
            post={post}
            deletePost={deletePost}
            />
          )
        })
      }
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostList