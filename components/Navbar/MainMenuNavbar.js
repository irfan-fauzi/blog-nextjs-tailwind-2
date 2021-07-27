import React from 'react'

const MainMenuNavbar = ({ menuNavbar }) => {
  
  return (
    <>
       {
          menuNavbar.map(({ text, url }) => (
            <li key={Math.random()}><a href={url} className="hover:underline">{ text }</a></li>
      ))}
    </>
  )
}

export default MainMenuNavbar
