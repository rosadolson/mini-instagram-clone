import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const PostList = ({ posts, deletePost }) => {
  return (
    <div>
      {
        posts.map((post, index) => {
          return (
           <Post post={post}
            key={index}
            deletePost={() => deletePost(post)}
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
