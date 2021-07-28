import Head from 'next/head'
import { useContext } from 'react'
import CardPost from '../components/CardPost'
import Container from '../components/Container'
import FeaturedPost from '../components/FeaturedPost'
import Layout from '../components/Layout'
import { KontenContext } from '../context/ContextKonten'


export default function Home() {
  const [konten, setKonten] = useContext(KontenContext)

  return (
   
    <Layout>
      <Container>
        <FeaturedPost />

        <div className="flex flex-wrap md:-mx-6 lg:-mx-7 mt-5 -mx-4">
          {konten.map(post => (
              <div key={Math.random()} className="lg:w-4/12 lg:px-4 lg:py-6 py-6 md:w-6/12 md:px-4 border-gray-400 ">
               <CardPost {...post}/>
             </div>
            ))}
        </div>

      </Container>
     </Layout> 
    
   
  )
}
