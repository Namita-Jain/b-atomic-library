import React, { useState, useEffect } from 'react'
import 'b-atomic-library/dist/index.modern.css'
import { CustomButton } from 'b-atomic-library'

import { applyCssVars } from './utils'

const App = () => {
  const [themeLoading, isThemeLoading] = useState(true)
  const [theme, setTheme] = useState('altrua') //default
  useEffect(() => {
    fetch(`http://localhost:5000/themes?name=${theme}`).then((response) =>
      response
        .json()
        .then((data) => {
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
          <CustomButton
            classList={['bwell-btns', 'bwell-btns__primary']} 
            id="btn-1"
          >
            Primary
          </CustomButton>
        </div>
        <div>
          <CustomButton
            classList={['bwell-btns', 'bwell-btns__primary', 'bwell-btns__primary--outlined']}
            id="btn-2"
          >
            Primary Outlined
          </CustomButton>
        </div>
        <div>
          <CustomButton
            classList={['bwell-btns', 'bwell-btns__secondary']}
            id="btn-3"
          >
            Secondary
          </CustomButton>
        </div>
        <div>
          <CustomButton
            classList={['bwell-btns', 'bwell-btns__primary', 'bwell-btns__primary-small']}
            id="btn-4"
          >
            Primary small
        </CustomButton>
        </div>
        <div>
          <CustomButton
            classList={['bwell-btns', 'bwell-btns__primary', 'bwell-btns__primary--danger']}
            id="btn-5"
          >
            Primary Danger
          </CustomButton>
        </div>
        <div>
          <CustomButton
            classList={['bwell-btns', 'bwell-btns__secondary', 'bwell-btns__secondary-small']}
            id="btn-6"
          >
            Secondary small
          </CustomButton>
        </div>
        <div>
          <CustomButton
            classList={['bwell-btns', 'bwell-btns__primary']}
            id="btn-7"
            isDisabled
          >
            Primary Disabled
          </CustomButton>
        </div>
        <div>
          <CustomButton
            classList={['custom-btn-1']}
            id="btn-8"
          >
            Custom Styled Button
          </CustomButton>
        </div>
        <div>
          <CustomButton
            classList={['bwell-btns', 'bwell-btns__secondary']}
            id="btn-9"
            isDisabled
          >
            Secondary Disabled
          </CustomButton>
        </div>
      </div>
    </>
  )
}
export default App
