import Link from 'next/link'

const PostMetaTitle = ({
  categorie,
  date,
  title,
  center}) => {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-2 mt-4">
        <div className="uppercase">
          {categorie}
        </div>
        <span>&bull;</span>
        <div>
         {date}
        </div>
      </div>
      <h2 className={`${center ? `text-center` : ``} text-3xl mt-3`}> 
        <Link href="/detail">
          <a>
            {title}
          </a>
        </Link>
      </h2>
    </>
  )
}

export default PostMetaTitle
