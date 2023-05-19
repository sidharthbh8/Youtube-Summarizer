const express = require('express')
const subtitles = require('../models/subtitles')
const cors = require('cors')
const nlp  = require('../models/language')

const router = new express.Router()

router.get('/', (req, res) => {
  res.render('index',{
    name: 'sidharth'
  })
})

router.use(cors({
  origin: process.env.CHROME_EXTENSION,
  methods: 'GET'
}));

router.get('/summarise/*',(req, res) => {
  try {
    if(!req.query.v){
      return res.send("Enter Video URL");
    }
    const videoID = req.query.v
    subtitles(videoID, (transcript) => {
      if(transcript===''){
        res.send('Sorry! we currently only supports english language videos')
        return;
      }

      const subs = transcript
      nlp(subs, (readable) => {
        res.send(readable)
      })
      // res.send(transcript)
    })
  } catch (e) {
    res.send(e)
  }
})

router.get('/help', (req, res) => {
  res.send('How you can use this extension')
})

module.exports = router;