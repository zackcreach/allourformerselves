const sendMail = require('sendmail')()
const { validateEmail, validateLength } = require('../../utilities/validations')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.handler = (event, context, callback) => {
  if (!process.env.FORM_CONTACT_EMAIL) {
    return callback(null, {
      statusCode: 500,
      body: 'process.env.FORM_CONTACT_EMAIL must be defined',
    })
  }

  const body = JSON.parse(event.body)

  try {
    validateLength('body.name', body.name, 3, 50)
  } catch (error) {
    return callback(null, {
      statusCode: 403,
      body: error.message,
    })
  }

  try {
    validateEmail('body.email', body.email)
  } catch (error) {
    return callback(null, {
      statusCode: 403,
      body: error.message,
    })
  }

  try {
    validateLength('body.message', body.message, 1, 2000)
  } catch (error) {
    return callback(null, {
      statusCode: 403,
      body: error.message,
    })
  }

  const descriptor = {
    from: `"${body.email}" <no-reply@allourformerselves.com>`,
    to: process.env.FORM_CONTACT_EMAIL,
    subject: `${
      body.name
    } sent you a message from the contact form via allourformerselves.com`,
    html: body.message,
  }

  sendMail(descriptor, (error, reply) => {
    if (error) {
      callback(null, {
        statusCode: 500,
        body: error.message,
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: '',
      })
    }
  })
}
