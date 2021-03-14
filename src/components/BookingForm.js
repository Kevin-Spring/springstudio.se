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
    bookStudio: false,
    company: '',
    billingAddress: '',
    orgNr: '',
    studio1: false,
    studio2: false,
    studio3: false,
    bookingDateFrom: '',
    bookingDateTo: '',
    workingHoursFrom: '',
    workingHoursTo: '',
    productionTypePhoto: false,
    productionTypeVideo: false,
    productionTypeMusic: false,
    audioRecording: false,
    workTypeEditorial: false,
    workTypeCommercial: false,
    catering: false,
    acceptance: false,
    message: '',
  })

  const [validationMessage, setValidationMessage] = useState({
    successMessage: '',
    errorMessage: '',
  })

  const executeScroll = () => {
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth',
    })
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
    formData.set('book-studio', booking.bookStudio ? 'Yes' : 'No')
    formData.set('your-company', booking.company)
    formData.set('your-billing-address', booking.billingAddress)
    formData.set('your-orgnr', booking.orgNr)
    formData.set('studio', [
      booking.studio1 ? ' Studio 1 ' : ' ',
      booking.studio2 ? ' Studio 2 ' : ' ',
      booking.studio3 ? ' Studio 3 ' : ' ',
    ])
    formData.set('your-booking-date-from', booking.bookingDateFrom)
    formData.set('your-booking-date-to', booking.bookingDateTo)
    formData.set('your-working-hours-from', booking.workingHoursFrom)
    formData.set('your-working-hours-to', booking.workingHoursTo)
    formData.set('your-production-type', [
      booking.productionTypePhoto ? ' Photo: Yes ' : ' ',
      booking.productionTypeVideo ? ' Video: Yes ' : ' ',
      booking.productionTypeMusic ? ' Music: Yes ' : ' ',
    ])
    formData.set('audio-recording', booking.audioRecording ? ' Yes ' : ' No ')
    formData.set('your-work-type', [
      booking.workTypeCommercial ? ' Commercial: Yes ' : ' ',
      booking.workTypeEditorial ? ' Editorial: Yes ' : ' ',
    ])
    formData.set('catering', booking.catering ? 'Yes' : 'No')
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
            bookStudio: false,
            company: '',
            billingAddress: '',
            orgNr: '',
            studio1: false,
            studio2: false,
            studio3: false,
            bookingDateFrom: '',
            bookingDateTo: '',
            workingHoursFrom: '',
            workingHoursTo: '',
            productionTypePhoto: false,
            productionTypeVideo: false,
            productionTypeMusic: false,
            audioRecording: false,
            workTypeEditorial: false,
            workTypeCommercial: false,
            catering: false,
            acceptance: false,
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
          <p className=''>
            {validationMessage.successMessage}
            {executeScroll()}
          </p>
        )}
      </span>

      <span>
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
              className={
                booking.acceptance && !validationMessage.errorMessage
                  ? 'done form-inner'
                  : 'form-inner'
              }
            >
              <div
                className={
                  booking.bookStudio
                    ? 'done form__group field'
                    : 'form__group field'
                }
              >
                <input
                  className={
                    validationMessage.errorMessage && !booking.name
                      ? 'error form__field'
                      : 'form__field'
                  }
                  type='text'
                  id='name'
                  name='name'
                  value={booking.name}
                  onChange={onChangeHandler}
                  placeholder='Name'
                  autoComplete='new-password'
                />
                <label className='form__label' htmlFor='name'>
                  Name*
                </label>
              </div>

              <div
                className={
                  booking.bookStudio
                    ? 'done form__group field'
                    : 'form__group field'
                }
              >
                <input
                  className={
                    validationMessage.errorMessage && !booking.email
                      ? 'error form__field'
                      : 'form__field'
                  }
                  type='email'
                  id='email'
                  name='email'
                  value={booking.email}
                  onChange={onChangeHandler}
                  placeholder='Email'
                  autoComplete='new-password'
                />
                <label className='form__label' htmlFor='email'>
                  Email*
                </label>
              </div>

              <div
                className={
                  booking.bookStudio
                    ? 'done form__group field'
                    : 'form__group field'
                }
              >
                <input
                  className={
                    validationMessage.errorMessage && !booking.phone
                      ? 'error form__field'
                      : 'form__field'
                  }
                  type='tel'
                  id='phone'
                  name='phone'
                  value={booking.phone}
                  onChange={onChangeHandler}
                  placeholder='Phone'
                  autoComplete='new-password'
                />
                <label className='form__label' htmlFor='phone'>
                  Phone*
                </label>
              </div>

              <h3 className='form__group__header'> Book Studio</h3>
              <div className='form__group field'>
                <div
                  className={
                    booking.bookStudio
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
                    placeholder='Yes'
                    autoComplete='new-password'
                    checked={booking.bookStudio === true}
                    onChange={() =>
                      setBooking({
                        ...booking,
                        bookStudio: !booking.bookStudio,
                      })
                    }
                  />
                  <label className='form__label-select' htmlFor='bookStudio'>
                    Yes
                  </label>
                </div>

                <div
                  className={
                    booking.bookStudio
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
                    placeholder='No'
                    autoComplete='new-password'
                    onChange={() =>
                      setBooking({
                        ...booking,
                        bookStudio: !booking.bookStudio,
                      })
                    }
                    checked={booking.bookStudio === false}
                  />
                  <label className='form__label-select' htmlFor='bookStudio'>
                    No
                  </label>
                </div>
              </div>

              {booking.bookStudio && (
                <motion.div variants={motionForm} className='form-inner'>
                  <div
                    className={
                      booking.studio1 || booking.studio2 || booking.studio3
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
                      booking.studio1 || booking.studio2 || booking.studio3
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
                      booking.studio1 || booking.studio2 || booking.studio3
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
                        placeholder='studio'
                        autoComplete='new-password'
                        checked={booking.studio1 === true}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            studio1: !booking.studio1,
                          })
                        }
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
                        placeholder='studio'
                        autoComplete='new-password'
                        checked={booking.studio2 === true}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            studio2: !booking.studio2,
                          })
                        }
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
                        placeholder='studio'
                        autoComplete='new-password'
                        checked={booking.studio3 === true}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            studio3: !booking.studio3,
                          })
                        }
                      />
                      <label className='form__label-select' htmlFor='studio'>
                        Studio 3
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}

              {booking.studio1 ||
              booking.studio2 ||
              (booking.studio3 && booking.bookStudio) ? (
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
                      Start of Day
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
                      Wrap Time
                    </label>
                  </div>
                </motion.div>
              ) : (
                ''
              )}

              {(booking.studio1 || booking.studio2 || booking.studio3) &&
              booking.bookStudio ? (
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
                        placeholder='Yes'
                        autoComplete='new-password'
                        checked={booking.audioRecording === true}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            audioRecording: !booking.audioRecording,
                          })
                        }
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
                        placeholder='No'
                        autoComplete='new-password'
                        checked={booking.audioRecording === false}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            audioRecording: !booking.audioRecording,
                          })
                        }
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
                        placeholder='Yes'
                        autoComplete='new-password'
                        checked={booking.catering === true}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            catering: !booking.catering,
                          })
                        }
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
                        placeholder='No'
                        autoComplete='new-password'
                        checked={booking.catering === false}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            catering: !booking.catering,
                          })
                        }
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

              {booking.bookStudio &&
              (booking.studio1 || booking.studio2 || booking.studio3) ? (
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
                        placeholder='photo'
                        autoComplete='new-password'
                        checked={booking.productionTypePhoto === true}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            productionTypePhoto: !booking.productionTypePhoto,
                          })
                        }
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
                        id='Photo'
                        name='productionType'
                        value='video'
                        placeholder='video'
                        autoComplete='new-password'
                        checked={booking.productionTypeVideo === true}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            productionTypeVideo: !booking.productionTypeVideo,
                          })
                        }
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
                        placeholder='music'
                        autoComplete='new-password'
                        checked={booking.productionTypeMusic === true}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            productionTypeMusic: !booking.productionTypeMusic,
                          })
                        }
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

              {(booking.productionTypePhoto || booking.productionTypeVideo) &&
              booking.productionType !== 'music' &&
              (booking.studio1 || booking.studio2 || booking.studio3) &&
              booking.bookStudio ? (
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
                        placeholder='commercial'
                        autoComplete='new-password'
                        checked={booking.workTypeCommercial === true}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            workTypeCommercial: !booking.workTypeCommercial,
                          })
                        }
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
                        placeholder='Editorial'
                        autoComplete='new-password'
                        checked={booking.workTypeEditorial === true}
                        onChange={() =>
                          setBooking({
                            ...booking,
                            workTypeEditorial: !booking.workTypeEditorial,
                          })
                        }
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
                  className={
                    validationMessage.errorMessage && !booking.acceptance
                      ? 'error form__field'
                      : 'form__field'
                  }
                  type='checkbox'
                  id='acceptance'
                  name='acceptance'
                  value='yes'
                  placeholder='acceptance'
                  autoComplete='new-password'
                  checked={booking.acceptance === true}
                  onChange={() =>
                    setBooking({ ...booking, acceptance: !booking.acceptance })
                  }
                  required
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
