import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostList = ({ posts, deletePost }) => {
  return (
    <div>
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