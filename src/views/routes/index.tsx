import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
import history from '@/views/routes/history'
import {store} from '@/store'
//pages
import MainPage from '@/views/pages/MainPage'

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <Router history={history}>
        <div className="app-wrapper">
          <Switch>
            <Route exact path="/" component={MainPage}/>
            {/*<Route path="/" component={MainPage}/>*/}
          </Switch>
        </div>
      </Router>
    </ReduxProvider>
  )
}

export default App