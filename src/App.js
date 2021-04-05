import { Header } from './components/Header'
import './styles/main.scss'
import CookieConsent from 'react-cookie-consent'

/* Component header contains all routes and components which routing points at */
function App() {
  return (
    <>
      <Header />

      <CookieConsent
        exit={{ opacity: 0 }}
        style={{
          background: 'rgba(0,0,0,.8)',
          zIndex: 3,
          position: 'fixed',
          bottom: 0,
          maxWidth: '500px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '12px',
          flexFlow: 'row wrap',
        }}
        buttonStyle={{ color: '#fffdf7', fontSize: '12px', background: 'transparent', border: '1px solid #fffdf7' }}
      >
        <span> This website uses cookies</span>
      </CookieConsent>
    </>
  )
}

export default App
