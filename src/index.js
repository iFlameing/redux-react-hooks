import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { StoreProvider } from './Store'

ReactDom.render(
<StoreProvider><App /></StoreProvider>,document.getElementById('root')
);