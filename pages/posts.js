
import { useState } from "react"
import CardPost from "../components/CardPost"
import Container from "../components/Container"
import Layout from "../components/Layout"
import SectionHeader from "../components/SectionHeader"
import mockPosts from '../utils/posts.json'

const Posts = () => {
  const [posts, setPosts] = useState(mockPosts)
  return (
    <Layout>
      <Container>
        <SectionHeader >UI Design</SectionHeader>
          {posts.length ? (
            <div className="flex flex-wrap md:-mx-6 lg:-mx-7 mt-5 -mx-4">
              {posts.map(post => (
                <div key={Math.random()} className="lg:w-4/12 lg:px-4 lg:py-6 py-6 md:w-6/12 md:px-4 border-gray-400 ">
                  <CardPost {...post}/>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="lg:text-5xl text-2xl">Maaf artikel tidak ada 🤒 </h2>
              <p className="lg:mt-4 lg:w-8/12 mx-auto text-lg text-white/60 mt-4">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
            </div>
          )}   
          
        </Container>
    </Layout>
  )
}

export default Posts
