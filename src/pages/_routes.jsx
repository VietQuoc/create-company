import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ConsultationScheduling from './ConsultationScheduling'
import Home from './Home'
import RequestAQuote from './RequestAQuote'
import JudicialRecord from './JudicialRecord'
import TrademarkLookup from './TrademarkLookup'
import PriceList from './PriceList'
import AnswerQuestion from './AnswerQuestion'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sheduling">
          <ConsultationScheduling />
        </Route>
        <Route path="/quote">
          <RequestAQuote />
        </Route>
        <Route path="/judicial">
          <JudicialRecord />
        </Route>
        <Route path="/trademark">
          <TrademarkLookup />
        </Route>
        <Route path="/price">
          <PriceList />
        </Route>
        <Route path="/question">
          <AnswerQuestion />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
