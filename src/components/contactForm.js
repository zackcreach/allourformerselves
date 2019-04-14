import React, { useState, useReducer } from 'react'

import ContactFormStyles from './styles/contactFormStyles'

const ContactForm = () => {
  const [emailValid, setEmailValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: null,
      email: null,
      message: null,
    }
  )

  const handleChange = event => {
    const value = event.target.value
    const name = event.target.name

    if (name === 'email') {
      if (/(^\w.*@\w+\.\w)/.test(value)) {
        setEmailValid(true)
      } else {
        setEmailValid(false)
      }
    }

    setUserInput({ [name]: value })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', userInput }),
    })
      .then(() => {
        console.log('Message sent successfully!', userInput)
        setSubmitted(true)
      })
      .catch(error => alert(error))

    event.preventDefault()
  }

  if (submitted) {
    return (
      <ContactFormStyles>
        <div className="thanks">
          <p>
            <b>Thanks for contacting us.</b>
          </p>
          <p>We'll be in touch within 24 hours.</p>
        </div>
      </ContactFormStyles>
    )
  }
  return (
    <ContactFormStyles>
      <form
        name="contact-form"
        method="post"
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label htmlFor="name">
          Name
          <input
            name="name"
            value={userInput.name}
            onChange={handleChange}
            type="text"
            autoComplete="name"
            required
          />
        </label>
        <label className="hidden" htmlFor="bot-field">
          Bots only
          <input className="hidden" name="bot-field" type="text" />
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            value={userInput.email}
            onChange={handleChange}
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            name="message"
            value={userInput.message}
            onChange={handleChange}
            required
          />
        </label>
        <button disabled={!emailValid} type="submit">
          Send
        </button>
      </form>
    </ContactFormStyles>
  )
}

export default ContactForm
