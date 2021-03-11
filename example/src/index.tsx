import './index.css'
// TODO: Sass does not work. I tried importing the .scss file and it gave the following error
// Error: Node Sass version 5.0.0 is incompatible with ^4.0.0.
// If the library is linked to another react app, then it works. it just doesnt work with 
// this particular example project.

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
