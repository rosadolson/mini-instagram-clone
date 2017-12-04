const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Post = require('./models/Post')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/MINI-INSTAGRAM_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.post('/api/posts', (req, res) => {
  const {title, img, caption} = req.body
  const newPost = {title, img, caption}
  Post(newPost).save((err, savedPost) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', data: savedPost })
    }
  })
})

app.get('/api/posts', (req, res) => {
  Post.find((err, posts) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', posts })
    }
  })
})

app.delete('/api/posts/:id', (req, res) => {
  const postId = req.params.postId
  Post.findById({_id: postId}, (err, post) => {
    if (err) {
      res.json({ error: err})
    } else {
      res.json({ msg: 'Post Found!', post: post})
    }
  })
})

const server = app.listen(port, () => console.log(`Running on port: ${port} 🔥`))

module.exports = server
