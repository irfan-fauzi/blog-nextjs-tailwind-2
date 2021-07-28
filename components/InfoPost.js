import React from 'react'

const InfoPost = ({categorie, date, title, content, imgWriter, nameWriter, profesion }) => {
  return (
   <>
          <div className="flex items-center text-white/60 space-x-2">
            <div className="uppercase">
              {categorie}
            </div>
            <span>&bull;</span>
            <div>
              {date}
            </div>
          </div>
          <h2 className="text-3xl mt-4">{title}</h2>
          <p className="text-white/60 mt-4 w-10/12 ">
            {content} 
          </p>
          <div className="flex item-center mt-6">
            <img src={imgWriter} alt="" className="w-14 h-14 rounded-full object-cover" />
            <div className="ml-4">
              <h3>{nameWriter}</h3>
              <div className="text-white/50 text-sm">
                {profesion}
              </div>
            </div>
          </div>
   </> 
  )
}

export default InfoPost
