import React from 'react'
import AuthorPost from '../components/AuthorPost'
import Container from '../components/Container'
import Layout from '../components/Layout'
import PostMetaTitle from '../components/PostMetaTitle'

const detail = () => {
  return (
    <Layout>
      <Container>
       <div className="md:w-6/12 w-full mx-auto flex flex-col  items-center ">

        <PostMetaTitle
          categorie="UI Design"
          date="24 juli 2024"
          title="Understanding color theory: the color wheel and finding complementary colors"
          center
        />
        <AuthorPost
          imgWriter="/author-1.jpg"
          nameWriter="Irfan fauzi rahmatullah"
          profesion="UI Designer" 
        />
       </div>
       <div className="md:w-10/12 w-full mx-auto my-10">
        <img src="/detail-img.jpg" alt="detail" className="w-full rounded-lg"/>
       </div>

       <div className="md:w-8/12 w-full mx-auto leading-relaxed">
        <p className="text-xl mb-4">Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they're their brought seas isn't, to day from bearing grass third midst after beginning man which you're. Dry, gathering beginning given made them evening.</p>

        <p className="mb-4">
        Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Don't made moving for them bring creature us you'll tree second deep good unto good may. Us yielding.
        </p>

        <p>
        Have. Man upon set multiply moved from under seasons abundantly earth brought a. They're open moved years saw isn't morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place won't and him Third fourth moving him whales behold. Beast second stars lights great was don't green give subdue his. Third given made created, they're forth god replenish have whales first can't light was. Herb you'll them beast kind divided. Were beginning fly air multiply god Yielding sea don't were forth.
        </p>
       </div>
      </Container>
    </Layout>
  )
}

export default detail
