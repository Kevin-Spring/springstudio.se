import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import '../styles/_bookingForm.scss'
import { endpoints } from '../endpoints/endpoints'

const url = endpoints[6].url

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
      <motion.div variants={motionForm}>
        {validationMessage.successMessage && (
          <p className=''>{validationMessage.successMessage}</p>
        )}
        {validationMessage.errorMessage && (
          <p className='error-message'>{validationMessage.errorMessage}</p>
        )}
        <div>
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
                  Name
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
                  Email
                </label>
              </div>

              <div className='form__group field'>
                <input
                  className='form__field'
                  type='tel'
                  id='phone'
                  name='phone'
                  value={booking.phone}
                  onChange={onChangeHandler}
                  placeholder='Phone'
                  autoComplete='new-password'
                />
                <label className='form__label' htmlFor='phone'>
                  Phone
                </label>
              </div>

              <div className='form__group field'>
                <label htmlFor=''>
                  Book Studio
                  <input
                    className='form__field'
                    type='checkbox'
                    id='bookStudioYes'
                    name='bookStudio'
                    value='Yes'
                    onChange={onChangeHandler}
                    placeholder='Yes'
                    autoComplete='new-password'
                    checked={booking.bookStudio === 'Yes'}
                  />
                  <label className='form__label' htmlFor='bookStudio'>
                    Yes
                  </label>
                  <input
                    className='form__field'
                    type='checkbox'
                    id='bookStudioNo'
                    name='bookStudio'
                    value='No'
                    onChange={onChangeHandler}
                    placeholder='No'
                    autoComplete='new-password'
                    checked={booking.bookStudio === 'No'}
                  />
                  <label className='form__label' htmlFor='bookStudio'>
                    No
                  </label>
                </label>
              </div>

              {booking.bookStudio === 'Yes' && (
                <div>
                  <motion.div variants={motionForm}>
                    <div className='form__group field'>
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
                  </motion.div>

                  <motion.div variants={motionForm}>
                    <div className='form__group field'>
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
                  </motion.div>

                  <motion.div variants={motionForm}>
                    <div className='form__group field'>
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
                  </motion.div>

                  <motion.div variants={motionForm}>
                    <div className='form__group field'>
                      <label htmlFor=''>
                        Studio
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
                        <label className='form__label' htmlFor='studio'>
                          studio 1
                        </label>
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
                        <label className='form__label' htmlFor='studio'>
                          studio 2
                        </label>
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
                        <label className='form__label' htmlFor='studio'>
                          studio 3
                        </label>
                      </label>
                    </div>
                  </motion.div>

                  {booking.studio && (
                    <motion.div variants={motionForm}>
                      <div>
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
                          <label
                            className='form__label'
                            htmlFor='bookingDateFrom'
                          >
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
                          <label
                            className='form__label'
                            htmlFor='bookingDateTo'
                          >
                            To:
                          </label>
                        </div>

                        <div>
                          <label htmlFor=''>
                            Working Hours
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
                              <label
                                className='form__label'
                                htmlFor='workingHoursFrom'
                              >
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
                              <label
                                className='form__label'
                                htmlFor='workingHoursTo'
                              >
                                To
                              </label>
                            </div>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {booking.studio && (
                    <motion.div variants={motionForm}>
                      <div>
                        <div className='form__group field'>
                          <label htmlFor=''>
                            Audio Recording
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
                              className='form__label'
                              htmlFor='audioRecording'
                            >
                              Yes
                            </label>
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
                              className='form__label'
                              htmlFor='audioRecording'
                            >
                              No
                            </label>
                          </label>
                        </div>

                        <div className='form__group field'>
                          <label htmlFor=''>
                            Catering
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
                            <label className='form__label' htmlFor='catering'>
                              Yes
                            </label>
                            <input
                              className='form__field'
                              type='checkbox'
                              id='cateringNo'
                              name='catering'
                              value='No'
                              onChange={onChangeHandler}
                              placeholder='No'
                              autoComplete='new-password'
                              checked={booking.audioRecording === 'No'}
                            />
                            <label
                              className='form__label'
                              htmlFor='audioRecording'
                            >
                              No
                            </label>
                          </label>
                        </div>

                        <div className='form__group field'>
                          <label htmlFor=''>
                            Production Type
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
                              className='form__label'
                              htmlFor='productionType'
                            >
                              Photo
                            </label>
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
                              className='form__label'
                              htmlFor='productionType'
                            >
                              Video
                            </label>
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
                              className='form__label'
                              htmlFor='productionType'
                            >
                              Music
                            </label>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {booking.productionType &&
                    booking.productionType !== 'music' && (
                      <motion.div variants={motionForm}>
                        <div className='form__group field'>
                          <label htmlFor=''>
                            Work Type
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
                            <label className='form__label' htmlFor='workType'>
                              Commercial
                            </label>
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
                            <label className='form__label' htmlFor='workType'>
                              Editorial
                            </label>
                          </label>
                        </div>
                      </motion.div>
                    )}
                </div>
              )}

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
                  Message
                </label>
              </div>

              <button type='submit' className='form-btn '>
                Send
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  )
}
