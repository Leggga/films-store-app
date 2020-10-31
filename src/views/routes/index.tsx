import React from 'react'
import {Router, Switch} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
import history from '@/views/routes/history'
import {store} from '@/store'

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <Router history={history}>
        <div className="app-wrapper">
            <Switch>

            </Switch>
          </div>
      </Router>
    </ReduxProvider>
  )
}

export default App