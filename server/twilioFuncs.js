const twilio = require('twilio');
const { ACCOUNT_SID, AUTH_TOKEN, PHONE_NUMBER } = require('../config');
const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);
