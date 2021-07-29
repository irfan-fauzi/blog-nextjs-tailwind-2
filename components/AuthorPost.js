import React from 'react'

const AuthorPost = ({ imgWriter, nameWriter, profesion }) => {
  return (
    <div className="flex items-center lg:item-center mt-6 ">
        <img src={imgWriter} alt="" className="lg:w-12 lg:h-12 w-10 h-10 rounded-full object-cover" />
        <div className="ml-4">
          <h3>{nameWriter}</h3>
          <div className="text-white/50 text-sm">
            {profesion}
          </div>
        </div>
    </div>
  )
}

export default AuthorPost
