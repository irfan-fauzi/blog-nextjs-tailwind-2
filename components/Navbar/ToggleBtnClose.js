import React from 'react'

const ToggleBtnClose = ({toggleFunction, classBtn}) => {
  return (
    <button onClick={toggleFunction} className={classBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
  )
}

export default ToggleBtnClose
