import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    backgroundColor: '#ecf0f1',
    padding: '3%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: '4%',
    marginTop: '2%'
  },
  header: {
    fontFamily: 'Lobster, cursive',
    fontSize: '2em',
    display: 'flex',
    justifyContent: 'center',
    color: 'black'
  },
  form: {
    fontFamily: 'Open Sans, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    marginTop: '3%',
    marginLeft: '80%',
    backgroundColor: 'white',
  }
}

const PostForm = ({ updateTitle, updateImg, updateCaption, submitNewPost }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.header}>Share A Photo</h3>
      <div>
        <form style={styles.form}>
          <input type='text' placeholder='Title' onChange={updateTitle} />
          <input type='text' placeholder='Image' onChange={updateImg} />
          <input type='text' placeholder='Caption' onChange={updateCaption} />
        </form>
        <button style={styles.button} onClick={submitNewPost}>SUBMIT</button>
      </div>
    </div>
  )
}

PostForm.propTypes = {
  updateTitle: PropTypes.func.isRequired,
  updateImg: PropTypes.func.isRequired,
  updateCaption: PropTypes.func.isRequired,
  submitNewPost: PropTypes.func.isRequired
}

export default PostForm
