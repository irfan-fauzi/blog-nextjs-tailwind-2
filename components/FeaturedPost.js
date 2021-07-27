import React, { useContext } from 'react'
import { KontenContext } from '../context/ContextKonten' 


const FeaturedPost = () => {
  const [content, setContent] = useContext(KontenContext)
  console.log(content)
  return (
    <article>
      
    </article>
  )
}

export default FeaturedPost
