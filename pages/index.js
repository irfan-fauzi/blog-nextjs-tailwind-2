import Head from 'next/head'
import { useContext } from 'react'
import CardPost from '../components/CardPost'
import FeaturedPost from '../components/FeaturedPost'
import Navbar from '../components/Navbar/Navbar'
import { KontenContext } from '../context/ContextKonten'

export default function Home() {
  
  const [content, setContent] = useContext(KontenContext)

  return (
   
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white font-patrick">
      <Navbar />
      <div className="container mx-auto">
        <FeaturedPost />

        <div className="flex">
          <div className="w-4/12">
            <CardPost />
          </div>
        </div>
        
      </div>    
    </div>
   
  )
}
