import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import '../styles/css/_bookingForm.css'
import { endpoints } from '../endpoints/endpoints'
import { Envelope } from './Envelope'
import { VscArrowRight } from 'react-icons/vsc'
import { InputField } from './InputField'
import ReCAPTCHA from "react-google-recaptcha";

//Pointing get request at correct endpoint
const url = endpoints[4].url

export const BookingForm = ({ motionForm }) => {
  const [loadingForm, setLoadingForm] = useState(false)
  //Set up for all form data to be processed by controlled inputs
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

  const form = useRef(false)

  const [validationMessage, setValidationMessage] = useState({
    successMessage: '',
    errorMessage: '',
  })

  function handleCaptcha(value) {
    console.log("Captcha value:", value);
  }

  //Scroll to errror or success validation messages
  const executeScroll = () => {
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth',
    })
  }

  //onChange function on inputs which stores info on each state using spread operator and mad es6 hacks
  const onChangeHandler = e => {
    const inputName = e.target.name
    const value = e.target.value
    setBooking({ ...booking, [inputName]: value })
  }

  //On submit -> sets all formdata -> makes post request to endpoint -> clears all states to deafult state on success
  const handleSubmit = e => {
    e.preventDefault()

    setLoadingForm(true)

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
    formData.set('studio', [booking.studio1 ? ' Studio 1 ' : ' ', booking.studio2 ? ' Studio 2 ' : ' ', booking.studio3 ? ' Studio 3 ' : ' '])
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
    formData.set('your-work-type', [booking.workTypeCommercial ? ' Commercial: Yes ' : ' ', booking.workTypeEditorial ? ' Editorial: Yes ' : ' '])
    formData.set('catering', booking.catering ? 'Yes' : 'No')
    formData.set('acceptance', booking.acceptance)
    formData.set('your-message', booking.message)

    axios
      .post(url, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then(res => {
        if (res.data.status === 'mail_sent') {
          setLoadingForm(false)

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
          setLoadingForm(false)
          setValidationMessage({
            errorMessage: res.data.message,
          })
        }
      })
      .catch(err => console.log(err))
  }

  /* Scroll to validation messages if existing */
  useEffect(() => {
    executeScroll()
  }, [validationMessage])

  return (
    <>
      {/* Animated spinner */}
      <div className={loadingForm ? 'spinner-box active' : 'spinner-box'}>
        <div className='circle-border'>
          <div className='circle-core'></div>
        </div>
      </div>

      {/* Validation messages form form */}
      <span>{validationMessage.successMessage && <p className=''>{validationMessage.successMessage}</p>}</span>

      <span>{validationMessage.errorMessage && <p className='error-message'>{validationMessage.errorMessage}</p>}</span>

      {/* Envelope animation on success */}
      {validationMessage.successMessage ? (
        <Envelope />
      ) : (
        /* Following is the form and all its conditional rendering depending on classnames and states of inputs */
        <motion.div className={loadingForm ? 'form submitting' : 'form'} variants={motionForm}>
          <form name="contact" data-netlify="true" ref={form} action='POST' onSubmit={handleSubmit} className={loadingForm ? 'form-body submitting' : 'form-body'}>
            <div className={booking.acceptance && !validationMessage.errorMessage ? 'done form-inner' : 'form-inner'}>
              <InputField
                classNameGroup={booking.bookStudio ? 'done form__group field' : 'form__group field'}
                classNameInput={validationMessage.errorMessage && !booking.name ? 'error form__field' : 'form__field'}
                classNameLabel={'form__label'}
                inputType={'text'}
                inputId={'name'}
                inputName={'name'}
                inpuValue={booking.name}
                inputOnChange={onChangeHandler}
                inputPlaceholder={'Name'}
                labelHtmlFor={'name'}
                labelContent={'Name*'}
              />

              <InputField
                classNameGroup={booking.bookStudio ? 'done form__group field' : 'form__group field'}
                classNameInput={validationMessage.errorMessage && !booking.email ? 'error form__field' : 'form__field'}
                classNameLabel={'form__label'}
                inputType={'email'}
                inputId={'email'}
                inputName={'email'}
                inpuValue={booking.email}
                inputOnChange={onChangeHandler}
                inputPlaceholder={'Email'}
                labelHtmlFor={'email'}
                labelContent={'Email*'}
              />

              <InputField
                classNameGroup={booking.bookStudio ? 'done form__group field' : 'form__group field'}
                classNameInput={validationMessage.errorMessage && !booking.phone ? 'error form__field' : 'form__field'}
                classNameLabel={'form__label'}
                inputType={'tel'}
                inputId={'phone'}
                inputName={'phone'}
                inpuValue={booking.phone}
                inputOnChange={onChangeHandler}
                inputPlaceholder={'Phone'}
                labelHtmlFor={'phone'}
                labelContent={'Phone*'}
              />

              <h3 className='form__group__header'> Book Studio</h3>
              <div className='form__group field'>
                <InputField
                  classNameGroup={booking.bookStudio ? 'done form__field-select' : 'form__field-select'}
                  classNameInput={'form__field'}
                  classNameLabel={'form__label-select'}
                  inputType={'checkbox'}
                  inputId={'bookStudioYes'}
                  inputName={'bookStudio'}
                  inpuValue={'yes'}
                  inputOnChange={() =>
                    setBooking({
                      ...booking,
                      bookStudio: !booking.bookStudio,
                    })
                  }
                  inputPlaceholder={'Yes'}
                  inputChecked={booking.bookStudio === true}
                  labelHtmlFor={'bookStudioYes'}
                  labelContent={'Yes'}
                />

                <InputField
                  classNameGroup={booking.bookStudio ? 'done form__field-select' : 'form__field-select'}
                  classNameInput={'form__field'}
                  classNameLabel={'form__label-select'}
                  inputType={'checkbox'}
                  inputId={'bookStudioNo'}
                  inputName={'bookStudio'}
                  inpuValue={'no'}
                  inputOnChange={() =>
                    setBooking({
                      ...booking,
                      bookStudio: !booking.bookStudio,
                    })
                  }
                  inputPlaceholder={'No'}
                  inputChecked={booking.bookStudio === false}
                  labelHtmlFor={'bookStudioNo'}
                  labelContent={'No'}
                />
              </div>

              {booking.bookStudio && (
                <motion.div variants={motionForm} className='form-inner'>
                  <span className='form__cancellation-notice'>
                    *Cancellation must be made no later than 5 days before the booked date, otherwise we have the right to charge half of the agreed
                    amount.
                  </span>

                  <InputField
                    classNameGroup={booking.studio1 || booking.studio2 || booking.studio3 ? 'done form__group field' : 'form__group field'}
                    classNameInput={'form__field'}
                    classNameLabel={'form__label'}
                    inputType={'text'}
                    inputId={'company'}
                    inputName={'company'}
                    inpuValue={booking.company}
                    inputOnChange={onChangeHandler}
                    inputPlaceholder={'Company'}
                    labelHtmlFor={'company'}
                    labelContent={'Company'}
                  />

                  <InputField
                    classNameGroup={booking.studio1 || booking.studio2 || booking.studio3 ? 'done form__group field' : 'form__group field'}
                    classNameInput={'form__field'}
                    classNameLabel={'form__label'}
                    inputType={'text'}
                    inputId={'billingAddress'}
                    inputName={'billingAddress'}
                    inpuValue={booking.billingAddress}
                    inputOnChange={onChangeHandler}
                    inputPlaceholder={'billing address'}
                    labelHtmlFor={'billingAddress'}
                    labelContent={'Billing Address'}
                  />

                  <InputField
                    classNameGroup={booking.studio1 || booking.studio2 || booking.studio3 ? 'done form__group field' : 'form__group field'}
                    classNameInput={'form__field'}
                    classNameLabel={'form__label'}
                    inputType={'text'}
                    inputId={'orgNr'}
                    inputName={'orgNr'}
                    inpuValue={booking.orgNr}
                    inputOnChange={onChangeHandler}
                    inputPlaceholder={'Organization Number'}
                    labelHtmlFor={'orgNr'}
                    labelContent={'Organization Number'}
                  />

                  <h3 className='form__group__header'>Studio</h3>
                  <div className='form__group field'>
                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'studio1'}
                      inputName={'studio'}
                      inpuValue={'studio 1'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          studio1: !booking.studio1,
                        })
                      }
                      inputPlaceholder={'studio'}
                      inputChecked={booking.studio1 === true}
                      labelHtmlFor={'studio1'}
                      labelContent={'Studio 1'}
                    />

                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'studio2'}
                      inputName={'studio'}
                      inpuValue={'studio 2'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          studio2: !booking.studio2,
                        })
                      }
                      inputPlaceholder={'studio'}
                      inputChecked={booking.studio2 === true}
                      labelHtmlFor={'studio2'}
                      labelContent={'Studio 2'}
                    />

                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'studio3'}
                      inputName={'studio'}
                      inpuValue={'studio 3'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          studio3: !booking.studio3,
                        })
                      }
                      inputPlaceholder={'studio'}
                      inputChecked={booking.studio3 === true}
                      labelHtmlFor={'studio3'}
                      labelContent={'Studio 3'}
                    />
                  </div>
                </motion.div>
              )}

              {booking.studio1 || booking.studio2 || (booking.studio3 && booking.bookStudio) ? (
                <motion.div variants={motionForm} className='form-inner'>
                  <InputField
                    classNameGroup={'form__group field'}
                    classNameInput={'form__field'}
                    classNameLabel={'form__label'}
                    inputType={'date'}
                    inputId={'bookingDateFrom'}
                    inputName={'bookingDateFrom'}
                    inpuValue={booking.bookingDateFrom}
                    inputOnChange={onChangeHandler}
                    inputPlaceholder={'Booking Date From'}
                    labelHtmlFor={'bookingDateFrom'}
                    labelContent={'Booking Date From:'}
                  />

                  <InputField
                    classNameGroup={'form__group field'}
                    classNameInput={'form__field'}
                    classNameLabel={'form__label'}
                    inputType={'date'}
                    inputId={'bookingDateTo'}
                    inputName={'bookingDateTo'}
                    inpuValue={booking.bookingDateTo}
                    inputOnChange={onChangeHandler}
                    inputPlaceholder={'Booking Date To'}
                    labelHtmlFor={'bookingDateTo'}
                    labelContent={'Booking Date To:'}
                  />

                  <h3 className='form__group__header'>Working Hours</h3>

                  <InputField
                    classNameGroup={'form__group field'}
                    classNameInput={'form__field'}
                    classNameLabel={'form__label'}
                    inputType={'text'}
                    inputId={'workingHoursFrom'}
                    inputName={'workingHoursFrom'}
                    inpuValue={booking.workingHoursFrom}
                    inputOnChange={onChangeHandler}
                    inputPlaceholder={'working Hours From'}
                    labelHtmlFor={'workingHoursFrom'}
                    labelContent={'Start of Day'}
                  />

                  <InputField
                    classNameGroup={'form__group field'}
                    classNameInput={'form__field'}
                    classNameLabel={'form__label'}
                    inputType={'text'}
                    inputId={'workingHoursTo'}
                    inputName={'workingHoursTo'}
                    inpuValue={booking.workingHoursTo}
                    inputOnChange={onChangeHandler}
                    inputPlaceholder={'working Hours To'}
                    labelHtmlFor={'workingHoursTo'}
                    labelContent={'Wrap Time'}
                  />
                </motion.div>
              ) : (
                ''
              )}

              {(booking.studio1 || booking.studio2 || booking.studio3) && booking.bookStudio ? (
                <motion.div variants={motionForm} className='form-inner form-inner-selects'>
                  <div className='form__group field'>
                    <h3 className='form__group__selects-header'>Audio Recording</h3>

                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'audioRecordingYes'}
                      inputName={'audioRecording'}
                      inpuValue={'Yes'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          audioRecording: !booking.audioRecording,
                        })
                      }
                      inputPlaceholder={'Yes'}
                      inputChecked={booking.audioRecording === true}
                      labelHtmlFor={'audioRecordingYes'}
                      labelContent={'Yes'}
                    />

                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'audioRecordingNo'}
                      inputName={'audioRecording'}
                      inpuValue={'No'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          audioRecording: !booking.audioRecording,
                        })
                      }
                      inputPlaceholder={'No'}
                      inputChecked={booking.audioRecording === false}
                      labelHtmlFor={'audioRecordingNo'}
                      labelContent={'No'}
                    />
                  </div>

                  <div className='form__group field'>
                    <h3 className='form__group__selects-header'>Catering</h3>

                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'cateringYes'}
                      inputName={'catering'}
                      inpuValue={'Yes'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          catering: !booking.catering,
                        })
                      }
                      inputPlaceholder={'Yes'}
                      inputChecked={booking.catering === true}
                      labelHtmlFor={'cateringYes'}
                      labelContent={'Yes'}
                    />

                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'cateringNo'}
                      inputName={'catering'}
                      inpuValue={'No'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          catering: !booking.catering,
                        })
                      }
                      inputPlaceholder={'No'}
                      inputChecked={booking.catering === false}
                      labelHtmlFor={'cateringNo'}
                      labelContent={'No'}
                    />
                  </div>
                </motion.div>
              ) : (
                ''
              )}

              {booking.bookStudio && (booking.studio1 || booking.studio2 || booking.studio3) ? (
                <motion.div variants={motionForm} className='form-inner'>
                  <h3 className='form__group__header'>Production Type</h3>
                  <div className='form__group field'>
                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'photo'}
                      inputName={'productionType'}
                      inpuValue={'photo'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          productionTypePhoto: !booking.productionTypePhoto,
                        })
                      }
                      inputPlaceholder={'photo'}
                      inputChecked={booking.productionTypePhoto === true}
                      labelHtmlFor={'photo'}
                      labelContent={'Photo'}
                    />

                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'video'}
                      inputName={'productionType'}
                      inpuValue={'video'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          productionTypeVideo: !booking.productionTypeVideo,
                        })
                      }
                      inputPlaceholder={'video'}
                      inputChecked={booking.productionTypeVideo === true}
                      labelHtmlFor={'video'}
                      labelContent={'Video'}
                    />

                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'music'}
                      inputName={'productionType'}
                      inpuValue={'music'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          productionTypeMusic: !booking.productionTypeMusic,
                        })
                      }
                      inputPlaceholder={'music'}
                      inputChecked={booking.productionTypeMusic === true}
                      labelHtmlFor={'music'}
                      labelContent={'Music'}
                    />
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
                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'commercial'}
                      inputName={'workType'}
                      inpuValue={'commercial'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          workTypeCommercial: !booking.workTypeCommercial,
                        })
                      }
                      inputPlaceholder={'commercial'}
                      inputChecked={booking.workTypeCommercial === true}
                      labelHtmlFor={'commercial'}
                      labelContent={'Commercial'}
                    />

                    <InputField
                      classNameGroup={'form__field-select'}
                      classNameInput={'form__field'}
                      classNameLabel={'form__label-select'}
                      inputType={'checkbox'}
                      inputId={'editorial'}
                      inputName={'workType'}
                      inpuValue={'Editorial'}
                      inputOnChange={() =>
                        setBooking({
                          ...booking,
                          workTypeEditorial: !booking.workTypeEditorial,
                        })
                      }
                      inputPlaceholder={'Editorial'}
                      inputChecked={booking.workTypeEditorial === true}
                      labelHtmlFor={'editorial'}
                      labelContent={'Editorial'}
                    />
                  </div>
                </motion.div>
              ) : (
                ''
              )}
              <h3 className='form__group__header'>Message</h3>
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
                    What's on your mind?
                  </label>
                </div>
              </div>

              <InputField
                classNameGroup={booking.name && booking.email ? 'form__field-select acceptance ready' : 'form__field-select acceptance'}
                classNameInput={validationMessage.errorMessage && !booking.acceptance ? 'error form__field' : 'form__field'}
                classNameLabel={'form__label-select acceptance-terms'}
                inputType={'checkbox'}
                inputId={'acceptance'}
                inputName={'acceptance'}
                inpuValue={'yes'}
                inputOnChange={() =>
                  setBooking({
                    ...booking,
                    acceptance: !booking.acceptance,
                  })
                }
                inputPlaceholder={'acceptance'}
                inputChecked={booking.acceptance === true}
                labelHtmlFor={'acceptance'}
                labelContent={
                  'If you submit a booking request via an enquiry form or a question via a contact form, we need to process your data in order torespond. However, your data will only be processed for this purpose, and will not be used for anything else. *'
                }
              />
            </div>

            <div className="form-recaptcha">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}
                theme='dark'
                onChange={handleCaptcha}
              />
            </div>

            <button type='submit' className='form-btn'>
              Send <VscArrowRight className='booking-arrow' />
            </button>
          </form>
        </motion.div>
      )}
    </>
  )
}
