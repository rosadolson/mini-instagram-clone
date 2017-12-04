import React from 'react'
import PropTypes from 'prop-types'

const NewPostForm = ({ updateTitle, updateImg, updateCaption, submitNewPost }) => {
  return (
    <div>
      <form>
        <input type='text' placeholder='Title' onChange={updateTitle} />
        <input type='text' placeholder='Image' onChange={updateImg} />
        <input type='text' placeholder='Caption' onChange={updateCaption} />
        <button onClick={submitNewPost}>SUBMIT</button>
      </form>
    </div>
  )
}

NewPostForm.propTypes = {
  updateTitle: PropTypes.func.isRequired,
  updateImg: PropTypes.func.isRequired,
  updateCaption: PropTypes.func.isRequired,
  submitNewPost: PropTypes.func.isRequired
}

export default NewPostForm
