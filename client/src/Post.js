import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '1px solid red'
  }
}

const Post = ({ post, deletePost }) => {
  return (
    <div style={styles.container}>
      <p>{post.title}</p>
      <img src={post.img} />
      <p>{post.caption}</p>
      <button type='button' onClick={deletePost}>DELETE</button>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default Post
