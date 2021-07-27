
const FeaturedPost = () => {
  
  return (
    <article>
      <div className="flex -mx-6">
        <div className="px-6 w-8/12">
          <img src="/thumbnail-1.jpg" alt="" className="rounded-xl w-full" />
        </div>
        <div className="w-4/12 px-6">
          <div className="flex items-center text-white/60 space-x-2">
            <div className="uppercase">
              UI design
            </div>
            <span>&bull;</span>
            <div className="">
              J12 july 2021
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FeaturedPost
