import { ChatGPTAPI } from 'chatgpt'
let transcript = `this is a collie dog and this is Tokothe collie dog dubbed Toko the human dogon multiple media outlets and becomingincreasingly popular for its disturbinglifeless appearance inside this hyperrealistic costume is a person who'sliving out their dream of always wantingto be an animal in today's video we'llbe taking a deep dive into this humandog mystery and seeing just how close wecan get to finding out who this personreally is[Music]hey guys welcome back to another videoand if I could please have yourattention for just 10 seconds and thenwe'll get right into the video I'll letyou know when 10 seconds is up becausewe're gonna have a little red bar righthere we have a winter collection over atEarl doesn't exist.com which includesthis high quality denim jacket and wehave some other new designs so make sureto go check out the website and also myfirst ever album ear candy is premieringon this channel on January 26th at 6 PMPST and it's gonna be on all streamingservices so make sure to turn on postnotifications then you can turn them offafter I really don't care but yeahthat's it as the Red Bar over let's getstarted with the video so where did Tococome from it all started on April 11thon Twitter when this tweet was posted ithad a video attached in red I ordered acostume thanks to you I was able tofulfill my dream of becoming an animalas I'm recording this the Twitter videohas 1.9 million views and the topicalone has garnered tens of millions ofviews on Tick Tock but I'm getting aheadof myself this tweet was actually areply to zephit's tweet which was themrevealing the costume for the customerzeppe is an art studio that specializesin figurines animatronics bodysuits 3Dmodeling and Robotics they usually getcommissioned for films ads amusementparks and other expensive reasons theiroriginal tweet read I made a dogmodeling suit at the request of anindividual modeled on a collie dog itreproduces the appearance of a real dogthat walks on all fours like a real doghere they also link the section of theirwebsite where they give a few moredetails on the costume itself such asthe fact that it took 40 days to createand the production amount was 2 millionyen which translates directly to 15437.46 we're talking USD remember thisdoesn't mean that the costume was boughtfor that amount if the company wanted tomake any sort of profit they definitelyupped the `
const creds = async () => {
  const askGpt = new ChatGPTAPI({
    apiKey: process.env.CHATGPT_API
  })

  let prompt = await askGpt.sendMessage('can you summarize the text I give you in not more than 45 words. providing main part of the paragarph')
  prompt = await askGpt.sendMessage(transcript, {
    parentMessageId: prompt.id
  })
  console.log(prompt);
}

creds()