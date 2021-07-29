import React from 'react'
import AuthorPost from './AuthorPost'
import PostMetaTitle from './PostMetaTitle'

const InfoPost = ({categorie, date, title, content, imgWriter, nameWriter, profesion }) => {
  return (
   <>
      <PostMetaTitle 
        categorie={categorie} 
        date={date} 
        title={title} 
      />

      <p className="text-white/60 mt-4 w-12/12 lg:w-10/12">
       {content} 
      </p>

     <AuthorPost
       imgWriter={imgWriter}
       nameWriter={nameWriter}
       profesion={profesion} 
     />
     
   </> 
  )
}

export default InfoPost
