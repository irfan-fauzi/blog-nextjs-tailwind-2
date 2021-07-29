import React from 'react'
import AuthorPost from '../components/AuthorPost'
import Container from '../components/Container'
import Layout from '../components/Layout'
import PostMetaTitle from '../components/PostMetaTitle'

const detail = () => {
  return (
    <Layout>
      <Container>
       <div className="w-9/12 mx-auto flex flex-col  items-center ">
        <PostMetaTitle
          categorie="UI Design"
          date="24 juli 2024"
          title="Understanding color theory: the color wheel and finding complementary colors"
          
          center="text-center"
        />
        <AuthorPost
          imgWriter="/author-1.jpg"
          nameWriter="Irfan fauzi rahmatullah"
          profesion="UI Designer" 
        />
       </div>
      </Container>
    </Layout>
  )
}

export default detail
