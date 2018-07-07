var RTMClient = require('@slack/client').RTMClient;
var _ = require('lodash');
var express = require('express');
require('dotenv').config();
var token = process.env.SLACK_TOKEN;
console.log(token);
var rtm = new RTMClient(token);
rtm.start();
var conversationId = 'GBL8JC9V0';
// rtm.sendMessage('Hello there', conversationId)
//   .then((res) => {
//     // `res` contains information about the posted message
//     console.log('Message sent: ', res.ts);
//   })
//   .catch(console.error);
rtm.on('message', function (message) {
    // For structure of `event`, see https://api.slack.com/events/message
    // Skip messages that are from a bot or my own user ID
    if ((message.subtype && message.subtype === 'bot_message') ||
        (!message.subtype && message.user === rtm.activeUserId)) {
        return;
    }
    messageAnalyser(message);
    // Log the message
});
function messageAnalyser(message) {
    if (message) {
        console.log("(channel:" + message.channel + ") " + message.user + " says: " + message.text);
    }

    if (message.text.toLowerCase().includes('scala')){
        writeMessage(message.channel,'NodeJs is better than Scala !');
    }

}


function writeMessage(channel,message){
    rtm.sendMessage(message, channel)
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);
}