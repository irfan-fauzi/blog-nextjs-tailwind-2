
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
              12 july 2021
            </div>
          </div>
          <h2 className="text-2xl mt-6">Understanding color theory: the color wheel and finding complementary colors</h2>
          <p className="text-white/60 mt-6 w-8/12 ">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
          </p>
          <div className="flex item-center mt-6">
            <img src="/author-1.jpg" alt="" className="w-14 h-14 rounded-full object-cover" />
            <div className="ml-4">
              <h3>Irfan fauzi</h3>
              <div className="text-white/50 text-sm">
                UI Designer
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FeaturedPost
