import React from 'react'

const PostMetaTitle = ({
  categorie,
  date,
  title,
  center}) => {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-2 mt-1">
        <div className="uppercase">
          {categorie}
        </div>
        <span>&bull;</span>
        <div>
         {date}
        </div>
      </div>
      <h2 className={`${center} text-3xl mt-3`}>{title}</h2>
    </>
  )
}

export default PostMetaTitle
