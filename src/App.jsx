import './css/reset.css'
import './css/main.css'
import './css/App.css'
import Main from './components/main/Main'
import Clients from './components/clients/Clients'
import Features from './components/features/Features'
import Integrations from './components/integrations/Integrations'
import Reviews from './components/reviews/Reviews'
import CallToAction from './components/call-to-action/CallToAction'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Main />
      <Clients />
      <Features />
      <Integrations />
      <Reviews />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
