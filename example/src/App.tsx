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
  }, [theme])
  return themeLoading ? (
    <div className='all-center'>
      <h2>please wait while assets load</h2>
    </div>
  ) : (
    <>
      <div className='all-center'>
        <select value={theme} onChange={(ev) => setTheme(ev.target.value)}>
          <option>altrua</option>
          <option>medstar</option>
          <option>thedacare</option>
          <option>walgreens</option>
        </select>
      </div>
      <div className="buttons">
        <div>
          <CustomButton classList={['bwell-btns__primary']}>
            Primary
          </CustomButton>
        </div>
        <div>
          <CustomButton classList={['bwell-btns__primary' ,'bwell-btns__primary--outlined']}>
            Primary Outlined
          </CustomButton>
        </div>
        <div>
          <CustomButton classList={['bwell-btns__secondary']}>
            Secondary
          </CustomButton>
        </div>
        <div>
        <CustomButton classList={['bwell-btns__primary' ,'bwell-btns__primary-small']}>
          Primary small
        </CustomButton>
        </div>
        <div>
          <CustomButton classList={['bwell-btns__primary' ,'bwell-btns__primary--danger']}>
            Primary Danger
          </CustomButton>
        </div>
        <div>
          <CustomButton classList={['bwell-btns__secondary', 'bwell-btns__secondary-small']}>
            Secondary small
          </CustomButton>
        </div>
      </div>
    </>
  )
}
export default App
