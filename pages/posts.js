
import CardPost from "../components/CardPost"
import Container from "../components/Container"
import Layout from "../components/Layout"
import posts from '../utils/posts.json'


const Posts = () => {
 
  return (
    <Layout>
      <Container>  
        <div className="flex flex-wrap md:-mx-6 lg:-mx-7 mt-5 -mx-4">
          {posts.map(post => (
            <div key={Math.random()} className="lg:w-4/12 lg:px-4 lg:py-6 py-6 md:w-6/12 md:px-4 border-gray-400 ">
              <CardPost {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default Posts
