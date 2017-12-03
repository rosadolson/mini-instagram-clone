import React from 'react'
import PropTypes from 'prop-types'

const PostList = ({ posts }) => {
  return (
    <div>
      {
        posts.map(( item, index) => {
          return <p key={index}>{item.title}</p>
        })
      }
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList