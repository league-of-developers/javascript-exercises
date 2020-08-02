const emailValidator = require('email-validator');
/**
 *
 * @param {* mail} mail - The email address to validate.
 */
const mailValidation = ({ mail }) => emailValidator.validate(mail);

module.exports = mailValidation;
