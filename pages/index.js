import Head from 'next/head'
import { useContext } from 'react'
import CardPost from '../components/CardPost'
import Container from '../components/Container'
import FeaturedPost from '../components/FeaturedPost'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import { KontenContext } from '../context/ContextKonten'

export default function Home() {

  const [konten, setKonten] = useContext(KontenContext)

  return (
   
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white font-patrick">
      <Navbar />
      <Container>
        <FeaturedPost />

        <div className="flex flex-wrap -mx-4 mt-6">
          {konten.map(post => (
              <div key={Math.random()} className="lg:w-4/12 px-4 py-6 md:w-6/12">
               <CardPost {...post}/>
             </div>
            ))}
        </div>

      </Container>
      <Footer />    
    </div>
   
  )
}
