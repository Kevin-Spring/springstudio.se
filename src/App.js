import { Header } from './components/Header'
import './styles/scss/main.scss'
import './styles/scss/_cookies.scss'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'react-router-dom'

/* Component header contains all routes and components which routing points at */
function App() {
  return (
    <>
      <Header />

      {/* Cookie banner created by NPM-package */}
      <CookieConsent>
        <span>
          This website uses cookies to improve the user experience.{' '}
          <Link to='/studio/cookies' style={{ textDecoration: 'underline' }}>
            Read more
          </Link>
        </span>
      </CookieConsent>
    </>
  )
}

export default App
