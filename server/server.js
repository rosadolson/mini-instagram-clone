const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Post = require('./models/Post')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/INSTAGRAM_DB_SOLUTION')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.get('/api/posts', (req, res) => {
  Post.find((err, posts) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: `SUCCESS`, posts })
    }
  })
})

app.post('/api/posts', (req, res) => {
  const {title, img, caption, userName} = req.body
  const newPost = {title, img, caption, userName}
  Post(newPost).save((err, savedPost) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', data: savedPost})
    }
  })
})

app.get('/api/posts/:postId', (req, res) => {
  const postId = req.params.postId
  Post.findById({_id: postId}, (err, post) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: `Found: ${post}`, post})
    }
  })
})

app.delete('/api/posts/:postId', (req, res) => {
  const postId = req.params.postId
  Post.remove({_id: postId}, (err, post) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: `Deleted: ${post}` })
    }
  })
})

const server = app.listen(port, () => console.log(`Running on port: ${port} 🔥`))

module.exports = server
