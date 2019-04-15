import React, { useState, useReducer } from 'react'

import ContactFormStyles from './styles/contactFormStyles'

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
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
    setUserInput({ [name]: value })
  }

  const handleSubmit = event => {
    setSubmitting(true)

    fetch('/.netlify/functions/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput),
    })
      .then(() => (setSubmitted(true), setSubmitting(false)))
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
      <form onSubmit={handleSubmit}>
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
        <button disabled={submitting} type="submit">
          Send
        </button>
      </form>
    </ContactFormStyles>
  )
}

export default ContactForm
