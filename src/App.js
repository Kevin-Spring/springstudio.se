import { Header } from './components/Header'
import './styles/main.scss'
import './styles/_cookies.scss'
import CookieConsent from 'react-cookie-consent'

/* Component header contains all routes and components which routing points at */
function App() {
  return (
    <>
      <Header />

      <CookieConsent>
        <span> This website uses cookies</span>
      </CookieConsent>
    </>
  )
}

export default App
