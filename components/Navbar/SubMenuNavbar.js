
import React from 'react'

const SubMenuNavbar = ({ menuSubNavbar }) => {
  
  return (
    <ul className="absolute w-[200px] border">
    {
      menuSubNavbar.map(({ text, url }) => (
       <li key={Math.random()}><a href={url} className="border flex py-3 px-6 bg-gray-200 hover:bg-gray-800 transition-all ">{ text }</a></li>
    ))}
    </ul>     
  )
}

export default SubMenuNavbar
