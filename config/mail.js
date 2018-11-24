const path = require('path');

module.exports = {
  /**
   * Auth
   */
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,

  /**
   * Templates path
   */
  templatesPath: path.resolve('./resources/mail'),
};
