const getSubtitles = require('youtube-captions-scraper').getSubtitles;

let transcript = ""
const subtitles = (videoID, callback) => {
  getSubtitles({
    videoID: videoID, // youtube video id
    lang: 'en'
  }).then((captions) => {
    captions.forEach((ele) => {
      transcript += ele.text;
    });
    callback(transcript)
    transcript = " "
  }).catch(e => callback(transcript = ''))
}

module.exports = subtitles;