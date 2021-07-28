import React, { useState, createContext } from 'react'

export const KontenContext = createContext()


export const KontenProvider = props => {

  const [konten, setKonten] = useState([
    {
      img: '/thumbnail-2.jpg',
      categorie: 'internet',
      date: '18 juli 2021',
      title: 'how to design your product that can grow 20x',
      content : 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      imgWriter: '/author-2.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'

    },
    {
      img: '/thumbnail-3.jpg',
      categorie: 'inspiration',
      date: '18 juli 2021',
      title: 'the more important the work, the more important the rest',
      content : 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      imgWriter: '/author-3.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    },
    {
      img: '/thumbnail-4.jpg',
      categorie: 'inspiration',
      date: '18 juli 2021',
      title: 'email Love- email inspiration template and discovery',
      content : 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      imgWriter: '/author-4.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    },
    {
      img: '/thumbnail-5.jpg',
      categorie: 'inspiration',
      date: '18 juli 2021',
      title: 'The More Important the Work, the More Important the Rest',
      content : 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      imgWriter: '/author-2.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    },
    {
      img: '/thumbnail-6.jpg',
      categorie: 'inspiration',
      date: '18 juli 2021',
      title: 'Email Love - Email Inspiration, Templates and Discovery',
      content : 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      imgWriter: '/author-3.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    },
    {
      img: '/thumbnail-7.jpg',
      categorie: 'inspiration',
      date: '18 juli 2021',
      title: 'How to design a product that can grow itself 10x in year',
      content : 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      imgWriter: '/author-4.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    },
    
  ])

  return (
    <KontenContext.Provider value={ [konten, setKonten] }>
      {props.children}
    </KontenContext.Provider>
  )
}


