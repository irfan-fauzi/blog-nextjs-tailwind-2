import React from 'react'
import Link from 'next/link'

const MainMenuNavbar = ({ menuNavbar }) => {
  
  return (
    <>
       {
          menuNavbar.map(({ text, url }) => (
            <li key={Math.random()}>
              <Link href={url}>
                <a className="hover:underline">{ text }</a>
              </Link>
            </li>
      ))}
    </>
  )
}

export default MainMenuNavbar
