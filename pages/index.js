import Head from 'next/head'
import FeaturedPost from '../components/FeaturedPost'
import LastPost from '../components/LastPost'
import Navbar from '../components/Navbar/Navbar'
import { KontenProvider } from '../context/ContextKonten'

export default function Home() {

  return (
   <KontenProvider> 
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white font-patrick">
      <Navbar />
      <div className="container mx-auto">
        <FeaturedPost />
        <LastPost /> 
      </div>    
    </div>
   </KontenProvider>
  )
}
