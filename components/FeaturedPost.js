import InfoPost from "./InfoPost"

const FeaturedPost = () => {

  const dataFeaturedPost = 
    {
      img: '/thumbnail-1.jpg',
      categorie: 'UI Design',
      date: '18 juli 2021',
      title: 'Understanding color theory: the color wheel and finding complementary colors',
      content : 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
      imgWriter: '/author-1.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    }
   const { img, categorie, date, title, content, imgWriter, nameWriter, profesion } = dataFeaturedPost 
  
  return (
    <article>
      <div className="lg:flex lg:flex-row lg:-mx-6 items-center md:flex-col md:-mx-6 -mx-6">
        <div className="px-4 lg:w-7/12 md:w-12/12">
          <img src={img} alt="" className="rounded-xl w-full" />
        </div>
        <div className="lg:w-5/12 px-4 md:w-12/12">
          <InfoPost 
            categorie={categorie}
            date={date}
            title={title}
            content={content}
            imgWriter={imgWriter}
            nameWriter={nameWriter}
            propfesion={profesion}
          />
        </div>
      </div>
    </article>
  )
}

export default FeaturedPost
