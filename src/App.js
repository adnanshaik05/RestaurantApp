import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Salads from './Salads'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Salads} />
      </Switch>
    </BrowserRouter>
  )
}
