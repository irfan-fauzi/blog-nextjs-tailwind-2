import React, { useContext } from 'react'
import { KontenContext } from '../context/ContextKonten' 

const LastPost = () => {
  const [content, setContent] = useContext(KontenContext)
  console.log(content)
  return (
    <div>
      
    </div>
  )
}

export default LastPost
