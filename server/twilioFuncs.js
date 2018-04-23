const { ACCOUNT_SID, AUTH_TOKEN, PHONE_NUMBER, TWILIO_NUMBER } = require('../config');
const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

const askQuestion = function(question) {
  client.messages.create({
    to: PHONE_NUMBER,
    from: TWILIO_NUMBER,
    body: question
  })
  .then(() => console.log('Question received!'));
};

module.exports = {
  askQuestion
};
