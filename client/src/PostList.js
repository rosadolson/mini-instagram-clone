import React from 'react'

const styles = {
  container: {
    border: '1px solid black'
  }
}

const PostList = ({ posts }) => {
  return (
    <div>
      {
        posts.map((item, index) => {
          return (
            <div key={index} style={styles.container}>
              <p>{item.title}</p>
              <p>{item.userName}</p>
              <img src={item.img} />
              <p>{item.caption}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostList
