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
      <div className="lg:flex lg:flex-row lg:-mx-6 items-center md:flex-col md:-mx-6 -mx-6 ">
        <div className="lg:px-4 px-2 lg:w-8/12 md:w-full">
          <img src={img} alt="" className="rounded-2xl w-full" />
        </div>
        <div className="lg:w-4/12 px-2 lg:px-4 md:w-full">
          <InfoPost 
            categorie={categorie}
            date={date}
            title={title}
            content={content}
            imgWriter={imgWriter}
            nameWriter={nameWriter}
            profesion={profesion}
          />
        </div>
      </div>
    </article>
  )
}

export default FeaturedPost
