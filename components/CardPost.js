import InfoPost from "./InfoPost"
import Link from 'next/link'

const CardPost = ({ img, ...infoPost }) => {
  
  return (
    <article>
      <Link href='/detail'>
        <a>
        <img src={img} alt="" className="w-full rounded-xl mb-4" />
        </a>
      </Link>

      <InfoPost { ...infoPost } />
    </article>
  )
}

export default CardPost
