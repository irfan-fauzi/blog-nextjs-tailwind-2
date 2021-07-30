import React, { useState } from 'react'
import Container from '../Container';
import MainMenuNavbar from './MainMenuNavbar';

const Navbar = () => {
  
  const [isDropdown, setDropdown] = useState(false)
  const menuNavbar = [
    {
      text: 'UI Design',
      url: '#'
    },
    {
      text: 'Front End',
      url: '#'
    },
    {
      text: 'Back end',
      url: '#'
    },
  ]

  
  const menuSubNavbar = [
    {
      text: 'Volley Ball kami',
      url: '#'
    },
    {
      text: 'Skateboard muda',
      url: '#'
    },
    {
      text: 'Javascript',
      url: '#'
    }
  ]

  const [toggle, setToggle] = useState(false)

  

  return (
    <nav className="py-10 ">
      <Container>
       
        <div className="flex items-center  -mx-2">
            <div className="lg:hidden flex w-3/12">
                <button onClick={() => setToggle(!toggle)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                  <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  </svg>
                </button>
            </div>

          <div className="lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start">
            <div className="w-10 h-10 bg-gray-500 rounded-md flex items-center justify-center mr-4 shadow-lg">E</div>
            Epictetus
          </div>

          <div className="w-3/12 lg:hidden text-right">
            
              <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
          
          </div>

          <div className={`lg:w-7/12 fixed w-full bg-gradient-to-b from-gray-600 to-gray-800 top-0 ${toggle ? `left-0` : `-left-full`} left-0 h-full p-10 transition-all`}>

            <button onClick={() => setToggle(!toggle)} className="absolute top-10 right-10 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <ul className="flex lg:space-x-10 lg:items-center flex-col space-y-4">
             <MainMenuNavbar menuNavbar={menuNavbar} />

              <li className="relative">
                <a className="cursor-pointer flex items-center" onClick={ () => setDropdown(!isDropdown) }>Lainnya 
                  <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg></a>
                  {isDropdown && (
                  <ul className="absolute w-[200px] rounded-md bg-gray-900 shadow-xl mt-4">
                    {
                       menuSubNavbar.map(({ text, url }) => (
                        <li key={Math.random()} className="border-b border-gray-500 last:border-0" ><a href={url} className="flex py-3 px-6  hover:bg-black transition-all ">{ text }</a></li>
                     ))}
                  </ul>   
                  )}
              </li>
            </ul>
          </div>

          <div className="hidden lg:block w-3/12 ">
            <input className="bg-gray-700 py-2 px-6 w-full rounded-full bg-search pl-10" placeholder="Search..." />
          </div>

        </div>
       </Container>
     </nav>
  )
}

export default Navbar
