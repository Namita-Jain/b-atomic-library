import React, { useState, useEffect } from 'react'
import 'b-atomic-library/dist/index.modern.css'
import { CustomButton } from 'b-atomic-library'

// same css issue as before.
// import "../node_modules/b-atomic-library/dist/index.modern.css"

// the Input is a test component expored from b-atomic-library
// import {Input} from "b-atomic-library"

import { applyCssVars } from './utils'

const App = () => {
  const [themeLoading, isThemeLoading] = useState(true)
  const [theme, setTheme] = useState('altrua') //default
  useEffect(() => {
    fetch(`http://localhost:5000/themes?name=${theme}`).then((response) =>
      response
        .json()
        .then((data) => {
          console.log(data)
          applyCssVars(data[0].styles)
        })
        .catch(() => {
          // do some fallback styling
        })
        .finally(() => {
          isThemeLoading(false)
        })
    )
    // fetch(`http://localhost:5000/themes?name=${theme}`)
    //   .then((data) => {
    //     applyCssVars(JSON.parse(data))
    //   })
    //   .catch((err) => {
    //     // do some fallback styling
    //     console.log(err)
    //   })
    //   .finally(() => {
    //     isThemeLoading(false)
    //   })
  }, [theme])
  return themeLoading ? (
    <div className='all-center'>
      <h2>please wait while assets load</h2>
    </div>
  ) : (
    <div className='all-center'>
      <select value={theme} onChange={(ev) => setTheme(ev.target.value)}>
        <option>altrua</option>
        <option>medstar</option>
        <option>thedacare</option>
        <option>walgreens</option>
      </select>
      <CustomButton type='_CustomButton-module__bwell-btns__primary__1Lqty'>
        Button
      </CustomButton>
    </div>
  )
}
export default App
