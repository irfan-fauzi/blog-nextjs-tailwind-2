import Head from 'next/head'
import FeaturedPost from '../components/FeaturedPost'
import Navbar from '../components/Navbar/Navbar'
import { KontenProvider } from '../context/ContextKonten'

export default function Home() {

  return (
   <KontenProvider> 
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white font-patrick">
      <Navbar />
      <FeaturedPost />     
    </div>
   </KontenProvider>
  )
}
