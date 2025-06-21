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
import Pricing from './components/pricing/Pricing'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/notfound/NotFound'

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
            <Clients />
            <Features />
            <Integrations />
            <Reviews />
            <CallToAction />
            <Footer />
          </Route>
          
          <Route exact path="/pricing">
            <Pricing  />
          </Route>
          
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
