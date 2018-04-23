const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const askQuestion = function(question) {
  client.messages.create({
    to: process.env.PHONE_NUMBER,
    from: process.env.TWILIO_NUMBER,
    body: question
  })
  .then(() => console.log('Question received!'));
};

module.exports = {
  askQuestion
};
