let ACCOUNT_SID = null;
let AUTH_TOKEN = null;
let PHONE_NUMBER = null;
let TWILIO_NUMBER = null;

if (process.env.NODE_ENV !== 'production') {
  ACCOUNT_SID = require('../config').ACCOUNT_SID;
  AUTH_TOKEN = require('../config').AUTH_TOKEN;
  PHONE_NUMBER = require('../config').PHONE_NUMBER;
  TWILIO_NUMBER = require('../config').TWILIO_NUMBER;
}

const client = require('twilio')(process.env.ACCOUNT_SID || ACCOUNT_SID, process.env.AUTH_TOKEN || AUTH_TOKEN);

const askQuestion = function(question) {
  client.messages.create({
    to: process.env.PHONE_NUMBER || PHONE_NUMBER,
    from: process.env.TWILIO_NUMBER || TWILIO_NUMBER,
    body: question
  })
  .then(() => console.log('Question received!'));
};

module.exports = {
  askQuestion
};
