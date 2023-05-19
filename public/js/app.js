console.log('client side JS')

const callFetch = (input) => {
  fetch(`http://localhost:1000/summarise/${input}`)
    .then((res) => {
      res.text()
        .then((data) => {
          textBox.textContent = data;
        })
    })
}

const searchBar = document.querySelector('.search')
const textBox = document.querySelector('.textbox')
const button = document.querySelector('button')
const youtubeForm = document.querySelector('form')

youtubeForm.addEventListener('submit', (e) => {
  e.preventDefault()
  textBox.textContent = `Crunching Data...`
  let url = searchBar.value
  searchBar.value = ''
  if (url === undefined) {
    console.log(`enter video URL`);
  }
  else {
    callFetch(url)
  }
})