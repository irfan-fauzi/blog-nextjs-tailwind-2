import Head from 'next/head'
import { useState } from 'react'
import MainMenuNavbar from '../components/Navbar/MainMenuNavbar'



export default function Home() {

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


  return (
   <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white font-patrick">
     <nav className="py-10 ">
       <div className="container mx-auto">
        <div className="flex items-center justify-between ">

          <div className="w-2/12 flex items-center">
            <div className="w-10 h-10 bg-gray-500 rounded-md flex items-center justify-center mr-4 shadow-lg">E</div>
            Epictetus
          </div>

          <div className="w-8/12">
            <ul className="flex space-x-10 items-center">
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
                     <li key={Math.random()}><a href={url} className="flex py-3 px-6  hover:bg-black transition-all border-b border-gray-500 ">{ text }</a></li>
                  ))}
                  </ul>   
                   )}
              </li>
            </ul>
          </div>

          <div className="w-2/12 ">
            <input className="bg-gray-700 py-2 px-6 w-full rounded-full bg-search pl-10" placeholder="Search..." />
          </div>

        </div>
       </div>
     </nav>
   </div>
  )
}
