import InfoPost from "./InfoPost"

const CardPost = ({ img, ...infoPost }) => {
  
  return (
    <article>
      <img src={img} alt="" className="w-full rounded-lg mb-4" />
      <InfoPost { ...infoPost } />
    </article>
  )
}

export default CardPost