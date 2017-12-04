import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostList = ({ posts }) => {
  return (
    <div>
      {
        posts.map(( post, index) => {
          return (
            <Post key={index} post={post}/>
          )
        })
      }
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList