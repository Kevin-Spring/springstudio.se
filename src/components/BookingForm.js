import React, { useRef, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import '../styles/_bookingForm.scss'
import { endpoints } from '../endpoints/endpoints'
import { Envelope } from './Envelope'

const url = endpoints[4].url

export const BookingForm = ({ motionForm }) => {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    phone: '',
    bookStudio: '',
    company: '',
    billingAddress: '',
    orgNr: '',
    studio: '',
    bookingDateFrom: '',
    bookingDateTo: '',
    workingHoursFrom: '',
    workingHoursTo: '',
    productionType: '',
    audioRecording: '',
    workType: '',
    catering: '',
    acceptance: '',
    message: '',
  })
  const [validationMessage, setValidationMessage] = useState({
    successMessage: '',
    errorMessage: '',
  })

  const errorRef = useRef(null)

  const executeScroll = () => {
    errorRef.current.scrollIntoView({ behavior: 'smooth' })
  }

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
    formData.set('your-phone', booking.phone)
    formData.set('book-studio', booking.bookStudio)
    formData.set('your-company', booking.company)
    formData.set('your-billing-address', booking.billingAddress)
    formData.set('your-orgnr', booking.orgNr)
    formData.set('studio', booking.studio)
    formData.set('your-booking-date-from', booking.bookingDateFrom)
    formData.set('your-booking-date-to', booking.bookingDateTo)
    formData.set('your-working-hours-from', booking.workingHoursFrom)
    formData.set('your-working-hours-to', booking.workingHoursTo)
    formData.set('your-production-type', booking.productionType)
    formData.set('audio-recording', booking.audioRecording)
    formData.set('your-work-type', booking.workType)
    formData.set('catering', booking.catering)
    formData.set('acceptance', booking.acceptance)
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
            phone: '',
            bookStudio: '',
            company: '',
            billingAddress: '',
            orgNr: '',
            studio: '',
            bookingDateFrom: '',
            bookingDateTo: '',
            workingHoursFrom: '',
            workingHoursTo: '',
            productionType: '',
            audioRecording: '',
            workType: '',
            catering: '',
            acceptance: '',
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
      <span>
        {validationMessage.successMessage && (
          <p className=''>{validationMessage.successMessage}</p>
        )}
      </span>

      <span ref={errorRef}>
        {validationMessage.errorMessage && (
          <p className='error-message'>
            {validationMessage.errorMessage}
            {executeScroll()}
          </p>
        )}
      </span>

      {validationMessage.successMessage ? (
        <Envelope />
      ) : (
        <motion.div className='form' variants={motionForm}>
          <form
            action='POST'
            onSubmit={handleSubmit}
            className='form-body'
            autoComplete='new-password'
          >
            <div
              className={booking.acceptance ? 'done form-inner' : 'form-inner'}
            >
              <div
                className={
                  booking.bookStudio === 'yes'
                    ? 'done form__group field'
                    : 'form__group field'
                }
              >
                <input
                  className='form__field'
                  type='text'
                  id='name'
                  name='name'
                  value={booking.name}
                  onChange={onChangeHandler}
                  placeholder='Name'
                  autoComplete='new-password'
                  required
                />
                <label className='form__label' htmlFor='name'>
                  Name*
                </label>
              </div>

              <div
                className={
                  booking.bookStudio === 'yes'
                    ? 'done form__group field'
                    : 'form__group field'
                }
              >
                <input
                  className='form__field'
                  type='email'
                  id='email'
                  name='email'
                  value={booking.email}
                  onChange={onChangeHandler}
                  placeholder='Email'
                  autoComplete='new-password'
                  required
                />
                <label className='form__label' htmlFor='email'>
                  Email*
                </label>
              </div>

              <div
                className={
                  booking.bookStudio === 'yes'
                    ? 'done form__group field'
                    : 'form__group field'
                }
              >
                <input
                  className='form__field'
                  type='tel'
                  id='phone'
                  name='phone'
                  value={booking.phone}
                  onChange={onChangeHandler}
                  placeholder='Phone'
                  autoComplete='new-password'
                  required
                />
                <label className='form__label' htmlFor='phone'>
                  Phone*
                </label>
              </div>

              <h3 className='form__group__header'> Book Studio</h3>
              <div className='form__group field'>
                <div
                  className={
                    booking.bookStudio === 'yes'
                      ? 'done form__field-select'
                      : 'form__field-select'
                  }
                >
                  <input
                    className='form__field'
                    type='checkbox'
                    id='bookStudioYes'
                    name='bookStudio'
                    value='yes'
                    onChange={onChangeHandler}
                    placeholder='Yes'
                    autoComplete='new-password'
                    checked={booking.bookStudio === 'yes'}
                  />
                  <label className='form__label-select' htmlFor='bookStudio'>
                    Yes
                  </label>
                </div>

                <div
                  className={
                    booking.bookStudio === 'yes'
                      ? 'done form__field-select'
                      : 'form__field-select'
                  }
                >
                  <input
                    className='form__field'
                    type='checkbox'
                    id='bookStudioNo'
                    name='bookStudio'
                    value='no'
                    onChange={onChangeHandler}
                    placeholder='No'
                    autoComplete='new-password'
                    checked={booking.bookStudio === 'no'}
                  />
                  <label className='form__label-select' htmlFor='bookStudio'>
                    No
                  </label>
                </div>
              </div>

              {booking.bookStudio === 'yes' && (
                <motion.div variants={motionForm} className='form-inner'>
                  <div
                    className={
                      booking.studio
                        ? 'done form__group field'
                        : 'form__group field'
                    }
                  >
                    <input
                      className='form__field'
                      type='text'
                      id='company'
                      name='company'
                      value={booking.company}
                      onChange={onChangeHandler}
                      placeholder='Company'
                      autoComplete='new-password'
                    />
                    <label className='form__label' htmlFor='company'>
                      Company
                    </label>
                  </div>

                  <div
                    className={
                      booking.studio
                        ? 'done form__group field'
                        : 'form__group field'
                    }
                  >
                    <input
                      className='form__field'
                      type='text'
                      id='billingAddress'
                      name='billingAddress'
                      value={booking.billingAddress}
                      onChange={onChangeHandler}
                      placeholder='billing address'
                      autoComplete='new-password'
                    />
                    <label className='form__label' htmlFor='billingAddress'>
                      billing address
                    </label>
                  </div>

                  <div
                    className={
                      booking.studio
                        ? 'done form__group field'
                        : 'form__group field'
                    }
                  >
                    <input
                      className='form__field'
                      type='text'
                      id='orgNr'
                      name='orgNr'
                      value={booking.orgNr}
                      onChange={onChangeHandler}
                      placeholder='organization number'
                      autoComplete='new-password'
                    />
                    <label className='form__label' htmlFor='orgNr'>
                      organization number
                    </label>
                  </div>

                  <h3 className='form__group__header'>Studio</h3>
                  <div className='form__group field'>
                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='studio1'
                        name='studio'
                        value='studio 1'
                        onChange={onChangeHandler}
                        placeholder='studio'
                        autoComplete='new-password'
                        checked={booking.studio === 'studio 1'}
                      />
                      <label className='form__label-select' htmlFor='studio'>
                        Studio 1
                      </label>
                    </div>
                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='studio2'
                        name='studio'
                        value='studio 2'
                        onChange={onChangeHandler}
                        placeholder='studio'
                        autoComplete='new-password'
                        checked={booking.studio === 'studio 2'}
                      />
                      <label className='form__label-select' htmlFor='studio'>
                        Studio 2
                      </label>
                    </div>
                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='studio3'
                        name='studio'
                        value='studio 3'
                        onChange={onChangeHandler}
                        placeholder='studio'
                        autoComplete='new-password'
                        checked={booking.studio === 'studio 3'}
                      />
                      <label className='form__label-select' htmlFor='studio'>
                        Studio 3
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}

              {booking.bookStudio === 'yes' && booking.studio ? (
                <motion.div variants={motionForm} className='form-inner'>
                  <div className='form__group field'>
                    <input
                      className='form__field'
                      type='date'
                      id='bookingDateFrom'
                      name='bookingDateFrom'
                      value={booking.bookingDateFrom}
                      onChange={onChangeHandler}
                      placeholder='Booking Date From'
                      autoComplete='new-password'
                    />
                    <label className='form__label' htmlFor='bookingDateFrom'>
                      From:
                    </label>
                  </div>

                  <div className='form__group field'>
                    <input
                      className='form__field'
                      type='date'
                      id='bookingDateTo'
                      name='bookingDateTo'
                      value={booking.bookingDateTo}
                      onChange={onChangeHandler}
                      placeholder='Booking Date To'
                      autoComplete='new-password'
                    />
                    <label className='form__label' htmlFor='bookingDateTo'>
                      To:
                    </label>
                  </div>

                  <h3 className='form__group__header'>Working Hours</h3>
                  <div className='form__group field'>
                    <input
                      className='form__field'
                      type='text'
                      id='workingHoursFrom'
                      name='workingHoursFrom'
                      value={booking.workingHoursFrom}
                      onChange={onChangeHandler}
                      placeholder='working hours from'
                      autoComplete='new-password'
                    />
                    <label className='form__label' htmlFor='workingHoursFrom'>
                      From
                    </label>
                  </div>

                  <div className='form__group field'>
                    <input
                      className='form__field'
                      type='text'
                      id='workingHoursTo'
                      name='workingHoursTo'
                      value={booking.workingHoursTo}
                      onChange={onChangeHandler}
                      placeholder='working hours to'
                      autoComplete='new-password'
                    />
                    <label className='form__label' htmlFor='workingHoursTo'>
                      To
                    </label>
                  </div>
                </motion.div>
              ) : (
                ''
              )}

              {booking.bookStudio === 'yes' && booking.studio ? (
                <motion.div
                  variants={motionForm}
                  className='form-inner form-inner-selects'
                >
                  <div className='form__group field'>
                    <h3 className='form__group__selects-header'>
                      Audio Recording
                    </h3>
                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='audioRecordingYes'
                        name='audioRecording'
                        value='Yes'
                        onChange={onChangeHandler}
                        placeholder='Yes'
                        autoComplete='new-password'
                        checked={booking.audioRecording === 'Yes'}
                      />
                      <label
                        className='form__label-select'
                        htmlFor='audioRecording'
                      >
                        Yes
                      </label>
                    </div>

                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='audioRecordingNo'
                        name='audioRecording'
                        value='No'
                        onChange={onChangeHandler}
                        placeholder='No'
                        autoComplete='new-password'
                        checked={booking.audioRecording === 'No'}
                      />
                      <label
                        className='form__label-select'
                        htmlFor='audioRecording'
                      >
                        No
                      </label>
                    </div>
                  </div>

                  <div className='form__group field'>
                    <h3 className='form__group__selects-header'>Catering</h3>
                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='cateringYes'
                        name='catering'
                        value='Yes'
                        onChange={onChangeHandler}
                        placeholder='Yes'
                        autoComplete='new-password'
                        checked={booking.catering === 'Yes'}
                      />
                      <label className='form__label-select' htmlFor='catering'>
                        Yes
                      </label>
                    </div>

                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='cateringNo'
                        name='catering'
                        value='No'
                        onChange={onChangeHandler}
                        placeholder='No'
                        autoComplete='new-password'
                        checked={booking.catering === 'No'}
                      />
                      <label className='form__label-select' htmlFor='catering'>
                        No
                      </label>
                    </div>
                  </div>
                </motion.div>
              ) : (
                ''
              )}

              {booking.bookStudio === 'yes' && booking.studio ? (
                <motion.div variants={motionForm} className='form-inner'>
                  <h3 className='form__group__header'>Production Type</h3>
                  <div className='form__group field'>
                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='photo'
                        name='productionType'
                        value='photo'
                        onChange={onChangeHandler}
                        placeholder='photo'
                        autoComplete='new-password'
                        checked={booking.productionType === 'photo'}
                      />
                      <label
                        className='form__label-select'
                        htmlFor='productionType'
                      >
                        Photo
                      </label>
                    </div>

                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='video'
                        name='productionType'
                        value='video'
                        onChange={onChangeHandler}
                        placeholder='video'
                        autoComplete='new-password'
                        checked={booking.productionType === 'video'}
                      />
                      <label
                        className='form__label-select'
                        htmlFor='productionType'
                      >
                        Video
                      </label>
                    </div>

                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='music'
                        name='productionType'
                        value='music'
                        onChange={onChangeHandler}
                        placeholder='music'
                        autoComplete='new-password'
                        checked={booking.productionType === 'music'}
                      />
                      <label
                        className='form__label-select'
                        htmlFor='productionType'
                      >
                        Music
                      </label>
                    </div>
                  </div>
                </motion.div>
              ) : (
                ''
              )}

              {booking.productionType &&
              booking.productionType !== 'music' &&
              booking.bookStudio === 'yes' ? (
                <motion.div variants={motionForm} className='form-inner'>
                  <h3 className='form__group__header'>Work Type</h3>
                  <div className='form__group field'>
                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='commercial'
                        name='workType'
                        value='commercial'
                        onChange={onChangeHandler}
                        placeholder='commercial'
                        autoComplete='new-password'
                        checked={booking.workType === 'commercial'}
                      />
                      <label className='form__label-select' htmlFor='workType'>
                        Commercial
                      </label>
                    </div>
                    <div className='form__field-select'>
                      <input
                        className='form__field'
                        type='checkbox'
                        id='Editorial'
                        name='workType'
                        value='Editorial'
                        onChange={onChangeHandler}
                        placeholder='Editorial'
                        autoComplete='new-password'
                        checked={booking.workType === 'Editorial'}
                      />
                      <label className='form__label-select' htmlFor='workType'>
                        Editorial
                      </label>
                    </div>
                  </div>
                </motion.div>
              ) : (
                ''
              )}

              <div className='form-inner'>
                <div className='form__group field large'>
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
                    Message
                  </label>
                </div>
              </div>

              <div
                className={
                  booking.name && booking.email
                    ? 'form__field-select acceptance ready'
                    : 'form__field-select acceptance'
                }
              >
                <label
                  className='form__label-select acceptance-terms'
                  htmlFor='workType'
                >
                  If you submit a question via an enquiry form or contact form,
                  we need to process your data in order to respond. However,
                  your data will only be processed for this purpose, and will
                  not be used for anything else. *
                </label>
                <input
                  className='form__field'
                  type='checkbox'
                  id='acceptance'
                  name='acceptance'
                  value='yes'
                  onChange={onChangeHandler}
                  placeholder='acceptance'
                  autoComplete='new-password'
                  checked={booking.acceptance === 'yes'}
                />
              </div>
            </div>
            <button type='submit' className='form-btn '>
              Send
            </button>
          </form>
        </motion.div>
      )}
    </>
  )
}
