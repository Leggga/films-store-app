import React from "react";
import ReactDOM from "react-dom";
import {Provider as ReduxProvider} from 'react-redux'
import {store} from '@/store'

import App from '@/views/App'
import 'antd/dist/antd.css';

ReactDOM.render(
  <ReduxProvider store={store}>
    <App/>
  </ReduxProvider>
, document.getElementById('root'))