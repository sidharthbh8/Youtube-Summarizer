const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.CHATGPT_API,
});
const openai = new OpenAIApi(configuration);

const nlp = (transcript, callback) => {
  let script = `${transcript}`

  const ats = async() => {
    const shortning = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `can i provide you a article and will you summarise it for me in not more than 45 words. here -> ${script}`,
      temperature: 0.7,
      max_tokens: 256
    });
    const readable = shortning.data.choices[0].text
    callback(readable)
    // console.log(readable);
  }
  ats()
}

module.exports = nlp;