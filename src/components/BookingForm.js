import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import '../styles/_bookingForm.scss'
import { endpoints } from '../endpoints/endpoints'

const url = endpoints[6].url

export const BookingForm = ({ motionParagraph }) => {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [validationMessage, setValidationMessage] = useState({
    successMessage: '',
    errorMessage: '',
  })

  const onChangeHandler = (e) => {
    const inputName = e.target.name
    const value = e.target.value
    setBooking({ ...booking, [inputName]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValidationMessage({
      errorMessage: '',
    })
    let formData = new FormData()

    formData.set('your-name', booking.name)
    formData.set('your-email', booking.email)
    formData.set('your-message', booking.message)

    axios
      .post(url, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res)
        if (res.data.status === 'mail_sent') {
          setBooking({
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
                  value={booking.name}
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
                  value={booking.email}
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
                <textarea
                  className='form__field'
                  name='message'
                  id='message'
                  value={booking.message}
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
