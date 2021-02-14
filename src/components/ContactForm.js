import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import '../styles/_contactForm.scss'
import { endpoints } from '../endpoints/endpoints'

const url = endpoints[4].url

export const ContactForm = ({ motionParagraph }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [validationMessage, setValidationMessage] = useState({
    successMessage: '',
    errorMessage: '',
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValidationMessage({
      errorMessage: '',
    })
    let formData = new FormData()

    formData.set('your-name', contact.name)
    formData.set('your-email', contact.email)
    formData.set('your-subject', contact.subject)
    formData.set('your-message', contact.message)

    axios
      .post(url, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res)
        if (res.data.status === 'mail_sent') {
          setContact({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
          setValidationMessage({
            successMessage: res.data.message,
          })
        } else {
          setValidationMessage({
            errorMessage: res.data.message,
          })
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <motion.div variants={motionParagraph}>
        {validationMessage.successMessage && (
          <p className=''>{validationMessage.successMessage}</p>
        )}
        {validationMessage.errorMessage && (
          <p className='error-message'>{validationMessage.errorMessage}</p>
        )}
        <article>
          <form
            action='POST'
            onSubmit={handleSubmit}
            className='form-body'
            autoComplete='new-password'
          >
            <div className='form__container'>
              <div className='form__group field'>
                <input
                  className='form__field'
                  type='text'
                  id='name'
                  name='name'
                  value={contact.name}
                  onChange={onChangeHandler}
                  placeholder='Name'
                  autoComplete='new-password'
                />
                <label className='form__label' htmlFor='name'>
                  Name{' '}
                </label>
              </div>
              <div className='form__group field'>
                <input
                  className='form__field'
                  type='email'
                  id='email'
                  name='email'
                  value={contact.email}
                  onChange={onChangeHandler}
                  placeholder='Email'
                  autoComplete='new-password'
                />
                <label className='form__label' htmlFor='email'>
                  {' '}
                  Email{' '}
                </label>
              </div>

              <div className='form__group field'>
                <input
                  className='form__field'
                  type='text'
                  id='subject'
                  name='subject'
                  value={contact.subject}
                  onChange={onChangeHandler}
                  placeholder='Subject'
                  autoComplete='new-password'
                />
                <label className='form__label' htmlFor='subject'>
                  {' '}
                  Subject{' '}
                </label>
              </div>
              <div className='form__group field'>
                <textarea
                  className='form__field'
                  name='message'
                  id='message'
                  value={contact.message}
                  onChange={onChangeHandler}
                  cols='30'
                  rows='10'
                  placeholder='Message'
                ></textarea>
                <label className='form__label' htmlFor='message'>
                  {' '}
                  Message{' '}
                </label>
              </div>

              <button type='submit' className='form-btn '>
                Send
              </button>
            </div>
          </form>
        </article>
      </motion.div>
    </>
  )
}
