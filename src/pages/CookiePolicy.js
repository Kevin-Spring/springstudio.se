import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/scss/_policy.scss'
import { PageTransition } from '../animations/PageTransition'

const motionContent = {
  animate: {
    transition: { staggerChildren: 0.8, delayChildren: 0.8 },
  },
}

const motionTitle = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const motionParagraph = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const CookiePolicy = () => {
  return (
    <motion.section exit={{ opacity: 0 }} className='policy-section'>
      {/* WORK IN PROGRESS */}
      <PageTransition />
      <motion.article initial='initial' animate='animate' variants={motionContent}>
        <motion.h1 initial='initial' animate='animate' variants={motionTitle}>
          COOKIE POLICY
        </motion.h1>
        <motion.p style={{ opacity: 0.8 }} initial='initial' animate='animate' variants={motionParagraph}>
          Last updated april 11th 2021
        </motion.p>
        <motion.h2 initial='initial' animate='animate' variants={motionTitle}>
          INTRODUCTION
        </motion.h2>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          Spring Studio (“we” or “us” or “our”) may use cookies, web beacons, tracking pixels, and other tracking technologies when you visit our
          website springstudo.se, including any other media form, media channel, mobile website, or mobile application related or connected thereto
          (collectively, the “Site”) to help customize the Site and improve your experience. We reserve the right to make changes to this Cookie
          Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Cookie Policy. Any
          changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site, and you waive the right to
          receive specific notice of each such change or modification. You are encouraged to periodically review this Cookie Policy to stay informed
          of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any
          revised Cookie Policy by your continued use of the Site after the date such revised Cookie Policy is posted.
        </motion.p>
        <motion.h2 initial='initial' animate='animate' variants={motionTitle}>
          USE OF COOKIES
        </motion.h2>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          A “cookie” is a string of information which assigns you a unique identifier that we store on your computer. Your browser then provides that
          unique identifier to use each time you submit a query to the Site. We use cookies on the Site to, among other things, keep track of services
          you have used, record registration information, record your user preferences, keep you logged into the Site, facilitate purchase procedures,
          and track the pages you visit. Cookies help us understand how the Site is being used and improve your user experience.{' '}
        </motion.p>
        <motion.h2 initial='initial' animate='animate' variants={motionTitle}>
          TYPES OF COOKIES
        </motion.h2>

        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          The following types of cookies may be used when you visit the Site:
        </motion.p>
        <motion.h3 initial='initial' animate='animate' variants={motionTitle}>
          Advertising Cookies
        </motion.h3>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          Advertising cookies are placed on your computer by advertisers and ad servers in order to display advertisements that are most likely to be
          of interest to you. These cookies allow advertisers and ad servers to gather information about your visits to the Site and other websites,
          alternate the ads sent to a specific computer, and track how often an ad has been viewed and by whom. These cookies are linked to a computer
          and do not gather any personal information about you.
        </motion.p>
        <motion.h3 initial='initial' animate='animate' variants={motionTitle}>
          Analytics Cookies
        </motion.h3>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          Analytics cookies monitor how users reached the Site, and how they interact with and move around once on the Site. These cookies let us know
          what features on the Site are working the best and what features on the Site can be improved.
        </motion.p>
        <motion.h3 initial='initial' animate='animate' variants={motionTitle}>
          Our Cookies
        </motion.h3>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          Our cookies are “first-party cookies”, and can be either permanent or temporary. These are necessary cookies, without which the Site won't
          work properly or be able to provide certain features and functionalities. Some of these may be manually disabled in your browser, but may
          affect the functionality of the Site.
        </motion.p>
        <motion.h3 initial='initial' animate='animate' variants={motionTitle}>
          Personalization Cookies
        </motion.h3>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          Personalization cookies are used to recognize repeat visitors to the Site. We use these cookies to record your browsing history, the pages
          you have visited, and your settings and preferences each time you visit the Site.
        </motion.p>
        <motion.h3 initial='initial' animate='animate' variants={motionTitle}>
          Security Cookies
        </motion.h3>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          Security cookies help identify and prevent security risks. We use these cookies to authenticate users and protect user data from
          unauthorized parties.
        </motion.p>
        <motion.h3 initial='initial' animate='animate' variants={motionTitle}>
          Site Management Cookies
        </motion.h3>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          Site management cookies are used to maintain your identity or session on the Site so that you are not logged off unexpectedly, and any
          information you enter is retained from page to page. These cookies cannot be turned off inpidually, but you can disable all cookies in your
          browser.
        </motion.p>
        <motion.h3 initial='initial' animate='animate' variants={motionTitle}>
          Third-Party Cookies
        </motion.h3>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          Third-party cookies may be place on your computer when you visit the Site by companies that run certain services we offer. These cookies
          allow the third parties to gather and track certain information about you. These cookies can be manually disabled in your browser.
        </motion.p>
        <motion.h2 initial='initial' animate='animate' variants={motionTitle}>
          CONTROL OF COOKIES
        </motion.h2>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser’s settings. Please be aware
          that such action could affect the availability and functionality of the Site. For more information on how to control cookies, check your
          browser or device’s settings for how you can control or reject cookies, or visit the following links: Apple Safari Google Chrome Microsoft
          Edge Microsoft Internet Explorer Mozilla Firefox Opera Android (Chrome) Blackberry Iphone or Ipad (Chrome) Iphone or Ipad (Safari) In
          addition, you may opt-out of some third-party cookies through the Network Advertising Initiative’s Opt-Out Tool.
        </motion.p>
        <motion.h2 initial='initial' animate='animate' variants={motionTitle}>
          OTHER TRACKING TECHNOLOGIES
        </motion.h2>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on the Site to help customize the Site and
          improve your experience. A “web beacon” or “pixel tag” is tiny object or image embedded in a web page or email. They are used to track the
          number of users who have visited particular pages and viewed emails, and acquire other statistical data. They collect only a limited set of
          data, such as a cookie number, time and date of page or email view, and a description of the page or email on which they reside. Web beacons
          and pixel tags cannot be declined. However, you can limit their use by controlling the cookies that interact with them.
        </motion.p>
        <motion.h2 initial='initial' animate='animate' variants={motionTitle}>
          PRIVACY POLICY
        </motion.h2>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          For more information about how we use information collected by cookies and other tracking technologies, please refer to our
          {<Link to='/studio/privacy'>Privacy Policy</Link>} posted on the Site. This Cookie Policy is part of and is incorporated into our Privacy
          Policy. By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy.
        </motion.p>
        <motion.h2 initial='initial' animate='animate' variants={motionTitle}>
          CONTACT US
        </motion.h2>
        <motion.p initial='initial' animate='animate' variants={motionParagraph}>
          If you have questions or comments about this Cookie Policy, please contact us at: [Company Name] [Street Address] [City, State Zip] [Phone
          Number] [Fax Number] [Email]
        </motion.p>
      </motion.article>
    </motion.section>
  )
}
