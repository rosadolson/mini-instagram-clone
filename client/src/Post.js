import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ post }) => {
  return (
    <div>
      <p>{post.title}</p>
      <img src={post.img} />
      <p>{post.caption}</p>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
