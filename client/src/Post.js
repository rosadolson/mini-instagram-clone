import React from 'react'
import PropTypes from 'prop-types'
import * as FontAwesome from 'react-icons/lib/fa'

const styles = {
  container: {
    border: '2px solid #ecf0f1',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    margin: '3%',
    borderRadius: '3px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '.75em'
  },
  image: {
    width: '100%',
    display: 'flex',
    alignSelf: 'center'
  },
  topSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2%'
  },
  userIcon: {
    backgroundColor: '#ecf0f1',
    padding: '3%',
    borderRadius: '100%',
    fontSize: '15px'
  },
  bottomTextSection: {
    paddingLeft: '3%',
    paddingBottom: '3%',
    margin: '0'
  },
  bottomIconSection: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '15px',
    backgroundColor: 'white',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '3%',
    paddingRight: '3%'
  },
  bottomLeftIcon: {
    marginRight: '9px'
  }
}

const Post = ({ post, deletePost }) => {
  return (
    <div style={styles.container}>

      <div style={styles.topSection}>
        <FontAwesome.FaUser style={styles.userIcon} />
        <p>{post.title}</p>
        <button type='button' onClick={deletePost}>X</button>
      </div>

      <img style={styles.image} src={post.img} />

      <div>
        <div style={styles.bottomIconSection}>
          <div>
            <FontAwesome.FaHeartO style={styles.bottomLeftIcon} />
            <FontAwesome.FaCommentO style={styles.bottomLeftIcon} />
            <FontAwesome.FaPaperPlaneO />
          </div>
          <div>
            <FontAwesome.FaStickyNoteO />
          </div>
        </div>
        <p style={styles.bottomTextSection}>{post.caption}</p>
      </div>

    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default Post
